import "./Bon.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable6 from "../../components/datatable6/datatable6"
const BonSortie = () => {
    return (
      <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
          <Datatable6/>
        </div>
      </div>
    )
  }
  
  export default BonSortie;