exports.up = function(knex) {
	return knex.schema.createTable('recipe_ingredients', function(table) {
		table.integer('quantity').notNullable();
		table.string('unit').notNullable();

		table
			.integer('recipe_id')
			.notNullable()
			.references('id')
			.inTable('recipes')
			.onUpdate('CASCADE')
			.onDelete('CASCADE')
		
		table 
			.integer('ingredients_id')
			.notNullable()
			.references('id')
			.inTable('ingredients')
			.onUpdate('CASCADE')
			.onDelete('CASCADE')
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('recipe_ingredients');
};
