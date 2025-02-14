import React from 'react';

const Footer = () => {
  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
          }
          body {
            background-color: #f9f9f9;
          }
          .footer {
            background-color: white;
            padding: 40px 80px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-top: 2px solid #eee;
          }
          .footer-column {
            flex: 1;
            margin-right: 20px;
          }
          .footer-column h3 {
            margin-bottom: 15px;
            font-size: 18px;
            font-weight: bold;
          }
          .footer-column p, .footer-column a {
            font-size: 14px;
            color: #333;
            line-height: 1.6;
            text-decoration: none;
          }
          .footer-column a:hover {
            text-decoration: underline;
            color: #ff7f00;
          }
          .footer-logo {
            font-size: 24px;
            font-weight: bold;
            color: #ff7f00;
            display: flex;
            align-items: center;
          }
          .footer-logo span {
            color: black;
          }
          .footer-social {
            margin-top: 15px;
          }
          .footer-social a {
            margin-right: 10px;
            font-size: 22px;
            color: #ff7f00;
            display: inline-block;
            transition: 0.3s;
          }
          .footer-social a:hover {
            color: #333;
          }
          .newsletter input {
            width: 100%;
            padding: 8px;
            margin: 10px 0;
            border: 1px solid #ff7f00;
            border-radius: 5px;
            outline: none;
          }
          .newsletter button {
            background-color: #ff7f00;
            color: white;
            border: none;
            padding: 8px 15px;
            font-size: 14px;
            cursor: pointer;
            border-radius: 5px;
          }
          .newsletter button:hover {
            background-color: #e66a00;
          }
        `}
      </style>

      <footer className="footer">
        {/* Left Section */}
        <div className="footer-column">
          <div className="footer-logo">
            <span style={{ fontSize: '32px', color: '#ff7f00' }}>K</span>
            <span style={{ marginLeft: '5px' }}>aVaaVi</span>
          </div>
          <p>A digital transformation company specializing in platform-based solutions to make businesses connected, open, intelligent, and scalable.</p>
          <div className="footer-social">
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FClustorCo">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/company/clustor-computing/?originalSubdomain=in">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/checkpoint/828281030927956/?next=https%3A%2F%2Fwww.facebook.com%2Fclustorcomputing#">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:contact@kavaavi.com" style={{ color: '#ff7f00' }}>contact@kavaavi.com</a></p>
          <p>Phone: <a href="tel:+919545400369" style={{ color: '#ff7f00' }}>+91 (954) 540-0369</a></p>
          <p>Address:
            <a href="https://www.google.com/maps/search/?api=1&query=1st+Floor,+Plot+No+81,+Wardha+Rd,+Gajanan+Nagar,+Nagpur"
              target="_blank"
              style={{ color: '#ff7f00', fontWeight: 'bold' }}>
              1st Floor, Plot No 81, Wardha Rd, Gajanan Nagar, Nagpur.
            </a>
          </p>
        </div>

        {/* IT Services Section */}
        <div className="footer-column">
          <h3>IT Services</h3>
          <p><a href="https://kavaavi.com/html/services.html">Data Science & Analytics</a></p>
          <p><a href="https://kavaavi.com/html/services.html">Machine Learning</a></p>
          <p><a href="https://kavaavi.com/html/services.html">Web Applications</a></p>
          <p><a href="https://kavaavi.com/html/services.html">Mobile Applications</a></p>
          <p><a href="https://kavaavi.com/html/services.html">IoT Integration</a></p>
        </div>

        {/* Newsletter Section */}
        <div className="footer-column newsletter">
          <h3>Newsletter</h3>
          <p>We denounce with righteous and in and dislike men who are so beguiled and demo realized.</p>
          <input type="email" placeholder="Enter your email address" />
          <button>Send</button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
