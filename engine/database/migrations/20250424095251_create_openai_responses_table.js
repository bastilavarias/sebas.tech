/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return  knex.schema.createTable('openai_responses', (table) => {
        table.increments('id').primary();
        table.text('prompt');
        table.binary('content').nullable();
        table.boolean('completed').defaultTo(0);
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('openai_responses');  // Drop the 'posts' table if it exists
};
