import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Post from './components/Post'
import SinglePost from './components/SinglePost'
import Navbar from './components/Navbar';


function App() {
  return (

    
    <Router>
      <Navbar />
      <Routes>
          <Route element={<Home/>}  path="/home" />
          <Route element={<Home />} path="/" exact />
          <Route element={<About/>} path="/about" exact/>
          <Route element={<Project />} path="/project" exact/>
          <Route element={<Post />} path="/post" />
          <Route element={<SinglePost />} path="/post/:slug" />
      </Routes>
    </Router>

  );
}

export default App;
