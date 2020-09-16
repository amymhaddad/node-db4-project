exports.up = function(knex) {
	return knex.schema.createTable('recipes', function(table) {
		table.increments('id');
		table.string('name', 300).notNullable();
		table.integer('serving_size').notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('recipes');
};
