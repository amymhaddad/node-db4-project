
exports.up = function(knex) {   
    return knex.schema.hasTable("cookbooks")
    .then(function(exists) {
        if (exists) {
            return knex.schema.table("cookbooks", function(table) {
                table.renameColumn("year", "publication_year")
            })
        }
    })

};

exports.down = function(knex) {
    return knex.schema.table("cookbooks", function(table) {
        table.renameColumn("publication_year", "year")
    })
};
