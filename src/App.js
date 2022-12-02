import './App.css';
import Historia from './componentes/Historia';

function App() {
  return (
    <div className="App">
      <h1>Modificación Proyecto II</h1>
      <div className='contenedor-sprint'>
        <div>
          <p className='todo'>To Do</p>
          <p className='doing'>Doing</p>
          <p className='done'>Done!</p>
        </div>
        <div className='fila'>
        <Historia
          desarrollo='desarrollo'
          numero='SCW-M 2'
          contenido='2.1 Crear sistema de facturación con datos precisos para el cliente '
        />
        <Historia
          desarrollo='desarrollo'
          numero='SCW-M 1'
          contenido='1.2 Desarrollar y ampliar las características del sistema de pagos'
        />
        <Historia
          done='Done!'
          documentacion='documentación'
          numero='SCW-M 1'
          contenido='1.1 Analizar proyecto y programar cambios o modificaciones'
        />
        </div>
        <div className='fila'>
        <Historia
          documentacion='documentación'
          numero='SCW-M 3'
          contenido='3.1 Investigar la normatividad vigente para la implementación de facturación online según el SAT'
        />
        <Historia
        />
        <Historia
        />
        </div>
        <div className='fila'>
        <Historia
          documentacion='documentación'
          numero='SCW-M 3'
          contenido='3.2 Investigar la normatividad vigente para el uso y privacidad de datos personales'
        />
        <Historia
        />
        <Historia
        />
        </div>
        <div className='fila'>
        <Historia
          desarrollo='desarrollo'
          numero='SCW-M 4'
          contenido='4.1 Pruebas finales'
        />
        <Historia
        />
        <Historia
        />
        </div>
        <div className='fila'>
        <Historia
          documentacion='documentación'
          numero='SCW-M 4'
          contenido='4.2 Segunda reunión para revisión final de proyecto'
        />
          <Historia
        />
        <Historia
        />
        </div>
      </div>
    </div>
  );
}

export default App;
