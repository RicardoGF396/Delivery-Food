import notification_img from "../assets/notification.png";
import profile_img from "../assets/profile_picture.png";
import drop_img from "../assets/down_arrow.svg";
import up_img from "../assets/up_arrow.svg";
import pizza_img from "../assets/pizza_img.png"
import cancel from "../assets/cancel_img.png"
import Order from "../models/Order"
import axios from "axios";
import CreatePizzaForm from "./RegisterOrder";
import "../styles/style_sidebar.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2"
//import { time } from "console";

export default function MostrarOrdenes() {
  const [ order, setOrder ] = useState<Order[]>([]);
  const [ loaded, setLoaded ] = useState<Boolean>(false);
  const [ deleted, setDeleted ] = useState<Boolean>(false);

  async function loadOrder() {
    const response = await axios.get("http://localhost:3001/orders");
    setOrder(
      response.data.map((o: Order ) => new Order(o.idOrder, o.clientName, o.pizzaName, o.size, o.ingredients, o.price, o.soda)
    
      )
      
    );
    setLoaded(true);
  }

  useEffect(() => {
    if(!loaded || deleted) {
      loadOrder();      
    }
    setDeleted(false);
  }, [ order, loaded, deleted ]);

  const modalEliminado = () => { //Modal de orden eliminada
    Swal.fire({
      title:"Orden eliminada",
      confirmButtonColor: "#FEAD3B",
      icon: "info",
      timer: 2000
    });
  };

  async function deleteOrder(idOrder:any) {
    await axios.delete(`http://localhost:3001/orders/${idOrder}`);

    // window.alert("Order Deleted");
    modalEliminado();
    
    setDeleted(true);
  }

  const renderOrder = () => order.map(o => (
    <div className="card">          
        <div className="pizza_description">
        <div className="img_pizza"> <img src={pizza_img} alt="" /></div>          
          <div className="pizza_info">               
            <p className="id_pizza">#{o.idOrder}</p>
            <p className="name_pizza">{o.pizzaName}</p>
            <p className="clientName_pizza">{o.clientName}</p>
            <p className="ingredients_pizza">{o.ingredients}</p>
            <p className="soda"> <b></b>  
              <span className="soda_name">{o.soda}</span>
            </p>
          </div>
        </div>

        <div className="orange_section">
          <div className="btn_delete">
            <img src={cancel} alt="" onClick={() => {deleteOrder(o.idOrder)}} className="cancel_img" />
              </div>
          <div className="price">${o.price}</div>
        </div>
      </div>
  ));
  
  return (
    <div>
      <CreatePizzaForm />    
      <div className="sidebar">
        
        <div className="description">
          <div className="notification">
            <a href="#">
              <img src={notification_img} alt="notification" />
            </a>
          </div>

          <div className="profile_description">
            <img src={profile_img} alt="" width={35} height={35} />

            <div className="text_profile">
              <h4>Lily Gómez Hernández</h4>
              <p>Trabajadora</p>
            </div>

            <img src={drop_img} alt="" className="drop_arrow" />
          </div>
        </div>

        <div className="title_order">
          <h2>Ordenes</h2>

          <div className="filter">
            <p>Más recientes</p>
            <a href="#">
              <img src={up_img} alt="" width={16} height={16} />
            </a>
          </div>
        </div>
        <div className="container_cards">{renderOrder()}</div>
        
      </div>
    </div>
  );
}

/* 
<div className="card">
        <div className="img_pizza"></div>

        <div className="pizza_description">
          <div className="id_pizza"></div>
          <div className="name_pizza"></div>
          <div className="clientName_pizza"></div>
          <div className="ingredients_pizza"></div>
          <div className="soda">
            {" "}
            <span className="soda_name"></span>
          </div>
        </div>

        <div className="orange_section">
          <div className="btn_delete"></div>
          <div className="price"> </div>
        </div>
      </div>

*/
