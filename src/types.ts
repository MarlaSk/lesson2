// import { faker } from '@faker-js/faker';
// type Pet = {
//   name: string;
//   species: string;
//   breed: string;
// };
//
// type Job = {
//   city: string;
//   company: string;
//   position: string;
//   salary: number;
//   currency: string;
// };
//
// type Address = {
//   street: string;
//   city: string;
//   state: string;
//   zipCode: string;
//   country: string;
// };
//
// type User = {
//   id: string;
//   name: string;
//   age: number;
//   address: Address;
//   pet: Pet;
//   job: Job;
// };
//
// const generateUser = (): User => ({
//   id: faker.string.uuid(),
//   name: faker.person.fullName(),
//   age: faker.number.int({ min: 18, max: 80 }),
//   address: {
//     street: faker.location.streetAddress(),
//     city: faker.location.city(),
//     state: faker.location.state(),
//     zipCode: faker.location.zipCode(),
//     country: faker.location.country(),
//   },
//   pet: {
//     name: faker.person.firstName(),
//     species: faker.animal.type(),
//     breed: faker.animal.dog(),
//   },
//   job: {
//     city: faker.location.city(),
//     company: faker.company.name(),
//     position: faker.person.jobTitle(),
//     salary: faker.number.float({ min: 30000, max: 200000, fractionDigits: 2 }),
//     currency: faker.finance.currencyCode(),
//   },
// });
//
// const user = generateUser();
// console.log(user);

// Роли

// export type UserRole = 'admin' | 'guest' | 'user' | 'moderator';
//
// type User = {
//   id: string;
//   email: string;
//   password: string;
//   role: UserRole;
// };
//
// function generateRandomUser(n: number): User[] {
//   const roles: UserRole[] = ['admin', 'guest', 'moderator', 'user'];
//
//   const users: User[] = [];
//
//   for (let i = 0; i < n; i++) {
//     users.push({
//       id: faker.string.uuid(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//       role: faker.helpers.arrayElement(roles),
//     });
//   }
//
//   return users;
// }
//
// function filterByRole(users: User[], role: UserRole): User[] {
//   return users.filter((user) => user.role === role);
// }
//
// const users = generateRandomUser(10);
// console.log('Все пользователи:', users);
//
// const guestUsers = filterByRole(users, 'guest');
// console.log('\nПользователи с ролью "guest":', guestUsers);

// Разница зарплат по отделу

// type Person = {
//   name: string;
//   salary: number;
// };
//
// type Department = {
//   title: string;
//   persons: Person[];
// };
//
// const analyze = (department: Department): void => {
//   if (department.persons.length === 0) {
//     console.log(`В отделе "${department.title}" нет сотрудников.`);
//     return;
//   }
//
//   const maxSalaryPerson = department.persons.reduce((max, person) => (person.salary > max.salary ? person : max));
//
//   const minSalaryPerson = department.persons.reduce((min, person) => (person.salary < min.salary ? person : min));
//
//   const differencePercent =
//     minSalaryPerson.salary === 0
//       ? 0
//       : ((maxSalaryPerson.salary - minSalaryPerson.salary) / minSalaryPerson.salary) * 100;
//
//   const formatSalary = (salary: number): string => {
//     if (salary >= 1000) {
//       const thousands = salary / 1000;
//       return thousands % 1 === 0 ? `${thousands}` : `${thousands.toFixed(1)}`;
//     }
//     return salary.toString();
//   };
//
//   const salaryUnit = maxSalaryPerson.salary >= 1000 ? 'тыс рублей' : 'рублей';
//
//   const message = `В отделе "${department.title}" самая высокая зарплата у "${maxSalaryPerson.name}" - ${formatSalary(maxSalaryPerson.salary)} ${salaryUnit}, что на +${differencePercent.toFixed(1)}% больше, чем зарплата "${minSalaryPerson.name}" - ${formatSalary(minSalaryPerson.salary)} ${salaryUnit}.`;
//
//   console.log(message);
// };
//
// const dep1: Department = {
//   title: 'Бухгалтерия',
//   persons: [
//     { name: 'Иван', salary: 80000 },
//     { name: 'Михаил', salary: 72500 },
//     { name: 'Олег', salary: 65000 },
//     { name: 'Елена', salary: 50000 },
//   ],
// };
//
// // В отделе "Бухгалтерия" самая высокая зарплата у "Иван" - 80 тыс рублей, что на +60% больше, чем зарплата "Елена" - 50 тыс рублей.
// analyze(dep1);
//
// const dep2: Department = {
//   title: 'Столовая',
//   persons: [{ name: 'Валентин', salary: 280000 }],
// };
//
// // В отделе "Столовая" самая высокая зарплата у "Валентин" - 280 тыс рублей, что на +0% больше, чем зарплата "Валентин" - 280 тыс рублей.
// analyze(dep2);
//
// const dep3: Department = {
//   title: 'Столовая',
//   persons: [
//     { name: 'Саша', salary: 101800 },
//     { name: 'Маша', salary: 100000 },
//   ],
// };
//
// // В отделе "Столовая" самая высокая зарплата у "Саша" - 101.8 тыс рублей, что на +1.8% больше, чем зарплата "Маша" - 100 тыс рублей.
// analyze(dep3);
