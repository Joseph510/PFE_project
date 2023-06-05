import React, { useState, useEffect } from "react";
import "./Permissions.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Parametre() {
  const [permissions, setPermissions] = useState({
    isAdmin: false,
    canEdit: true,
    canView: true,
  });

  const [facture, setFacture] = useState({});
  const [timbrefiscal, settimbrefiscal] = useState("");
  const [adresse, setadresse] = useState("");
  const [date_reglement, setdate_reglement] = useState("");
  const [delai_livraison, setdelai_livraison] = useState("");
  const [devisecommande, setdevisecommande] = useState("");
  const [email, setemail] = useState("");
  const [modelivraison, setmodelivraison] = useState("");
  const [montantlivraison, setmontantlivraison] = useState("");
  const [numerodebut, setnumerodebut] = useState("");
  const [reglement_virement, setreglement_virement] = useState("");
  const [tel, settel] = useState("");
  const [titre, settitre] = useState("");
  const [tva, settva] = useState("");
  const [tvatitre, settvatitre] = useState("");
  const [validite_offre, setvalidite_offre] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/facture/read")
      .then((res) => {
        setFacture(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (facture) {
      settimbrefiscal(facture.timbrefiscal);
      setadresse(facture.adresse);
      setdate_reglement(facture.date_reglement);
    }
  }, [facture]);

  const handleUpdate = () => {
    const updatedFacture = {
      ...facture,
      timbrefiscal: timbrefiscal,
      adresse: adresse,
      date_reglement: date_reglement,
      delai_livraison: delai_livraison,
      devisecommande: devisecommande,
      email: email,
      modelivraison: modelivraison,
      montantlivraison: montantlivraison,
      numerodebut: numerodebut,
      reglement_virement: reglement_virement,
      tel: tel,
      titre: titre,
      tva: tva,
      tvatitre: tvatitre,
      validite_offre: validite_offre,
    };

    axios
      .post(`http://localhost:4000/facture/create`, updatedFacture)
      .then((res) => {
        console.log("Facture mise à jour :", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePermissionsChange = (field, value) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [field]: value,
    }));
  };

  const handleEdit = (field, value) => {
    setFacture((prevFacture) => ({
      ...prevFacture,
      [field]: value,
    }));
  };

  // Affichage du composant
  return (
    <div>
      <div className="permissions-container">
        <h2>Autorisations</h2>
        <div className="permission">
          <input
            type="checkbox"
            id="isAdmin"
            checked={permissions.isAdmin}
            onChange={(e) =>
              handlePermissionsChange("isAdmin", e.target.checked)
            }
          />
          <label htmlFor="isAdmin">Administrateur</label>
        </div>
        <div className="permission">
          <input
            type="checkbox"
            id="canEdit"
            checked={permissions.canEdit}
            onChange={(e) =>
              handlePermissionsChange("canEdit", e.target.checked)
            }
          />
          <label htmlFor="canEdit">Modifier</label>
        </div>
        <div className="permission">
          <input
            type="checkbox"
            id="canView"
            checked={permissions.canView}
            onChange={(e) =>
              handlePermissionsChange("canView", e.target.checked)
            }
          />
          <label htmlFor="canView">Visualiser</label>
        </div>
      </div>

      {permissions.canEdit && (
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0.5", marginRight: "50px" }}>
            <h1 style={{ color: "#4d3569" }}>Contenu de la facture</h1>
            <p>
              <label>
                État :
                <select
                  value={facture.etat}
                  onChange={(e) => handleEdit(e.target.value)}
                >
                  <option value="activer">Activer</option>
                  <option value="desactiver">Désactiver</option>
                </select>
              </label>
            </p>

            <p>
              Timbre fiscal :
              <input
                type="number"
                step="0.01"
                value={timbrefiscal}
                onChange={(e) => settimbrefiscal(e.target.value)}
              />
            </p>
            <p>
              Entête :
              <ul>
                <li>
                  Numéro de début :
                  <p>
                    <input
                      type="number"
                      step="1"
                      value={numerodebut}
                      onChange={(e) => setnumerodebut(e.target.value)}
                    />
                  </p>
                </li>
                <li>
                  Adresse :
                  <p>
                    <input
                      type="text"
                      placeholder="entrer votre adresse"
                      value={adresse}
                      onChange={(e) => setadresse(e.target.value)}
                    />
                  </p>
                  <br />
                  Email :
                  <p>
                    <input
                      type="email"
                      placeholder="entrer votre email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </p>
                  <br />
                  TVA :
                  <p>
                    <input
                      type="text"
                      placeholder="entrer votre TVA"
                      value={tvatitre}
                      onChange={(e) => settvatitre(e.target.value)}
                    />
                  </p>
                  <br />
                  Telephone :
                  <p>
                    <input
                      type="text"
                      placeholder="entrer votre numéro de téléphone"
                      value={tel}
                      onChange={(e) => settel(e.target.value)}
                    />
                  </p>
                  <br/>
                  Titre :
                  <p>
                    <input
                      type="text"
                      placeholder="entrer votre numéro de téléphone"
                      value={titre}
                      onChange={(e) => settitre(e.target.value)}
                    />
                  </p>
                  <br />
                </li>
              </ul>
            </p>
          </div>
          Pied de page :
          <ul>
            <div style={{ flex: "0.5", marginRight: "50px" }}>
              Mode de livaison:
              <p>
                <input
                  type="text"
                  placeholder="entrer mode de livraison"
                  value={modelivraison}
                  onChange={(e) => setmodelivraison(e.target.value)}
                />
              </p>
              Règlement par virements :
              <p>
                <input
                  type="text"
                  placeholder="entrer votre règlement par virement"
                  value={reglement_virement}
                  onChange={(e) => setreglement_virement(e.target.value)}
                />
              </p>
              Date de règlement :
              <p>
                <input
                  type="text"
                  placeholder="entrer la date"
                  value={date_reglement}
                  onChange={(e) => setdate_reglement(e.target.value)}
                />
              </p>
              <br />
              Validité de l'offre :
              <p>
                <input
                  type="text"
                  placeholder="entrer la validité de loffre"
                  value={validite_offre}
                  onChange={(e) => setvalidite_offre(e.target.value)}
                />
              </p>
              <br />
              Delai livraison :
              <p>
                <input
                  type="text"
                  placeholder="entrer la date"
                  value={delai_livraison}
                  onChange={(e) => setdelai_livraison(e.target.value)}
                />
              </p>
              <p>
                <label>
                  État de la commande :
                  <select
                    value={facture.etat}
                    onChange={(e) => handleEdit(e.target.value)}
                  >
                    <option value="activer">En attente</option>
                    <option value="desactiver">En cours</option>
                    <option value="desactiver">Terminée</option>
                    <option value="desactiver">Annulée</option>
                  </select>
                </label>
              </p>
              Configuration de la commande :
              <div style={{ flex: "0.5", marginRight: "50px" }}>
                Devise de la commande :
                <p>
                  <input
                    type="text"
                    placeholder="entrer votre devise de la commande"
                    value={devisecommande}
                    onChange={(e) => setdevisecommande(e.target.value)}
                  />
                </p>
                TVA de la commande:
                <p>
                  <input
                    type="text"
                    placeholder="entrer votre TVA"
                    value={tva}
                    onChange={(e) => settva(e.target.value)}
                  />
                </p>
                <br />
                Montant de la livraison :
                <p>
                  <input
                    type="text"
                    placeholder="entrer votre montant de la livraison"
                    value={montantlivraison}
                    onChange={(e) => setmontantlivraison(e.target.value)}
                  />
                </p>
                <br />
              </div>
            </div>
          </ul>
        </div>
      )}
      <button onClick={handleUpdate}>Enregister</button>
    </div>
  );
}

export default Parametre;
