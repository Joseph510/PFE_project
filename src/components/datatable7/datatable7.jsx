import "./datatable7.scss";
import { DataGrid } from "@mui/x-data-grid";
import { SortieColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

function Datatable7  () {
  const [fin, setfin] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/BonEntree/read"
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
            text: "Une fois supprimé, vous ne pourrez plus récupérer ce produit!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
              if (willDelete) {
                setfin(fin.filter((item) => item.id !== id));
                axios.delete(`http://localhost:4000/BonEntree/delete/${id}`)
                  .then(res => {
                    console.log('Deleted!!!', res);
                    swal("Success", "Le BonEntree a été supprimé avec succès", "success");
                  })
                  .catch(err => {
                    console.log(err);
                    swal("Error", "Une erreur s'est produite lors de la suppression du BonEntree", "error");
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
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Voir</div>
            </Link>
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
        Liste
        <Link to="/users/new" className="link">
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

export default Datatable7;
