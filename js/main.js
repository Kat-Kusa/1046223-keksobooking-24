// Вычисляет целое число//

var getRandomIntNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
console.log (getRandomIntNumber (10, 50));

// Вычисляет дробное число//

var getRandomNumber = function (min, max, n) {
  return (Math.random() * (max - min) + min).toFixed(n);
};

console.log (getRandomNumber (10, 30, 3));