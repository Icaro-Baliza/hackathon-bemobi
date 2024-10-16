import express from 'express';
import routes from './routes/routes';

const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

export { app, cors }