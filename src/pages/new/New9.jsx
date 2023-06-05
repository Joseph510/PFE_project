import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";

import axios from "axios";
import swal from "sweetalert";
import { Navigate } from "react-router-dom";

const New9 = ({ inputs, title }) => {
  const [nomsociete, setnomsociete] = useState("");
  const [adresse, setadresse] = useState("");
  const [tel, settel] = useState("");
  const [email, setemail] = useState("");
  const [destinataire, setdestinataire] = useState("");
  const [adressedestinataire, setadressedestinataire] = useState("");
  const [numcommande, setnumcommande] = useState("");
  const [numbonlivraison, setnumbonlivraison] = useState("");
  const [numclient, setnumclient] = useState("");
  const [telclient, settelclient] = useState("");
  const [referenceproduit, setreferenceproduit] = useState("");
  const [quantite, setquantite] = useState("");
  const [prixunite, setprixunite] = useState("");

  const handle = (e) => {
    e.preventDefault();
    const userData = {
      nomsociete: nomsociete,
      adresse: adresse,
      tel: tel,
      email: email,
      destinataire: destinataire,
      adressedestinataire: adressedestinataire,
      numbonlivraison: numbonlivraison,
      numcommande: numcommande,
      numclient: numclient,
      telclient: telclient,
      referenceproduit: referenceproduit,
      quantite: quantite,
      prixunite: prixunite,
    };

    axios
      .post("http://localhost:4000/bonlivraisons/create", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        swal(
          "Success",
          "Le bon de livraison  a été ajouté avec succès",
          "success"
        );
        Navigate("/BonLivraison");
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
                <label>Nom de l'entreprise</label>
                <input
                  type="text"
                  placeholder="Référence "
                  className="champs"
                  value={nomsociete}
                  onChange={(event) => setnomsociete(event.target.value)}
                />{" "}
              </div>
              <div class="input-box">
                <label>Adresse</label>
                <input
                  type="text"
                  placeholder="Adresse "
                  className="champs"
                  value={adresse}
                  onChange={(event) => setadresse(event.target.value)}
                />
              </div>
            </div>

            <div class="column">
              <div class="input-box">
                <label>Téléphone</label>
                <input
                  type="text"
                  placeholder="Téléphone "
                  className="champs"
                  value={tel}
                  onChange={(event) => settel(event.target.value)}
                />{" "}
              </div>
              <div class="input-box">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email "
                  className="champs"
                  value={email}
                  onChange={(event) => setemail(event.target.value)}
                />{" "}
              </div>
            </div>
            <div class="column">
              <div class="input-box">
                <label>Destinataire</label>
                <input
                  type="text"
                  placeholder="Destinataire"
                  className="champs"
                  value={destinataire}
                  onChange={(event) => setdestinataire(event.target.value)}
                />{" "}
              </div>
              <div class="input-box">
                <label>Adresse du Destinataire</label>
                <input
                  type="text"
                  placeholder="Adresse du Destinataire"
                  className="champs"
                  value={adressedestinataire}
                  onChange={(event) =>
                    setadressedestinataire(event.target.value)
                  }
                />{" "}
              </div>
            </div>
            <div class="column">
              <div class="input-box">
                <label>Numéro du Bon de Livraison</label>
                <input
                  type="number"
                  placeholder="Numéro du Bon de Livraison"
                  className="champs"
                  value={numbonlivraison}
                  onChange={(event) => setnumbonlivraison(event.target.value)}
                />{" "}
              </div>
              <div class="input-box">
                <label>Numéro du Commande</label>
                <input
                  type="number"
                  placeholder="Numéro du Commande"
                  className="champs"
                  value={numcommande}
                  onChange={(event) => setnumcommande(event.target.value)}
                />{" "}
              </div>
            </div>
            <div class="column">
              <div class="input-box">
                <label>Numéro du Client</label>
                <input
                  type="text"
                  placeholder="Numéro du Client"
                  className="champs"
                  value={numclient}
                  onChange={(event) => setnumclient(event.target.value)}
                />
              </div>
              <div class="input-box">
                <label>Téléphone du Client </label>
                <input
                  type="text"
                  placeholder="Numéro du Téléphone"
                  className="champs"
                  value={telclient}
                  onChange={(event) => settelclient(event.target.value)}
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

export default New9;
