exports.seed = function(knex) {
	const tableName = 'ingredients';

	const rows = [
		{ name: 'pinenuts' },
		{ name: 'chocolate' },
		{ name: 'flour' },
		{ name: 'tomatoes' },
		{ name: 'basil' },
		{ name: 'herbs' },
		{ name: 'pasta' }
	];

	return knex(tableName).del().then(function() {
		return knex(tableName).insert(rows);
	});
};
