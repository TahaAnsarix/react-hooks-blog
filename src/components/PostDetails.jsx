import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";

function PostDetails(){

    const [post, setPost] = useState({});
    const {postId} = useParams();

    useEffect(() => {
        firestore
            .collection('post')
            .doc(postId)
            .get()
            .then((snapshot) => {
                setPost(snapshot.data());
            });
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="post-detail">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}

export default PostDetails;