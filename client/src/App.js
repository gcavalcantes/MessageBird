import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Posts";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home Page</Link>
        <Link to="/createpost">Create a Post</Link>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/createpost" exact element={<CreatePost/>} />
          <Route path="/post/:id" exact element={<Post/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
