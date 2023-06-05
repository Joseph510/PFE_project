import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";


import axios from 'axios';
import swal from "sweetalert";
import { Navigate } from "react-router-dom";


const New4 = ({ inputs, title }) => {
  const [type, settype] = useState("");
  const [titre, settitre] = useState("");
  const [image, setimage] = useState("");
  const [référence, setréférence] = useState("");
  const [unité, setunité] = useState("");
  const [quantité, setquantité] = useState("");
  const [marge_de_bénéfice, setmarge_de_bénéfice] = useState("");
  const [marge_de_bénéfice2, setmarge_de_bénéfice2] = useState("");
  const [prix_de_base, setprix_de_base] = useState("");
  const [prix_final_H, setprix_final_H] = useState("");
  const [fournisseur, setfournisseur] = useState("");
  const [etat, setetat] = useState("");
  const [catégorie, setcatégorie] = useState("");
  const [code_a_barre, setcode_a_barre] = useState("");

  const handle = (e) => {
    e.preventDefault();
  const userData = {
     type: type,
     titre:titre,
     image:image,
     référence:référence,
     unité:unité,
     quantité:quantité,
     marge_de_bénéfice:marge_de_bénéfice,
     marge_de_bénéfice2:marge_de_bénéfice2,
     prix_de_base:prix_de_base,
     prix_final_H:prix_final_H,
     fournisseur:fournisseur,
     etat:etat,
     catégorie:catégorie,
     code_a_barre:code_a_barre
     
  }
  
    axios.post("http://localhost:4000/BonCommande/create", userData,{   
         headers: {
        'Content-Type': 'application/json'
      }}).then((res) => {
        console.log(res.data);
        swal("Success", "Le bon de commande  a été ajouté avec succès", "success");
        Navigate('/BonCommande');
      })
      .catch(() => {
        console.log("failed");
        swal("Error", "Une erreur s'est produite lors de l'ajout du bon de commande", "error");
      });
   }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <section class="container">
      <form action="#" class="form">
      <div class="column">
            <div >
              <label > Etat</label>
              <select class="select-box" value={etat}
                   onChange={(event) => setetat(event.target.value)} >
                <option hidden>Etat</option>
                <option>Activé</option>
                <option>Désactivé</option>
              </select>
            </div>
            <div>
            </div>
            <div >
            <label>Catégorie</label>
              <select class="select-box" value={catégorie}
                   onChange={(event) => setcatégorie(event.target.value)}>
                <option hidden>Catégorie</option>
                <option>Activé</option>
                <option>Désactivé</option>
              </select>
            </div>
            </div>
            <div class="column">
            <div class="input-box">
          <label>Type</label>
          <input type="text"
                 placeholder="Type " 
                  className="champs"value={type}
                   onChange={(event) => settype(event.target.value)} />
        </div>
        <div class="input-box">
          <label>Image</label>
          <input type="text"
                 placeholder="Image " 
                  className="champs"value={image}
                   onChange={(event) => setimage(event.target.value)} />        </div>
        </div>
        <div class="column">

        <div class="input-box">
          <label>Référence</label>
          <input type="text"
                 placeholder="Référence " 
                  className="champs"value={référence}
                   onChange={(event) => setréférence(event.target.value)} />        </div>
        <div class="input-box">
          <label>Titre</label>
          <input type="text"
                 placeholder="Titre " 
                  className="champs"value={titre}
                   onChange={(event) => settitre(event.target.value)} />
        </div>
        </div>

        <div class="column">
          <div class="input-box">
            <label>Unité</label>
            <input type="text"
                 placeholder="Unité " 
                  className="champs"value={unité}
                   onChange={(event) => setunité(event.target.value)} />          </div>
          <div class="input-box">
            <label>Quantité</label>
            <input type="text"
                 placeholder="quantité " 
                  className="champs"value={quantité}
                   onChange={(event) => setquantité(event.target.value)} />          </div>
        </div>
        <div class="column">
          <div class="input-box">
            <label>Marge de bénéfice</label>
            <input type="text"
                 placeholder="Marge de bénéfice" 
                  className="champs"value={marge_de_bénéfice}
                   onChange={(event) => setmarge_de_bénéfice(event.target.value)} />          </div>
          <div class="input-box">
            <label>Marge de bénéfice2</label>
            <input type="text"
                 placeholder="Marge de bénéfice2" 
                  className="champs"value={marge_de_bénéfice2}
                   onChange={(event) => setmarge_de_bénéfice2(event.target.value)} />          </div>
        </div>
        <div class="column">
          <div class="input-box">
            <label>Prix de base</label>
            <input type="number"
                 placeholder="Prix_de_base" 
                  className="champs"value={prix_de_base}
                   onChange={(event) => setprix_de_base(event.target.value)} />          </div>
          <div class="input-box">
            <label>Prix Final H.T</label>
            <input type="number"
                 placeholder="prix_final_H.T" 
                  className="champs"value={prix_final_H.T}
                   onChange={(event) => setprix_final_H.T(event.target.value)} />          </div>
        </div>
        <div class="column">
        <div class="input-box">
          <label>Fournisseur</label>
          <input type="text"
                 placeholder="Fournisseur" 
                  className="champs"value={fournisseur}
                   onChange={(event) => setfournisseur(event.target.value)} />        
        </div>
        <div class="input-box">
          <label>Code a Barre</label>
          <input type="text"
                 placeholder="Code a Barre" 
                  className="champs"value={code_a_barre}
                   onChange={(event) => setcode_a_barre(event.target.value)} />       
         </div>
        </div>
        <button onClick={handle}>Submit</button>
      </form>
    </section>
          

        </div>
        </div>
  );
};

export default New4;