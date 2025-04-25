const environment = process.env.NODE_ENV || "production";
const config = require("../knexfile")[environment];
const { attachPaginate } = require("knex-paginate");
attachPaginate();
module.exports = require("knex")(config);