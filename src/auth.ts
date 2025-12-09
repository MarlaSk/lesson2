// import { createHash } from 'node:crypto';
//
// /*
// Вам необходимо разработать сервис для авторизации пользователей.
// Примерно такие же сервисы используются в большинстве Backend приложений.
//
// Вам нужно реализовать 2 функции:
// * register() - получает на вход данные типа RegisterData с указанием почты, пароля и имени человека.
// * login() - получает на вход данные типа LoginData с указанием почты и пароля.
//
// Каждый новый зарегистрированный пользователь получает свой id, используя faker.string.nanoid
//
// Данные пусть будут храниться в массиве database, представим что это наша "база данных"
//
// Пароль хранить в базе данных в "открытом" виде НЕБЕЗОПАСНО и на самом деле никто так не делает.
// Пароли всегда хранятся в захешированном виде (напр. библиотека bcrypt), но пока хватит примитивных
// методов хеширования - будем использовать sha256, я уже оставил вам функцию generateHash,
// в неё вы можете передать строку, а в ответе получите эту строку в захешированном виде.
//
// Если пользовать регистрируется, ему должно вывестись сообщение.
// Если происходит попытка входа для несуществующего пользователя, должно вывестить сообщение
//
// При 3-х ПОДРЯД неверный попытках ввода дальнейшие входы блокируются.
//
// Если пользователь ввел пароль неверный в первый или второй раз - вывести сообщение
// Если пользователь ввел пароль неверно в третий раз ПОДРЯД - сообщение с информацией о блокировке
//  */
//
// /**
//  * Функция для генерации хеша, на вход получает строку, на выход даёт её в хешированном виде
//  */
// function generateHash(rawText: string): string {
//   return createHash('sha256') // выбираем алгоритм SHA-256
//     .update(rawText) // обновляем хеш данными
//     .digest('hex'); // выводим результат в шестнадцатеричном формате
// }
//
// type User = {
//   id: string;
//   name: string;
//   email: string;
//   password: string;
//   count?: number;
// };
//
// type LoginData = {
//   email: string;
//   password: string;
// };
//
// type RegisterData = {
//   name: string;
//   email: string;
//   password: string;
// };
//
// const database: User[] = [];
//
// const register = (data: RegisterData) => {
//   for (const user of database) {
//     if (user.email === data.email) {
//       console.log('Пользователь уже существует');
//     }
//   }
//   database.push({ id: faker.string.uuid(), ...data, password: generateHash(data.password) });
//   console.log(`${data.name}, вы успешно зарегистрированы`);
//   return true;
// };
//
// const login = (data: LoginData) => {
//   for (const user of database) {
//     if (user.email === data.email) {
//       if (user.count && user.count >= 3) {
//         console.log('Вы заблокированы!');
//         return;
//       }
//
//       if (user.password === generateHash(data.password)) {
//         user.count = 0;
//         console.log(`Добро пожаловать, ${user.name}!`);
//         return;
//       }
//       user.count = (user.count || 0) + 1;
//
//       if (user.count === 3) {
//         console.log('Неверный пароль! Вы заблокированы!');
//       } else {
//         console.log('Неверный пароль!');
//       }
//       return;
//     }
//   }
//
//   console.log('Пользователь не найден!');
// };
//
// /**
//  * Ниже идут примеры использования ваших функций
//  */
//
// const maxim: RegisterData = { name: 'maxim', email: 'maxim@gmail.com', password: '123456' };
// const mihail: RegisterData = { name: 'mihail', email: 'mihail@gmail.com', password: '223223' };
//
// register(maxim); // maxim, вы успешно зарегистрированы, ваш id - jYhvZ!
// register(mihail); // mihail, вы успешно зарегистрированы, ваш id - oPgxU!
//
// /**
//  * Проверяем Максима, он должен на первый раз успешно войти,
//  * а дальше за 3 неверных входа заблокироваться
//  */
// console.log('Проверка Максима:');
// const maximLoginData: LoginData = { ...maxim };
//
// login(maximLoginData); // Добро пожаловать, maxim
//
// maximLoginData.password = '--';
//
// login(maximLoginData); // Неверный пароль!
// login(maximLoginData); // Неверный пароль!
// login(maximLoginData); // Неверный пароль! Вы заблокированы!
//
// maximLoginData.password = '123456';
// login(maximLoginData); // Вы заблокированы!
// login(maximLoginData); // Вы заблокированы!
//
// /**
//  * Проверяем Михаила, счетчик его неверных попыток входа должен сбрасываться
//  * Блокировка не должна происходить
//  */
// console.log('\n\nПроверка Михаила:');
// const mihailLoginData: RegisterData = { ...mihail };
//
// login(mihailLoginData); // Добро пожаловать, mihail
//
// mihailLoginData.password = '-';
// login(mihailLoginData); // Неверный пароль!
// login(mihailLoginData); // Неверный пароль!
//
// mihailLoginData.password = mihail.password;
//
// login(mihailLoginData); // Добро пожаловать, mihail
//
// mihailLoginData.password = '-';
// login(mihailLoginData); // Неверный пароль!
// login(mihailLoginData); // Неверный пароль!
//
// mihailLoginData.password = mihail.password;
//
// login(mihailLoginData); // Добро пожаловать, mihail
//
// /**
//  * Проверяем несуществующего пользователя
//  */
// console.log('Проверяем несуществующего пользователя:');
// login({ email: 'a@a.a', password: 'a' }); // Пользователь не найден!

