import {Route, Link, Routes} from "react-router-dom"
import Home from "./home/Home";
import leadstory from "./leadstory/Leadstory";
import Articles from "./articles/Articles";
import Article from "./article/Article";
import Articles_tag from './articles_tag/Articles_tag'
import './App.css'

function App() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/articles">Research</Link>
    </nav>

      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/leadstory" element={<leadstory/>}/>
        <Route exact={true} path="/articles" element={<Articles/>}/>
        <Route exact={true} path="/article/:id" element={<Article/>}/>
        <Route exact={true} path="/articles_tag/:tag" element={<Articles_tag/>}/>
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </>
);
}

export default App;
