const express = require('express')
const routes = express.Router()
const data =  require("./data.json")

routes.get('/', function( req, res ){
    return res.render('index', {items: data.recipes})
})

routes.get('/receitas', function( req, res ){
    return res.render('receitas', {items: data.recipes})
})

routes.get('/receitas/:id', function( req, res ){
        const { id } = req.params

        const foundRecipe = data.recipes.find(function (item) {
            return item.id == id;
          });

          if (!foundRecipe) return res.send("Recipe not found");

        const recipe = { ...foundRecipe };

    return res.render("detalhes", {recipe})
})

routes.get('/sobre', function( req, res ){
    return res.render('sobre')
})

module.exports = routes