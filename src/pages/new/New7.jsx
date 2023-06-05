import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const New7 = ({ inputs, title }) => {
  const [Nom, setnom] = useState("");
  const [Prenom, setprenom] = useState("");
  const [Email, setemail] = useState("");
  const [Rôle, setrôle] = useState("");
  const [tel, settel] = useState("");
  const navigate = useNavigate();

  const handle = (e) => {
    e.preventDefault();
    navigate("/Client");
    const userData = {
      nom: Nom,
      prenom: Prenom,
      email: Email,
      rôle: Rôle,
      tel: tel,
    };
    axios
      .post("http://localhost:4000/client/create", userData, {
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
                  value={Nom}
                  onChange={(event) => setnom(event.target.value)}
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
                  value={Prenom}
                  onChange={(event) => setprenom(event.target.value)}
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
                  value={Email}
                  onChange={(event) => setemail(event.target.value)}
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
                  value={Rôle}
                  onChange={(event) => setrôle(event.target.value)}
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
                  value={tel}
                  onChange={(event) => settel(event.target.value)}
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
