import './App.css';
import BarraNavegacion from './componentes/BarraNavegacion.js';
import Bienvenida from './componentes/Bienvenida.js';
import AcercaDe from './componentes/AcercaDe.js';
import Estudios from './componentes/Estudios.js';
import Experiencia from './componentes/Experiencia.js';
import Contacto from './componentes/Contacto.js';
import PiePagina from './componentes/PiePagina.js';


function App() {
  return (
    <div className="App">
      <BarraNavegacion />
      <Bienvenida />
      <AcercaDe/>
      <Estudios/>
      <Experiencia/>
      <Contacto/>
      <PiePagina/>
    </div>

  );
}

export default App;
