const app = require('./app');
const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'});

//DataBase connection
mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true , useUnifiedTopology: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error)=>{
    console.error("ERRO: " + error.message);
});

app.set('port', process.env.PORT || 9000);
const server = app.listen(app.get('port'), ()=>{
    console.log("Servidor porta: ", server.address().port);
});
