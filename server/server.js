const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Conexión a MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alcontactform',
    port: 3306 // Añade esta línea con el puerto correcto
});

connection.connect();

app.post('/contacto', (req, res) => {
    console.log("Recibida petición POST en /contacto con datos:", req.body);

    const { nombre, correo, asunto, fecha } = req.body;

    const query = 'INSERT INTO contactos (nombre, correo, asunto, fecha) VALUES (?, ?, ?, ?)';
    connection.query(query, [nombre, correo, asunto, fecha], (error, results) => {
        if (error) {
            console.error("Error al insertar en la base de datos:", error);
            return res.status(500).json({ error: 'Algo salió mal' });
        }
        console.log("Datos insertados con éxito:", results);
        res.status(200).json({ message: 'Mensaje guardado con éxito' });
    });
});

app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});

app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});
app.get('/contacto/horas-ocupadas/:fecha', (req, res) => {
    const fechaSeleccionada = req.params.fecha;

    const query = 'SELECT HOUR(fecha) as hour, MINUTE(fecha) as minute FROM contactos WHERE DATE(fecha) = ?';
    connection.query(query, [fechaSeleccionada], (error, results) => {
        if (error) {
            console.error("Error al obtener horas desde la base de datos:", error);
            return res.status(500).json({ error: 'Algo salió mal' });
        }
        res.status(200).json(results);
    });
});
