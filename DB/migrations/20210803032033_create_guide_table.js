
exports.up = function (knex) {
    return knex.schema.createTable("guide", (table) => {
        table.increments('id').notNullable().unique();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email');
        table.string('tour_locations');
        table.string('languages').notNullable();
        table.integer('hourly_rate').notNullable();
        table.text('info');
        table.timestamps(true, true);

    })

};

exports.down = function (knex) {
    return knex.schema.dropTable('guide');
};
