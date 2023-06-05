import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";



import axios from 'axios';
import swal from "sweetalert";


const New5 = ({ inputs, title }) => {
  const [nom, setnom] = useState("");
  const [rib, setrib] = useState("");
  const [adresse, setadresse] = useState("");
  const [tel, settel] = useState("");
  const [fax, setfax] = useState("");
  const [email, setemail] = useState("");
  const [etat, setetat] = useState("");
  const [date, setdate] = useState("");
  const navigate = useNavigate();


  const handle = (e) => {
    e.preventDefault();
    {
        navigate('/Societe')
      }
  const userData = {
     nom: nom,
     rib:rib,
     adresse:adresse,
     tel:tel,
     fax:fax,
     email:email,
     etat:etat,
     date:date
     
  }
  
    axios.post("http://localhost:4000/societe/create", userData,{   
         headers: {
        'Content-Type': 'application/json'
      }}).then((res) => {
        console.log(res.data);
        swal("Success", "La Societe a été ajouté avec succès", "success");
        navigate('/Societe');
      })
      .catch(() => {
        console.log("failed");
        swal("Error", "Une erreur s'est produite lors de l'ajout du produit", "error");
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
            <div class="input-box">
          <label>Nom</label>
          <input type="text"
                 placeholder="Nom " 
                  className="champs"value={nom}
                   onChange={(event) => setnom(event.target.value)} />
        </div>
            </div>
            <div class="column">
            <div class="input-box">
          <label>Rib</label>
          <input type="number"
                 placeholder="Rib " 
                  className="champs"value={rib}
                   onChange={(event) => setrib(event.target.value)} />
        </div>
        <div class="input-box">
          <label>Adresse</label>
          <input type="text"
                 placeholder="Adresse " 
                  className="champs"value={adresse}
                   onChange={(event) => setadresse(event.target.value)} />        </div>
        </div>
        <div class="column">

        <div class="input-box">
          <label>Tel</label>
          <input type="Number"
                 placeholder="N° Téléphone " 
                  className="champs"value={tel}
                   onChange={(event) => settel(event.target.value)} />        </div>
        <div class="input-box">
          <label>Fax</label>
          <input type="Number"
                 placeholder="N° Fax " 
                  className="champs"value={fax}
                   onChange={(event) => setfax(event.target.value)} />
        </div>
        </div>

        <div class="column">
          <div class="input-box">
            <label>Email</label>
            <input type="email"
                 placeholder="Email " 
                  className="champs"value={email}
                   onChange={(event) => setemail(event.target.value)} />          </div>
          <div class="input-box">
            <label>Date</label>
            <input type="Date"
                 placeholder="Date " 
                  className="champs"value={date}
                   onChange={(event) => setdate(event.target.value)} />          </div>
        </div>
        
        <button onClick={handle}>Submit</button>
      </form>
    </section>
          

        </div>
        </div>
  );
};

export default New5;