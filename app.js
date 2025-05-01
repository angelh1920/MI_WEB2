const express =require("express");
const mongoose = require('mongoose');
const Persona = require('./models/Persona');
const bodyParser = require("body-parser");
const app = express ();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


const MONFGO_URI = 'mongodb+srv://admin:luishancco19@cluster0.bzkakdz.mongodb.net/certus?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(MONFGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("se conecto correctamente a la base de datos ..");
}).catch((err)=>{   
    console.log("Error encontrado" + err);
})

app.post('/submit' , async(req, res)=>{
    try{
        const persona = new Persona(req.body);
        await persona.save();
        res.status(200).send({menssage: 'se guardo correctamente'});

    }catch(err){
        console.log();
        res.status(500).send({menssage:'hubo un error '})
    }

});
  

app.listen(5000, function(){
    console.log("se conecto al puerto 5000....");
})