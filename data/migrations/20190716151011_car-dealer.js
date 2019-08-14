
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('VIN')
      .notNullable()
      .unique();
    tbl.string('make',128)
      .notNullable();
    tbl.string('model',128)
      .notNullable();
    tbl.integer('mileage')
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('accounts');
};
