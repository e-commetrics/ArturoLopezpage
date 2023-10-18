import { Card, Input, Button } from "@material-tailwind/react";
import axios from "axios"; // <-- Importa axios
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { utcToZonedTime, format } from "date-fns-tz";
import es from "date-fns/locale/es"; // Importa el idioma español
import { Toaster, toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ContactoSection = () => {
  // Estado para la fecha
  const [selectedDate, setSelectedDate] = React.useState(null);
  // Estado para el texto del TextArea
  const [asunto, setAsunto] = React.useState("");
  // Maximo de caracteres permitodos en el TextArea
  // UseInView para animar el titulo cuando se llega a la section
  const ref = useRef(null);
  const inView = useInView(ref);
  // Funcion para enviar el formulario
  const formRef = useRef(null);

  const [occupiedTimes, setOccupiedTimes] = React.useState([]);

  const handleEnviar = (e) => {
    e.preventDefault();

    const timezone = "America/Los_Angeles";
    const zonedDate = utcToZonedTime(selectedDate, timezone);
    const formattedDate = format(zonedDate, "yyyy-MM-dd HH:mm:ssXXX", {
      timeZone: timezone,
    });

    const formData = {
      nombre: formRef.current.nombre.value,
      correo: formRef.current.correo.value,
      fecha: formattedDate,
      phone: formRef.current.phone.value,
    };

    const limpiarCampos = () => {
      // Reiniciar los estados
      setSelectedDate(null);
      setAsunto("");

      // Reiniciar los campos del formulario
      if (formRef.current) {
        formRef.current.nombre.value = "";
        formRef.current.correo.value = "";
        formRef.current.phone.value = "";
      }
    };

    axios
      .post("https://doctorarturolopez.com/contacto", formData)
      .then((response) => {
        // Aquí puedes manejar la respuesta. Por ejemplo:
        toast.success("Información de contacto enviada con éxito!");
        limpiarCampos();
      })
      .catch((error) => {
        console.error(
          "Hubo un error al enviar la información de contacto:",
          error,
        );
        toast.error("Hubo un error al enviar la información de contacto."); // Mostrar un toast de error
      });
  };

  React.useEffect(() => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      axios
        .get(`https://doctorarturolopez.com/contacto/horas-ocupadas/${formattedDate}`)
        .then((response) => {
          const times = response.data.map((item) => {
            return new Date(2022, 1, 1, item.hour, item.minute); // Puedes usar cualquier año, mes y día, sólo nos importa la hora y el minuto
          });
          setOccupiedTimes(times);
        })
        .catch((error) => {
          console.error("Error al obtener horas ocupadas:", error);
        });
    }
  }, [selectedDate]);

  return (
    <section className="p-4 bg-white md:p-16" ref={ref}>
      <motion.h1
        className="text-center text-4xl md:text-8xl text-[#AC463F] font-bold font-montserrat mb-4"
        initial={{ opacity: 0, y: -100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -100 }}
      >
        Agenda tu cita
      </motion.h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-8 mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.896099938202!2d-117.11814715621588!3d32.528921822341545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94b222bf089c3%3A0xf5db170685ab6a04!2sDoctor%20Arturo%20L%C3%B3pez%20%7C%20Antiedad%20y%20Bienestar!5e0!3m2!1ses!2smx!4v1697567787297!5m2!1ses!2smx"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex-1 p-4">
          <div className="flex flex-col items-center justify-center w-full text-2xl text-black bg-white">
            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-2xl mt-10 mb-10 border text-black border-[#AC463F] shadow-2xl"
            >
              <form
                className="flex flex-col w-full p-8 bg-white rounded shadow-lg"
                ref={formRef}
                onSubmit={handleEnviar}
              >
                <div className="mb-4">
                  <p className="text-xl font-bold text-center">CREAR CITA</p>
                  <a
                    href="https://maps.app.goo.gl/jLvVjvXbFcQuHM1Y6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#AC463F]"
                  >
                    <p className="mt-2 text-xl">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ color: "#c95618" }}
                        className="mr-2"
                      />
                      Paseo Ensenada 721-1. Playas de Tijuana, Baja California,
                      CP 22500
                    </p>
                  </a>
                </div>

                <div className="flex flex-col gap-8 mb-8">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="Tiempo"
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded h-11"
                    placeholderText="Elige fecha y hora"
                    excludeTimes={occupiedTimes}
                    locale={es}
                    minTime={new Date(0, 0, 0, 9, 0)} // 9:00 AM
                    maxTime={new Date(0, 0, 0, 14, 30)} // 3:00 P
                  />
                  <Input
                    size="lg"
                    name="nombre"
                    label="Nombre completo"
                    required
                    color="gray"
                    className="bg-gray-100 border-gray-300"
                  />

                  <Input
                    size="lg"
                    minLength={8}
                    name="correo"
                    type="email"
                    label="Correo electronico"
                    required
                    color="gray"
                    className="bg-gray-100 border-gray-300"
                  />

                  <Input
                    size="lg"
                    name="phone"
                    maxLength={10}
                    type="tel"
                    pattern="\d*"
                    label="Numero de telefono"
                    required
                    color="gray"
                    className="bg-gray-100 border-gray-300"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                  />
                </div>

                <Button
                  className="bg-[#AC463F]"
                  buttonType="filled"
                  type="submit"
                  size="lg"
                  ripple="light"
                >
                  Realizar cita
                </Button>
              </form>
            </Card>
            <Toaster richColors position="top-right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
