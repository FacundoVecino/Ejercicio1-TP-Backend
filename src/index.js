import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import taskRouter from './routes/taskRoutes.js';

import './database/database.js';

// Inicio de aplicacion
const app = express();

// Configuracion del puerto
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Rutas
app.use(taskRouter);

// Inicio del Loop del Servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});
