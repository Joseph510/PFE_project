import "./detailcommande.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Table from "../../components/table/Table";
import CartComponent from "../../components/commandecarte/cart"

const CommandeDetails = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
       
        <div>
          <CartComponent/>
        </div>
        <Table/>
      </div>
    </div>
  )
}

export default CommandeDetails