import Home from "./pages/home/Home";
import List from "./pages/list/List";
import List2 from "./pages/list/List2";
import List3 from "./pages/list/List3";
import List4 from "./pages/list/List4";
import List5 from "./pages/list/List5";
import List6 from "./pages/list/List6";
import List7 from "./pages/list/List7";
import List8 from "./pages/list/List8";
import Single from "./pages/single/Single";
import Single2 from "./pages/single/Single2";
import Single3 from "./pages/single/Single3";
import Single4 from "./pages/single/Single4";
import Single5 from "./pages/single/Single5";
import New from "./pages/new/New";
import New2 from "./pages/new/New2";
import New3 from "./pages/new/New3";
import New4 from "./pages/new/New4";
import New5 from "./pages/new/New5";
import New6 from "./pages/new/New6";
import New7 from "./pages/new/New7";
import New8 from "./pages/new/New8";
import BonCommande from "./pages/Bon/BonCommande";
import BonAffectation from "./pages/Bon/BonAffectation";
import BonEntree from "./pages/Bon/BonEntree";
import BonSortie from "./pages/Bon/BonSortie";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import CommandeDetails from "./pages/detailcommande/detailcommande";
import CalendarList from "./pages/calendrier/calendar";
import Parametres from "./pages/parametres/parametre";
import ProfileList from "./pages/profile/profile";
import AllPermission from "./components/settings/allpermission";
import Parametresuser from "./pages/parametreutilisateur/userpermission";
import Edit1 from "./pages/Edit/edit1";
import List9 from "./pages/list/List9";
import New9 from "./pages/new/New9";
import Edit2 from "./pages/Edit/editfournisseur";
import Edit3 from "./pages/Edit/editsociete";
import Edit4 from "./pages/Edit/editcommande";
import Edit5 from "./pages/Edit/editsocieteclient";
import Edit6 from "./pages/Edit/edituser";
import Edit7 from "./pages/Edit/editbonlivraison";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
        <Route>  
        <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" >
              
            <Route path="users">
            <Route index element={<List />} />
             <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New  title="Add New User" />}
              />
              
            </Route>
            <Route path="products">
              <Route index element={<List2 />} />
              <Route path="/products/:id" element={<Single2 />} />
              <Route
                path="new"
                element={<New2  title="Add New Product" />}
              />
              <Route
                path="edit"
                element={<Edit1/>}
              />
              </Route>
              
              <Route path="fournisseurs">
              <Route index element={<List3 />} />
              <Route path=":fournisseurID" element={<Single3 />} />
              <Route
                path="new3"
                element={<New3  title="Add New Fournisseur" />}
              />
              <Route
                path="edit"
                element={<Edit2/>}
              />
            </Route>
            <Route path="commande">
              <Route index element={<List6 />} />
              <Route
                path="new6"
                element={<New6  title="Add New Commande" />}
              />
              <Route
                path="edit"
                element={<Edit4/>}
              />
              </Route>
              <Route path="Client">
              <Route index element={<List7 />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new7"
                element={<New7  title="Add New Client" />}
              />
              <Route
                path="edit"
                element={<Edit6/>}
              />
              </Route>
            <Route path="BonCommande">
              <Route index element={<List4 />} />
              <Route path=":fournisseurID" element={<Single4 />} />
              <Route
                path="new4"
                element={<New4  title="Add New commande" />}
              />
            </Route>
            <Route path="BonLivraison">
              <Route index element={<List9 />} />
              <Route path=":BonLivraisonID" element={<Single4 />} />
              <Route
                path="new9"
                element={<New9  title="Add New livraison" />}
              />
              <Route
                path="edit"
                element={<Edit7/>}
              />
            </Route>


            <Route path="Societe">
              <Route index element={<List5 />} />
              <Route
                path="new5"
                element={<New5  title="Ajouter Nouvelle Societe" />}
              />
              <Route path="single" element={<Single5 />} />
              <Route
                path="edit"
                element={<Edit3/>}
              />
            </Route>
            <Route path="SocieteClient">
              <Route index element={<List8 />} />
              <Route
                path="new8"
                element={<New8  title="Ajouter Nouvelle SocieteClient" />}
              />
              <Route path="single" element={<Single4 />} />
              <Route
                path="edit"
                element={<Edit5/>}
              />
            </Route>

            <Route
                path="BonCommande"
                element={<BonCommande  title="Add New commande" />}
              />
              
              <Route
                path="BonAffectation"
                element={<BonAffectation  title="Add New commande" />}
              />
              <Route
                path="BonEntree"
                element={<BonEntree  title="Add New commande" />}
              />
              <Route path="BonLivraison">
              <Route index element={<List9 />} />
              <Route path=":fournisseurID" element={<Single4 />} />
              <Route
                path="new9"
                element={<New9  title="Add New livraison" />}
              />
            </Route>
             <Route path="/detailcommande" element={<CommandeDetails/>}/>
             <Route path='/signup' element={<SignUp />}/>
          </Route>
          </Route>
          <Route>
              <Route path="profile" element={<ProfileList/>}/>
              <Route path="/calendier" element={<CalendarList />} />
            <Route path="/parametres" element={<Parametres />} />
            <Route path="/parametreutilisateur" element={<Parametresuser/>} />
              </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
