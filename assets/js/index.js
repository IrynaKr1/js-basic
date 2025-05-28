// 1
const a = 3;
const b = 5;
console.log('Результат множення:', a * b);

// 2
const c = 258;
const d = 4;
let result = c / d;
console.log('Результат ділення:', result);

// 3
const e = 13;
const f = 7;
result = e + f;
console.log('Результат додавання:', result);

// 4
const number = 11;
const boolean = true;
const string = 'java script';
const string1 = '100';
console.log(
  'Змінна number = 11, її тип це:',
  typeof number,
  '. Змінна boolean = true, її тип це:',
  typeof boolean,
  '. Змінна string = "java script", її тип це:',
  typeof string,
  '. Змінна string1 = "100", її тип це:',
  typeof string1
);

// 5
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;

// Завдання на введення/виведення

// 1)
/* const customerInput = prompt('Введіть число: ');
result = Math.pow(customerInput, 2);
alert(`${customerInput} до квадрату: ${result}`); */

// 2)
/* const customerNumber = Number(prompt('Введіть перше число: '));
const customerNumber1 = Number(prompt('Введіть друге число: '));
result = (customerNumber + customerNumber1) / 2;
console.log('Середнє арифметичне двох чисел', result); */

// 3)
/* const customerTime = Number(prompt('Введіть хвилини: '));
console.log(`${customerTime} хв, це`, customerTime * 60, 'секунд.'); */

// 4)
/* const greeting = 'Hello ';
const userName = prompt("Впишіть своє ім'я: ");
let userGreeting = greeting + userName;
console.log(userGreeting);
document.write('<p>' + userGreeting + '</p>'); */

// 5)

const firstName = prompt("Впишіть Ваше ім'я", 'anonimus');
const lastName = prompt('Впишіть Ваше прізвище', 'noname');
const email = prompt('Впишіть Ваш email', 'test@email.com');
const phoneNumber = prompt('Впишіть Ваш номер телефону', '+380671234567');
const years = prompt('Скільки Вам повних років?', '30');
const urlAdress = prompt(
  'Адреса зображення:',
  'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
);

const container = document.getElementById('userCard');

container.innerHTML = `
<img src="${urlAdress}" alt="Фото користувача">
<h2>${firstName} ${lastName}</h2>
<h3>${email}</h3>
<p>Телефон: ${phoneNumber}</p>
<p>Вік: ${years}</p>`;

