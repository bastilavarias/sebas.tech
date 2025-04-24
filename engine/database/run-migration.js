const knex = require('./index'); // or './configuration.js'

knex.migrate.latest()
    .then(() => {
        console.log('Migrations ran successfully');
        return knex.destroy(); // close the connection
    })
    .catch(err => {
        console.error('Migration failed:', err);
        return knex.destroy();
    });