import { firestore } from "../firebase";
import useFormState from "./CustomFormStates";

function CreatePost(){

    const title = useFormState('');
    const subTitle = useFormState('');
    const content = useFormState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log('title : ', title.value);
        console.log('subTitle : ', subTitle.value);
        console.log('content : ', content.value);

        firestore.collection('post').add({
            title: title.value,
            subTitle: subTitle.value,
            content: content.value,
            createdAt: new Date()
        }).then(() => {
            console.log('Record inserted successfuly');
        }).catch((error) => {
            console.log('Error :', error);
        })
    }

    return <div className="create-post">
        <h1>Create Post</h1>
        <form>
            <div className="form-field">
                <label>Title</label>
                <input {...title} />
            </div>
            <div className="form-field">
                <label>Sub Title</label>
                <input {...subTitle}/>
            </div>
            <div className="form-field">
                <label>Content</label>
                <textarea {...content}/>
            </div>
            <button className="create-post-btn" onClick={handleSubmit}>Create Post</button>
        </form>
    </div>
}

export default CreatePost;