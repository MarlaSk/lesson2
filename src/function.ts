// Снятие наличных
type CallbackFn = (text: string) => void;

type Card = {
  no: string;
  pin: number;
  balance: number;
  badTries: number;
  active: boolean;
};

const red = (text: string) => `\x1b[31m${text}\x1b[0m`;
const green = (text: string) => `\x1b[32m${text}\x1b[0m`;
const blue = (text: string) => `\x1b[34m${text}\x1b[0m`;
const magenta = (text: string) => `\x1b[35m${text}\x1b[0m`;

const database: Card[] = [
  { no: '4276 1234 5678 9101', pin: 1234, balance: 15000, badTries: 0, active: true },
  { no: '4214 5678 9101 1121', pin: 5678, balance: 23000, badTries: 0, active: true },
  { no: '4376 1111 2222 3333', pin: 4321, balance: 5000, badTries: 0, active: true },
  { no: '4276 4444 5555 6666', pin: 8765, balance: 12000, badTries: 0, active: true },
  { no: '4214 7777 8888 9999', pin: 1357, balance: 32000, badTries: 0, active: true },
];

const separator = () => console.log('---');

const logRed: CallbackFn = (msg: string) => {
  const timestamp = new Date().toISOString().slice(0, 23) + '2';
  console.log(blue(timestamp), magenta('ERROR'), red(msg));
};

const logGreen: CallbackFn = (msg: string) => {
  const timestamp = new Date().toISOString().slice(0, 23) + '2';
  console.log(blue(timestamp), magenta('INFO'), green(msg));
};

export const withdraw = (
  cardNumber: string,
  pinCode: number,
  amount: number,
  successCallback: CallbackFn,
  errorCallback: CallbackFn,
) => {
  const MAX_INCORRECT_ATTEMPTS = 3;

  const card = database.find((c) => c.no === cardNumber);

  if (!card || !card.active) {
    errorCallback('Карта не обслуживается!');
    return;
  }

  if (card.pin !== pinCode) {
    card.badTries++;

    if (card.badTries >= MAX_INCORRECT_ATTEMPTS) {
      card.active = false;
      errorCallback('Карта заблокирована!');
    } else {
      errorCallback('PIN неверный!');
    }
    return;
  }

  card.badTries = 0;

  if (card.balance < amount) {
    errorCallback('Недостаточно средств!');
    return;
  }

  card.balance -= amount;

  successCallback(`Снятие наличных ${amount} руб. Баланс: ${card.balance} руб`);
};

console.log('Проверка на реальное снятие баланса');
withdraw('4276 1234 5678 9101', 1234, 14000, logGreen, logRed);
withdraw('4276 1234 5678 9101', 1234, 500, logGreen, logRed);
withdraw('4276 1234 5678 9101', 1234, 501, logGreen, logRed);

separator();

console.log('Проверка на несуществующую карту');
withdraw('1111 2222 3333 4444', 1234, 501, logGreen, logRed);

separator();

console.log('Проверка, что карта блокируется после трех неправильных вводов PIN');
withdraw('4276 4444 5555 6666', 1111, 1, logGreen, logRed);
withdraw('4276 4444 5555 6666', 1111, 1, logGreen, logRed);
withdraw('4276 4444 5555 6666', 1111, 1, logGreen, logRed);
withdraw('4276 4444 5555 6666', 8765, 1, logGreen, logRed);

separator();

console.log('Проверка, что счётчик неправильных попыток сбрасывается после правильного PIN');
const a = 16000;
withdraw('4214 7777 8888 9999', 1111, a, logGreen, logRed);
withdraw('4214 7777 8888 9999', 1111, a, logGreen, logRed);
withdraw('4214 7777 8888 9999', 1357, a, logGreen, logRed);
withdraw('4214 7777 8888 9999', 1111, a, logGreen, logRed);
withdraw('4214 7777 8888 9999', 1111, a, logGreen, logRed);
withdraw('4214 7777 8888 9999', 1357, a, logGreen, logRed);
