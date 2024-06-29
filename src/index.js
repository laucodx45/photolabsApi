const PORT = process.env.PORT || 8001;
const ENV = require("./environment");
const path = require('path');

const app = require("./application")(ENV);
const server = require("http").Server(app);

app.use('/public', express.static(path.join(__dirname, 'public')));

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});
