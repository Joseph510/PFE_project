import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { CheckBox } from "@mui/icons-material";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");


  const navigate = useNavigate();
  
  const handle = (e) => {
    e.preventDefault();
    {
      navigate('/parametreutilisateur')
    }
  const userData = {
     username: username,
     email: email,
     password: password,

  }
    axios.post("http://localhost:4000/api/auth/signup", userData,{   
         }).then((res) => {
        console.log(res.data);
        swal("Success", "L'utilisateur a été ajouté avec succès", "success");
        navigate('/parametreutilisateur');
      })
      .catch(() => {
        console.log("failed");
        swal("Error", "Une erreur s'est produite lors de l'ajout de l'utilisateur", "error");
      });
   }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
      <section class="container">
      <form action="#" class="form">
      <div class="column">
            
            <div>
            </div>
            <div class="input-box">
          <label>Nom</label>
          <input type="text"
                 placeholder="Nom " 
                  className="champs"value={username}
                   onChange={(event) => setusername(event.target.value)} required/>
        </div>
            </div>
            
            
        
        <div class="column">

        <div class="input-box">
          <label>Email</label>
          <input type="email"
                 placeholder="Email " 
                  className="champs"value={email}
                   onChange={(event) => setemail(event.target.value)} required/>        </div>
         <div class="input-box">
  <label>Mot de passe</label>
  <input
    type="password"
    placeholder="Mot de passe"
    className="champs"
    value={password}
    onChange={(event) => setpassword(event.target.value)}
  required/>
</div>
</div>

        
        <button onClick={handle}>Submit</button>
      </form>
    </section>
      </div>
      </div>
  );
};

export default New;
