import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "./logooo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // ✅ Get the current route

  return (
    <>
      <style jsx>{`
        .navbar {
          background-color: white;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          padding-left: 4rem;
        }

        .logo img {
          height: 77px;
          width: auto;
          display: block;
        }

        .menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        .menu-list {
          display: flex;
          gap: 0.5rem;
          flex-direction: row;
          list-style: none;
          padding: 0;
          margin: 0;
          flex-grow: 1;
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
            background-color: #3182ce;
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
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>

          <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

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
