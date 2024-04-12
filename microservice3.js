const express = require("express");
require("dotenv").config();
const axios = require("axios");
const app = express();
const PORT4 = process.env.PORT4;
app.set('view engine', 'ejs');


app.get("/medebe",async (req,res) =>{
    try {
        const {data: {suma}} =  await axios.get("http://localhost:4000/sum");
        const compas = [
            "Airasca, Rocío",
            "Arzeno, Eugenio",
            "Blanco, Felipe",
            "Bernardi, Felipe",
            "Bautista, Guisti",
            "Bonoris, Maximiliano Oscar",
            "Calio, Octavio César",
            "Choco",
            "Comba, Agustin",
            "Cordoba, Javier",
            "De la Iglesia, Pablo Alejandro",
            "Diaz, Nahuel Daniel",
            "Gallardo Quiroga, Joaquin",
            "Gastaldi, Gabriel",
            "Gastaldi, Vito Nicolás",
            "Germani, Martín",
            "Gobbato, Matias Elian",
            "Lerin, Emiliano",
            "Morales, Joaquín Francisco",
            "Morellato, Franco",
            "Nievas, Nicolas Andres",
            "Oliva, Felipe",
            "Peralta, Miguel Agustín",
            "Peretti, Antonella Belén",
            "Rabbia, Facundo Rodrigo",
            "Roldan, Nahir Antonella",
            "Sacani, Federico",
            "Urenda, Camila",
            "Vagliente, Gino",
            "Borda, Raul"
        ];
        const respuestaArray = ["Borda Raul"];
        for (let index = 1; index < suma; index++) {
            const randomIndex = Math.floor(Math.random() * compas.length);
            respuestaArray.push(compas[randomIndex]);             
        }
        res.render("medebe",{respuesta: respuestaArray});
    } catch (error) {
        console.error("Error ", error);
        res.status(500).send("Error");
        
    }


})

app.listen(PORT4,() =>{
    console.log(`Servidor de números aleatorios corriendo en http://localhost:${PORT4}`);
})


