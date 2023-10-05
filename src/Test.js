import React, { useState } from 'react';
// import video from './vid/HeroAL.mp4';
import './App.css';
import Navbar from './navlist';
import AL from './img/AL';
import IN from './img/instalaciones.png';
import {
  faLocationDot,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import ServiceCarousel from './ServiceCarousel';
import Fade from 'react-reveal/Slide';
import logo from './img/Artboard 1.png'
import {
  Avatar,
  Typography,
  Collapse,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  List,
  ListItem,
  ListItemPrefix,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,

} from "@material-tailwind/react";
import dr from './img/Dr 2.png'
import './styles/fonts.css'; // Importa el archivo de hoja de estilos de las fuentes personalizadas
import logofooter from './img/logo_footer.png'
import ReactPlayer from 'react-player';


function Test() {
  const [open, setOpen] = React.useState(false);
  const videoUrl = 'https://vimeo.com/869254219'
  const toggleOpen = () => setOpen((cur) => !cur);

  // funciones para abrir Dialogs
  const [openAbout, setOpenAbout] = React.useState(false);
  const [openTerms, setOpenTerms] = React.useState(false);
  const [openPolicy, setOpenPolicy] = React.useState(false);
  // Usamos las funciones de los Dialogs
  const handleOpenAbout = () => setOpenAbout(!openAbout);
  const handleOpenTerms = () => setOpenTerms(!openTerms);
  const handleOpenPolicy = () => setOpenPolicy(!openPolicy);

  return (
    <div>
      {/* section video */}
      <section className="w-full h-screen flex justify-center items-center border-black bg-[#210316]">
        <div className="w-screen h-screen">
          <ReactPlayer
            url={videoUrl}
            playing // AutoPlay
            muted // Muted
            loop // Loop
            controls // Controles
            width={'100%'}
            height={'100%'}
          />
          {/* <video
            autoPlay
            muted
            loop
            controls
            
            className="object-cover w-full h-screen"
          >
            <source src={video} type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
            
          </video> */}
        </div>
        {/* section navbar */}
        <Navbar />
      </section>


      {/* section logo */}
      <section id="section1" className='w-full h-[77vh] flex items-center border-black bg-[#211316]'>
        <div className="container mx-auto text-center">
          <div className="w-full mx-auto md:w-1/2">
            <Fade bottom delay={200} >
              <img className="w-full max-w-full" src={logo} alt="Logo" />
            </Fade>
          </div>
        </div>
      </section>

      {/* section nosotros */}
      <section id='#Nosotros' className="bg-[#AC463F] w-full p-8 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col items-start md:flex-row">
            <div className="md:w-4/5">
              <h1 className="text-3xl md:text-4xl lg:text-5xl mt-24 text-[#E7D8D2] font-normal font-raleway">SOBRE NOSOTROS</h1>
              <p className="mt-10 text-2xl font-medium text-justify text-white font-raleway">
              Encuentra al doctor Arturo López, médico cirujano y especialista en medicina estética, antiedad y antienvejecimiento en playas de Tijuana con la mejor alternativa para resaltar la naturaleza de cada paciente creando un balance entre salud bienestar y belleza. El Dr. Arturo López puede ayudar a todas las personas a preservar y resaltar una belleza que ya existe; solamente le hace falta ese pequeño empuje especializado a crear un balance completo entre salud bienestar y belleza

</p>
              <div class="text-white text-xl flex justify-end mt-24 font-semibold font-raleway">"Un cliente satisfecho, siempre será el mejor regalo para mí" </div>
              <div class="text-white text-l flex justify-end mt- font-light font-raleway mr-2">Dr. Arturo Lopez<br /></div>
            </div>
            <div className="mt-4 md:w-1/2 md:mt-0 md:ml-4">
              <img
                src={dr}
                alt="Avatar"
                className="w-full h-auto mt-4 mb-10 md:w-3/4 ml- md:ml-64 md:mt-0"
              />
            </div>

          </div>
        </div>
      </section>


      {/* section servicios  */}
      {/* <section id="section3" className="flex justify-center items-center min-h-[50vh] bg-[#bd7c5f] border-b-2 border-black overflow-x-auto">
        <div className="flex flex-col-reverse text-lg text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl lg:flex-row">
          <div className="flex flex-col items-center justify-center flex-1 w-full h-full text-center lg:mr-8">
            <h2 className="mt-4 mb-8 text-2xl text-white lg:text-4xl font-century">
              SERVICIOS QUE OFRECEMOS
            </h2>
            <ServiceCarousel />
          </div>
        </div>
      </section> */}

      {/* section agenda cita  */}
      {/* <section className="flex justify-center items-center min-h-[50vh] bg-[#EED5C9] border-b-2 border-black overflow-x-auto">
        <div className="flex flex-col text-lg text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl lg:flex-row">
          <div className='flex flex-col items-center justify-center flex-1 w-full h-full text-center lg:mr-16'>

            <Typography variant="h1" color="white" >
              AGENDA TU CITA
            </Typography>

            <p className="mt-2 text-white lg:mt-4 font-century">Por cualquiera de nuestros métodos de contacto</p>
            <div className="flex flex-col mt-4 lg:mt-8">
              <Card className="w-96">
                <List>
                  <ListItem>
                    <ListItemPrefix>
                      <FontAwesomeIcon icon={faFacebook} className='h-8' style={{ color: "#1962e1" }} />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Dr. Arturo López
                      </Typography>
                    </div>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <FontAwesomeIcon icon={faEnvelope} flip className='h-7' style={{ color: "#324b77" }} />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        ArturoLopez@gmail.com
                      </Typography>
                    </div>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <FontAwesomeIcon icon={faWhatsapp} className='h-8' style={{ color: "#33c016" }} />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        664-978-6543
                      </Typography>
                    </div>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <FontAwesomeIcon icon={faLocationDot} className='h-8' bounce style={{ color: "#fc1d1d" }} />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        Tijuana, Baja California
                      </Typography>
                    </div>
                  </ListItem>
                </List>
              </Card>
            </div>
          </div>
          <div className='flex items-center justify-center flex-1 w-full h-full mt-4 mb-4'>
            <div className="border-4 border-white shadow-lg">
              <img
                className="object-cover object-center w-full h-96"
                src={AL}
                alt="nature image"
              />
            </div>
          </div>

        </div>
      </section> */}


      {/* section instalaciones */}
      {/* <section className="bg-[#bd7c5f] border-b-2 border-black">
        <div className="container py-8 mx-auto">
          <h2 className="mb-4 text-2xl text-center text-white lg:text-4xl font-century">
            CONOCE NUESTRAS INSTALACIONES
          </h2>
          <div className='flex justify-center'>
            <Card className="flex items-center justify-center mt-12 w-96">
              <CardHeader color="blue-gray" className="relative mt-6 h-54">
                <img
                  src={IN}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Instalaciones
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to &quot;Naviglio&quot; where you can enjoy the main
                  night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button onClick={toggleOpen}>Mas informacion</Button>
              </CardFooter>
            </Card>
          </div>


          <Collapse open={open}>
            <Card className="my-4 mx-auto w-[40vh]">
              <CardBody>
                <Typography>
                  Aqui se mostrara mas informacion de las instalaciones.

                </Typography>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </section> */}

      {/* section footer */}
      <footer className="w-full p-8 bg-white">
        <div className="flex flex-row flex-wrap items-center justify-center text-center bg-white gap-y-6 gap-x-12 md:justify-between">
          <img src={logofooter} alt="Logo" className="w-12" />
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                color="blue-gray"
                className="font-normal transition-colors hover:text-[#AC463F] focus:text-[#AC463F]"
                onClick={handleOpenAbout}
              >
                Sobre Nosotros
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                color="blue-gray"
                onClick={handleOpenTerms}
                className="font-normal transition-colors hover:text-[#AC463F] focus:text-[#AC463F]"
              >
                Terminos y Servicio
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                color="blue-gray"
                onClick={handleOpenPolicy}
                className="font-normal transition-colors hover:text-[#AC463F] focus:text-[#AC463F]"
              >
                Política de Privacidad
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#Nosotros"
                color="blue-gray"
                className="font-normal transition-colors hover:text-[#AC463F] focus:text-[#AC463F]"
              >
                Contactanos
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="blue-gray" className="font-normal text-center">
          Todos los derechos reservados &copy; 2023, doctorarturolopez.com desarrollado por{' '}
          <a href="https://e-commetrics.com" target="_blank" className="text-[#AC463F] hover:text-[#AC463F]">
            e-commetrics.com
          </a>
        </Typography>
      </footer>
      {/* Modal de Sobre nosotros */}
      <Dialog open={openAbout} handler={handleOpenAbout}>
        <DialogHeader className='flex justify-center'>Sobre Nosotros</DialogHeader>
        <DialogBody divider className="h-[20rem] overflow-scroll">
          <Typography className="font-normal">
            <p className='font-bold'>
            Encuentra al Dr. Arturo López, Médico Cirujano y Especialista en Medicina Estética y Antienvejecimiento en Playas de Tijuana
            </p>
            
            Descubre la excelencia en medicina estética y antiedad con el Dr. Arturo López, un experto comprometido en realzar la belleza natural de cada paciente. Con una atención personalizada y una amplia experiencia en el campo, el Dr. López ofrece la mejor alternativa para lograr un equilibrio perfecto entre salud, bienestar y belleza.
            <br /><br />
            <p className='font-bold'>
            Destacando la Belleza que Ya Posees
            </p>
            
            El Dr. Arturo López se dedica a ayudar a todas las personas a preservar y resaltar su belleza inherente. Su enfoque se basa en el entendimiento de que cada individuo es único, y su tratamiento se adapta a las necesidades específicas de cada paciente.
            <br /><br />
            <p className='font-bold'>
            Un Balance Integral entre Salud, Bienestar y Belleza
            </p>
            
            En colaboración con el Dr. López, puedes lograr un equilibrio completo entre salud, bienestar y belleza. Su dedicación a la medicina estética y antienvejecimiento se traduce en resultados sobresalientes que te permiten sentirte seguro y radiante en tu propia piel.
            <br />
            Confía en el Dr. Arturo López para alcanzar la mejor versión de ti mismo. Tu belleza es única, y él está aquí para ayudarte a resaltarla de manera experta.
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={handleOpenAbout}>
            Cerrar
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Modal de Terminos y servicios */}
      <Dialog open={openTerms} handler={handleOpenTerms}>
        <DialogHeader className='flex justify-center'>Terminos y Servicio</DialogHeader>
        <DialogBody divider className="h-[20rem] overflow-scroll">
          <Typography className="font-normal">
            Una vez que hayas seleccionado el servicio que deseas, deberás reservar el servicio durante los horarios disponibles en la plataforma.
            <br /> <br />
            Los servicios de agente reservan el espacio en la oficina en los horarios seleccionados al momento de su selección, nuestro sistema solo permite realizar modificaciones dentro de la página.
            <br /> <br />
            Una vez completada la reserva, recibirás un email nuestro, en un plazo máximo de 2 horas con la información de la reserva.
            <br /> <br />
            Si realizas un depósito, una vez reflejado el dinero en nuestra cuenta, se realizará una llamada de confirmación hasta 24 horas antes de la reserva confirmando el pedido mediante correo electrónico. La confirmación del depósito de compra deberá ser confirmada por el área administrativa. En ningún caso se podrá programar el espacio si no está liberado por el departamento correspondiente. <br />
            <br />
            <h1 className='font-bold text'>Política de reservas. </h1>
            Cualquier reserva realizada en la página va directamente a nuestra agenda en recepción.
            Las citas se confirman telefónicamente y deben ser atendidas por el paciente en el plazo de 48 horas a 24 horas antes de la cita. Las citas no confirmadas podrán ser consideradas canceladas por el paciente.
            Se podrá realizar la cancelación con devolución de la cita siempre que la notificación sea 72 horas antes de la fecha prevista. Si es dentro del plazo de 72 horas, sólo se podrá reprogramar la cita.
            Cualquier situación que surja por cambio o devolución deberá ser notificada mediante correo electrónico a midoctor@doctorarturolopez.com enviando una descripción del problema o motivo de la cancelación.
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={handleOpenTerms}>
            Cerrar
          </Button>
        </DialogFooter>
      </Dialog>
      {/* Modal de Politicas de privacidad */}
      <Dialog open={openPolicy} handler={handleOpenPolicy}>
        <DialogHeader className='flex justify-center'>Politica de Privacidad</DialogHeader>
        <DialogBody divider className="h-[20rem] overflow-scroll">
          <Typography className="font-normal">
            En doctorarturolopez.com, accesible desde https://www.doctorarturolopez.com, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene los tipos de información que doctorarturolopez recopila y registra y cómo la usamos.
            <br />
            Comunicarnos con usted, ya sea directamente o a través de uno de nuestros socios, incluido el servicio de atención al cliente, para brindarle actualizaciones y otra información relacionada con el sitio, y con fines promocionales y de marketing.
            Enviarte correos electrónicos
            Encuentre y prevenga el fraude
            <br /><br />
            Archivos de registro
            doctorarturolopez.com sigue un procedimiento estándar de uso de archivos de registro. Estos archivos registran a los visitantes cuando visitan los sitios web. Todas las empresas de hosting hacen esto y forman parte del análisis de los servicios de hosting. La información recopilada por los archivos de registro incluye direcciones de Protocolo de Internet (IP), tipo de navegador, proveedor de servicios de Internet (ISP), marca de fecha y hora, páginas de referencia/salida y posiblemente el número de página. de clics. Estos no están vinculados a ninguna información de identificación personal. El propósito de la información es analizar tendencias, administrar el sitio, rastrear el movimiento de los usuarios en el sitio web y recopilar información demográfica. Nuestra Política de Privacidad fue creada con la ayuda del Generador de Políticas de Privacidad y el Generador de Descargos de Responsabilidad.
            <br /><br />
            Cookies y balizas web
            Como cualquier otro sitio web, doctorarturolopez.com utiliza “cookies”. Estas cookies se utilizan para almacenar información, incluidas las preferencias de los visitantes y las páginas del sitio web a las que el visitante accedió o visitó. La información se utiliza para optimizar la experiencia de los usuarios personalizando el contenido de nuestro sitio web según el tipo de navegador de los visitantes y/u otra información.
            <br /><br />
            Para obtener más información general sobre las cookies, lea "¿Qué son las cookies?
            <br /><br />
            Cookie DART de doble clic de Google
            Google es uno de los proveedores externos de nuestro sitio. También utiliza cookies, conocidas como cookies DART, para mostrar anuncios a los visitantes de nuestro sitio en función de su visita a www.website.com y otros sitios en Internet. Sin embargo, los visitantes pueden optar por rechazar el uso de cookies de DART visitando la Política de privacidad de la red de contenido y anuncios de Google en la siguiente URL: https://policies.google.com/technologies/ads
            <br /><br />
            Nuestros socios publicitarios
            Algunos de los anunciantes de nuestro sitio pueden utilizar cookies y balizas web. Nuestros socios publicitarios se enumeran a continuación. Cada uno de nuestros socios publicitarios tiene su propia política de privacidad para sus políticas de datos de usuario. Para facilitar el acceso, hemos creado un hipervínculo a sus políticas de privacidad a continuación.
            <br /><br />
            Google
            https://policies.google.com/technologies/ads
            <br /><br />
            Políticas de privacidad de los socios publicitarios
            Puede consultar este listado para conocer la política de privacidad de cada uno de los socios publicitarios de doctorarturolopez.com
            <br /><br />
            Los servidores o redes publicitarias de terceros utilizan tecnologías como cookies, JavaScript o Web Beacons que se utilizan en sus respectivos anuncios y enlaces que aparecen en doctorarturolopez.com, que se envían directamente al navegador de los usuarios. Reciben automáticamente su dirección IP cuando esto ocurre. Estas tecnologías se utilizan para medir la efectividad de sus campañas publicitarias y/o para personalizar el contenido publicitario que ve en los sitios web que visita.
            <br /><br />
            Tenga en cuenta que doctorarturolopez no tiene acceso ni control sobre estas cookies que utilizan los anunciantes de terceros.
            <br /><br />
            Políticas de privacidad de terceros
            La política de privacidad de doctorarturolopez presentada se aplica a otros anunciantes o sitios web. Por lo tanto, le recomendamos consultar las respectivas políticas de privacidad de estos servidores de anuncios de terceros para obtener información más detallada. Puede incluir sus prácticas e instrucciones sobre cómo excluirse de ciertas opciones.
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={handleOpenPolicy}>
            Cerrar
          </Button>
        </DialogFooter>
      </Dialog>

    </div>
  );
}

export default Test;
