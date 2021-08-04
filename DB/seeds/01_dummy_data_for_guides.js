const { v4: uuidv4 } = require('uuid');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('guide').del()
    .then(function () {
      // Inserts seed entries
      return knex('guide').insert([
        {id: "223d36fa-f424-11eb-9a03-0242ac130003", first_name: 'Mariko', last_name: "Green", email: "greenmarimari@yahoo.com", tour_locations: "Kyuushu", languages: "English", hourly_rate: 1500, info: " ", img: "https://randomuser.me/api/portraits/women/8.jpg", price_id: "price_1JKfeDJEzx4OWsdKXwnLCn9t"},
        {id: "223d36fa-f424-11eb-9a03-0242ac130003", first_name: 'Rituraj', last_name: "Sohoni", email: "yayayayai@yahoo.com", tour_locations: "Everywhere", languages: "French", hourly_rate: 100000, info: "The best", img: "https://pbs.twimg.com/media/DROyuQZVAAEZvjN.jpg", price_id: "price_1JKex5JEzx4OWsdKXAgC8yPJ"},
      ]);
    });
};
