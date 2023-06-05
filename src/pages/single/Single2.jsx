import "./single2.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Single2 = () => {
  const location = useLocation();
  const produit = location.state.produit;
  const [imageURL, setImageURL] = useState(
    `http://localhost:4000/Produit/getImage/${produit.id}/${produit.images[0]?.path}`
  );

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="center">
          <div className="card">
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={imageURL} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{produit.titre}</h1>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">{produit.id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Prix:</span>
                  <span className="itemValue">{produit.prix_final_H}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Etat:</span>
                  <span className="itemValue">{produit.etat}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Stock:</span>
                  <span className="itemValue">{produit.stock}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Single2;
