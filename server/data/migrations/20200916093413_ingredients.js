exports.up = function(knex) {
	return knex.schema.createTable('ingredients', function(table) {
		table.increments('id');
		table.string('name', 400).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('ingredients');
};
