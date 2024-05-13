const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('Cars', {
        vin : {
            type: Sequelize.STRING(17),
            primaryKey: true
        },
        make : {
            type: Sequelize.STRING(100)
        },
        model : {
            type: Sequelize.STRING(100)
        },
        year : {
            type: Sequelize.SMALLINT.UNSIGNED,
        },
        cost : {
            type: Sequelize.FLOAT.UNSIGNED
        },
        mileage : {
            type: Sequelize.SMALLINT.UNSIGNED
        },
        color : {
            type: Sequelize.STRING(100)
        },
        fuel : {
            type: Sequelize.STRING(3)
        },
    }, {
        timestamps: false,
        tableName: 'cars'
    });
}