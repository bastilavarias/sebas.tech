const { generate } = require('./services/postService');
const database = require('../database')

generate().then((result) => console.log(result)).catch(e => console.log(e)).finally(() => database.destroy());