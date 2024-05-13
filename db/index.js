const Sequelize = require('sequelize');

const sequelize = new Sequelize('auto', 'root', '', {
    dialect:'mysql',
    host: 'localhost',
    port: 5433,
    logging: false
});

const Cars = require('./Cars.js')(sequelize);

module.exports = {
    sequelize: sequelize,
    cars : Cars
}