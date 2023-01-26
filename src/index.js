const express = require('express');
const cors = require('cors');
const config = require('./config');
const apiRoutes = require('./routes/api-routes');
const errorHandler = require('./middlewares/error-handler');

const app = express();
app.use(cors());
app.use('/api', apiRoutes);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`App is listening on port ${config.port}`);
});

process.once('SIGUSR2', () => {
  process.kill(process.pid, 'SIGUSR2');
});
process.once('SIGINT', () => {
  process.kill(process.pid, 'SIGINT');
});
