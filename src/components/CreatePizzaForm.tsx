import {useState, MouseEvent, ChangeEvent} from "react";
import Order from "../models/Order";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

export default function CreatePizzaForm() {
   
    const [idOrder, setId] = useState (0);
    const [clientName, setClient] = useState ('');
    const [pizzaName, setPizza] = useState ('');
    const [size, setSize] = useState ('');
    var listIngredients ="";
    const [ingredients, setIngredients] = useState ([""]);
    const [ingredient, setIngredient] = useState ('');
    const [price, setPrice] = useState (0);
    const [soda, setSoda] = useState ('');
    const [ingredientsline, setIngredientsline] = useState ('');
    
    console.log("Id:" + idOrder);
    function handleIdChange(event: ChangeEvent<HTMLInputElement>) {
        const newValueForId = event.target.value;
        setId(0);
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
        if (ingredients.length <= 4) {
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
      //Generar en una sola linea todos los ingredientes (BD)
       for (let index = 0; index < ingredients.length; index++) {
          listIngredients += ingredients[index];
           
       }
       setIngredientsline(listIngredients);
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


    // Crea una nueva orden
    async function handleSave(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();  // con esto evitamos que el form haga postBack

        const orderToCreate = new Order(idOrder,clientName, size, pizzaName, ingredientsline, price, soda);

        await createOrder(orderToCreate);
        console.log("Order to create: ", orderToCreate);
        clearForm();
        window.alert("Order Created!");
    }

    async function createOrder(orderToCreate: Order) {
            await axios.post('http://localhost:3001/orders',orderToCreate, {
                headers: {
                    'Content-type': 'application/json'
                }
            });
    }

    function clearForm() {
        setId(0);
        setClient('');
        setPizza('');
        setSize('');
        setIngredients([""]);
        setIngredient('');
        setPrice(0);
        setSoda('');
    }

    return (
        // construccion de componente
        //Envia tamaño como nombre de pizza y nombre de pizza
        <form>
        <p>Create a new order</p>
        <input type="text" placeholder="Id" value = {idOrder} onChange = {handleIdChange}/>
        <br />
        <input type="text" placeholder="Cliente" value = {clientName} onChange = {handleClientNameChange}/>
        <br />

        <select name="" id="" className="combobox fuente-azul" onChange = {handlePizzaNameChange}>
                <option disabled>Seleciona el nombre</option>
                <option value="Original">Original</option>
                <option value="Italian">Italian</option>
                <option value="Sartén">Sartén</option>
                <option value="Orilla rellena de queso">Orilla rellena de Queso</option>
                <option value="Crunchy">Crunchy</option>
              </select>
        
        <br/>

        <select name="" id="" className="combobox fuente-azul" onChange = {handleSizeChange}>
                <option disabled>Seleciona el tamaño</option>
                <option value="Mediana" >Mediana (30cm)</option>
                <option value="Grande">Grande (35cm)</option>
                <option value="Dominator">Dominator (45cm)</option>
        </select>
        <br />
        
        <input type="checkbox" placeholder="Ingredientes" value = {"Jalapeños "} onChange = {handleIngredientsChange}/>Jalapeños
        <input type="checkbox" placeholder="Ingredientes" value = {"Pimiento "} onChange = {handleIngredientsChange}/>Pimiento
        <input type="checkbox" placeholder="Ingredientes" value = {"Cebolla "} onChange = {handleIngredientsChange}/>Cebolla
        <input type="checkbox" placeholder="Ingredientes" value = {"Piña "} onChange = {handleIngredientsChange}/>Piña
        <input type="checkbox" placeholder="Ingredientes" value = {"Aceitunas "} onChange = {handleIngredientsChange}/>Aceitunas
        <input type="checkbox" placeholder="Ingredientes" value = {"Champiñones "} onChange = {handleIngredientsChange}/>Champiñones
        <br />
        <input type="checkbox" placeholder="Ingredientes" value = {"Pepperoni "} onChange = {handleIngredientsChange}/>Pepperoni
        <input type="checkbox" placeholder="Ingredientes" value = {"Jamón "} onChange = {handleIngredientsChange}/>Jamón
        <input type="checkbox" placeholder="Ingredientes" value = {"Chorizo "} onChange = {handleIngredientsChange}/>Chorizo
        <input type="checkbox" placeholder="Ingredientes" value = {"Salami "} onChange = {handleIngredientsChange}/>Salami
        <input type="checkbox" placeholder="Ingredientes" value = {"Carne molida "} onChange = {handleIngredientsChange}/>Carne molida
        <input type="checkbox" placeholder="Ingredientes" value = {"Tocino "} onChange = {handleIngredientsChange}/>Tocino
        <br />
        <input type="checkbox" placeholder="Ingredientes" value = {"Salsa habanero "} onChange = {handleIngredientsChange}/>Salsa habanero
        <input type="checkbox" placeholder="Ingredientes" value = {"Queso parmesano "} onChange = {handleIngredientsChange}/>Queso parmesano
        <input type="checkbox" placeholder="Ingredientes" value = {"Queso crema "} onChange = {handleIngredientsChange}/>Queso crema
        <input type="checkbox" placeholder="Ingredientes" value = {"Queso cheddar "} onChange = {handleIngredientsChange}/>Queso cheddar
        <br />
        <input type="number" placeholder="Precio" value = {price} onChange = {handlePriceChange}/>
        <br />

        <select name="" id="" className="fuente-azul" onChange = {handleSodaChange}> {/*ComboBox refesco extra*/}
                <option disabled>Seleciona la bebida</option>
                <option value="Original">Original</option>
                <option value="Italian">Italian</option>
                <option value="Sartén">Sartén</option>
                <option value="Orilla rellena de queso">Orilla rellena de Queso</option>
                <option value="Crunchy">Crunchy</option>
              </select>
        <br />
        <button onClick={handleSave}>Registrar</button>
        </form>
    );

/*      
        <input type="radio" name="Tamaño" placeholder="Tamaño" value = {"Pequeño"} onChange = {handleSizeChange}/> Pequeño
        <input type="radio" name="Tamaño" placeholder="Tamaño" value = {"Mediano"} onChange = {handleSizeChange}/>Mediano
        <input type="radio" name="Tamaño" placeholder="Tamaño" value = {"Grande"} onChange = {handleSizeChange}/>Grande

        <input type="text" placeholder="Soda" value = {soda} onChange = {handleSodaChange}/>
*/
}

    