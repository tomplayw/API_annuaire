//Importations de Modules
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

//Route Page d'Accueil:
app.get('/', (req, res) => {
  res.render('index');
});

//Route traitement de recherche
app.post('/search', (req, res) => {
    const search = req.body.search;
    const limit = req.body.limit;

    const url = `https://hds-staging.toktokdoc.com/physicians?search=${search}&limit=${limit}`;

    axios.get(url)
        .then(response => {
            const results = response.data; 
            console.log(results);
            console.log(url);
            res.render('results', { results });
        })
        .catch(error => {
            console.error(`Erreur : ${error.message}`);
            res.render('error');
        });
});


//Démarrage Serveur
app.listen(3000, () => {
  console.log('Le serveur écoute sur http://localhost:3000');
});
