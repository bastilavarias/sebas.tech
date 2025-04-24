/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('slug').notNullable().unique();
    table.binary('content');
    table.timestamp('created_at').defaultTo(knex.fn.now());
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('posts');  // Drop the 'posts' table if it exists

};
