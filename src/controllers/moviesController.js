const db = require('../database/models');
const sequelize = db.sequelize;
const {Op} = require('sequelize');

const Movies = db.Movie;

const moviesController = {
    list:(req, res) => {
        return res.send('Todo ok')
    }
}

module.exports = moviesController;