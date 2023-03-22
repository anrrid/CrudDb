const db = require('../database/models');
const sequelize = db.sequelize;
const {Op} = require('sequelize');

const Movies = db.Movie;

const moviesController = {
    list:(req, res) => {
        Movies.findAll()
        .then(peliculas => {
            return res.send(peliculas)
        })
    }
}

module.exports = moviesController;