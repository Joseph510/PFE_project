import "./datatable9.scss";
import { DataGrid } from "@mui/x-data-grid";
import { CommandeColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

function Datatable9() {
  const [fin, setfin] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/commande/read")
      .then((res) => {
        setfin(res.data);
        console.log(res.data);
      })
      .catch(() => {
        console.log("failed");
      });
  }, []);

  const handleDelete = (id, e) => {
    e.preventDefault();
    swal({
      title: "Êtes-vous sûr?",
      text: "Une fois supprimé, vous ne pourrez plus récupérer ce commande!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setfin(fin.filter((item) => item.id !== id));
        axios
          .delete(`http://localhost:4000/commande/delete/${id}`)
          .then((res) => {
            console.log("Deleted!!!", res);
            swal(
              "Success",
              "Le commande a été supprimé avec succès",
              "success"
            );
          })
          .catch((err) => {
            console.log(err);
            swal(
              "Error",
              "Une erreur s'est produite lors de la suppression du commande",
              "error"
            );
          });
      }
    });
  };
  /* Bon d'entree */
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/detailcommande" style={{ textDecoration: "none" }}>
              <div className="viewButton">Voir</div>
            </Link>
            <div className="editButton">
              <Link
                to="/commande/edit"
                state={{ commande: params.row }}
                style={{ textDecoration: "none" }}
              >
                <div className="editButton">Modifier</div>
              </Link>
            </div>
            <div className="deleteButton">
              <div onClick={(e) => handleDelete(params.row.id, e)}>
                Supprimer
              </div>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Liste des Commandes
        <Link to="/commande/new6" className="link">
          Ajouter Nouvelle
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={fin}
        columns={CommandeColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable9;
