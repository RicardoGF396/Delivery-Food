import notification_img from "../assets/notification.png";
import profile_img from "../assets/profile_picture.png";
import drop_img from "../assets/down_arrow.svg";
import up_img from "../assets/up_arrow.svg";
import pizza_img from "../assets/pizza_img.png"
import cancel from "../assets/cancel_img.png"

import "../styles/style_sidebar.css";

export default function mostrarOrdenes() {
  return (
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

      <div className="container_cards">

        <div className="card">
          
          <div className="pizza_description">
          <div className="img_pizza"> <img src={pizza_img} alt="" /></div>
            
            <div className="pizza_info">               
            <p className="id_pizza">#0130</p>
            <p className="name_pizza">Original</p>
            <p className="clientName_pizza">Ricardo González Flores</p>
            <p className="ingredients_pizza">Pollo, peperoni, anchoas, jamón, salami</p>
            <p className="soda"> <b>Bebida: </b>  
              <span className="soda_name">Coca-Cola</span>
            </p>

                </div>
          </div>

          <div className="orange_section">
            <div className="btn_delete">
               <a href="#"> <img src={cancel} alt="" className="cancel_img" /></a>
                </div>
            <div className="price"> $175.50</div>
          </div>
        </div>

        <div className="card">
          
          <div className="pizza_description">
          <div className="img_pizza"> <img src={pizza_img} alt="" /></div>
            
            <div className="pizza_info">               
            <p className="id_pizza">#0130</p>
            <p className="name_pizza">Original</p>
            <p className="clientName_pizza">Ricardo González Flores</p>
            <p className="ingredients_pizza">Pollo, peperoni, anchoas, jamón, salami</p>
            <p className="soda"> <b>Bebida: </b>  
              <span className="soda_name">Coca-Cola</span>
            </p>

                </div>
          </div>

          <div className="orange_section">
            <div className="btn_delete">
               <a href="#"> <img src={cancel} alt="" className="cancel_img" /></a>
                </div>
            <div className="price"> $175.50</div>
          </div>
        </div>

        <div className="card">
          
          <div className="pizza_description">
          <div className="img_pizza"> <img src={pizza_img} alt="" /></div>
            
            <div className="pizza_info">               
            <p className="id_pizza">#0130</p>
            <p className="name_pizza">Original</p>
            <p className="clientName_pizza">Ricardo González Flores</p>
            <p className="ingredients_pizza">Pollo, peperoni, anchoas, jamón, salami</p>
            <p className="soda"> <b>Bebida: </b>  
              <span className="soda_name">Coca-Cola</span>
            </p>

                </div>
          </div>

          <div className="orange_section">
            <div className="btn_delete">
               <a href="#"> <img src={cancel} alt="" className="cancel_img" /></a>
                </div>
            <div className="price"> $175.50</div>
          </div>
        </div>

        <div className="card">
          
          <div className="pizza_description">
          <div className="img_pizza"> <img src={pizza_img} alt="" /></div>
            
            <div className="pizza_info">               
            <p className="id_pizza">#0130</p>
            <p className="name_pizza">Original</p>
            <p className="clientName_pizza">Ricardo González Flores</p>
            <p className="ingredients_pizza">Pollo, peperoni, anchoas, jamón, salami</p>
            <p className="soda"> <b>Bebida: </b>  
              <span className="soda_name">Coca-Cola</span>
            </p>

                </div>
          </div>

          <div className="orange_section">
            <div className="btn_delete">
               <a href="#"> <img src={cancel} alt="" className="cancel_img" /></a>
                </div>
            <div className="price"> $175.50</div>
          </div>
        </div>

        <div className="card">
          
          <div className="pizza_description">
          <div className="img_pizza"> <img src={pizza_img} alt="" /></div>
            
            <div className="pizza_info">               
            <p className="id_pizza">#0130</p>
            <p className="name_pizza">Original</p>
            <p className="clientName_pizza">Ricardo González Flores</p>
            <p className="ingredients_pizza">Pollo, peperoni, anchoas, jamón, salami</p>
            <p className="soda"> <b>Bebida: </b>  
              <span className="soda_name">Coca-Cola</span>
            </p>

                </div>
          </div>

          <div className="orange_section">
            <div className="btn_delete">
               <a href="#"> <img src={cancel} alt="" className="cancel_img" /></a>
                </div>
            <div className="price"> $175.50</div>
          </div>
        </div>

        <div className="card">
          
          <div className="pizza_description">
          <div className="img_pizza"> <img src={pizza_img} alt="" /></div>
            
            <div className="pizza_info">               
            <p className="id_pizza">#0130</p>
            <p className="name_pizza">Original</p>
            <p className="clientName_pizza">Ricardo González Flores</p>
            <p className="ingredients_pizza">Pollo, peperoni, anchoas, jamón, salami</p>
            <p className="soda"> <b>Bebida: </b>  
              <span className="soda_name">Coca-Cola</span>
            </p>

                </div>
          </div>

          <div className="orange_section">
            <div className="btn_delete">
               <a href="#"> <img src={cancel} alt="" className="cancel_img" /></a>
                </div>
            <div className="price"> $175.50</div>
          </div>
        </div>

        <div className="card">
          
          <div className="pizza_description">
          <div className="img_pizza"> <img src={pizza_img} alt="" /></div>
            
            <div className="pizza_info">               
            <p className="id_pizza">#0130</p>
            <p className="name_pizza">Original</p>
            <p className="clientName_pizza">Ricardo González Flores</p>
            <p className="ingredients_pizza">Pollo, peperoni, anchoas, jamón, salami</p>
            <p className="soda"> <b>Bebida: </b>  
              <span className="soda_name">Coca-Cola</span>
            </p>

                </div>
          </div>

          <div className="orange_section">
            <div className="btn_delete">
               <a href="#"> <img src={cancel} alt="" className="cancel_img" /></a>
                </div>
            <div className="price"> $175.50</div>
          </div>
        </div>

        <div className="card">
          
          <div className="pizza_description">
          <div className="img_pizza"> <img src={pizza_img} alt="" /></div>
            
            <div className="pizza_info">               
            <p className="id_pizza">#0130</p>
            <p className="name_pizza">Original</p>
            <p className="clientName_pizza">Ricardo González Flores</p>
            <p className="ingredients_pizza">Pollo, peperoni, anchoas, jamón, salami</p>
            <p className="soda"> <b>Bebida: </b>  
              <span className="soda_name">Coca-Cola</span>
            </p>

                </div>
          </div>

          <div className="orange_section">
            <div className="btn_delete">
               <a href="#"> <img src={cancel} alt="" className="cancel_img" /></a>
                </div>
            <div className="price"> $175.50</div>
          </div>
        </div>

        <div className="card">
          
          <div className="pizza_description">
          <div className="img_pizza"> <img src={pizza_img} alt="" /></div>
            
            <div className="pizza_info">               
            <p className="id_pizza">#0130</p>
            <p className="name_pizza">Original</p>
            <p className="clientName_pizza">Ricardo González Flores</p>
            <p className="ingredients_pizza">Pollo, peperoni, anchoas, jamón, salami</p>
            <p className="soda"> <b>Bebida: </b>  
              <span className="soda_name">Coca-Cola</span>
            </p>

                </div>
          </div>

          <div className="orange_section">
            <div className="btn_delete">
               <a href="#"> <img src={cancel} alt="" className="cancel_img" /></a>
                </div>
            <div className="price"> $175.50</div>
          </div>
        </div>

        <div className="card">
          
          <div className="pizza_description">
          <div className="img_pizza"> <img src={pizza_img} alt="" /></div>
            
            <div className="pizza_info">               
            <p className="id_pizza">#0130</p>
            <p className="name_pizza">Original</p>
            <p className="clientName_pizza">Ricardo González Flores</p>
            <p className="ingredients_pizza">Pollo, peperoni, anchoas, jamón, salami</p>
            <p className="soda"> <b>Bebida: </b>  
              <span className="soda_name">Coca-Cola</span>
            </p>

                </div>
          </div>

          <div className="orange_section">
            <div className="btn_delete">
               <a href="#"> <img src={cancel} alt="" className="cancel_img" /></a>
                </div>
            <div className="price"> $175.50</div>
          </div>
        </div>

        <div className="card">
          
          <div className="pizza_description">
          <div className="img_pizza"> <img src={pizza_img} alt="" /></div>
            
            <div className="pizza_info">               
            <p className="id_pizza">#0130</p>
            <p className="name_pizza">Original</p>
            <p className="clientName_pizza">Ricardo González Flores</p>
            <p className="ingredients_pizza">Pollo, peperoni, anchoas, jamón, salami</p>
            <p className="soda"> <b>Bebida: </b>  
              <span className="soda_name">Coca-Cola</span>
            </p>

                </div>
          </div>

          <div className="orange_section">
            <div className="btn_delete">
               <a href="#"> <img src={cancel} alt="" className="cancel_img" /></a>
                </div>
            <div className="price"> $175.50</div>
          </div>
        </div>

        <div className="card">
          
          <div className="pizza_description">
          <div className="img_pizza"> <img src={pizza_img} alt="" /></div>
            
            <div className="pizza_info">               
            <p className="id_pizza">#0130</p>
            <p className="name_pizza">Original</p>
            <p className="clientName_pizza">Ricardo González Flores</p>
            <p className="ingredients_pizza">Pollo, peperoni, anchoas, jamón, salami</p>
            <p className="soda"> <b>Bebida: </b>  
              <span className="soda_name">Coca-Cola</span>
            </p>

                </div>
          </div>

          <div className="orange_section">
            <div className="btn_delete">
               <a href="#"> <img src={cancel} alt="" className="cancel_img" /></a>
                </div>
            <div className="price"> $175.50</div>
          </div>
        </div>

        

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
