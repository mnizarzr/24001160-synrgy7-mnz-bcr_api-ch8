import { Knex } from "knex";

const carNames = [
  "Toyota Camry",
  "Honda Civic",
  "Ford Mustang",
  "Chevrolet Corvette",
  "BMW 3 Series",
  "Mercedes-Benz C-Class",
  "Audi A4",
  "Volkswagen Golf",
  "Subaru Outback",
  "Jeep Wrangler",
];

function generateDummyData(numEntries: number) {
  const dummyData = [];
  const currentDate = new Date();
  const oneDayInMillis = 24 * 60 * 60 * 1000;

  for (let i = 0; i < numEntries; i++) {
    const startRent = new Date(
      currentDate.getTime() + Math.floor(Math.random() * 30) * oneDayInMillis,
    );
    const finishRent = new Date(
      startRent.getTime() + Math.floor(Math.random() * 10 + 1) * oneDayInMillis,
    );

    const carData = {
      name: carNames[Math.floor(Math.random() * carNames.length)],
      price: Math.floor(Math.random() * 100000),
      picture: null,
      start_rent: startRent,
      finish_rent: finishRent,
    };

    dummyData.push(carData);
  }

  return dummyData;
}

export async function seed(knex: Knex): Promise<void> {
  await knex("cars").insert(generateDummyData(10));
}
