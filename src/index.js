require('dotenv').config();
const {PORT} = process.env;
const app = require('./appConfig.js');

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`App running on port: ${PORT}`)
});