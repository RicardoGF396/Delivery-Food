import '../styles/style_form.css'

export default function CreatePersonForm() {

  return (

    <div className="margen-20 main_container">

      <table> {/*Título*/}
        <tr>
          <td className="linea"><h1 className="fuente-azul">Registrar orden</h1></td>
          <td className="linea"><div className="divider fuente-naranja" /></td>
        </tr>
      </table>

      <div className="container_form"> {/*Recuadro formulario*/}

        <form > {/*Formulario*/}
          <table className="formulario">
            <tr>
              <td align="right"><h2 className="fuente-azul">Nombre de pizza</h2></td> {/*ComboBox nombre*/}
              <td ><select name="" id="" className="combobox fuente-azul">
                <option disabled selected >Seleciona el nombre</option>
                <option value="" >Mediana (30cm)</option>
                <option value="">Grande (35cm)</option>
                <option value="">Dominator (45cm)</option>
              </select></td>
            </tr>
            <tr>
              <td align="right"><h2 className="fuente-azul">Tamaño de pizza</h2></td> {/*ComboBox tamaño*/}
              <td><select name="" id="" className="combobox fuente-azul">
                <option disabled selected>Seleciona el tamaño</option>
                <option value="">Original</option>
                <option value="">Italian</option>
                <option value="">Sartén</option>
                <option value="">Orilla rellena de Queso</option>
                <option value="">Crunchy</option>
              </select></td>
            </tr>
            <tr>
              <td align="right"><h2 className="fuente-azul">Ingredientes</h2></td> {/*Ingredientes*/}
              <td><hr className="linea-subtitulo" /></td>
            </tr>

            <tr>
              <td align="right">
                <h2 className="fuente-naranja">Vegetales</h2> {/*Ingredientes vegetales*/}
              </td>
              <td>
                <table>
                  <tr>
                    <td>
                      <ul>

                        <li>
                          <label>
                            <input type={"checkbox"} />
                            <div className="icon-box sombra">
                              <p className="fa" aria-hidden="true">Jalapeños</p>
                            </div>
                          </label>
                        </li>

                        <li>
                          <label>
                            <input type={"checkbox"} />
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
                            <input type={"checkbox"} />
                            <div className="icon-box sombra">
                              <p className="fa " aria-hidden="true">Cebolla</p>
                            </div>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type={"checkbox"} />
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
                            <input type={"checkbox"} />
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
                            <input type={"checkbox"} />
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
                <h2 className="fuente-naranja">Carnes</h2> {/*Ingredientes carnes*/}
              </td>
              <td>
                <table>
                  <tr>
                    <td>
                      <ul>
                        <li>
                          <label>
                            <input type={"checkbox"} />
                            <div className="icon-box sombra">
                              <p className="fa" aria-hidden="true">Pepperoni</p>
                            </div>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type={"checkbox"} />
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
                            <input type={"checkbox"} />
                            <div className="icon-box sombra">
                              <p className="fa" aria-hidden="true">Chorizo</p>
                            </div>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type={"checkbox"} />
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
                            <input type={"checkbox"} />
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
                            <input type={"checkbox"} />
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
                <h2 className="fuente-naranja">Vegetales</h2> {/*Ingredientes otros*/}
              </td>

              <td>
                <table>
                  <tr>
                    <td>
                      <ul>
                        <li>
                          <label>
                            <input type={"checkbox"} />
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
                            <input type={"checkbox"} />
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
                            <input type={"checkbox"} />
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
                            <input type={"checkbox"} />
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
              <td align="right"><h2 className="fuente-azul">Bebida extra</h2></td>
              <td><select name="" id="" className="fuente-azul"> {/*ComboBox refesco extra*/}
                <option disabled selected>Seleciona la bebida</option>
                <option value="">Original</option>
                <option value="">Italian</option>
                <option value="">Sartén</option>
                <option value="">Orilla rellena de Queso</option>
                <option value="">Crunchy</option>
              </select></td>
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
                <button className="btn-registro">Registrar</button>
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