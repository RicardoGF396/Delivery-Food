import '../styles/style_form.css'
import {useState, MouseEvent, ChangeEvent, useEffect} from "react";
import Order from "../models/Order";
import axios from "axios";
import MostrarOrdenes from './MostrarOrdenes';
import React from 'react';
import Swal from "sweetalert2"

/*class Actualizar extends React.Component {
  onTrigger = (event: event) => {        
    this.props.parentCallback(event.target.myname.value);        
    event.preventDefault();    
  }
}*/

export default function CreatePizzaForm(props: any) {
  //INICIO INSERTAR
    const [idOrder, setId] = useState ('');
    const [clientName, setClient] = useState ('');
    const [pizzaName, setPizza] = useState ('');
    const [size, setSize] = useState ('');
    const [ingredients, setIngredients] = useState ([""]);
    const [ingredient, setIngredient] = useState ('');
    const [price, setPrice] = useState (0);
    const [soda, setSoda] = useState ('');
    
    console.log("Id:" + idOrder);
    function handleIdChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForId = event.target.value;
        setId(newValueForId);
    }

    console.log("Cliente:" + clientName);
    function handleClientNameChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForClientName = event.target.value;
        setClient(newValueForClientName);
    }

    console.log("Nombre de pizza:" + pizzaName);
    function handlePizzaNameChange(event: ChangeEvent<HTMLSelectElement>) {
        const newValueForPizzaName = event.target.value;
        setPizza(newValueForPizzaName);
    }

    console.log("Tamaño:" + size);
    function handleSizeChange(event: ChangeEvent<HTMLSelectElement>) {
        const newValueForSize = event.target.value;
        setSize(newValueForSize);
    }

    console.log("Ingrediente:" + ingredient);
    console.log("Ingredientes:" + ingredients);
    function handleIngredientsChange(event: ChangeEvent<HTMLInputElement>) {
        //aux  :String [] 
        const newValueForIngredients =  event.target.value;
        setIngredient(newValueForIngredients);
        if (event.target.checked === true) {
        if (ingredients.length <= 5) {
            // Agrega un elemento al arreglo si este no se encuentra ya
                if (!ingredients.includes(event.target.value)) {
                    ingredients.push(event.target.value);
                }
        } else {

        } 
    } else if (event.target.checked === false) {
        // Elimina el elemento del arreglo que tenga el mismo valor
        let pos =ingredients.indexOf(event.target.value);
            ingredients.splice(pos, 1);
    }
    }

    console.log("Precio:" + price);
    function handlePriceChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForPrice = event.target.value;
        setPrice(parseInt(newValueForPrice));
    }

    console.log("Soda:" + soda);
    function handleSodaChange(event: ChangeEvent<HTMLSelectElement>) {
        const newValueForSoda = event.target.value;
        setSoda(newValueForSoda);
    }

    const modalCreado = () => { //Modal de orden creada
      Swal.fire({
        title:"Orden creada",
        confirmButtonColor: "#FEAD3B",
        icon: "success",
      });
    };

    // Crea una nueva orden
    async function handleSave(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();  // con esto evitamos que el form haga postBack
        
        const orderToCreate = new Order(idOrder, clientName, size, pizzaName, ingredients, price, soda);

        await createOrder(orderToCreate);
        console.log("Order to create: ", orderToCreate);
        clearForm();
        window.alert("Order Created!");
        // modalCreado();
        window.location.replace("http://localhost:3000");
    }

    async function createOrder(orderToCreate: Order) {
      await axios.post('http://localhost:3001/orders', orderToCreate, {
          headers: {
              'Content-type': 'application/json'
          }
      });
    }

    function clearForm() {
        setId('');
        setClient('');
        setPizza('');
        setSize('');
        setIngredients([""]);
        setIngredient('');
        setPrice(0);
        setSoda('');
    }

    // FIN INSERTAR

  return (

    <div className="margen-20 main_container">

      <table> {/*Título*/}
        <tr>
          <td className="linea"><p className="fuente-azul size-16">Registrar orden</p></td>
          <td className="linea"><div className="divider linea-titulo fuente-naranja" /></td>
        </tr>
      </table>

      <div className="container_form"> {/*Recuadro formulario*/}

        <form > {/*Formulario*/}
          <table className="formulario">
            <tr>
              <td align="right"><h2 className="fuente-azul size-14">Nombre de pizza</h2></td> {/*ComboBox nombre*/}
              <td ><select name="" id="" className="combobox fuente-azul" onChange = {handlePizzaNameChange}>
                <option disabled>Seleciona el nombre</option>
                <option value="Original">Original</option>
                <option value="Italian">Italian</option>
                <option value="Sartén">Sartén</option>
                <option value="Orilla rellena de queso">Orilla rellena de Queso</option>
                <option value="Crunchy">Crunchy</option>
              </select></td>
            </tr>
            <tr>
              <td align="right"><h2 className="fuente-azul size-14">Tamaño de pizza</h2></td> {/*ComboBox tamaño*/}
              <td><select name="" id="" className="combobox fuente-azul" onChange = {handleSizeChange}>
                <option disabled>Seleciona el tamaño</option>
                <option value="Mediana" >Mediana (30cm)</option>
                <option value="Grande">Grande (35cm)</option>
                <option value="Dominator">Dominator (45cm)</option>
        </select></td>
            </tr>
            <tr>
              <td align="right"><h2 className="fuente-azul size-14">Ingredientes</h2></td> {/*Ingredientes*/}
              <td><hr className="linea-subtitulo" /></td>
            </tr>
            <div></div>
            <tr>
              <td align="right">
                <h2 className="fuente-naranja size-14">Vegetales</h2> {/*Ingredientes vegetales*/}
              </td>
              <td>
                <table>
                  <tr>
                    <td>
                      <ul>

                        <li>
                          <label>
                          <input type="checkbox" value = {"Jalapeños "} onChange = {handleIngredientsChange}/>
                            <div className="icon-box sombra">
                              <p className="fa" aria-hidden="true">Jalapeños</p>
                            </div>
                          </label>
                        </li>

                        <li>
                          <label>
                          <input type="checkbox" value = {"Pimiento "} onChange = {handleIngredientsChange}/>
                            <div className="icon-box sombra">
                              <p className="fa" aria-hidden="true">Pimiento</p>
                            </div>
                          </label>
                        </li>

                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <label>
                          <input type="checkbox" value = {"Cebolla "} onChange = {handleIngredientsChange}/>
                            <div className="icon-box sombra">
                              <p className="fa " aria-hidden="true">Cebolla</p>
                            </div>
                          </label>
                        </li>
                        <li>
                          <label>
                          <input type="checkbox" value = {"Piña "} onChange = {handleIngredientsChange}/>
                            <div className="icon-box sombra">
                              <p className="fa " aria-hidden="true">Piña</p>
                            </div>
                          </label>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <label>
                          <input type="checkbox" value = {"Aceitunas "} onChange = {handleIngredientsChange}/>
                            <div className="icon-box sombra">
                              <p className="fa " aria-hidden="true">Aceitunas</p>
                            </div>
                          </label>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <label>
                          <input type="checkbox" value = {"Champiñones "} onChange = {handleIngredientsChange}/>
                            <div className="icon-box sombra">
                              <p className="fa " aria-hidden="true">Champiñones</p>
                            </div>
                          </label>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td align="right">
                <h2 className="fuente-naranja size-14">Carnes</h2> {/*Ingredientes carnes*/}
              </td>
              <td>
                <table>
                  <tr>
                    <td>
                      <ul>
                        <li>
                          <label>
                          <input type="checkbox" placeholder="Ingredientes" value = {"Pepperoni "} onChange = {handleIngredientsChange}/>
                            <div className="icon-box sombra">
                              <p className="fa" aria-hidden="true">Pepperoni</p>
                            </div>
                          </label>
                        </li>
                        <li>
                          <label>
                          <input type="checkbox" value = {"Jamón "} onChange = {handleIngredientsChange}/>
                            <div className="icon-box sombra">
                              <p className="fa" aria-hidden="true">Jamón</p>
                            </div>
                          </label>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <label>
                          <input type="checkbox" value = {"Chorizo "} onChange = {handleIngredientsChange}/>
                            <div className="icon-box sombra">
                              <p className="fa" aria-hidden="true">Chorizo</p>
                            </div>
                          </label>
                        </li>
                        <li>
                          <label>
                          <input type="checkbox" value = {"Salami "} onChange = {handleIngredientsChange}/>
                            <div className="icon-box sombra">
                              <p className="fa" aria-hidden="true">Salami</p>
                            </div>
                          </label>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <label>
                          <input type="checkbox" value = {"Carne molida "} onChange = {handleIngredientsChange}/>
                            <div className="icon-box sombra">
                              <p className="fa" aria-hidden="true">Carne  Molida</p>
                            </div>
                          </label>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <label>
                          <input type="checkbox" value = {"Tocino "} onChange = {handleIngredientsChange}/>
                            <div className="icon-box sombra">
                              <p className="fa" aria-hidden="true">Tocino</p>
                            </div>
                          </label>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td align="right">
                <h2 className="fuente-naranja size-14">Otros</h2> {/*Ingredientes otros*/}
              </td>

              <td>
                <table>
                  <tr>
                    <td>
                      <ul>
                        <li>
                          <label>
                          <input type="checkbox" value = {"Salsa habanero "} onChange = {handleIngredientsChange}/>
                            <div className="icon-box sombra">
                              <p className="fa" aria-hidden="true">Salsa Habanero</p>
                            </div>
                          </label>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <label>
                          <input type="checkbox" placeholder="Ingredientes" value = {"Queso parmesano "} onChange = {handleIngredientsChange}/>
                            <div className="icon-box sombra">
                              <p className="fa" aria-hidden="true">Queso Parmesano</p>
                            </div>
                          </label>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <label>
                          <input type="checkbox" placeholder="Ingredientes" value = {"Queso crema "} onChange = {handleIngredientsChange}/>
                           <div className="icon-box sombra">
                              <p className="fa" aria-hidden="true">Queso Crema</p>
                            </div>
                          </label>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <label>
                          <input type="checkbox" placeholder="Ingredientes" value = {"Queso cheddar "} onChange = {handleIngredientsChange}/>
                            <div className="icon-box sombra">
                              <p className="fa" aria-hidden="true">Queso Cheddar</p>
                            </div>
                          </label>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td align="right"><h2 className="fuente-azul size-14">Bebida extra</h2></td>
              <td><select name="" id="" className="fuente-azul" onChange = {handleSodaChange}> {/*ComboBox refesco extra*/}
                <option disabled>Seleciona la bebida</option>
                <option value="Coca">Coca</option>
                <option value="Sprite">Sprite</option>
                <option value="Manzanita">Manzanita</option>
                <option value="Pepsi">Pepsi</option>
                <option value="Squirt">Squirt</option>
              </select></td>
            </tr>
            <tr>
              <td align="right"><h2 className="fuente-azul size-14">Nombre de cliente</h2></td> {/*Input nombre*/}
              <td ><input type="text" placeholder="Ingresa el nombre" value = {clientName} onChange = {handleClientNameChange}/></td>
            </tr>
            <tr>
              <td align="right"><h2 className="fuente-azul size-14">Id de pedido</h2></td> {/*Input nombre*/}
              <td ><input type="text" placeholder="Id" value = {idOrder} onChange = {handleIdChange}/></td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
                <hr className="linea-subtitulo" />
              </td>
            </tr>
          </table>
        </form>

        <div>
          <table className="recibo"> {/*Recibo*/}
            <tr>
              <td>
                <p className="fuente-azul fuente-20 margen-0">TOTAL</p>
              </td>
              <td align="center" rowSpan={2}>
                <button className="btn-registro" onClick={handleSave}>Registrar</button>
              </td>
            </tr>
            <tr>
              <td className='flex_section'>
                <p className="bold fuente-naranja fuente-20 margen-0">$</p><p className="bold fuente-azul fuente-30 margen-0">172.50</p>
              </td>
            </tr>
          </table>
        </div>

      </div>

    </div>

  );
}