import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import axios from "axios";
import { useState, useEffect } from "react";

const Widget = ({ type }) => {
  const [fin, setFin] = useState(0);
  const [fin1, setFin1] = useState(0);
  const [fin2, setFin2] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (type === "produit") {
          const res = await axios.get("http://localhost:4000/Produit/cartprod");
          setFin(res.data);
        } else if (type === "commande") {
          const res = await axios.get(
            "http://localhost:4000/commande/cartcomnd"
          );
          setFin1(res.data);
        } else if (type === "client") {
          const res = await axios.get(
            "http://localhost:4000/client/cartclient"
          );
          setFin2(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [type]);

  let data, icon;

  switch (type) {
    case "produit":
      data = {
        title: "Produits",
        isMoney: false,
      };
      icon = (
        <PersonOutlinedIcon
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
      );
      break;
    case "commande":
      data = {
        title: "Commandes",
        isMoney: false,
      };
      icon = (
        <ShoppingCartOutlinedIcon
          className="icon"
          style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
          }}
        />
      );
      break;
    case "client":
      data = {
        title: "Clients",
        isMoney: true,
      };
      icon = (
        <PersonOutlinedIcon
          className="icon"
          style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
        />
      );
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {type === "produit" ? fin : type === "commande" ? fin1 : fin2}
        </span>
      </div>
      <div className="right">
        <div className="percentage positive"></div>
        {icon}
      </div>
    </div>
  );
};

export default Widget;
