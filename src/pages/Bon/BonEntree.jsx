import "./Bon.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable7 from "../../components/datatable7/datatable7"

const BonEntree = () => {
    return (
      <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
          <Datatable7/>
        </div>
      </div>
    )
  }
  
  export default BonEntree;