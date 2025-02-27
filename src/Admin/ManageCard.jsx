import React from "react";
import { useNavigate } from 'react-router-dom'; 
import AdminNavbar from "../Components/AdminNavbar";
const ManageCard = () => {
    const navigate = useNavigate();
  return (
    <>
      <style>{`
   .card-conatiner{
    background: #ffff;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height:90vh;
    justify-content: center;
   }
.card{
  width: 300px;
  border-radius: 20px;
  height:350px;
  background: #1b233d;
  padding: 5px;
  overflow: hidden;
  box-shadow: rgba(237, 237, 247, 0.2) 0px 7px 20px 0px;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin: 10px 10px;
}

.card:hover {
  transform: scale(1.05);
}

.card .top-section {
  height: 150px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, rgb(4, 159, 187) 0%, rgb(80, 246, 255) 100%);
  position: relative;
}

.card .top-section .border {
  border-bottom-right-radius: 10px;
  height: 30px;
  width: 130px;
  background: white;
  background: #1b233d;
  position: relative;
  transform: skew(-40deg);
  box-shadow: -10px -10px 0 0 #1b233d;
}

.card .top-section .border::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  top: 0;
  right: -15px;
  background: rgba(255, 255, 255, 0);
  border-top-left-radius: 10px;
  box-shadow: -5px -5px 0 2px #1b233d;
}

.card .top-section::before {
  content: "";
  position: absolute;
  top: 30px;
  left: 0;
  background: rgba(255, 255, 255, 0);
  height: 15px;
  width: 15px;
  border-top-left-radius: 15px;
  box-shadow: -5px -5px 0 2px #1b233d;
}

.card .top-section .icons .logo .top-section {
  height: 100%;
}


.card .bottom-section {
  margin-top: 15px;
  padding: 10px 5px;
}

.card .bottom-section .title {
  display: block;
  font-size: 17px;
  font-weight: bolder;
  color: white;
  text-align: center;
  letter-spacing: 2px;
}

.card .bottom-section .row {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.card .bottom-section .row .item {
  flex: 30%;
  text-align: center;
  padding: 5px;
  color: rgba(170, 222, 243, 0.721);
}

.card .bottom-section .row .item .big-text {
  font-size: 12px;
  display: block;
}

.card .bottom-section .row .item .regular-text {
  font-size: 9px;
}

.card .bottom-section .row .item:nth-child(2) {
  border-left: 1px solid rgba(255, 255, 255, 0.126);
  border-right: 1px solid rgba(255, 255, 255, 0.126);
}`}</style>

      <AdminNavbar />
      <div className="card-conatiner">
        <div className="card">
          <div className="top-section" onClick={() => navigate("/internshiplist")}>
            <div className="border"></div>
          </div>
          <div className="bottom-section">
            <span className="title" >List Internship </span>
          </div>
        </div>

        <div className="card">
          <div className="top-section" onClick={() => navigate("/job-list")}>
            <div className="border"></div>
          </div>
          <div className="bottom-section">
            <span className="title">List Job </span>
          </div>
        </div>

        <div className="card">
          <div className="top-section">
            <div className="border"></div>
          </div>
          <div className="bottom-section">
            <span className="title">Application Name for internship </span>
          </div>
        </div>

        <div className="card">
          <div className="top-section">
            <div className="border"></div>
          </div>
          <div className="bottom-section">
            <span className="title">Application Name For Job</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageCard;