import './App.css';
import RegisterOrder from './components/RegisterOrder';
import MostrarOrdenes from './components/MostrarOrdenes';

function App() {
  return (
    <div className='body'>
      <div className="first_section">
      <RegisterOrder />
        </div>
      <div className="second_section">
      <MostrarOrdenes />      
        </div>
    </div>
  );
}

export default App;

/* <div>

      <MostrarOrdenes />
      
     </div>
 */