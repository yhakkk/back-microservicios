//
const express = require("express");
require('dotenv').config();
const axios = require("axios");

const app = express();
const PORT3 = process.env.PORT3;
app.set('view engine', 'ejs');




app.get('/rick', async (req, res) => {
  try {
    
    const {data: {suma}} =  await axios.get("http://localhost:4000/sum");

    const response = await axios.get(`https://rickandmortyapi.com/api/character/${suma}`);

    const characterData = response.data;

    res.render("avatar",{character:characterData});

  } catch (error) {
    console.error("Error al obtener los datos del personaje", error);
    res.status(500).send("Error al obtener los datos del personaje.");
  }
  });
  
  app.listen(PORT3, () => {
    console.log(`Servidor de números aleatorios corriendo en http://localhost:${PORT3}`);
  });

  