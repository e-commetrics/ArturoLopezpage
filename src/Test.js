import React, { useState } from 'react';
// import video from './vid/AL.mp4';
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
} from "@material-tailwind/react";
import dr from './img/Dr 2.png'
import './styles/fonts.css'; // Importa el archivo de hoja de estilos de las fuentes personalizadas
import logofooter from './img/logo_footer.png'
import ReactPlayer from 'react-player';


function Test() {
  const [open, setOpen] = React.useState(false);
  const videoUrl = 'https://vimeo.com/869254219'
  const toggleOpen = () => setOpen((cur) => !cur);

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
            
            className="w-full h-screen object-cover"
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
          <div className="w-full md:w-1/2 mx-auto">
            <Fade bottom delay={200} >
              <img className="w-full max-w-full" src={logo} alt="Logo" />
            </Fade>
          </div>
        </div>
      </section> 

      {/* section nosotros */}
      <section className="bg-[#AC463F] w-full p-8 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-4/5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mt-24 text-[#E7D8D2] font-normal font-raleway">SOBRE NOSOTROS</h1>
              <p className="mt-10 text-white text-2xl text-justify font-medium font-raleway">
                Somos un consultorio médico especializado en medicina estética y antiedad. Los valores que nos caracterizan son la honestidad, el compromiso y la calidad en nuestros servicios, siempre será un honor resaltar la belleza y glamour de todos nuestros clientes.
              </p>
              <div class="text-white text-xl flex justify-end mt-24 font-semibold font-raleway">"Un cliente satisfecho, siempre será el mejor regalo para mí" </div>
            <div class="text-white text-l flex justify-end mt- font-light font-raleway mr-2">Dr. Arturo Lopez<br/></div>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
              <img
                src={dr}
                alt="Avatar"
                className="w-full md:w-3/4 h-auto ml- md:ml-64 mt-4 md:mt-0 mb-10"
              />
            </div>
          </div>
        </div>
      </section>


      {/* section servicios  */}
      {/* <section id="section3" className="flex justify-center items-center min-h-[50vh] bg-[#bd7c5f] border-b-2 border-black overflow-x-auto">
        <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl flex flex-col-reverse lg:flex-row">
          <div className="flex-1 flex flex-col justify-center items-center w-full h-full text-center lg:mr-8">
            <h2 className="text-2xl lg:text-4xl font-century mb-8 mt-4 text-white">
              SERVICIOS QUE OFRECEMOS
            </h2>
            <ServiceCarousel />
          </div>
        </div>
      </section> */}

      {/* section agenda cita  */}
      {/* <section className="flex justify-center items-center min-h-[50vh] bg-[#EED5C9] border-b-2 border-black overflow-x-auto">
        <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl flex flex-col lg:flex-row">
          <div className='flex-1 flex flex-col justify-center items-center w-full h-full text-center lg:mr-16'>

            <Typography variant="h1" color="white" >
              AGENDA TU CITA
            </Typography>

            <p className="text-white mt-2 lg:mt-4 font-century">Por cualquiera de nuestros métodos de contacto</p>
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
          <div className='mt-4 mb-4 flex-1 flex justify-center items-center w-full h-full'>
            <div className="border-4 border-white shadow-lg">
              <img
                className="h-96 w-full object-cover object-center"
                src={AL}
                alt="nature image"
              />
            </div>
          </div>

        </div>
      </section> */}


      {/* section instalaciones */}
      {/* <section className="bg-[#bd7c5f] border-b-2 border-black">
        <div className="container mx-auto py-8">
          <h2 className="text-white text-2xl lg:text-4xl text-center mb-4 font-century">
            CONOCE NUESTRAS INSTALACIONES
          </h2>
          <div className='flex justify-center'>
            <Card className="mt-12 w-96 flex items-center justify-center">
              <CardHeader color="blue-gray" className=" mt-6 relative h-54">
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
      <footer className="w-full bg-white p-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <img src={logofooter} alt="Logo" className="w-12" />
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                License
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contribute
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contact Us
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="blue-gray" className="text-center font-normal">
          &copy; 2023 E-commetrics
        </Typography>
      </footer>
    </div>
  );
}

export default Test;
