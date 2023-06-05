import "./datatable6.scss";
import { DataGrid } from "@mui/x-data-grid";
import { SortieColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import jsPDF from "jspdf";
import logo from './logo.png';
function Datatable6  (props) {
  const [fin, setfin] = useState([]);
  const [facture, setfacture] = useState([]);
  const [produits, setproduits] = useState([]);
  const [impressionFacture, setImpressionFacture] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:4000/Produit/read")
      .then((response) => setproduits(response.data))
      .catch((error) => console.log(error));
  }, []);  
  useEffect(() => {
    axios.get(`http://localhost:4000/facture/read`)
    .then(response => setfacture(response.data))
    .catch(error => console.log(error));
}, []);
    useEffect(() => {
        axios.get('http://localhost:4000/societe/read')
          .then(response => setfin(response.data))
          .catch(error => console.log(error));
      }, []);
    const handleClick = () => {
        // Créer une nouvelle instance de jspdf
        const doc = new jsPDF();
         // Ajouter le logo
   
        // Récupérer les informations de la commande
const currentBonLivraison = fin.find(c => c.idbonlivraison === props.id);


const currentFacture = facture.find(f => f.idfacture === currentBonLivraison.idfacture);


        // Ajouter le contenu de la facture
        doc.setFillColor(33, 150, 243); // Définir la couleur de remplissage
        doc.rect(0, 0, 60, 10, 'F'); // Ajouter la bande bleue en haut à droite
        doc.rect(0, doc.internal.pageSize.height - 10, 60, 10, 'F'); // Ajouter la bande bleue en bas à gauche
        
        
        const defaultTextColor = doc.getTextColor(); // Sauvegarde de la couleur par défaut

        doc.setTextColor(0, 0, 200); // Bleu
        
        
        doc.setTextColor(defaultTextColor); // Rétablissement de la couleur par défaut
        doc.addImage(logo, 'PNG', 10, 50, 100, 20);
        doc.setTextColor(0, 0, 200); // Bleu
        doc.text(` ${currentFacture.titre}`, 110, 60);
        doc.setTextColor(defaultTextColor); // Rétablissement de la couleur par défaut

        doc.text('BON DE LIVRAISON',80,10);
        doc.text(`Nom de l'entreprise: ${currentBonLivraison.nomsociete}`, 10, 20);
        doc.text(`Adresse : ${currentBonLivraison.adresse}`, 10, 30);
        doc.setTextColor(0, 0, 200); // Bleu
        doc.text(`Téléphone : ${currentBonLivraison.tel}`, 10, 40);
        doc.setTextColor(defaultTextColor); // Rétablissement de la couleur par défaut
        doc.text(`Mail  : ${currentBonLivraison.email}`, 10, 50);
        doc.setTextColor(0, 0, 200); // Bleu
        
        doc.setTextColor(defaultTextColor); // Rétablissement de la couleur par défaut
        doc.setTextColor(0, 0, 200); // Bleu
        doc.text(`Destinataire : ${currentBonLivraison.destinataire}`, 110, 20);
        doc.setTextColor(defaultTextColor); // Rétablissement de la couleur par défaut
        doc.text(`Adresse : ${currentBonLivraison.adressedestinataire}`, 110, 30);
        doc.text(`Numéro du bon de livraison : ${currentBonLivraison.numbonlivraison}`, 10, 80);
        doc.text(`Numéro de commande : ${currentBonLivraison.numcommande}`, 10, 90);
        doc.text(`Numéro de client : ${currentBonLivraison.numclient}`, 10, 100);
        doc.text(`Contact client : ${currentBonLivraison.telclient}`, 10, 110);
        doc.text(`Informations supplimentaires s'il y en a`, 10, 120);
        // Ajouter la table des produits
    
        // Ajouter d'autres produits si nécessaire...
    
      const headers = [
          "Réf",
          "Désignation",
          "Unité",
          "Quantité",
          
        ];
    
        const data = produits.map((p) => {
          return [
            p.id,
            p.titre,
            p.unité,
            p.stock,
          ];
        });
    
        doc.autoTable({
          startY: 140,
          head: [headers],
          body: data,
          theme: "striped",
          styles: {
            fontSize: 12,
            valign: "middle",
            halign: "center",
          },
        });
    
      
      doc.text(`Signature expéditeur`, 10, 210);
      doc.text(`Signature destinataire`, 110, 210);
        // Ajouter d'autres informations de la facture si nécessaire...
        const textOptions = { align: 'center' };
        
doc.text(`Nom de l'entreprise: ElectroPlus`,120,245);
doc.text(`Mail : ${currentFacture.email}`,120,265);
doc.text(`Téléphone : ${currentFacture.tel}`,120,275);
doc.text('www.electroplustn.com',120,255);
doc.text(`Adresse : ${currentFacture.adresse}`,10,225);
doc.text(`TVA : ${currentFacture.tvatitre}`, 10,235);

doc.text('NOUS VOUS REMERCIONS DE VOTRE CONFIANCE', doc.internal.pageSize.getWidth() / 2, 285, textOptions);


        
        // Imprimer la facture en format pdf
        doc.autoTable({ html: '#facture-table' });
        doc.save(`facture_${props.idcommande}.pdf`);
    
        // Mettre à jour la variable d'état
        setImpressionFacture(true);
      }
    
    
    
  useEffect(() => {
    axios.get("http://localhost:4000/bonlivraisons/read"
           ).then((res) => {
            setfin(res.data)
             console.log(res.data);
          }).catch(()=>{
             console.log("failed");
          });
         },[]);

         const handleDelete = (id, e) => {
          e.preventDefault();
          swal({
            title: "Êtes-vous sûr?",
            text: "Une fois supprimé, vous ne pourrez plus récupérer ce Bon de livraison!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
              if (willDelete) {
                setfin(fin.filter((item) => item.id !== id));
                axios.delete(`http://localhost:4000/bonlivraisons/delete/${id}`)
                  .then(res => {
                    console.log('Deleted!!!', res);
                    swal("Success", "Le Bon de livraison a été supprimé avec succès", "success");
                  })
                  .catch(err => {
                    console.log(err);
                    swal("Error", "Une erreur s'est produite lors de la suppression du Bon de livraison", "error");
                  });
              }
            });
        };
 //* Bon de sortie *//
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            
            <div className="card-footer">
          <div>
          {impressionFacture ? (
          <p>Facture imprimée pour la commande n° {props.id} pour {props.username} {props.role}</p>
        ) : (
          <div className="downloadButton">
          <div onClick={(e) => handleClick(params.row.id, e)}>Télécharger</div>
          </div>
        )}
      </div>
      
      
</div>
<div className="editButton">
              <Link
                to="/BonLivraison/edit"
                state={{ bonlivraison: params.row }}
                style={{ textDecoration: "none" }}
              >
                <div className="editButton">Modifier</div>
              </Link>
            </div>
            <div
              className="deleteButton">
              <div onClick={(e) => handleDelete(params.row.id, e)}>Supprimer</div>
            
              
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        List des Bon de Livraison
        <Link to="/BonLivraison/new9" className="link">
        Ajouter Nouvelle
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={fin}
        columns={SortieColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable6;
