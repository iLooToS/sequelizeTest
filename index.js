const Sequelize = require('sequelize');
const db = require('./db');
const Cars = db.cars;

function t01() {
    Cars.findAll().then(result => {
        // console.log(result)
        result.forEach(element => {console.log((item.make));
    });
}); 
}

// t01()

async function t02() {
    const result = await Cars.findAll();
    console.log(result);
}

// t02()

async function t03() {
    let result = await Cars.findOne({
        where : {model: 'x6'}
    });
    console.log(result);
}

// t03()

async function t04() {
    let result = await Cars.findAll({
        where : {model: 'land cruiser prado'},
        attributes: ['make', 'year', 'cost']
    });
    console.log(result);
    console.log(result[0]['make'] + ' ' + result[0]['year']);
    console.log(result[1]['make'] + ' ' + result[1]['year']);
}

// t04()

async function t05() {
    let result = await Cars.findOne({
        where : {model: 'land cruiser prado'},
        attributes: ['make', 'year', 'cost']
    });
    console.log(result);
    console.log(result['make'] + ' ' + result['year']);
}

t05()