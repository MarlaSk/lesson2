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

function isTwins(num1: number, num2: number): boolean {
  let reversed = 0;
  let temp = num1;

  while (temp > 0) {
    const digit = temp % 10;
    reversed = reversed * 10 + digit;
    temp = Math.floor(temp / 10);
  }

  return reversed === num2;
}

console.log(isTwins(123, 321));
console.log(isTwins(123456789, 987654322));
