exports.up = function(knex) {
	return knex.schema.createTable('instructions', function(table) {
		table.increments('id');
		table.string('description').notNullable();

		table
			.integer('recipe_id')
			.notNullable()
			.references('id')
			.inTable('recipes')
			.onDelete('CASCADE')
			.onUpdate('CASCADE')
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('instructions');
};
