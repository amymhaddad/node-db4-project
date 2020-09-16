exports.seed = function(knex) {
	const tableName = 'recipes';

	const rows = [];
	const recipes = [ 'kibbeh', 'chocolate-chip cookies', 'pizza', 'bbq chicken', 'pasta' ];
	const servingSize = [ 8, 24, 2, 2, 3 ];

	recipes.forEach((recipe, i) => {
		rows.push({ name: recipe, serving_size: servingSize[i] });
	});

	return knex(tableName).del().then(function() {
		return knex.insert(rows).into(tableName);
	});
};
