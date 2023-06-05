import "./datatable8.scss";
import { DataGrid } from "@mui/x-data-grid";
import { SocieteColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

function Datatable8  () {
  const [fin, setfin] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/societe/read"
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
            text: "Une fois supprimé, vous ne pourrez plus récupérer ce societe!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
              if (willDelete) {
                setfin(fin.filter((item) => item.id !== id));
                axios.delete(`http://localhost:4000/societe/delete/${id}`)
                  .then(res => {
                    console.log('Deleted!!!', res);
                    swal("Success", "Le societe a été supprimé avec succès", "success");
                  })
                  .catch(err => {
                    console.log(err);
                    swal("Error", "Une erreur s'est produite lors de la suppression du societe", "error");
                  });
              }
            });
        };
          const handleView = (id) => {
            axios.get(`http://localhost:4000/societe/read/${id}`)
            .then(res => {
              setfin(res.data)
            }).catch(err =>
               console.log(err))
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
            <Link
              to="/Societe/single"
              state={{ societe: params.row }}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Voir</div>
            </Link>
            <div className="editButton">
              <Link
                to="/societe/edit"
                state={{ societe: params.row }}
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
        Liste des Sociétés
        <Link to="/Societe/new5" className="link">
        Ajouter Nouvelle
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={fin}
        columns={SocieteColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable8;