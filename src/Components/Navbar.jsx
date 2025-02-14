import { useState } from "react";
import { Link,useLocation } from "react-router-dom";
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
          color: white;
          padding: 1rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          // justify-content: space-between;
          align-items: center;
         padding-left: 4rem;
        }

        .logo img {
          height: 77px; /* ✅ Reduced logo size */
          width: auto;
          display: block;
        }
        

        .menu-button {
          display: none;
        }

        .menu-list {
          display: flex;
          gap: 0.5 rem;
          flex-direction: row;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .menu-list li {
          padding: 0.5rem 1rem;
        }

        .menu-list li a {
          color: black;
          text-decoration: none;
          padding: 0.5rem 1rem;
          // border-radius: 0.375rem;
        }

       .menu-list li a:hover {
         color: orange; /* Change text color on hover */
         border-bottom: 2px solid orange; /* Add an orange underline */
         text-decoration: none;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .menu-button {
          
            display: block;
          }

          .menu-list {
            display: ${isOpen ? "block" : "none"};
            position: absolute;
            top: 4rem;
            left: 0;
            width: 100%;
            background-color: #3182ce;
            flex-direction: column;
            padding: 1rem;

            gap: 1rem;
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

          <ul className={`menu-list`}>
            <li>
              <Link to="https://www.kavaavi.com/index.html#" className=" py-2 px-4 hover:bg-blue-500 ">
                Home
              </Link>
            </li>
            <li>
              <Link to="https://www.kavaavi.com/html/about.html" className="block py-2 px-4 hover:bg-blue-500 rounded-md">
                About 
              </Link>
            </li>
            <li>
              <Link to="https://www.kavaavi.com/html/services.html" className="block py-2 px-4 hover:bg-blue-500 rounded-md">
                Services
              </Link>
            </li>

            <li>
              <Link to="https://blog.kavaavi.com/blog/" className="block py-2 px-4 hover:bg-blue-500 rounded-md">
                blog
              </Link>
            </li>

            <li>
              <Link to="https://www.kavaavi.com/html/test.html" className="block py-2 px-4 hover:bg-blue-500 rounded-md">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/career" className="block py-2 px-4 hover:bg-blue-500 rounded-md">
                Career
              </Link>
            </li>

            {/* ✅ Conditionally Show "Login as Admin" Only on /career Page */}
            {location.pathname === "/career" && (
              <li>
                <Link to="/admin-login" style={{ color: "red", fontWeight: "bold" }}>
                  Login as Admin
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
