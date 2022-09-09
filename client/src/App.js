import {useContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Blog from "./pages/BLog/Blog";
import User from "./pages/User/User";
import UserPosts from "./pages/UserPosts/UserPosts.jsx"
import "../src/components/Context/darkMode.scss";
import { DarkModeContext } from "./components/Context/darkModeContext";

function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "App darkMode" : "App"}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/post/:posts_id" element={<Single />}/>
          <Route path="/write" element={<Write />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/user" element={<User />}/>
          <Route path="/user/post" element={<UserPosts />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
