const app = require('./app');
require('dotenv').config();

const { PORT = 3001 } = process.env;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
