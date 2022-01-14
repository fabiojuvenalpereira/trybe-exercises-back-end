const express = require('express');

const routes = require('./router/');
const errorMidleware = require('./middlewares/error.middleware');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(routes);
app.use(errorMidleware);

app.listen(PORT, () => console.log(`Listen port ${PORT}`));
