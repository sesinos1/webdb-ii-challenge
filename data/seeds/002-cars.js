exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "s7d5f43f",
          make: "toyta",
          model: "corrlla",
          mileage: 2345534
        },

        {
          VIN: "4sdf678",
          make: "toyta",
          model: "camry",
          mileage: 32775
        },

        { 
          VIN: "9asd544",
          make: "toyta",
          model: "avilon",
          mileage: 23525 
        }
      ]);
    });
};
