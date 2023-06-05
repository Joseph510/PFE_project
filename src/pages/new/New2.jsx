import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import "./new.scss";

const New2 = ({}) => {
  const [produit, setProduit] = useState({
    titre: "",
    type: "",
    unité: "",
    stock: "",
    marge_de_bénéfice: "",
    marge_de_bénéfice2: "",
    prix_de_base: "",
    prix_final_H: "",
    fournisseur: "",
    etat: "",
    catégorie: "",
    code_a_barre: "",
    référence: "",
    myFiles: null,
  });
  const [marge_de_bénéfice, setmarge_de_bénéfice] = useState("");
  const [marge_de_bénéfice2, setmarge_de_bénéfice2] = useState("");
  const [prix_de_base, setprix_de_base] = useState("");
  const [prix_final_H, setprix_final_H] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setProduit({
      ...produit,
      [event.target.name]: event.target.value,
    });
  };
  const handleMargeDeBeneficeChange = (event) => {
    const newMargeDeBenefice = event.target.value;
    setmarge_de_bénéfice(newMargeDeBenefice);
    calculatePrixFinalHT(newMargeDeBenefice, prix_de_base);
  };

  const handlePrixDeBaseChange = (event) => {
    const newPrixDeBase = event.target.value;
    setprix_de_base(newPrixDeBase);
    setProduit({ ...produit, prix_de_base: newPrixDeBase });

    calculatePrixFinalHT(marge_de_bénéfice, newPrixDeBase);
  };
  const calculatePrixFinalHT = (margeDeBenefice, prixDeBase) => {
    const profitMargin = Number(margeDeBenefice);
    const prixFinalHT = Number(prixDeBase) + profitMargin;
    const profitMargin2 = Number(marge_de_bénéfice2);
    const prixFinalHT2 =
      Number(prixDeBase) + (profitMargin2 * Number(prixDeBase)) / 100;
    setprix_final_H(prixFinalHT);
    setprix_final_H(prixFinalHT2);
    setProduit({
      ...produit,
      prix_final_H: prixFinalHT,
      prix_de_base: Number(prixDeBase),
      prix_final_H: prixFinalHT2,
      marge_de_bénéfice: profitMargin,
      marge_de_bénéfice2: profitMargin2,
    });
  };

  const handleFileChange = (event) => {
    setProduit({
      ...produit,
      myFiles: event.target.files[0],
    });
  };

  const handle = async (event) => {
    event.preventDefault();

    navigate("/products");

    const formData = new FormData();
    formData.append("title", produit.titre);
    formData.append("type", produit.type);
    formData.append("myFiles", produit.myFiles);
    formData.append("unité", produit.unité);
    formData.append("stock", produit.stock);
    formData.append("marge_de_bénéfice", produit.marge_de_bénéfice);
    formData.append("marge_de_bénéfice2", produit.marge_de_bénéfice2);
    formData.append("prix_de_base", produit.prix_de_base);
    formData.append("prix_final_H", produit.prix_final_H);
    formData.append("fournisseur", produit.fournisseur);
    formData.append("etat", produit.etat);
    formData.append("catégorie", produit.catégorie);
    formData.append("code_a_barre", produit.code_a_barre);
    formData.append("référence", produit.référence);

    axios
      .post("http://localhost:4000/Produit/create", produit, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(async (res) => {
        console.log(res.data);
        swal("Success", "Le produit a été ajouté avec succès", "success");
        try {
          await axios.post(
            "http://localhost:4000/Produit/upload-images",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log("Image uploaded successfully");
        } catch (error) {
          console.error("Upload failed with error:", error);
          setError("Upload failed. Please try again later.");
        }
        window.location.reload(false);

        navigate("/products");
      })
      .catch(() => {
        console.log("failed");
        swal(
          "Error",
          "Une erreur s'est produite lors de l'ajout du produit",
          "error"
        );
      });
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <section className="container">
          <form action="#" className="form">
            <div className="column">
              <div>
                <label>Etat</label>
                <select
                  className="select-box"
                  name="etat"
                  value={produit.etat}
                  onChange={handleInputChange}
                >
                  <label>Etat</label>
                  <option hidden>Etat</option>
                  <option>Activé</option>
                  <option>Désactivé</option>
                </select>
              </div>
              <div>
                <div className="input-box">
                  <label>Catégorie</label>
                  <input
                    type="text"
                    name="catégorie"
                    placeholder="catégorie"
                    value={produit.catégorie}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <label>Type</label>
                <input
                  type="text"
                  name="type"
                  placeholder="Type"
                  className="champs"
                  value={produit.type}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Image:</label>
                <input type="file" name="myFiles" onChange={handleFileChange} />
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <label>Référence</label>
                <input
                  type="text"
                  name="référence"
                  placeholder="Référence"
                  className="champs"
                  value={produit.référence}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <label>Titre</label>
                <input
                  type="text"
                  name="titre"
                  placeholder="Titre"
                  className="champs"
                  value={produit.titre}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <label>Unité</label>
                <input
                  type="text"
                  name="unité"
                  placeholder="Unité"
                  className="champs"
                  value={produit.unité}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <label>Stock</label>
                <input
                  type="number"
                  name="stock"
                  placeholder="stock"
                  className="champs"
                  value={produit.stock}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <label>Marge de bénéfice</label>
                <input
                  type="text"
                  name="marge_de_bénéfice"
                  placeholder="Marge de bénéfice"
                  className="champs"
                  value={marge_de_bénéfice}
                  onChange={handleMargeDeBeneficeChange}
                />
              </div>
              <div className="input-box">
                <label>Marge de bénéfice2</label>
                <input
                  type="text"
                  name="marge_de_bénéfice2"
                  placeholder="Marge de bénéfice2"
                  className="champs"
                  value={marge_de_bénéfice2}
                  onChange={(event) =>
                    setmarge_de_bénéfice2(event.target.value)
                  }
                />
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <label>Prix de base</label>
                <input
                  type="number"
                  name="prix_de_base"
                  placeholder="Prix_de_base"
                  className="champs"
                  value={prix_de_base}
                  onChange={handlePrixDeBaseChange}
                />
              </div>
              <div className="input-box">
                <label>Prix Final H.T</label>
                <input
                  type="number"
                  name="prix_final_H"
                  placeholder="prix_final_H.T"
                  className="champs"
                  value={prix_final_H}
                  onChange={(event) => setprix_final_H(event.target.value)}
                />
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <label>Fournisseur</label>
                <input
                  type="text"
                  name="fournisseur"
                  placeholder="Fournisseur"
                  className="champs"
                  value={produit.fournisseur}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-box">
                <label>Code a Barre</label>
                <input
                  type="text"
                  name="code_a_barre"
                  placeholder=" code_a_barre"
                  className="champs"
                  value={produit.code_a_barre}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <button onClick={handle}>Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default New2;
