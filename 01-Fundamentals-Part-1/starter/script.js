const country = "Russia";
const continent = "Eurasia";
const population = 143400000;

console.log(
  `Country: ${country}. Continent: ${continent}. Population: ${population}`,
);

const isIsland = false;
const language = "russian";

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language,
);

const finland_population = 6000000;
const average_population = 33000000;
const half_population = population / 2;
const population_with_extra_one = population + 1;
const population_more_then_finland = population > finland_population;
const population_more_then_avarage = population > average_population;

const description = `${country} is in ${continent}, and it's ${
  population / 1000000
} million people speak ${language}.`;

if (population_more_then_avarage) {
  console.log(`${country}'s population is above average.'`);
} else {
  console.log(
    `${country}'s poplation is ${
      (average_population - population) / 1000000
    } below average'`,
  );
}

console.log(
  "9" - "5",
  "19" - "13" + "17",
  "19" - "13" + 17,
  "123" < 57,
  5 + 6 + "4" + 9 - 4 - 2,
);
