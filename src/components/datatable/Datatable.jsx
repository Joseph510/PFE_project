import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { UserColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

function Datatable  () {
  const [fin, setfin] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:4000/api/auth/allusers?role=user');
      setfin(res.data);
    };
    fetchData();
  }, []);
  
  console.log(fin);
  
  

         const handleDelete = (id, e) => {
          e.preventDefault();
          swal({
            title: "Êtes-vous sûr?",
            text: "Une fois supprimé, vous ne pourrez plus récupérer ce client!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
            .then((willDelete) => {
              if (willDelete) {
                setfin(fin.filter((item) => item.id !== id));
                axios.delete(`http://localhost:4000/api/auth/deleteuser/${id}`)
                  .then(res => {
                    console.log('Deleted!!!', res);
                    swal("Success", "Le client a été supprimé avec succès", "success");
                  })
                  .catch(err => {
                    console.log(err);
                    swal("Error", "Une erreur s'est produite lors de la suppression du client", "error");
                  });
              }
            });
        };
 
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            
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
      Liste des Utilisateurs
        <Link to="/users/new" className="link">
        Ajouter Nouvelle
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={fin}
        columns={UserColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
