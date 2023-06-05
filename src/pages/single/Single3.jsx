import React, { useState, useEffect } from "react";
import "./single.scss";
import Axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import { useLocation } from "react-router-dom";

const Single5 = () => {
  const location = useLocation();
  const fournisseur = location.state.fournisseur;

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="center">
          <div className="card">
            <h1 className="title">Information du Fournisseur :</h1>
            <div className="details">
              <h1 className="itemTitle">{fournisseur.nom}</h1>
              <div className="detailItem">
                <span className="itemKey">Prénom:</span>
                <span className="itemValue">{fournisseur.prenom}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">{fournisseur.email}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Téléphone:</span>
                <span className="itemValue">{fournisseur.tel}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Matricule Fiscale:</span>
                <span className="itemValue">
                  {fournisseur.matricule_fiscale}
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Adresse:</span>
                <span className="itemValue">{fournisseur.adresse}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single5;
