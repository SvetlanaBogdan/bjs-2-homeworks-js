"use strict";

// Задача 1: квадратное уравнение 
const solveEquation = (a, b, c) => {
    const discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0) return [];

    if (discriminant === 0) return [-b / (2 * a)];

    const sqrtD = Math.sqrt(discriminant);

    return [
        (-b + sqrtD) / (2 * a),
        (-b - sqrtD) / (2 * a)
    ];
};

// Задача 2: ипотечный калькулятор

const calculateTotalMortgage = (percent, contribution, amount, countMonths) => {

  // Тело кредита = сумма кредита минус первоначальный взнос
  const creditBody = amount - contribution;

  // Если кредит 0 или меньше
  if (creditBody <= 0) {
    return 0;
  }

  // Месячная процентная ставка
  const monthlyRate = percent / 100 / 12;

  // Если ставка 0%
  if (monthlyRate === 0) {
    const monthlyPayment = creditBody / countMonths;

    // Общая сумма выплат
    const total = monthlyPayment * countMonths;

    // Округление до 2 знаков
    return Math.round(total * 100) / 100;
  }

  // Формула аннуитетного платежа
  const power = (1 + monthlyRate) ** countMonths;

  const monthlyPayment =
    creditBody * (monthlyRate * power) / (power - 1);

  // Общая сумма выплат
  const total = monthlyPayment * countMonths;

  // Округление до 2 знаков
  return Math.round(total * 100) / 100;
};


// Проверка
console.log(calculateTotalMortgage(10, 0, 50000, 12));      // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12));   // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24));      // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24));   // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24));  // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36));      // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36));      // 12479.52

