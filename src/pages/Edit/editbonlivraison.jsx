import "./edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";


import axios from 'axios';
import swal from "sweetalert";
import {  useLocation, useNavigate } from "react-router-dom";


const Edit7 = (props) => {
  const navigate = useNavigate();
  const location = useLocation()
  const [values, setValues] = useState(location.state.bonlivraison ? {
   ...location.state.bonlivraison 
  }:{});

  function handle  (e)  {
    e.preventDefault();
  
  
    axios.put(`http://localhost:4000/bonlivraisons/update/${values.id}`, values, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        swal("Success", "Le bon de livraison a été modifié avec succès", "success");
        navigate('/Bonlivraison');
      })
      .catch(() => {
        console.log("failed");
        swal("Error", "Une erreur s'est produite lors de la mise à jour du bon de livraison", "error");
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
          <label>Nom de l'entreprise</label>
          <input type="text"
                 placeholder="Référence " 
                  className="champs"value={values.référence}
                   onChange={e => setValues({...values, référence : e.target.value})} />        </div>
        <div class="input-box">
          <label>Adresse</label>
          <input type="text"
                 placeholder="Adresse " 
                  className="champs"value={values.adresse}
                   onChange={e => setValues({...values, adresse : e.target.value})}  />
        </div>
        </div>

        <div class="column">
          <div class="input-box">
            <label>Téléphone</label>
            <input type="text"
                 placeholder="Téléphone " 
                  className="champs"value={values.tel}
                   onChange={e => setValues({...values, tel : e.target.value})}  />          </div>
          <div class="input-box">
            <label>Email</label>
            <input type="text"
                 placeholder="Email " 
                  className="champs"value={values.email}
                   onChange={e => setValues({...values, email : e.target.value})} />          </div>
        </div>
        <div class="column">
          <div class="input-box">
            <label>Destinataire</label>
            <input type="text"
                 placeholder="Destinataire" 
                  className="champs"value={values.destinataire}
                   onChange={e => setValues({...values, destinataire : e.target.value})} />          </div>
          <div class="input-box">
            <label>Adresse du Destinataire</label>
            <input type="text"
                 placeholder="Adresse du Destinataire" 
                  className="champs"value={values.adressedestinataire}
                   onChange={e => setValues({...values, adressedestinataire : e.target.value})} />          </div>
        </div>
        <div class="column">
          <div class="input-box">
            <label>Numéro du Bon de Livraison</label>
            <input type="number"
                 placeholder="Numéro du Bon de Livraison" 
                  className="champs"value={values.numbonlivraison}
                   onChange={e => setValues({...values, numbonlivraison : e.target.value})} />          </div>
          <div class="input-box">
            <label>Numéro du Commande</label>
            <input type="number"
                 placeholder="Numéro du Commande" 
                  className="champs"value={values.numcommande}
                   onChange={e => setValues({...values, numcommande : e.target.value})} />          </div>
        </div>
        <div class="column">
        <div class="input-box">
          <label>Numéro du Client</label>
          <input type="text"
                 placeholder="Numéro du Client" 
                  className="champs"value={values.numclient}
                   onChange={e => setValues({...values, numclient : e.target.value})} />        
        </div>
        <div class="input-box">
          <label>Téléphone du Client </label>
          <input type="text"
                 placeholder="Numéro du Téléphone" 
                  className="champs"value={values.telclient}
                   onChange={e => setValues({...values, telclient : e.target.value})} />       
         </div>
        </div>
        <button onClick={handle}>Update</button>
      </form>
    </section>
          

        </div>
        </div>
  );
};

export default Edit7;