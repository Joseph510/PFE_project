import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link, Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const New3 = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [prenom, setprenom] = useState("");
  const [nom, setnom] = useState("");
  const [tel, settel] = useState("");
  const [email, setemail] = useState("");
  const [matricule_fiscale, setmatricule_fiscale] = useState("");
  const [adresse, setadresse] = useState("");
  const navigate = useNavigate();


  const handle = (e) => {
    e.preventDefault();
    {
      navigate('/fournisseurs')
    }
  const userData = {
     nom: nom,
     prenom: prenom,
     tel: tel,
     email: email,
     matricule_fiscale: matricule_fiscale,
     adresse: adresse
  }
    axios.post("http://localhost:4000/fournisseur/create", userData,{   
         headers: {
        'Content-Type': 'application/json'
      }}).then((res) => {
        console.log(res.data);
        swal("Success", "Le Fournisseur a été ajouté avec succès", "success");
        navigate('/fournisseurs');
      })
      .catch(() => {
        console.log("failed");
        swal("Error", "Une erreur s'est produite lors de l'ajout du fournisseur", "error");
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
            <div class="input-box">
              <label>Nom</label>
              <input type="text"
                    placeholder="Nom " 
                      className="champs"value={nom}
                      onChange={(event) => setnom(event.target.value)} />
            </div>
            <div class="input-box">
              <label>Prénom</label>
              <input type="text"
                    placeholder="prenom " 
                      className="champs"value={prenom}
                      onChange={(event) => setprenom(event.target.value)} />
            </div>
      </div>
            <div class="column">
            <div class="input-box">
          <label>Email</label>
          <input type="Email"
                 placeholder="Email " 
                  className="champs"value={email}
                   onChange={(event) => setemail(event.target.value)} />
        </div>
        <div class="input-box">
          <label>Téléphone</label>
          <input type="Number"
                 placeholder="N° Téléphone " 
                  className="champs"value={tel}
                   onChange={(event) => settel(event.target.value)} />        </div>
        </div>
        <div class="column">
        <div class="input-box">
          <label>Matricule Fiscale</label>
          <input type="Number"
                 placeholder="Matricule Fiscale " 
                  className="champs"value={matricule_fiscale}
                   onChange={(event) => setmatricule_fiscale(event.target.value)} />        </div>
        <div class="input-box">
          <label>Adresse</label>
          <input type="text"
                 placeholder="Adresse" 
                  className="champs"value={adresse}
                   onChange={(event) => setadresse(event.target.value)} />
        </div>
        </div>
        <button onClick={handle}>Submit</button>
      </form>
    </section>
      </div>
    </div>
  );
};

export default New3;
