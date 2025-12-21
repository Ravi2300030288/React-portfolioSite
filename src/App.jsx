import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";
import Navbar from "./components/Navbar/navbar.jsx";
import About from "./pages/about.jsx";
import Home from "./pages/home.jsx";
import Contact from "./pages/contact.jsx";
import Projects from "./pages/projects.jsx";

function App() {
  return (
    <Router>
      <Navbar/>
      <main>
      <Routes>
        <Route path ="/" element={<Home />}></Route>
        <Route path ="/about" element={<About />}></Route>
        <Route path ="/contact" element={<Contact />}></Route>
        <Route path ="/projects" element={<Projects />}></Route>
      </Routes>
      </main>
    </Router>
  );
}
export default App;