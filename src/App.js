import './App.css';
import Historia from './componentes/Historia';

function App() {
  return (
    <div className="App">
      <h1>Sprint Planning</h1>
      <div className='contenedor-sprint'>
        <div>
          <p className='todo'>To Do</p>
          <p className='doing'>Doing</p>
          <p className='done'>Done!</p>
        </div>
        <div className='fila'>
          <Historia
          diseno='diseño'
          desarrollo='desarrollo'
          numero='SCW 4'
          contenido='4.1 Diseñar sistema de pago'
        />
        <Historia
          desarrollo='desarrollo'
          diseno='diseño'
          numero='SCW 3'
          contenido='3.1 Integrar calendario Google al sitio web'
        />
        <Historia
          documentacion='documentación'
          numero='SCW 1'
          contenido='1.1 Recopilación de información de abogados (reseña curricular y fotos)'
        />
        </div>
        <div className='fila'>
        <Historia
          desarrollo='desarrollo'
          numero='SCW 4'
          contenido='4.2 Programación backend del sistema de pago de la cita agendada de los clientes'
        />
        <Historia
          desarrollo='desarrollo'
          diseno='diseño'
          numero='SCW 3'
          contenido='3.2 Crear botón calendario al sitio web'
        />
        <Historia
          documentacion='documentación'
          numero='SCW 1'
          contenido='1.2 Diseñar un catálogo de los Abogados (reseña curricular, foto y especialidad)'
        />
        </div>
        <div className='fila'>
        <Historia
          todo='To Do'
          desarrollo='desarrollo'
          testing='testing'
          numero='SCW 4'
          contenido='4.3 Pruebas frontend-backend'
        />
        <Historia
          doing='Doing'
          desarrollo='desarrollo'
          numero='SCW 3'
          contenido='3.3 Integrar a HTML codificación JAVASCRIPT'
        />
        <Historia
          done='Done!'
          desarrollo='desarrollo'
          numero='SCW 1'
          contenido='1.3 Contratar Base de datos y hosting'
        />
        </div>
        <div className='fila'>
        <Historia
          todo='To Do'
          desarrollo='desarrollo'
          documentacion='documentación'
          numero='SCW 5'
          contenido='5.1 Investigar cómo automatizar correos electrónicos de confirmación'
        />
        <Historia
          doing='Doing'
          desarrollo='desarrollo'
          testing='testing'
          numero='SCW 3'
          contenido='3.4 Pruebas frontend-backend'
        />
        <Historia
          done='Done!'
          diseno='diseño'
          numero='SCW 1'
          contenido='1.4 Maquetar el diseño del sitio web.'
        />
        </div>
        <div className='fila'>
        <Historia
          todo='To Do'
          desarrollo='desarrollo'
          numero='SCW 5'
          contenido='5.2 Diseñar correo electrónico transaccional'
        />
        <Historia
        />
        <Historia
          done='Done!'
          diseno='diseño'
          desarrollo='desarrollo'
          numero='SCW 2'
          contenido='2.1 Diseñar un formulario de registro de clientes'
        />
        </div>
        <div className='fila'>
        <Historia
          desarrollo='desarrollo'
          numero='SCW 5'
          contenido='5.3 Configurar correo electrónico transaccional y activarlo'
        />
        <Historia
        />
        <Historia
          desarrollo='desarrollo'
          numero='SCW 2'
          contenido='2.2 Programar formulario de registro en HTML'
        />
        </div>
        <div className='fila'>
        <Historia
          desarrollo='desarrollo'
          testing='testing'
          numero='SCW 5'
          contenido='5.4 Pruebas frontend-backend'
        />
        <Historia
        />
        <Historia
          diseno='diseño'
          desarrollo='desarrollo'
          numero='SCW 2'
          contenido='2.3 Diseñar la interfaz de formulario de registro en CSS'
        />
        </div>
        <div className='fila'>
        <Historia
          desarrollo='desarrollo'
          numero='SCW 5'
          contenido='5.5 Alojamiento del proyecto en hosting'
        />
        <Historia
        />
        <Historia
          documentacion='documentación'
          numero='SCW 2'
          contenido='2.4 Investigar y organizar la información que se requiera para la Base de Datos'
        />
        </div>
        <div className='fila'>
        <Historia
          todo='To Do'
          testing='testing'
          numero='SCW 5'
          contenido='5.6 Pruebas hosting-servidor'
        />
        <Historia
        />
        <Historia
          done='Done!'
          desarrollo='desarrollo'
          numero='SCW 2'
          contenido='2.5 Programar la Base de Datos'
        />
        </div>
      </div>
    </div>
  );
}

export default App;
