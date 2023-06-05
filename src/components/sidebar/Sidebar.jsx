import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ReorderIcon from '@mui/icons-material/Reorder';
import BusinessIcon from '@mui/icons-material/Business';
import { CalendarToday } from "@mui/icons-material";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import DescriptionIcon from '@mui/icons-material/Description';
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
          <span className="logo">ElectroPlus</span>
          <p>Bienvenue {JSON.parse(localStorage.getItem('user')).username}</p>

      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/home" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Tableau De Board</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Produit</span>
            </li>
          </Link>
          <Link to="/Societe" style={{ textDecoration: "none" }}>
          <li>
            <BusinessIcon className="icon" />
            <a href="#submenu1" class="nav-link " data-bs-toggle="collapse" aria-current="page">
                <i className="bi bi-grid" ></i>
            <span>Société</span>

            <ArrowDownwardIcon className="icon" />
              </a>
          </li>
          <ul class="nav collapse ms-3" id="submenu1" data-bs-parent="#parentM">
                           
                <Link to="/fournisseurs" style={{ textDecoration: "none" }}>
                  <li>
                    <PersonOutlineIcon className="icon" />
                    <span>Fournisseur</span>
                  </li>
                </Link>
          </ul>
          </Link>
          <Link to="/commande" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>Commande</span>
          </li>
          </Link>
          <Link to="/SocieteClient" style={{ textDecoration: "none" }}>
          <li>
            <BusinessIcon className="icon" />
            <a href="#submenu2" class="nav-link " data-bs-toggle="collapse" aria-current="page">
                <i className="bi bi-grid" ></i>
            <span>Société Client</span>

            <ArrowDownwardIcon className="icon" />
              </a>
          </li>
          <ul class="nav collapse ms-3" id="submenu2" data-bs-parent="#parentM">
                           
                <Link to="/Client" style={{ textDecoration: "none" }}>
                  <li>
                    <PersonOutlineIcon className="icon" />
                    <span>Client</span>
                  </li>
                </Link>
          </ul>
          </Link>

          <p className="title">USEFUL</p>
          <ul>
          <Link to="/BonCommande" style={{ textDecoration: "none" }}>
          <li>
            <ReorderIcon className="icon" />
            <a href="#submenu3" class="nav-link " data-bs-toggle="collapse" aria-current="page">
                <i className="bi bi-grid" ></i>
            <span>Bon de Commande</span>

            <ArrowDownwardIcon className="icon" />
              </a>
          </li>
          <ul class="nav collapse ms-3" id="submenu3" data-bs-parent="#parentM">
                           
                            <Link to="/BonLivraison" style={{ textDecoration: "none" }}>
                              <li class="nav collapse ms-3">
                                <ReorderIcon className="icon" />
                                <span>Bon de Livraison </span>
                              </li>
                            </Link>
                            
          </ul>
          </Link>
          </ul>
          <p className="title">SERVICE</p>
          <Link to="/calendier" style={{ textDecoration: "none" }}>
          <li>
            <CalendarToday className="icon" />
            <span>Calendrier</span>
          </li>
          </Link>
          <Link to="" style={{ textDecoration: "none" }}>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <a href="#submenu4" class="nav-link " data-bs-toggle="collapse" aria-current="page">
                <i className="bi bi-grid" ></i>
            <span>Paramètre</span>

            <ArrowDownwardIcon className="icon" />
              </a>
          </li>
          <ul class="nav collapse ms-3" id="submenu4" data-bs-parent="#parentM">
                           
                            <Link to="/parametres"   style={{ textDecoration: "none" }}>
                              <li class="nav collapse ms-3">
                                <DescriptionIcon className="icon" />
                                <span>Facture </span>
                              </li>
                            </Link>
                            <Link to="/parametreutilisateur" style={{ textDecoration: "none" }}>
                              <li class="nav collapse ms-3">
                                <PersonOutlineIcon className="icon" />
                                <span>Utilisateur </span>
                              </li>
                            </Link>
                            
          </ul>
          </Link>
          <p className="title">USER</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
