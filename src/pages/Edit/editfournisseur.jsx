import "./edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const Edit2 = ({ inputs, title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [values, setValues] = useState(
    location.state.fournisseur
      ? {
          ...location.state.fournisseur,
        }
      : {}
  );


  const handle = (e) => {
    e.preventDefault();
    
    axios.put(`http://localhost:4000/fournisseur/update/${values.id}`, values,{   
         headers: {
        'Content-Type': 'application/json'
      }}).then((res) => {
        console.log(res.data);
        swal("Success", "Le Fournisseur a été modifié avec succès", "success");
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
                      className="champs"value={values.nom}
                      onChange={(e) =>
                        setValues({ ...values, nom: e.target.value })} />
            </div>
            <div class="input-box">
              <label>Prénom</label>
              <input type="text"
                    placeholder="prenom " 
                      className="champs"value={values.prenom}
                      onChange={(e) =>
                        setValues({ ...values, prenom: e.target.value })} />
            </div>
      </div>
            <div class="column">
            <div class="input-box">
          <label>Email</label>
          <input type="Email"
                 placeholder="Email " 
                  className="champs"value={values.email}
                   onChange={(e) =>
                    setValues({ ...values, email: e.target.value })}/>
        </div>
        <div class="input-box">
          <label>Téléphone</label>
          <input type="Number"
                 placeholder="N° Téléphone " 
                  className="champs"value={values.tel}
                   onChange={(e) =>
                    setValues({ ...values, tel: e.target.value })} />        </div>
        </div>
        <div class="column">
        <div class="input-box">
          <label>Matricule Fiscale</label>
          <input type="Number"
                 placeholder="Matricule Fiscale " 
                  className="champs"value={values.matricule_fiscale}
                   onChange={(e) =>
                    setValues({ ...values, matricule_fiscale: e.target.value })} />        </div>
        <div class="input-box">
          <label>Adresse</label>
          <input type="text"
                 placeholder="Adresse" 
                  className="champs"value={values.adresse}
                   onChange={(e) =>
                    setValues({ ...values, adresse: e.target.value })} />
        </div>
        </div>
        <button onClick={handle}>Update</button>
      </form>
    </section>
      </div>
    </div>
  );
};

export default Edit2;
