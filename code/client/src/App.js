import {Route, Link, Routes} from "react-router-dom"
import Home from "./home/Home";
import leadstory from "./leadstory/Leadstory";
import Articles from "./articles/Articles";
import Article from "./article/Article";
import Articles_tag from './articles_tag/Articles_tag'
import Login, {ProtectedRoute, NotProtectedLink} from "./Login";
import Signup from "./Signup";
import AddArticles from "./addArticles";
import './App.css'


import './App.css'

function App() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/articles">News</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/addArticles">Add Article</Link>
    </nav>

      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/leadstory" element={<leadstory/>}/>
        <Route exact={true} path="/articles" element={<Articles/>}/>
        <Route exact={true} path="/article/:id" element={<Article/>}/>
        <Route exact={true} path="/articles_tag/:tag" element={<Articles_tag/>}/>
        <Route exact={true} path="/login" element={<Login/>}/>
        <Route exact={true} path="/signup" element={<Signup/>}/>
        <Route exact={true} path="/addArticles" element={<ProtectedRoute><AddArticles/></ProtectedRoute>}/>
        <Route path="*" element={() => <p>Page Not Found</p>} />
      </Routes>
    </>
);
}

export default App;
