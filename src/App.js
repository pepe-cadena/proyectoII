import './App.css';
import Historia from './componentes/Historia';

function App() {
  return (
    <div className="App">
      <h1>Proyecto II. Actividades y modificaciones finalizadas</h1>
      <div className='contenedor-sprint'>
        <div>
          <p className='done'>Done!</p>
        </div>
        <div className='fila'>
        <Historia
          documentacion='documentación'
          numero='SCW 1'
          contenido='1.1 Recopilación de información de abogados (reseña curricular y fotos)'
        />
        <Historia
          documentacion='documentación'
          numero='SCW 1'
          contenido='1.2 Diseñar un catálogo de los Abogados (reseña curricular, foto y especialidad)'
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
          done='Done!'
          diseno='diseño'
          numero='SCW 1'
          contenido='1.4 Maquetar el diseño del sitio web.'
        />
        <Historia
          done='Done!'
          diseno='diseño'
          desarrollo='desarrollo'
          numero='SCW 2'
          contenido='2.1 Diseñar un formulario de registro de clientes'
        />
        <Historia
          desarrollo='desarrollo'
          numero='SCW 2'
          contenido='2.2 Programar formulario de registro en HTML'
        />
        </div>
        <div className='fila'>
        <Historia
          diseno='diseño'
          desarrollo='desarrollo'
          numero='SCW 2'
          contenido='2.3 Diseñar la interfaz de formulario de registro en CSS'
        />
        <Historia
          documentacion='documentación'
          numero='SCW 2'
          contenido='2.4 Investigar y organizar la información que se requiera para la Base de Datos'
        />
        <Historia
          done='Done!'
          desarrollo='desarrollo'
          numero='SCW 2'
          contenido='2.5 Programar la Base de Datos'
        />
        </div>
        <div className='fila'>
        <Historia
          desarrollo='desarrollo'
          diseno='diseño'
          numero='SCW 3'
          contenido='3.1 Integrar calendario Google al sitio web'
        />
        <Historia
          desarrollo='desarrollo'
          diseno='diseño'
          numero='SCW 3'
          contenido='3.2 Crear botón calendario al sitio web'
        />
        <Historia
          doing='Doing'
          desarrollo='desarrollo'
          numero='SCW 3'
          contenido='3.3 Integrar a HTML codificación JAVASCRIPT'
        />
        </div>
        <div className='fila'>
        <Historia
          doing='Doing'
          desarrollo='desarrollo'
          testing='testing'
          numero='SCW 3'
          contenido='3.4 Pruebas frontend-backend'
        />
          <Historia
          diseno='diseño'
          desarrollo='desarrollo'
          numero='SCW 4'
          contenido='4.1 Diseñar sistema de pago'
        />
        <Historia
          desarrollo='desarrollo'
          numero='SCW 4'
          contenido='4.2 Programación backend del sistema de pago de la cita agendada de los clientes'
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
          todo='To Do'
          desarrollo='desarrollo'
          documentacion='documentación'
          numero='SCW 5'
          contenido='5.1 Investigar cómo automatizar correos electrónicos de confirmación'
        />
        <Historia
          todo='To Do'
          desarrollo='desarrollo'
          numero='SCW 5'
          contenido='5.2 Diseñar correo electrónico transaccional'
        />
        </div>
        <div className='fila'>
        <Historia
          desarrollo='desarrollo'
          numero='SCW 5'
          contenido='5.3 Configurar correo electrónico transaccional y activarlo'
        />
        <Historia
          desarrollo='desarrollo'
          testing='testing'
          numero='SCW 5'
          contenido='5.4 Pruebas frontend-backend'
        />
        <Historia
          desarrollo='desarrollo'
          numero='SCW 5'
          contenido='5.5 Alojamiento del proyecto en hosting'
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
        />
        </div>
        <div className='fila'>
        <Historia
          documentacion='documentación'
          numero='SCW-M 1'
          contenido='1.1 Analizar proyecto y programar cambios o modificaciones'
        />
        <Historia
          desarrollo='desarrollo'
          numero='SCW-M 1'
          contenido='1.2 Desarrollar y ampliar las características del sistema de pagos'
        />
        <Historia
          desarrollo='desarrollo'
          numero='SCW-M 2'
          contenido='2.1 Crear sistema de facturación con datos precisos para el cliente '
        />
        </div>
        <div className='fila'>
        <Historia
          documentacion='documentación'
          numero='SCW-M 3'
          contenido='3.1 Investigar la normatividad vigente para la implementación de facturación online según el SAT'
        />
        <Historia
          documentacion='documentación'
          numero='SCW-M 3'
          contenido='3.2 Investigar la normatividad vigente para el uso y privacidad de datos personales'
        />
        <Historia
          desarrollo='desarrollo'
          numero='SCW-M 4'
          contenido='4.1 Pruebas finales'
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
