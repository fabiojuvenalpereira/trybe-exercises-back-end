const express = require('express');

const errorMidleware = require('./middlewares/error.middleware');
const routes = require('./router/');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(routes);

app.use(errorMidleware);

app.listen(PORT, () => console.log(`Listen port ${PORT}`));
