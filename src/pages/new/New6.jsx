import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";


import dayjs from 'dayjs'
import axios from 'axios';
import swal from "sweetalert";


const New6 = ({ inputs, title }) => {
  const [nom, setnom] = useState("");
  const [devise, setdevise] = useState("");
  const [tva, settva] = useState("");
  const [tel, settel] = useState("");
  const [montantlivraison, setmontantlivraison] = useState("");
  const [email, setemail] = useState("");
  const [date, setdate] = useState("");
  const [prix, setprix] = useState("");
  const [quantité,setquantité] = useState("");

  const navigate = useNavigate();


  const handle = (e) => {
    e.preventDefault();
  
  const userData = {
     nom: nom,
     tel:tel,
     email:email,
     date:dayjs().format("YYYY-MM-DD"),
     devise:devise,
     tva:tva,
     montantlivraison:montantlivraison,
     prix:prix,
     quantité:quantité,
     user:{id:JSON.parse(localStorage.getItem('user')).id},
     produit:{id:1}
  }

    axios.post("http://localhost:4000/commande/create", userData,{   
         headers: {
        'Content-Type': 'application/json'
      }}).then((res) => {
        console.log(res.data);
        swal("Success", "La Commande a été ajouté avec succès", "success");
        navigate('/commande');
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
            <div class="input-box">
          <label>Nom</label>
          <input type="text"
                 placeholder="Nom " 
                  className="champs"value={nom}
                   onChange={(event) => setnom(event.target.value)} />
        </div>
        <div class="input-box">
          <label>Devise</label>
          <input type="text"
                 placeholder="Devise " 
                  className="champs"value={devise}
                   onChange={(event) => setdevise(event.target.value)} />
        </div>
            </div>
            <div class="column">
            <div class="input-box">
          <label>TVA</label>
          <input type="number"
                 placeholder="TVA " 
                  className="champs"value={tva}
                   onChange={(event) => settva(event.target.value)} />
        </div>
        <div class="input-box">
          <label>Montantlivraison</label>
          <input type="text"
                 placeholder="Montantlivraison" 
                  className="champs"value={montantlivraison}
                   onChange={(event) => setmontantlivraison(event.target.value)} />        </div>
        </div>
        <div class="column">

        <div class="input-box">
          <label>Tel</label>
          <input type="Number"
                 placeholder="N° Téléphone " 
                  className="champs"value={tel}
                   onChange={(event) => settel(event.target.value)} />       
        </div>
        <div class="input-box">
          <label>Prix</label>
          <input type="text"
                 placeholder="Prix " 
                  className="champs"value={prix}
                   onChange={(event) => setprix(event.target.value)} />
        </div>
        <div class="input-box">
          <label>Quantité</label>
          <input type="text"
                 placeholder="quantité " 
                  className="champs"value={quantité}
                   onChange={(event) => setquantité(event.target.value)} />
        </div>
        </div>
        <div class="input-box">
            <label>Email</label>
            <input type="email"
                 placeholder="Email " 
                  className="champs"value={email}
                   onChange={(event) => setemail(event.target.value)} />          
        </div>
        <div class="column">
          <div class="input-box">
                <label>Date</label>
                <input type="Date"
                    placeholder="Date " 
                    className="champs"value={date}
                    onChange={(event) => setdate(event.target.value)} />         
            </div>
        </div>
        
        <button onClick={handle}>Submit</button>
      </form>
    </section>
          

        </div>
        </div>
  );
};

export default New6;