// Создайте любой осмысленный тип, у которого одно из полей является опциональным, которое может принимать значения типа string и null

// type Person = { name: string; email?: string | null };
//
// const obj1: Person = { name: 'Анна' };
// const obj2: Person = { name: 'Борис', email: null };
// const obj3: Person = { name: 'Виктор', email: '' };
// const obj4: Person = { name: 'Галина', email: 'galina@mail.ru' };
//
// console.log((obj1.email ?? 'не обнаружено') || 'не обнаружено');
// console.log((obj2.email ?? 'не обнаружено') || 'не обнаружено');
// console.log((obj3.email ?? 'не обнаружено') || 'пусто');
// console.log((obj4.email ?? 'не обнаружено') || 'не обнаружено');

// Чек в магазине

type User = {
  id: number;
  name?: string;
  email: string;
};

type Item = {
  id: number;
  name: string;
  price: number;
  count?: number; // Если count не указан, по умолчанию считать количество 1
};

type DiscountCard = {
  id: number;
  series: number;
};

type Order = {
  id: number;
  user: User | null;
  card: DiscountCard | null;
  items: Item[];
};

const printReceipt = (order: Order) => {
  console.log(`Заказ #${order.id}\n------------`);

  console.log(
    order.user
      ? `Клиент:\nid: ${order.user.id}\nимя: ${order.user.name || 'Не указано'}\nemail: ${order.user.email}`
      : 'Клиент: Не указан',
  );

  console.log('------------');

  console.log(
    order.card
      ? `Скидочная карта:\nid: ${order.card.id}\nномер: ${order.card.series}`
      : 'Скидочная карта: Не применена',
  );

  console.log('------------\nСписок покупок:');

  order.items.forEach((item) => {
    const count = item.count || 1;
    const price = `${item.price}руб`;
    console.log(`- ${item.name} ${price} ${count}шт`);
  });

  console.log('------------');

  const totalItems = order.items.reduce((sum, item) => sum + (item.count || 1), 0);
  const totalPrice = order.items.reduce((sum, item) => sum + item.price * (item.count || 1), 0);

  console.log(`Итого ${totalItems} позиций на ${totalPrice}`);
};

const order1: Order = {
  id: 3,
  user: {
    id: 5,
    email: 'example@domain.com',
  },
  card: null,
  items: [
    { id: 6, name: 'Хлеб', price: 75, count: 3 },
    { id: 9, name: 'Вафли', price: 95.9, count: 1 },
    { id: 12, name: 'Набор конфет', price: 350 },
  ],
};

const order2: Order = {
  id: 3,
  user: null,
  card: null,
  items: [
    { id: 6, name: 'Хлеб', price: 75, count: 3 },
    { id: 9, name: 'Вафли', price: 95.9, count: 1 },
    { id: 12, name: 'Набор конфет', price: 350 },
  ],
};

const order3: Order = {
  id: 3,
  user: {
    id: 5,
    name: 'Алексей',
    email: 'example@domain.com',
  },
  card: { id: 8, series: 6374634 },
  items: [
    { id: 6, name: 'Хлеб', price: 75, count: 3 },
    { id: 9, name: 'Вафли', price: 95.9, count: 1 },
    { id: 12, name: 'Набор конфет', price: 350 },
  ],
};

printReceipt(order1);
printReceipt(order2);
printReceipt(order3);
