import React, { useState, useEffect } from 'react';
import './cartcomponent.scss';
import SettingsIcon from '@mui/icons-material/Settings';
import Axios from 'axios';
import CartComponent2 from './cart2';

function CartComponent() {
  const [client, setClient] = useState([]);
  const [commandeEnCours, setCommandeEnCours] = useState(false);
  const [commandeTerminee, setCommandeTerminee] = useState(false);
  const [commandeAnnulee, setCommandeAnnulee] = useState(false);

  useEffect(() => {
    Axios.get('http://localhost:4000/client/read')
      .then(response => setClient(response.data))
      .catch(error => console.log(error));
  }, []);
  

  useEffect(() => {
    Axios.get('http://localhost:4000/commande/read')
      .then(response => {
        const commandeData = response.data;
        setCommandeEnCours(commandeData.enCours);
        setCommandeTerminee(commandeData.terminee);
        setCommandeAnnulee(commandeData.annulee);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="cart-component">
      <div className="card">
        <div className="card-header">
          État de la commande
          <SettingsIcon />
        </div>
        <div className="card-body">
          <p>Cette commande est :</p>
          <div className="alert">En attente</div>
          <p className={commandeEnCours ? 'validation' : ''}>La commande est en cours</p>
          <p className={commandeTerminee ? 'validation' : ''}>La commande est terminée</p>
          <p className={commandeAnnulee ? 'annulation' : ''}>La commande est annulée</p>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          Coordonnées et facturation
          <SettingsIcon />
        </div>
        <div className="card-body">
          <p>Tunisie</p>
          {client.map(client => (
            <div key={client.id}>
              <p>{client.nom}</p>
              <p>{client.prenom}</p>
              <p>{client.email}</p>
              <p>{client.permission}</p>
              <p>{client.tel}</p>
            </div>
          ))}
        </div>
      </div>

      <CartComponent2 />
    </div>
  );
}

export default CartComponent;
