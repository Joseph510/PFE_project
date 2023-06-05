import React, { useState, useEffect } from "react";
import "./single.scss";
import Axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import { useLocation } from "react-router-dom";

const Single = () => {
  const location = useLocation();
  const client = location.state.client;

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="center">
          <div className="card">
            <h1 className="title">Information du Client :</h1>
            <div className="details">
              <h1 className="itemTitle">{client.nom}</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">{client.email}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Rôle:</span>
                <span className="itemValue">{client.rôle}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Téléphone:</span>
                <span className="itemValue">{client.tel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
