exports.seed = function(knex) {
	const tableName = 'recipe_ingredients';

	const rows = [
		{ recipe_id: 1, ingredients_id: 1, quantity: 1, unit: 'cup' },
		{ recipe_id: 1, ingredients_id: 6, quantity: 1, unit: 'cup' },
		{ recipe_id: 2, ingredients_id: 2, quantity: 2, unit: 'cup' },
		{ recipe_id: 2, ingredients_id: 3, quantity: 2, unit: 'cup' },
		{ recipe_id: 3, ingredients_id: 4, quantity: 4, unit: 'single' },
		{ recipe_id: 3, ingredients_id: 5, quantity: 1, unit: 'cup' },
		{ recipe_id: 4, ingredients_id: 6, quantity: 1, unit: 'cup' },
		{ recipe_id: 5, ingredients_id: 7, quantity: 1, unit: 'pound' },
		{ recipe_id: 5, ingredients_id: 4, quantity: 4, unit: 'single' },
		{ recipe_id: 5, ingredients_id: 5, quantity: 1, unit: 'cup' }
	];

	return knex(tableName).del().then(function() {
		return knex(tableName).insert(rows);
	});
};
