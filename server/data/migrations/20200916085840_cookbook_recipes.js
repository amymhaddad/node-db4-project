exports.up = function(knex) {
	return knex.schema.createTable('cookbook_recipes', function(table) {
		table
			.integer('cookbook_id')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable("cookbooks")
			.onDelete('CASCADE')
			.onUpdate('CASCADE')
		
		table
			.integer('recipe_id')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable("recipes")
			.onDelete('CASCADE')
			.onUpdate('CASCADE')
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('cookbook_recipes');
};
