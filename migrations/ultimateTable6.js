exports.up = function(knex) {
  return knex.schema.createTable("ultimateTable6", (table) => {
    table.increments().index();

    table.float("latitude");

    table.float("longitude");

    table.text("name").notNullable();

    table.text("state");

    table.text("city");

    table.text("highway");

    table.boolean("oilChange");

    table.boolean("lightMechanical");

    table.boolean("tirePass");

    table.boolean("truckTireCare");

    // table.boolean("travelStop");

    // table.boolean("countryStore");

    // table.boolean("atm");

    // table.boolean("wifi");

    // table.boolean("arbys");

    // table.boolean("wendys");
  });
};

exports.down = function(knex, Promise) {
  // undo this migration by destroying the 'users' table
  return knex.schema.dropTable("ultimateTable6");
};
