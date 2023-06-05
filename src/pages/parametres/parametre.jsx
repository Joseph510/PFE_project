import "./parametre.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Permissions from "../../components/settings/Permissions"

const Parametres = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Permissions/>
      </div>
    </div>
  )
}

export default Parametres