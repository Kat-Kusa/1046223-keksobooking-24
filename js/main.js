// Вычисляет целое число//

let getRandomIntNumber = function (min, max) {
  if (min >= max || min < 0) {
    throw new Error ('Неверный формат числа');
  }
  return Math.floor(Math.random() * (max - min) + min);
};

(getRandomIntNumber (10, 50));

// Вычисляет дробное число//

let getRandomNumber = function (min, max, num) {
  if (min >= max || min < 0) {
    throw new Error ('Неверный формат числа');
  }
  return (Math.random() * (max - min) + min).toFixed(num);
};

(getRandomNumber (10, 30, 3));
