const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const nodemailer = require("nodemailer");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conexión a MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "alcontactform",
  port: 3306, // Añade esta línea con el puerto correcto
});

connection.connect();

const transporter = nodemailer.createTransport({
  host: "doctorarturolopez.com", // Servidor SMTP
  port: 465, // Puerto SMTP sin SSL/TLS
  secure: true, // Si utilizas SSL/TLS, cambia a 'true'
  auth: {
    user: "citas@doctorarturolopez.com", // Cambia a tu dirección de correo en reformadental.com
    pass: "hwE8wUd;NrnY", // Cambia a tu contraseña de correo en reformadental.com
  },
});

app.post("/contacto", (req, res) => {
  console.log("Recibida petición POST en /contacto con datos:", req.body);

  const { nombre, correo, phone, fecha } = req.body;

  const query =
    "INSERT INTO contactos (nombre, correo, phone, fecha) VALUES (?, ?, ?, ?)";
  connection.query(query, [nombre, correo, phone, fecha], (error, results) => {
    if (error) {
      console.error("Error al insertar en la base de datos:", error);
      return res.status(500).json({ error: "Algo salió mal" });
    }
    console.log("Datos insertados con éxito:", results);
    return res.status(200).json({ message: "Datos insertados con éxito" });
    
    // Envío de correo electrónico con Nodemailer
    // const mailOptions = {
    //   from: "citas@doctorarturolopez.com",
    //   to: correo,
    //   cc: "citas@doctorarturolopez.com",
    //   subject: "Gracias por enviar el formulario",
    //   text: `Nombre: ${nombre}\nCorreo: ${correo}\nAsunto: ${asunto}\nFecha: ${fecha}`,
    // };

    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.log("Error al enviar el correo electrónico: " + error);
    //   } else {
    //     console.log("Correo electrónico enviado: " + info.response);
    //   }
    // });
  });
});

app.listen(3001, () => {
  console.log("Servidor corriendo en http://localhost:3001");
});

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

app.get("/contacto/horas-ocupadas/:fecha", (req, res) => {
  const fechaSeleccionada = req.params.fecha;

  const query =
    "SELECT HOUR(fecha) as hour, MINUTE(fecha) as minute FROM contactos WHERE DATE(fecha) = ?";
  connection.query(query, [fechaSeleccionada], (error, results) => {
    if (error) {
      console.error("Error al obtener horas desde la base de datos:", error);
      return res.status(500).json({ error: "Algo salió mal" });
    }
    res.json(results);  // Devuelve las horas ocupadas
  });
});
