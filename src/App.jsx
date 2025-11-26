import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Hero from './Componeets12/Hero';
import Aboute from './Componeets12/AbouteUs';
import Project from './Componeets12/Project';
import Contact from './Componeets12/Contact';

function App() {
  return (
    <BrowserRouter>
      <header className="flex justify-between items-center bg-amber-200 font-bold p-5">
        <h1 className="text-2xl font-bold">MyPortfolio</h1>

        <nav className="flex gap-5">
          <NavLink
            className="Hero"
            to="/"
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
          >
            Hero
          </NavLink>

          <NavLink
            className="About"
            to="/about"
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
          >
            About Us
          </NavLink>

          <NavLink
            className="Project"
            to="/project"
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
          >
            Project
          </NavLink>

          <NavLink
            className="Contact"
            to="/contact"
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
          >
            Contact
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<Aboute />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
