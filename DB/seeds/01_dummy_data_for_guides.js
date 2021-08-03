
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('guide').del()
    .then(function () {
      // Inserts seed entries
      return knex('guide').insert([
        {id: 1, first_name: 'Bob', last_name: "Marley", email: "ishotthesherrif@deputy.com", tour_locations: "Tokyo", languages: "English", hourly_rate: 6000, info: " "},
        {id: 2, first_name: 'Sam', last_name:"Harrot", email: "samharrot@gmail.com", tour_locations: "Kyoto", hourly_rate: 5000, languages:"Spanish", info:" "},
        {id: 3, first_name: 'Sarah', last_name: "Takeuchi", email: "takesarah@gmail.com", tour_locations: "Osaka", languages: "French", hourly_rate: 6000, info: " "},
        {id: 4, first_name: 'Harry', last_name: "Kane", email: "harry@kane.com", tour_locations: "Fukushima", languages: "Portugese", hourly_rate: 6000, info: " "},
        {id: 5, first_name: 'Mariko', last_name: "Green", email: "greenmarimari@yahoo.com", tour_locations: "Kyuushu", languages: "English", hourly_rate: 6000, info: " "},
      ]);
    });
};
