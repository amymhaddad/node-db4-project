exports.seed = function(knex) {
	const tableName = 'instructions';

	const rows = [
		{ recipe_id: 1, description: 'mix lamb, pine nuts and bulgar' },
		{ recipe_id: 2, description: 'mix chocolate, flour, and butter' },
		{ recipe_id: 3, description: 'layer sauce, cheese, basil' },
		{ recipe_id: 4, description: 'add rub and sauce to chicken' },
		{ recipe_id: 5, description: 'mash tomatoes and herbs' }
	];

	return knex(tableName).del().then(function() {
		return knex.insert(rows).into(tableName);
	});
};
