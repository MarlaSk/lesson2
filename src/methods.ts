// Умный поиск в массиве
// const storage = [
//   { age: 10, name: 'Alex' },
//   { age: 20, name: 'Max' },
//   { age: 30, name: 'Jake' },
//   { age: 40, name: 'Lilo' },
// ];
//
// const smartSearch = (arr: any[], property: any, value: any) => {
//   return arr.find((item) => item[property] === value);
// };
//
// const person1 = smartSearch(storage, 'age', 30);
//
// const person2 = smartSearch(storage, 'age', 10);
//
// const person3 = smartSearch(storage, 'name', 'Lilo');
//
// console.log(person1);
// console.log(person2);
// console.log(person3);
//
// const person4 = smartSearch(storage, 'name', 'John');
// console.log(person4);

// Рандомный фильтр

// const filterWithChance = (arr: number[], chance: number) => {
//   return arr.filter(() => Math.random() * 100 < chance);
// };
//
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = filterWithChance(numbers, 100);
// console.log(result);

// Совершеннолетний владельцы авто

// type Users = {
//   id: number;
//   name: string;
//   age: number;
// };
//
// type Car = {
//   id: number;
//   title: string;
//   vin: string;
//   serial: string;
//   pts: Pts;
// };
//
// type Pts = {
//   id: number;
//   vin: string;
//   owners: Users[];
// };
//
// const prius: Car = {
//   id: 38,
//   title: 'Toyota Prius',
//   vin: 'JTDKARFP9L3128187',
//   serial: 'А777МР97',
//   pts: {
//     id: 849325,
//     vin: 'JTDKARFP9L3128187',
//     owners: [
//       { id: 3401, name: 'Лёха Перекуп', age: 35 },
//       { id: 1946, name: 'Вячеслав', age: 14 },
//       { id: 9613, name: 'Стас', age: 7 },
//       { id: 9613, name: 'Татьяна', age: 18 },
//       { id: 6542, name: 'Стас друг Лёхи Перекупа', age: 73 },
//       { id: 6542, name: 'Валентин', age: 73 },
//     ],
//   },
// };
//
// const adultOwners = (car: Car) => {
//   const owners = car.pts.owners.filter((owner) => {
//     return owner.age >= 18;
//   });
//
//   return `Автомобиль "${car.title}"
// VIN: ${car.vin}
// Гос. номер: ${car.serial}
// Совершеннолетние владельцы: ${owners.map((owner) => owner.name + ` (${owner.age})`)}`;
// };
//
// const res = adultOwners(prius);
// console.log(res);

// Отбор участников

// enum Team {
//   red = 'red',
//   blue = 'blue',
// }
//
// type User = {
//   id: number;
//   name: string;
//   age: number;
// };
//
// type ProcessedUser = {
//   name: string;
//   isAdult: boolean;
//   team: Team;
// };
//
// const users: User[] = [
//   { id: 7, name: 'Александр Сильвестрович', age: 17 },
//   { id: 17, name: 'Райан Сергеевич Гослинг', age: 18 },
//   { id: 27, name: 'Джейсон Райанович Стетхем', age: 19 },
//   { id: 37, name: 'Имя не указано', age: 8 },
// ];
//
// const processUsers = (users: User[]): ProcessedUser[] => {
//   return users
//     .filter((user) => user.age >= 18)
//     .map((user) => ({
//       name: user.name,
//       isAdult: true,
//       team: Math.random() < 0.5 ? Team.red : Team.blue,
//     }));
// };
//
// const processed: ProcessedUser[] = processUsers(users);
//
// console.log(processed);

// function getLongestString(strings: string[]): string {
//   return strings.reduce((longest: string, current: string) => {
//     return current.length > longest.length ? current : longest;
//   }, '');
// }
//
// console.log(getLongestString(['яблоко', 'апельсин', 'банан']));
// console.log(getLongestString(['', 'а', 'аб', 'абв']));

