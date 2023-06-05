
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Profile from "../../components/profilec/profilec"

const ProfileList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Profile/>
      </div>
    </div>
  )
}

export default ProfileList;