import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "./logooo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // ✅ Get the current route

  return (
    <>
    <style>{`
  
/* Navbar styles */
.navbar {
  background-color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.logo img {
  height: 77px;
  width: auto;
  display: block;
}

/* Hamburger Menu Button Styles */
.menu-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 100;
}

.menu-button.open .menu-line {
  transition: transform 0.3s ease;
}

.menu-button .menu-line {
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s ease;
}

/* If menu is open, animate hamburger to X */
.menu-button.open .menu-line:nth-child(1) {
  transform: rotate(45deg);
  position: absolute;
  top: 0;
}

.menu-button.open .menu-line:nth-child(2) {
  opacity: 0;
}

.menu-button.open .menu-line:nth-child(3) {
  transform: rotate(-45deg);
  position: absolute;
  top: 0;
  bottom: 0;
}

/* Menu List Styles */
.menu-list {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  justify-content: center;
}

.menu-list li a {
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.menu-list li a:hover {
  color: orange;
  border-bottom: 2px solid orange;
  text-decoration: none;
}

.login-button {
  margin-left: auto;
  padding: 12px 20px;
  background-color: #ff5800;
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.login-button:hover {
  background-color: white;
  color: #ff5800;
  border: 2px solid #ff5800;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .menu-button {
    display: block;
  }

  .menu-list {
    display: none;
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    background-color:rgb(248, 248, 248);
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }

  .menu-list.open {
    display: block;
  }
}
    `}</style>


      <nav className="navbar">
        <div className="logo">
          <Link to="/"  ><img src={logo} alt="Logo"/></Link>
        </div>

        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

      <div>
        <ul className={`menu-list ${isOpen ? "open" : ""}`}>
        <li>
              <a href="https://www.kavaavi.com/index.html#" className="py-2 px-4 hover:bg-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="https://www.kavaavi.com/html/about.html" className="py-2 px-4 hover:bg-blue-500 rounded-md">
                About
              </a>
            </li>
            <li>
              <a href="https://www.kavaavi.com/html/services.html" className="py-2 px-4 hover:bg-blue-500 rounded-md">
                Services
              </a>
            </li>
            <li>
              <a href="https://blog.kavaavi.com/blog/" className="py-2 px-4 hover:bg-blue-500 rounded-md">
                Blog
              </a>
            </li>
            <li>
              <a href="https://www.kavaavi.com/html/test.html" className="py-2 px-4 hover:bg-blue-500 rounded-md">
                Contact
              </a>
            </li>
            <li>
              <Link to="/career" className="py-2 px-4 hover:bg-blue-500 rounded-md">
                Career
              </Link>
            </li>
        </ul>
      </div>
     
      <div>
          {/* ✅ Login Button Redirects to /login */}
          <Link to="/login" className="login-button">
            Login
          </Link>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