// function deduplicate(str: string): string {
//   return str.split('').reduce((result: string, currentChar: string): string => {
//     if (result[result.length - 1] !== currentChar) {
//       return result + currentChar;
//     }
//
//     return result;
//   }, '');
// }
//
// const result = deduplicate('uuunbbeliaaaaveeabbbblllllee');
// console.log(result);

// enum Ex {
//   R = 'Русский язык',
//   MP = 'Профильная алгебра',
//   C = 'Химия',
//   P = 'Физика',
//   I = 'Информатика',
// }
//
// type ExamResult = {
//   name: Ex;
//   score: number;
// };
//
// type User = {
//   id: number;
//   name: string;
//   exams: ExamResult[];
// };
//
// type University = {
//   id: number;
//   name: string;
//   exams: Ex[];
//   topPercent: number;
// };
//
// const cyber: University = {
//   id: 2077,
//   name: 'Cyberuniversity',
//   exams: [Ex.MP, Ex.I, Ex.P],
//   topPercent: 40,
// };
//
// const chemi: University = {
//   id: 228,
//   name: 'Chemiuniversity',
//   exams: [Ex.MP, Ex.R, Ex.C],
//   topPercent: 35,
// };
//
// const processCandidates = (university: University, applicants: User[]): void => {
//   console.log(`---------- Информация о поступлении в ${university.name} ----------`);
//   console.log(`Для поступления требуются экзамены: ${university.exams.join(', ')}`);
//   console.log(`Всего подали документы ${applicants.length} студентов`);
//
//   type StudentResult = {
//     studentName: string;
//     examScore: number;
//   };
//
//   const suitableStudents = applicants.reduce((result: StudentResult[], applicant: User) => {
//     if (applicant.exams.length < university.exams.length) {
//       return result;
//     }
//
//     const requiredScores = applicant.exams.reduce((scores: number[], exam) => {
//       if (university.exams.includes(exam.name)) {
//         scores.push(exam.score);
//       }
//       return scores;
//     }, []);
//
//     if (requiredScores.length !== university.exams.length) {
//       return result;
//     }
//
//     const total = requiredScores.reduce((sum, score) => sum + score, 0);
//
//     result.push({
//       studentName: applicant.name,
//       examScore: total,
//     });
//
//     return result;
//   }, []);
//
//   const acceptedNumber = Math.ceil((suitableStudents.length * university.topPercent) / 100);
//   console.log(
//     `Сдавали нужные экзамены ${suitableStudents.length}/${applicants.length} кандидатов.\n` +
//       `Университет готов принять ${university.topPercent}% лучших из них, то есть ${acceptedNumber} студента(ов)`,
//   );
//
//   suitableStudents.sort((a, b) => b.examScore - a.examScore);
//
//   const enrolled = suitableStudents.slice(0, acceptedNumber);
//
//   if (enrolled.length > 0) {
//     console.log(`Будут зачислены следующие студенты:`);
//     enrolled.forEach((student) => {
//       console.log(` * ${student.studentName} (${student.examScore})`);
//     });
//   }
//
//   console.log(`----------------------------------------------------------------`);
//   console.log();
// };
//
// /* eslint-disable */
// const users: User[] = [
//   {
//     id: 4321,
//     name: 'Максим',
//     exams: [{ name: Ex.MP, score: 75 }, { name: Ex.P, score: 68 }, { name: Ex.R, score: 82 }],
//   },
//   {
//     id: 187,
//     name: 'Алексей',
//     exams: [{ name: Ex.MP, score: 55 }, { name: Ex.I, score: 90 }, { name: Ex.C, score: 40 }, { name: Ex.R, score: 70 }],
//   },
//   {
//     id: 3298,
//     name: 'Дмитрий',
//     exams: [{ name: Ex.C, score: 45 }, { name: Ex.MP, score: 65 }, { name: Ex.P, score: 72 }, { name: Ex.I, score: 88 }],
//   },
//   {
//     id: 450,
//     name: 'Иван',
//     exams: [{ name: Ex.R, score: 33 }, { name: Ex.C, score: 71 }, { name: Ex.MP, score: 80 }, { name: Ex.P, score: 59 }],
//   },
//   {
//     id: 2947,
//     name: 'Константин',
//     exams: [{ name: Ex.MP, score: 90 }, { name: Ex.I, score: 60 }, { name: Ex.C, score: 50 }],
//   },
//   {
//     id: 1376,
//     name: 'Анна',
//     exams: [{ name: Ex.R, score: 88 }, { name: Ex.MP, score: 70 }, { name: Ex.P, score: 43 }, { name: Ex.C, score: 38 }],
//   },
//   {
//     id: 4999,
//     name: 'Татьяна',
//     exams: [{ name: Ex.MP, score: 77 }, { name: Ex.R, score: 66 }, { name: Ex.I, score: 95 }, { name: Ex.P, score: 64 }, { name: Ex.C, score: 85 }],
//   },
//   {
//     id: 2103,
//     name: 'Владимир',
//     exams: [{ name: Ex.C, score: 49 }, { name: Ex.R, score: 70 }, { name: Ex.MP, score: 90 }, { name: Ex.I, score: 55 }],
//   },
//   {
//     id: 765,
//     name: 'Елена',
//     exams: [{ name: Ex.R, score: 94 }, { name: Ex.MP, score: 67 }, { name: Ex.P, score: 85 }],
//   },
//   {
//     id: 3822,
//     name: 'Сергей',
//     exams: [{ name: Ex.P, score: 76 }, { name: Ex.MP, score: 82 }, { name: Ex.I, score: 70 }, { name: Ex.C, score: 65 }],
//   },
//   {
//     id: 154,
//     name: 'Наталья',
//     exams: [{ name: Ex.R, score: 61 }, { name: Ex.C, score: 55 }, { name: Ex.MP, score: 52 }, { name: Ex.P, score: 58 }],
//   },
//   {
//     id: 2678,
//     name: 'Екатерина',
//     exams: [{ name: Ex.P, score: 86 }, { name: Ex.MP, score: 91 }, { name: Ex.R, score: 72 }, { name: Ex.I, score: 78 }],
//   },
//   {
//     id: 4815,
//     name: 'Марина',
//     exams: [{ name: Ex.I, score: 99 }, { name: Ex.MP, score: 85 }, { name: Ex.R, score: 63 }],
//   },
//   {
//     id: 394,
//     name: 'Михаил',
//     exams: [{ name: Ex.P, score: 60 }, { name: Ex.MP, score: 45 }, { name: Ex.R, score: 48 }],
//   },
//   {
//     id: 2567,
//     name: 'Андрей',
//     exams: [{ name: Ex.C, score: 85 }, { name: Ex.I, score: 88 }, { name: Ex.MP, score: 65 }, { name: Ex.R, score: 55 }],
//   },
//   {
//     id: 3201,
//     name: 'Юлия',
//     exams: [{ name: Ex.R, score: 72 }, { name: Ex.C, score: 49 }, { name: Ex.P, score: 70 }],
//   },
//   {
//     id: 987,
//     name: 'Павел',
//     exams: [{ name: Ex.MP, score: 93 }, { name: Ex.P, score: 81 }, { name: Ex.I, score: 77 }],
//   },
//   {
//     id: 4367,
//     name: 'Ольга',
//     exams: [{ name: Ex.R, score: 88 }, { name: Ex.P, score: 69 }, { name: Ex.C, score: 74 }, { name: Ex.I, score: 50 }, { name: Ex.MP, score: 60 }],
//   },
// ];
// /* eslint-enable */
//
// processCandidates(cyber, users);
// processCandidates(chemi, users);

const values: [number, number][] = [
  [1, 100],
  [2, 200],
  [3, 300],
  [1, 2],
  [3, 400],
  [4, 500],
  [1, 99],
];

interface GradeStats {
  count: number;
  sum: number;
}

const result = values.reduce((acc: Record<number, GradeStats>, item: [number, number]) => {
  const grade = item[0];
  const students = item[1];

  if (!acc[grade]) {
    acc[grade] = { count: 0, sum: 0 };
  }

  acc[grade] = {
    count: acc[grade].count + 1,
    sum: acc[grade].sum + students,
  };

  return acc;
}, {});

console.log(result);
