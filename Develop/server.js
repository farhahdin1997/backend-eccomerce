const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection')
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
//Checks connection and the look at the models. It will sync the modesl with the db and start express connection
sequelize.sync({force:false}).then (function(){
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
})