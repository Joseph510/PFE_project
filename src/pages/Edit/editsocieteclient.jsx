import "./edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";



import axios from 'axios';
import swal from "sweetalert";


const Edit5 = ({ inputs, title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [values, setValues] = useState(
    location.state.societeclient
      ? {
          ...location.state.societeclient,
        }
      : {}
  );


  const handle = (e) => {
    e.preventDefault();
   
  
    axios.put(`http://localhost:4000/societeClient/update/${values.id}`, values,{   
         headers: {
        'Content-Type': 'application/json'
      }}).then((res) => {
        console.log(res.data);
        swal("Success", "Le Client a été modifié avec succès", "success");
        navigate('/SocieteClient');
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
              <select class="select-box" value={values.etat}
                   onChange={(e) =>
                    setValues({ ...values, etat: e.target.value })
                  } >
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
                  className="champs"value={values.nom}
                   onChange={(e) =>
                    setValues({ ...values, nom: e.target.value })
                  } />
        </div>
            </div>
            <div class="column">
            <div class="input-box">
          <label>Rib</label>
          <input type="number"
                 placeholder="Rib " 
                  className="champs"value={values.rib}
                   onChange={(e) =>
                    setValues({ ...values, rib: e.target.value })
                  } />
        </div>
        <div class="input-box">
          <label>Adresse</label>
          <input type="text"
                 placeholder="Adresse " 
                  className="champs"value={values.adresse}
                   onChange={(e) =>
                    setValues({ ...values, adresse: e.target.value })
                  } />        </div>
        </div>
        <div class="column">

        <div class="input-box">
          <label>Tel</label>
          <input type="Number"
                 placeholder="N° Téléphone " 
                  className="champs"value={values.tel}
                   onChange={(e) =>
                    setValues({ ...values, tel: e.target.value })
                  } />        </div>
        <div class="input-box">
          <label>Fax</label>
          <input type="Number"
                 placeholder="N° Fax " 
                  className="champs"value={values.fax}
                   onChange={(e) =>
                    setValues({ ...values, fax: e.target.value })
                  } />
        </div>
        </div>

        <div class="column">
          <div class="input-box">
            <label>Email</label>
            <input type="email"
                 placeholder="Email " 
                  className="champs"value={values.email}
                   onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  } />          </div>
          <div class="input-box">
            <label>Date</label>
            <input type="Date"
                 placeholder="Date " 
                  className="champs"value={values.date}
                   onChange={(e) =>
                    setValues({ ...values, date: e.target.value })
                  } />          </div>
        </div>
        
        <button onClick={handle}>Update</button>
      </form>
    </section>
          

        </div>
        </div>
  );
};

export default Edit5;