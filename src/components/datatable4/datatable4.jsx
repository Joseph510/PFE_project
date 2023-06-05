import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { BonCommandeColumns, CommandeColumns } from "../../datatablesource";
import axios from "axios";
import swal from "sweetalert";

function Datatable4() {
const [fin, setFin] = useState([]);

useEffect(() => {
axios
.get("http://localhost:4000/BonCommande/read")
.then((res) => {
setFin(res.data);
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
text: "Une fois supprimé, vous ne pourrez plus récupérer ce Bon de Commande!",
icon: "warning",
buttons: true,
dangerMode: true,
}).then((willDelete) => {
if (willDelete) {
setFin(fin.filter((item) => item.id !== id));
axios
.delete(`http://localhost:4000/BonCommande/delete/${id}`)
.then((res) => {
console.log("Deleted!!!", res);
swal(
"Success",
"Le BonCommande a été supprimé avec succès",
"success"
);
})
.catch((err) => {
console.log(err);
swal(
"Error",
"Une erreur s'est produite lors de la suppression du BonCommande",
"error"
);
});
}
});
};

const handleDownload = (fileUrl, fileName) => {
axios
.get(fileUrl, {
responseType: "blob",
})
.then((response) => {
const url = window.URL.createObjectURL(new Blob([response.data]));
const link = document.createElement("a");
link.href = url;
link.setAttribute("download", fileName);
document.body.appendChild(link);
link.click();
})
.catch((error) => {
console.log(error);
});
};

const handleFileUpload = (e) => {
const file = e.target.files[0];
// Handle file upload logic here
setFin([...fin, { id: Date.now(), fileName: file.name, fileUrl: URL.createObjectURL(file) }]);
};

const actionColumn = [
{
field: "action",
headerName: "Action",
width: 400,
renderCell: (params) => {
const { id, fileUrl, fileName } = params.row;
return (
<div className="cellAction">

<div className="viewButton">
<div onClick={() => handleDownload(fileUrl, fileName)}>
Télécharger
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
Liste des Bon de de Commandes
<label htmlFor="upload" className="fileUpload">
<span>Ajouter Fichier</span>
<input
type="file"
id="upload"
style={{ display: "none" }}
onChange={handleFileUpload}
/>
</label>
</div>
<DataGrid
className="datagrid"
rows={fin}
     columns={BonCommandeColumns.concat(actionColumn)}
     pageSize={9}
     rowsPerPageOptions={[9]}
     checkboxSelection
   />
</div>
  );
};

export default Datatable4;
