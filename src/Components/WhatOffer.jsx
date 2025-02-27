import React from "react";

const WhatOffer = () => {
  return (
    <>
      <div className="main-container">
        <div className="title">What We Offer</div>
        <div className="subtitle">
          Over years working in IT services developing software applications and
          <br />
          mobile apps for clients all over the domains.
        </div>
        <div className="services">
          <div className="service">
            <h3>Data Science & Analytics (SEO)</h3>
            <p>
              KaVaaVi helps businesses and industries to integrate, aggregate,
              and analyze various data types from multiple data sources.
            </p>
            <a href="https://www.kavaavi.com/services.html">More details →</a>
          </div>
          <div className="service">
            <h3>Machine Learning</h3>
            <p>
              New algorithms have enabled businesses to use customized solutions
              with Machine Learning.
            </p>
            <a href="https://www.kavaavi.com/services.html">More details →</a>
          </div>
          <div className="service">
            <h3>Artificial Intelligence</h3>
            <p>
              Taking challenges in business demands a diverse set of skills. AI
              used is organized around separate competency profiles that will
              assist you in explaining.
            </p>
            <a href="https://www.kavaavi.com/services.html">More details →</a>
          </div>
          <div className="service">
            <h3>Salesforce</h3>
            <p>
              Salesforce can help you transform your customer and employee
              experiences. We blend Salesforce's strength with the appropriate
              capabilities, processes.
            </p>
            <a href="https://www.kavaavi.com/services.html">More details →</a>
          </div>
          <div className="service">
            <h3>Web & Mobile Applications</h3>
            <p>
              We are an IT development firm that can transform your ideas into a
              new driving force for your organization.
            </p>
            <a href="https://www.kavaavi.com/services.html">More details →</a>
          </div>
          <div className="service">
            <h3>IOT Integration</h3>
            <p>
              Adopting IoT may have a significant influence on your company's
              architecture, standards, security, and business models.
            </p>
            <a href="https://www.kavaavi.com/services.html">More details →</a>
          </div>
        </div>
        <style jsx>{`
          * {
            font-family: "General Sans", "General Sans Placeholder", sans-serif;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          .main-container {
            text-align: center;
            padding: 20px;
            width: 100%;
            margin: 1rem auto;
          }

          .title {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #ff7d29;
            opacity: 1;
            transform: translateY(20px);
            /* transition: all 0.5s ease; */
          }

          .subtitle {
            font-size: 18px;
            margin-bottom: 6rem;
            opacity: 1;
            transform: translateY(20px);
            transition: all 0.5s ease;
          }

          .services {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            /* gap: 0.5rem; */
          }

          .service {
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            width: 45%;
            text-align: left;
            position: relative;
            margin-bottom: 50px;
            opacity: 1;
            transform: translateY(20px);
            transition: all 0.5s ease;
          }

          .service:hover {
            box-shadow: 0 0 10px #ff7d29;
          }

          .service h3 {
            margin-top: 0;
            font-size: 22px;
            color: #ff7d29;
          }

          .service p {
            margin: 20px 0;
          }

          .service a {
            text-decoration: none;
            color: rgb(43, 43, 43);
            font-weight: 400;
          }

          /* Keyframes for animations */
          @keyframes fadeInUp {
            from {
              opacity: 1;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .service {
              width: 100%;
            }
          }

          @media (max-width: 480px) {
            .container {
              margin-top: 0px;
            }
            .title {
              font-size: 28px;
            }

            .subtitle {
              font-size: 16px;
            }

            .service h3 {
              font-size: 20px;
            }

            .service p {
              font-size: 14px;
            }
            .row {
              margin-right: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default WhatOffer;
