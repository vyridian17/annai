const { v4: uuidv4 } = require('uuid');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('guide').del()
    .then(function () {
      // Inserts seed entries
      return knex('guide').insert([
        {id: "502111bc-bf0f-4dbe-81d0-f0f1326e76f1", first_name: 'Bob', last_name: "Marley", email: "ishotthesherrif@deputy.com", tour_locations: "Tokyo", languages: "English", hourly_rate: 6000, info: " ", img:"https://randomuser.me/api/portraits/men/17.jpg"},
        {id: "11f2b1ee-f424-11eb-9a03-0242ac130003", first_name: 'Sam', last_name:"Harrot", email: "samharrot@gmail.com", tour_locations: "Kyoto", hourly_rate: 5000, languages:"Spanish", info:" ", img: "https://randomuser.me/api/portraits/men/76.jpg"},
        {id: "18427250-f424-11eb-9a03-0242ac130003", first_name: 'Sarah', last_name: "Takeuchi", email: "takesarah@gmail.com", tour_locations: "Osaka", languages: "French", hourly_rate: 6000, info: " ", img: "https://randomuser.me/api/portraits/men/42.jpg"},
        {id: "1d1d49b2-f424-11eb-9a03-0242ac130003", first_name: 'Harry', last_name: "Kane", email: "harry@kane.com", tour_locations: "Fukushima", languages: "Portugese", hourly_rate: 6000, info: " ", img: "https://randomuser.me/api/portraits/men/54.jpg"},
        {id: "223d36fa-f424-11eb-9a03-0242ac130003", first_name: 'Mariko', last_name: "Green", email: "greenmarimari@yahoo.com", tour_locations: "Kyuushu", languages: "English", hourly_rate: 6000, info: " ", img: "https://randomuser.me/api/portraits/women/8.jpg"},
      ]);
    });
};
