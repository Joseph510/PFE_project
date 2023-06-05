import "./edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const Edit1 = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [values, setValues] = useState(
    location.state.produit
      ? {
          ...location.state.produit,
        }
      : {}
  );

  function handleUpdate(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/Produit/update/${values.id}`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        swal("Success", "Le produit a été modifié avec succès", "success");
        navigate("/products");
      })
      .catch(() => {
        console.log("failed");
        swal(
          "Error",
          "Une erreur s'est produite lors de la mise à jour du produit",
          "error"
        );
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
              <div>
                <label> Etat</label>
                <select
                  class="select-box"
                  value={values.etat}
                  onChange={(e) =>
                    setValues({ ...values, etat: e.target.value })
                  }
                >
                  <option hidden>Etat</option>
                  <option>Activé</option>
                  <option>Désactivé</option>
                </select>
              </div>
              <div></div>
              <div>
                <div className="input-box">
                  <label>Catégorie</label>
                  <input
                    type="text"
                    name="catégorie"
                    placeholder="catégorie"
                    value={values.catégorie}
                    onChange={(e) =>
                      setValues({ ...values, catégorie: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div class="column">
              <div class="input-box">
                <label>Type</label>
                <input
                  type="text"
                  placeholder="Type "
                  className="champs"
                  value={values.type}
                  onChange={(e) =>
                    setValues({ ...values, type: e.target.value })
                  }
                />
              </div>
              <div class="input-box">
                <label>Image</label>
                <input
                  type="text"
                  placeholder="Image "
                  className="champs"
                  value={values.image}
                  onChange={(e) =>
                    setValues({ ...values, image: e.target.value })
                  }
                />{" "}
              </div>
            </div>
            <div class="column">
              <div class="input-box">
                <label>Référence</label>
                <input
                  type="text"
                  placeholder="Référence "
                  className="champs"
                  value={values.référence}
                  onChange={(e) =>
                    setValues({ ...values, référence: e.target.value })
                  }
                />{" "}
              </div>
              <div class="input-box">
                <label>Titre</label>
                <input
                  type="text"
                  placeholder="Titre "
                  className="champs"
                  value={values.titre}
                  onChange={(e) =>
                    setValues({ ...values, titre: e.target.value })
                  }
                />
              </div>
            </div>

            <div class="column">
              <div class="input-box">
                <label>Unité</label>
                <input
                  type="text"
                  placeholder="Unité "
                  className="champs"
                  value={values.unité}
                  onChange={(e) =>
                    setValues({ ...values, unité: e.target.value })
                  }
                />{" "}
              </div>
              <div class="input-box">
                <label>Stock</label>
                <input
                  type="text"
                  placeholder="stock "
                  className="champs"
                  value={values.stock}
                  onChange={(e) =>
                    setValues({ ...values, stock: e.target.value })
                  }
                />{" "}
              </div>
            </div>
            <div class="column">
              <div class="input-box">
                <label>Marge de bénéfice</label>
                <input
                  type="text"
                  placeholder="Marge de bénéfice"
                  className="champs"
                  value={values.marge_de_bénéfice}
                  onChange={(e) =>
                    setValues({ ...values, marge_de_bénéfice: e.target.value })
                  }
                />{" "}
              </div>
              <div class="input-box">
                <label>Marge de bénéfice2</label>
                <input
                  type="text"
                  placeholder="Marge de bénéfice2"
                  className="champs"
                  value={values.marge_de_bénéfice2}
                  onChange={(e) =>
                    setValues({ ...values, marge_de_bénéfice2: e.target.value })
                  }
                />{" "}
              </div>
            </div>
            <div class="column">
              <div class="input-box">
                <label>Prix de base</label>
                <input
                  type="number"
                  placeholder="Prix_de_base"
                  className="champs"
                  value={values.prix_de_base}
                  onChange={(e) =>
                    setValues({ ...values, prix_de_base: e.target.value })
                  }
                />{" "}
              </div>
              <div class="input-box">
                <label>Prix Final H.T</label>
                <input
                  type="number"
                  placeholder="prix_final_H.T"
                  className="champs"
                  value={values.prix_final_H}
                  onChange={(e) =>
                    setValues({ ...values, prix_final_H: e.target.value })
                  }
                />{" "}
              </div>
            </div>
            <div class="column">
              <div class="input-box">
                <label>Fournisseur</label>
                <input
                  type="text"
                  placeholder="Fournisseur"
                  className="champs"
                  value={values.fournisseur}
                  onChange={(e) =>
                    setValues({ ...values, fournisseur: e.target.value })
                  }
                />
              </div>
              <div class="input-box">
                <label>Code a Barre</label>
                <input
                  type="text"
                  placeholder="Code a Barre"
                  className="champs"
                  value={values.code_a_barre}
                  onChange={(e) =>
                    setValues({ ...values, code_a_barre: e.target.value })
                  }
                />
              </div>
            </div>

            <button onClick={handleUpdate}>Update</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Edit1;
