export const up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments();
    table.string("name");
    table.string("email").unique();
    table.timestamps();
  });
};

export const down = function (knex) {};
