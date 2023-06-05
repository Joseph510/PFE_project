import "./edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import swal from "sweetalert";

const Edit4 = ({ inputs, title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [values, setValues] = useState(
    location.state.commande
      ? {
          ...location.state.commande,
        }
      : {}
  );

  const handle = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/commande/update/${values.id}`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        swal("Success", "La Commande a été modifié avec succès", "success");
        navigate("/commande");
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
        <section class="container">
          <form action="#" class="form">
            <div class="column">
              <div class="input-box">
                <label>Nom</label>
                <input
                  type="text"
                  placeholder="Nom "
                  className="champs"
                  value={values.nom}
                  onChange={(e) =>
                    setValues({ ...values, nom: e.target.value })
                  }
                />
              </div>
              <div class="input-box">
                <label>Devise</label>
                <input
                  type="text"
                  placeholder="Devise "
                  className="champs"
                  value={values.devise}
                  onChange={(e) =>
                    setValues({ ...values, devise: e.target.value })
                  }
                />
              </div>
            </div>
            <div class="column">
              <div class="input-box">
                <label>TVA</label>
                <input
                  type="number"
                  placeholder="TVA "
                  className="champs"
                  value={values.tva}
                  onChange={(e) =>
                    setValues({ ...values, tva: e.target.value })
                  }
                />
              </div>
              <div class="input-box">
                <label>Montantlivraison</label>
                <input
                  type="text"
                  placeholder="Montantlivraison"
                  className="champs"
                  value={values.montantlivraison}
                  onChange={(e) =>
                    setValues({ ...values, montantlivraison: e.target.value })
                  }
                />{" "}
              </div>
            </div>
            <div class="column">
              <div class="input-box">
                <label>Tel</label>
                <input
                  type="Number"
                  placeholder="N° Téléphone "
                  className="champs"
                  value={values.tel}
                  onChange={(e) =>
                    setValues({ ...values, tel: e.target.value })
                  }
                />
              </div>
              <div class="input-box">
                <label>Prix</label>
                <input
                  type="text"
                  placeholder="Prix "
                  className="champs"
                  value={values.prix}
                  onChange={(e) =>
                    setValues({ ...values, prix: e.target.value })
                  }
                />
              </div>
            </div>
            <div class="input-box">
              <label>Quantité</label>
              <input
                type="text"
                placeholder="Quantité"
                className="champs"
                value={values.quantité}
                onChange={(e) =>
                  setValues({ ...values, quantité: e.target.value })
                }
              />
            </div>
            <div class="input-box">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email "
                className="champs"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div class="column">
              <div class="input-box">
                <label>Date</label>
                <input
                  type="Date"
                  placeholder="Date "
                  className="champs"
                  value={values.date}
                  onChange={(e) =>
                    setValues({ ...values, date: e.target.value })
                  }
                />
              </div>
            </div>

            <button onClick={handle}>Update</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Edit4;
