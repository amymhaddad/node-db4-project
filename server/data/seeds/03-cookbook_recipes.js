exports.seed = function(knex) {
	const tableName = 'cookbook_recipes';
	const rows = [
		{ cookbook_id: 5,  recipe_id: 3},
		{ cookbook_id: 4, recipe_id: 4  },
		{ cookbook_id: 1, recipe_id: 1},
		{ cookbook_id: 2,  recipe_id: 2 },
		{ cookbook_id: 1, recipe_id: 5 },

	];

	return knex(tableName).del().then(function() {
		return knex.insert(rows).into(tableName);
	});
};
