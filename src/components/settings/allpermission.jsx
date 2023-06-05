import React, { useState } from 'react';
import Datatable from '../datatable/Datatable';
import './allpermission.scss';

const AllPermission = () => {
const [selectedCategory, setSelectedCategory] = useState('products');

const [permissions, setPermissions] = useState({
products: {
add: true,
edit: true,
delete: false
},
orders: {
add: false,
edit: true,
delete: true
},
employees: {
add: true,
edit: true,
delete: true
},
companies: {
add: false,
edit: true,
delete: false
},
suppliers: {
add: true,
edit: false,
delete: false
},
purchaseOrders: {
add: false,
edit: false,
delete: true
},
deliveryNotes: {
add: true,
edit: true,
delete: true
},
calendar: {
add: true,
edit: true,
delete: true
}
});

const handleCategoryClick = (category) => {
setSelectedCategory(category);
};

const handlePermissionChange = (event, action) => {
const updatedPermissions = {
...permissions,
[selectedCategory]: {
...permissions[selectedCategory],
[action]: event.target.value === 'true'
}
};
setPermissions(updatedPermissions);
};

return (
<div>
    <h2>cofiguration de permission</h2>
    <h4>Permission: P.D.G</h4>

<nav className="navbarp">
<ul>
<li className={selectedCategory === 'products' ? 'active' : ''} onClick={() => handleCategoryClick('products')}>
Produits
</li>
<li className={selectedCategory === 'orders' ? 'active' : ''} onClick={() => handleCategoryClick('orders')}>
Commandes
</li>
<li className={selectedCategory === 'employees' ? 'active' : ''} onClick={() => handleCategoryClick('employees')}>
Employés
</li>
<li className={selectedCategory === 'companies' ? 'active' : ''} onClick={() => handleCategoryClick('companies')}>
Entreprises
</li>
<li className={selectedCategory === 'suppliers' ? 'active' : ''} onClick={() => handleCategoryClick('suppliers')}>
Fournisseurs
</li>
<li className={selectedCategory === 'purchaseOrders' ? 'active' : ''} onClick={() => handleCategoryClick('purchaseOrders')}>
Commandes d'achat
</li>
<li className={selectedCategory === 'deliveryNotes' ? 'active' : ''} onClick={() => handleCategoryClick('deliveryNotes')}>
 livraisons
</li>
<li className={selectedCategory === 'calendar' ? 'active' : ''} onClick={() => handleCategoryClick('calendar')}>
Calendrier
</li>
</ul>
</nav>
<div className="navbar__permissions">
<div class="navbar__permission">
  <span>Ajouter</span>
  <select value={permissions[selectedCategory].add} onChange={(event) => handlePermissionChange(event, 'add')}>
    <option value={true}>Activé</option>
    <option value={false}>Désactivé</option>
  </select>
</div>
<div class="navbar__permission">
  <span>Modifier</span>
  <select value={permissions[selectedCategory].edit} onChange={(event) => handlePermissionChange(event, 'edit')}>
    <option value={true}>Activé</option>
    <option value={false}>Désactivé</option>
  </select>
</div>
<div class="navbar__permission">
  <span>Supprimer</span>
  <select value={permissions[selectedCategory].delete} onChange={(event) => handlePermissionChange(event, 'delete')}>
    <option value={true}>Activé</option>
    <option value={false}>Désactivé</option>
  </select>
</div>

      </div>
      <Datatable/>
      </div>
      
);
}

export default AllPermission;