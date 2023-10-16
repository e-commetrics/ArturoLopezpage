import {
  Card,
  Typography,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import axios from "axios"; // <-- Importa axios
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { utcToZonedTime, format } from "date-fns-tz";
import es from "date-fns/locale/es"; // Importa el idioma español
import { Toaster, toast } from "sonner";

const ContactoSection = () => {
  // Estado para la fecha
  const [selectedDate, setSelectedDate] = React.useState(null);
  // Estado para el texto del TextArea
  const [asunto, setAsunto] = React.useState("");
  // Maximo de caracteres permitodos en el TextArea
  const maxCharCount = 250;
  // UseInView para animar el titulo cuando se llega a la section
  const ref = useRef(null);
  const inView = useInView(ref);
  // Funcion para enviar el formulario
  const formRef = useRef(null);

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
      asunto: asunto,
    };

    axios
      .post("http://localhost:3001/contacto", formData)
      .then((response) => {
        console.log(response.data);
        toast.success('Información de contacto enviada con éxito!'); // Utiliza el toast de "sonner" en lugar de showAlert
        resetForm(); // Llama a la función para limpiar el formulario después de enviar con éxito
      })
      .catch((error) => {
        console.error("Hubo un error al enviar el mensaje:", error);
        toast.error('Hubo un error al enviar el formulario!')
      });
  };

  const [occupiedTimes, setOccupiedTimes] = React.useState([]);

  React.useEffect(() => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      axios
        .get(`http://localhost:3001/contacto/horas-ocupadas/${formattedDate}`)
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
  
  const resetForm = () => {
    setSelectedDate(null);
    setAsunto('');
    formRef.current.nombre.value = '';
    formRef.current.correo.value = '';
  };
  return (
    <section className="p-8 bg-white" ref={ref}>
      <motion.h1
        className="text-center text-8xl text-[#AC463F] font-bold font-montserrat"
        initial={{ opacity: 0, y: -100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, y: -100 }}
      >
        Contacto
      </motion.h1>
      <div className="flex flex-col items-center justify-center w-full text-2xl text-black bg-white">
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-2xl mt-10 mb-10 border text-black border-[#AC463F] shadow-2xl"
        >
          <Typography
            variant="h4"
            color="transparent"
            className="mt-4 font-bold text-center"
          >
            Ingresa tus datos y te contactaremos lo antes posible.
          </Typography>
          <form
            className="flex flex-col w-full p-8"
            ref={formRef}
            onSubmit={handleEnviar}
          >
            <div className="flex flex-col gap-6 mb-4 bg-white">
              <Input size="lg" name="nombre" label="Nombre completo" required />
              <Input
                size="lg"
                minLength={8}
                name="correo"
                type="email"
                label="Correo electronico"
                required
              />
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="Tiempo"
                className="w-full p-3 bg-white border border-gray-400 rounded-xl"
                placeholderText="Fecha y hora"
                excludeTimes={occupiedTimes}
                locale={es} // Esta línea configura el idioma a español
              />
              <Textarea
                color="lightBlue"
                size="regular"
                outline={true}
                value={asunto}
                label="Asunto"
                onChange={(e) => setAsunto(e.target.value)}
                maxLength={maxCharCount}
                name="asunto"
                required
              />
              <Typography variant="body2" color="gray" className="text-right">
                Maximo de caracteres {asunto.length}/{maxCharCount}
              </Typography>
            </div>
            <Button
              className="bg-[#AC463F]"
              buttonType="filled"
              type="submit"
              size="lg"
              ripple="light"
            >
              Enviar
            </Button>
          </form>
        </Card>
        <Toaster richColors   position="top-right" />
      </div>
    </section>
  );
};

export default ContactoSection;
