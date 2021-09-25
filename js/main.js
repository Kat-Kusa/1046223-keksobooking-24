// Вычисляет целое число//

let getRandomIntNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
console.log (getRandomIntNumber (10, 50));

// Вычисляет дробное число//

let getRandomNumber = function (min, max, num) {
  return (Math.random() * (max - min) + min).toFixed(num);
};

console.log (getRandomNumber (10, 30, 3));
