import {Route, Link, Routes} from "react-router-dom"
import Home from "./home/Home";
import Articles from "./articles/Articles";
import Login from "./Users/Login";
import Register from "./Users/Register";
import Logout from "./Users/Logout";


import './App.css'

function App() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/articles">News</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/logout">Logout</Link>
    </nav>

      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/articles" element={<Articles/>}/>
        <Route exact={true} path="/login" element={<Login/>}/>
        <Route exact={true} path="/register" element={<Register/>}/>
        <Route exact={true} path="/logout" element={<Logout/>}/>
        <Route path="*" element={() => <p>Page Not Found</p>} />
      </Routes>
    </>
);
}

export default App;
