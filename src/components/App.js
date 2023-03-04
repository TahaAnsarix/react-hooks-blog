import { Routes, Route } from 'react-router-dom';
import { Navbar, Home, CreatePost, PostDetails } from './index';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/post/:postId" element={<PostDetails />} />
        <Route exact path="/create-post" element={<CreatePost />} />        
      </Routes>
    </div>
  );
}

export default App;
