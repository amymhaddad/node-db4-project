exports.up = function(knex) {
    return knex.schema 
    .createTable("cookbooks", function(table) {
        table.increments("id")
        table.string("name", 400).notNullable();
        table.integer("year").notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema 
    .dropTableIfExists("cookbooks")
};
