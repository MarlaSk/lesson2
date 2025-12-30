// /*
// Напишите функцию joinWithCase(words, usingCase), которая получает на вход 2 аргумента:
// 1. words - массив слов, которые необходимо объединить в одно слово
// 2. usingCase - название регистра, используя который необходимо объединить слова в одно
//
// Функция должна поддерживать 4 вида регистров:
// * PascalCase - первое и каждое новое слово с большой буквы
// * camelCase - первое слово с маленькой буквы, каждое следующее с большой
// * snake_case - каждое слово маленькими буквами через нижнее подчеркивание
// * kebab-case - каждое слово маленькими буквами через тире
//
// Пример использования этой функции приведён ниже
// */
//
// const joinWithCase = (words: string[], usingCase: string): string => {
//   const lowerWords = words.map((word) => word.toLowerCase());
//
//   switch (usingCase) {
//     case 'snake_case':
//       return lowerWords.join('_');
//
//     case 'kebab-case':
//       return lowerWords.join('-');
//
//     case 'PascalCase':
//       return lowerWords.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
//
//     case 'camelCase':
//       return lowerWords
//         .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
//         .join('');
//
//     default:
//       throw new Error(`Unknown case: ${usingCase}`);
//   }
// };
//
// // Тесты
// const testCase1 = ['пример'];
//
// console.log(joinWithCase(testCase1, 'PascalCase')); // Пример
// console.log(joinWithCase(testCase1, 'camelCase')); // пример
// console.log(joinWithCase(testCase1, 'snake_case')); // пример
// console.log(joinWithCase(testCase1, 'kebab-case')); // пример
//
// const testCase2 = ['Зеленый', 'СВЕТОФОР'];
//
// console.log(joinWithCase(testCase2, 'PascalCase')); // ЗеленыйСветофор
// console.log(joinWithCase(testCase2, 'camelCase')); // зеленыйСветофор
// console.log(joinWithCase(testCase2, 'snake_case')); // зеленый_светофор
// console.log(joinWithCase(testCase2, 'kebab-case')); // зеленый-светофор
//
// const testCase3 = ['ГОРячиЙ', 'соЧНый', 'ШашлЫК'];
//
// console.log(joinWithCase(testCase3, 'PascalCase')); // ГорячийСочныйШашлык
// console.log(joinWithCase(testCase3, 'camelCase')); // горячийСочныйШашлык
// console.log(joinWithCase(testCase3, 'snake_case')); // горячий_сочный_шашлык
// console.log(joinWithCase(testCase3, 'kebab-case')); // горячий-сочный-шашлык
