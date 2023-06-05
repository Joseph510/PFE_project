import "./calendar.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Calendar from "../../components/agenda/calendrier2"

const CalendarList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Calendar/>
      </div>
    </div>
  )
}

export default CalendarList