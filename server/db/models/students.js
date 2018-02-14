'use strict';
const db = require('../index');
const Sequelize = require('sequelize');

const Students = db.define('students', {
    firstname : {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname : {
        type: Sequelize.STRING,
        allowNull: false
    },
    
}, {
    timestamps: false,  // don't add the timestamp attributes (updatedAt, createdAt)
    getterMethods: { //retrieving an underlying property value - always use this.getDataValue('fullname') 
        fullname(){
            return this.first_name + " " + this.last_name;
        }
    }
});

module.exports = Students;