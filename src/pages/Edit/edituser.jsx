import "./edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const New7 = ({ inputs, title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [values, setValues] = useState(
    location.state.client
      ? {
          ...location.state.client,
        }
      : {}
  );
  const handle = (e) => {
    e.preventDefault();
    
    axios
      .put(`http://localhost:4000/client/update/${values.id}`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        swal("Success", "Le Client a été ajouté avec succès", "success");
        navigate("/Client");
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
              <div className="input-box">
                <label>Nom</label>
                <input
                  type="text"
                  placeholder="Nom"
                  className="champs"
                  value={values.nom}
                  onChange={(e) =>
                    setValues({ ...values, nom: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <label>Prénom</label>
                <input
                  type="text"
                  placeholder="Prénom"
                  className="champs"
                  value={values.prenom}
                  onChange={(e) =>
                    setValues({ ...values, prenom: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="champs"
                  value={values.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <label>Rôle</label>
                <input
                  type="text"
                  placeholder="Rôle"
                  className="champs"
                  value={values.rôle}
                  onChange={(e) =>
                    setValues({ ...values, rôle : e.target.value })
                  }
                />
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <label>Téléphone</label>
                <input
                  type="text"
                  placeholder="Téléphone"
                  className="champs"
                  value={values.tel}
                  onChange={(e) =>
                    setValues({ ...values, tel : e.target.value })
                  }
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

export default New7;
