exports.seed = function(knex) {
	const tableName = 'cookbooks';
	const rows = []
	const cookBooks = ["Italian Meals", "Quick Meals", "Greek Meals", "Junk Food Meals", "Healthy Meals"]
	const years = [2012, 2010, 2020, 2019, 2017]

	cookBooks.forEach((book, i) => {
	rows.push({name: book, publication_year: years[i]})
	})

	return knex(tableName).del().then(function() {
		return knex.insert(rows).into(tableName);
	});
};
