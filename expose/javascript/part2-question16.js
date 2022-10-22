let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2,
};

for (let cars in statistics) {

  if (cars[0] == 'r') {

    console.log(`${cars}: ${statistics[cars]}`);

  }

  if (statistics[cars] % 2 != 0) {

    console.log(`${cars}: ${statistics[cars]}`);

  }
}
