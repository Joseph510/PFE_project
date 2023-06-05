import React, { useState, useEffect } from "react";
import "./single.scss";
import Axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import { useLocation } from "react-router-dom";


const Single5 = () => {
  const location = useLocation();
  const societe = location.state.societe;

  

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="center">
          <div className="card">
            <h1 className="title">Information du Société :</h1>
            <div className="details">
                <h1 className="itemTitle">{societe.nom}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{societe.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adresse:</span>
                  <span className="itemValue">{societe.adresse}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Téléphone:</span>
                  <span className="itemValue">{societe.tel}</span>
                </div>
                
              </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Single5;
