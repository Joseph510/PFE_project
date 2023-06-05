import "./datatable2.scss";
import { DataGrid } from "@mui/x-data-grid";
import { ProductColumns } from "../../datatablesource";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

function Datatable2() {
  const { id } = useParams();
  const [fin, setFin] = useState([]);
  const [titre1, settitre] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4000/Produit/read");
      setFin(res.data);
    };
    fetchData();
  }, [fin]);
  const handlewaves = (titre) => {
    axios
      .post(`http://localhost:4000/Produit/rech/${titre}`, {})
      .then((r) => {
        alert("l'id est : " + r.data.id);
      })
      .catch(() => {});
  };
  const handleDelete = (productId, e) => {
    e.preventDefault();
    swal({
      title: "Êtes-vous sûr?",
      text: "Une fois supprimé, vous ne pourrez plus récupérer ce produit!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setFin((prevData) => prevData.filter((item) => item.id !== productId));
        axios
          .delete(`http://localhost:4000/Produit/delete/${productId}`)
          .then(() => {
            console.log("Deleted!!!");
            swal("Success", "Le produit a été supprimé avec succès", "success");
          })
          .catch((err) => {
            console.log(err);
            swal(
              "Error",
              "Une erreur s'est produite lors de la suppression du produit",
              "error"
            );
          });
      }
    });
  };
  const imageColumn = [
    {
      field: "image",
      headerName: "Image",
      width: 250,
      renderCell: (params) => {
        const { id } = params.row;

        if (params.row.images.length > 0) {
          const imageUrl = `http://localhost:4000/Produit/getImage/${id}/${params.row.images[0]?.path}`;
          return (
            <div className="cellAction">
              <div className="productimage">
                <img
                  src={imageUrl}
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                  alt="Product"
                />
              </div>
            </div>
          );
        }
        return;
      },
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to="/products/single"
              state={{ produit: params.row }}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Voir</div>
            </Link>
            <div className="editButton">
              <Link
                to="/products/edit"
                state={{ produit: params.row }}
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
      <input type="text" onChange={(event) => settitre(event.target.value)} />
      <button onClick={() => handlewaves(titre1)}>Recherche</button>
      <div className="datatableTitle">
        Liste des Produits
        <Link to="/products/new" className="link">
          Ajouter Nouvelle
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={fin}
        columns={ProductColumns.concat(imageColumn).concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable2;
