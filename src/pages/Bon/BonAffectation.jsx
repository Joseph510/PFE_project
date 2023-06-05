import "./Bon.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable5 from "../../components/datatable5/datatable5"

const BonAffectation = () => {
    return (
      <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
          <Datatable5/>
        </div>
      </div>
    )
  }
  
  export default BonAffectation;