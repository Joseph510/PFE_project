import React, { useState, useEffect } from "react";
import "./single.scss";
import Axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import { useLocation } from "react-router-dom";


const Single5 = () => {
  const location = useLocation();
  const societeClient = location.state.societeClient;

  

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="center">
          <div className="card">
            <h1 className="title">Information du Société Client :</h1>
            <div className="details">
                <h1 className="itemTitle">{societeClient.nom}</h1>
                <div className="detailItem">
                  <span className="itemKey">Rib:</span>
                  <span className="itemValue">{societeClient.rib}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{societeClient.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adresse:</span>
                  <span className="itemValue">{societeClient.adresse}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Téléphone:</span>
                  <span className="itemValue">{societeClient.tel}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Fax:</span>
                  <span className="itemValue">{societeClient.fax}</span>
                </div>
              </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Single5;
