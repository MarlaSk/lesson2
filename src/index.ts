// Создайте такой тип A, при котором фрагмент кода ниже успешно запустится без ошибок:

// type A = {
//   age?: number | string;
//   nick: string;
//   info: number[] | { id: number } | string[] | Record<string, string>;
//   photo?: string | null;
// };
//
// const a1: A = {
//   age: 10,
//   nick: 'mynick',
//   info: [1, 100],
//   photo: 'string',
// };
//
// const a2: A = {
//   age: '10 years',
//   nick: '',
//   info: { id: 100 },
//   photo: null,
// };
//
// const a3: A = {
//   nick: '       ',
//   info: ['secret', 'key'],
// };
//
// const a4: A = {
//   nick: '',
//   info: {},
// };

// Напишите функцию, которая на вход получает массив объектов и выдает сумму значений всех полей всех объектов.
// Гарантируется, что в объекте будут содержаться только числа.
// Для типизации входных данных используйте Record

// function func(arr: Record<string, number>[]): number {
//   return arr.reduce((totalSum, obj) => {
//     const objectSum = Object.values(obj).reduce((sum, value) => sum + value, 0);
//     return totalSum + objectSum;
//   }, 0);
// }
//
// console.log(func([{ a: 20, b: 30 }, {}, { a: 3 }, { x: 5 }]));

// function isPalindrome(str: string): boolean {
//   return str === str.split('').reverse().join('');
// }
//
// console.log(isPalindrome('топот'));

// function isTwins(num1: number, num2: number): boolean {
//   let reversed = 0;
//   let temp = num1;
//
//   while (temp > 0) {
//     const digit = temp % 10;
//     reversed = reversed * 10 + digit;
//     temp = Math.floor(temp / 10);
//   }
//
//   return reversed === num2;
// }
//
// console.log(isTwins(123, 321));
// console.log(isTwins(123456789, 987654322));

// const intersection = (arr1: number[], arr2: number[]) => {
//   const arr3 = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         arr3.push(arr2[j]);
//       }
//     }
//   }
//   return arr3;
// };
//
// const size = 100000;
//
// // от 1 до 100.001
// const array = Array.from({ length: size }, (_, index) => index + 2);
//
// // от 100.000 до 200.001
// const array2 = Array.from({ length: size }, (_, index) => index + size);
//
// // 👆 Они пересекаются двумя числами - [ 100.000, 100.001 ]
//
// console.log('Начало V1');
// const start = new Date().getTime();
// console.log(intersection(array, array2));
// console.log(`Конец V1. Ушло ${new Date().getTime() - start} ms\n\n\n`);

// Напишите функцию, которая принимает на вход число,
// а возвращает true / false - является ли число степенью двойки.

// const a = (num: number) => {
//   while (num > 1) {
//     if (num % 2 !== 0) return false;
//     num = num / 2;
//   }
//   return true;
// };
// console.log(a(8));

// Напишите функцию, которая получает на вход число,
// а возвращает наибольший делитель (НД) для этого числа.

const b = (num: number) => {
  for (let i = Math.floor(num / 2); i >= 0; i--) {
    if (num % i === 0) {
      return i;
    }
  }
  return 1;
};

console.log(b(18));
console.log(b(21));
console.log(b(11));
