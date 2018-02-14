'use strict';
const db = require('../index');
const Sequelize = require('sequelize');


const Campuses = db.define('campuses', {
    name : {
        type: Sequelize.STRING,
        allowNull: false
    },
    
}, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false 
});



module.exports = Campuses;