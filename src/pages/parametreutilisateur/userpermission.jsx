import "./userpermission.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AllPermission from "../../components/settings/allpermission"

const Parametresuser = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <AllPermission/>
      </div>
    </div>
  )
}

export default Parametresuser