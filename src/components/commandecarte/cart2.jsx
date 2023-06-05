import React, { useState, useEffect } from "react";
import "./cartcomponent.scss";
import SettingsIcon from "@mui/icons-material/Settings";
import Axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from "./logo.png";
function CartComponent2(props) {
  const [user, setUser] = useState([]);
  const [commande, setCommande] = useState([]);
  const [facture, setFacture] = useState([]);
  const [produit, setproduits] = useState([]);
  const [societe, setSociete] = useState([]);
  const [impressionFacture, setImpressionFacture] = useState(false);
  useEffect(() => {
    Axios.get("http://localhost:4000/Produit/read")
      .then((response) => setproduits(response.data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    Axios.get("http://localhost:4000/societe/read")
      .then((response) => setSociete(response.data))
      .catch((error) => console.log(error));
  }, []);
  const handleClick = () => {
    // Créer une nouvelle instance de jspdf
    const doc = new jsPDF();
    // Ajouter le logo

    // Récupérer les informations de la commande
    const currentCommande = commande.find((c) => c.idcommande === props.id);

    // Récupérer les informations du client
    const currentUser = user.find((u) => u.iduser === currentCommande.iduser);

    // Récupérer les informations de la facture

    const currentFacture = facture.find(
      (f) => f.idfacture === currentCommande.idfacture
    );

    const currentProduit = produit.find((p) => p.id === currentCommande.id);

    // Ajouter le contenu de la facture
    doc.setFillColor(33, 150, 243); // Définir la couleur de remplissage
    doc.rect(0, 0, 60, 10, "F"); // Ajouter la bande bleue en haut à droite
    doc.rect(0, doc.internal.pageSize.height - 10, 60, 10, "F"); // Ajouter la bande bleue en bas à gauche

    doc.addImage(logo, "PNG", 10, 30, 100, 20);
    const defaultTextColor = doc.getTextColor(); // Sauvegarde de la couleur par défaut

    doc.setTextColor(0, 0, 200); // Bleu

    doc.text(` ${currentFacture.titre}`, 110, 40);

    doc.setTextColor(defaultTextColor); // Rétablissement de la couleur par défaut

    doc.text(`Devise N° : ${currentFacture.numerodebut}`, 10, 20);
    doc.text(`Date : ${currentCommande.date}`, 10, 30);
    doc.setTextColor(0, 0, 200); // Bleu
    doc.text(` ${currentFacture.adresse}`, 8, 60);
    doc.setTextColor(defaultTextColor); // Rétablissement de la couleur par défaut
    doc.text(`TVA : ${currentFacture.tvatitre}`, 10, 70);
    doc.setTextColor(0, 0, 200); // Bleu
    doc.text("www.electroplustn.com", 10, 80);
    doc.setTextColor(defaultTextColor); // Rétablissement de la couleur par défaut
    doc.setTextColor(0, 0, 200); // Bleu
    doc.text(`Email : ${currentFacture.email}`, 10, 90);
    doc.setTextColor(defaultTextColor); // Rétablissement de la couleur par défaut
    doc.text(`Téléphone : ${currentFacture.tel}`, 10, 100);

    // Ajouter la table des produits
    const headers = [
      "Réf",
      "Désignation",
      "Unité",
      "Quantité",
      "PU HTVA",
      "Remise",
      "TVA",
      "Total net",
    ];

    const data = produit.map((p) => {
      return [
        p.id,
        p.titre,
        p.unité,
        p.stock,
        p.prix_de_base,
        0,
        "19%",
        p.prix_final_H,
      ];
    });

    doc.autoTable({
      startY: 105,
      head: [headers],
      body: data,
      theme: "striped",
      styles: {
        fontSize: 10,
        valign: "middle",
        halign: "center",
      },
    });

    // Ajouter la table des taxes
    const taxes = [
      ["Taux", "Base", "Montant"],
      ["19%", "245", "46.55"],
      ["5%", "0", "0"],
      // Ajouter d'autres taxes si nécessaire...
    ];
    const taxesStartY = doc.autoTable.previous.finalY + 10;
    doc.autoTable({
      startY: taxesStartY,
      head: [taxes[0]],
      body: taxes.slice(1),
      theme: "striped",
      styles: {
        fontSize: 10,
        valign: "middle",
        halign: "center",
      },
    });
    // Ajouter la table des totaux
    const totaux = [
      ["Total brut", "Total net", "TVA", "Timbre fiscal", "Net à payer"],
      ["345", "292.55", "55.45", "10", "302.55"],
    ];
    const totauxStartY = doc.autoTable.previous.finalY + 10;
    doc.autoTable({
      startY: totauxStartY,
      head: [totaux[0]],
      body: totaux.slice(1),
      theme: "striped",
      styles: {
        fontSize: 10,
        valign: "middle",
        halign: "center",
      },
    });
    // Ajouter d'autres informations de la facture si nécessaire...
    const textOptions = { align: "center" };
    doc.setTextColor(0, 0, 200); // Bleu
    doc.text(
      `Mode de livraison : ${currentFacture.modelivraison}`,
      doc.internal.pageSize.getWidth() / 2,
      235,
      textOptions
    );
    doc.text(
      `${currentFacture.reglementVirement}`,
      doc.internal.pageSize.getWidth() / 2,
      245,
      textOptions
    );
    doc.text(
      `Date de règlement : ${currentFacture.dateReglement}`,
      doc.internal.pageSize.getWidth() / 2,
      255,
      textOptions
    );
    doc.text(
      `Validité de l'offre : ${currentFacture.validiteOffre}`,
      doc.internal.pageSize.getWidth() / 2,
      265,
      textOptions
    );
    doc.text(
      `Délai maximum de livraison : ${currentFacture.delaiLivraison}`,
      doc.internal.pageSize.getWidth() / 2,
      275,
      textOptions
    );
    doc.text(
      "NOUS VOUS REMERCIONS DE VOTRE CONFIANCE",
      doc.internal.pageSize.getWidth() / 2,
      285,
      textOptions
    );
    doc.setTextColor(defaultTextColor); // Rétablissement de la couleur par défaut

    // Imprimer la facture en format pdf
    doc.autoTable({ html: "#facture-table" });
    doc.save(`facture_${props.idcommande}.pdf`);

    // Mettre à jour la variable d'état
    setImpressionFacture(true);
  };
  useEffect(() => {
    Axios.get(`http://localhost:4000/client/read`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    Axios.get(`http://localhost:4000/facture/read`)
      .then((response) => setFacture(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:4000/commande/read")
      .then((response) => setCommande(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        Configuration de la commande
        <SettingsIcon></SettingsIcon>
      </div>
      <div className="card-body">
        {facture.map((facture) => (
          <p key={facture.id}>
            <p>Devise de la commande : {facture.devisecommande}</p>
            <p>TVA : {facture.tva}%</p>
            <p>Montant de la livraison : {facture.montantlivraison}</p>
          </p>
        ))}
      </div>
      <div className="card-footer">
        <div>
          {impressionFacture ? (
            <p>
              Facture imprimée pour la commande n° {props.id} pour{" "}
              {props.username} {props.role}
            </p>
          ) : (
            <button style={{ backgroundColor: "grey" }} onClick={handleClick}>
              Facture
            </button>
          )}
        </div>
        {impressionFacture ? (
          <>
            <p>
              Devise imprimée pour la commande n° {props.idc} pour{" "}
              {props.username} {props.role}
            </p>
          </>
        ) : (
          <button style={{ backgroundColor: "grey" }} onClick={handleClick}>
            Devise
          </button>
        )}
      </div>
    </div>
  );
}

export default CartComponent2;
