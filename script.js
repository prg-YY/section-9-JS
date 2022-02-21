'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sund'];

const openingHours = {
  [weekdays[3]]: {
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 12,
    open: 0, //Open 24hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `order received:${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1} and ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////play with Array -part-3
//split and join
console.log('a+very+nice+string'.split('+'));
console.log('Josub Jacob'.split(' '));

const [firstName, lastName] = 'Josub Jacob'.split(' ');
console.log(firstName);
console.log(lastName);
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = name => {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('adil ahmet batur jacob josub iskender');

//Padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(38, '-'));
console.log('Josub'.padStart(25, '+').padEnd(38, '-'));

const maskCreditCard = number => {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(314534645331224));

// Repeat

const message2 = 'Bad weather... All Departrues Delayed....\n';
console.log(message2.repeat(15));

const planesInLine = n => {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(8);
planesInLine(12);

/////play with Array -  Part - 2
// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// //Fix capitalization in name
// const passenger = 'josUb'; //josub

// console.log(passenger);
// const passengerLower = passenger.toLowerCase();
// console.log(passengerLower);
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //Check Email
// const email = 'hello@josub.io';
// const loginEmail = '    Hello@Josub.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// console.log(lowerEmail);
// const fixEmail = lowerEmail.slice(4);
// console.log(fixEmail);
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizeEmail = loginEmail.toLowerCase().trim();
// console.log(normalizeEmail);
// console.log(email === normalizeEmail);

// //replacing the email
// const priceGB = '288,97£';
// console.log(priceGB);
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// //new way
// console.log(announcement.replaceAll('door', 'gate'));
// //old way
// console.log(announcement.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// //Prictice Exercise
// const checkBaggage = items => {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };
// checkBaggage('I have a laptop . some food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

//play with Array Part-1 ////////////
// const airline = 'TAp Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seat
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got middle seat 😁');
//   else console.log('You got lucky🥳');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// console.log(typeof new String('jonas').slice(1));

// const question = new Map([
//   ['quastion', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try Again'],
// ]);
// console.log(question);

// //Convert object to map
// console.log(Object.entries(openingHours));
// const hourMap = new Map(Object.entries(openingHours));
// console.log(hourMap);

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

//Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log(...[question.keys()]);
// console.log(...[question.values()]);

////////////Map////////////////////////////////////////

// const ordersSet = new Set([
//   'Pizza',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('Josub'));

// console.log(ordersSet.size);

// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Kemput'));
// ordersSet.add('Kemput');
// ordersSet.delete('Pizza');
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('josubjacob').size);

// const rest = new Map();
// rest.set('name', 'Classico italiano');
// rest.set(2, 'Firenze', 'Italy');
// console.log(rest.set('City', 'Lisbon,Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzaria', 'Vegetatian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are close :D');
// console.log(rest.get('City'));
// console.log(rest.get(true));

// const time = 22;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// console.log(rest);
// console.log(rest.size);

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));

///////////////////////////////////////////////////////
// //Properties Name
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// //Properties Name
// const values = Object.values(openingHours);
// console.log(...values);

// //Properties Entries
// const entries = Object.entries(openingHours);
// console.log(...entries);

// for (const x of entries) {
//   console.log(...x);
// }
// /////////////////////////////////////////////////////////////////////////////////
// //[Key,value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
/////////////////////////////////////////////////////////////////////////////////

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

//with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sund'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} ,we open at  ${open}`);
// }

//Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// //Arrays
// const users = [
//   {
//     name: 'Josub',
//     email: 'josub@gmail.com',
//   },
// ];
// console.log(users[0]?.name ?? 'user array empity');

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empity');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }
// console.log(...menu.entries());

// const rest1 = {
//   name: 'Carpi',
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// //OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// //Nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

/////////////////////////////////////////////////////////////

// restaurant.numGuests = 0;
// const guests = restaurant.numguests || 10;
// console.log(guests);

// //Nullish null and undifined (Not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// // 1)Destructuring
// //Speread,because on right side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// //Rest,because on Left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'alives', 'spinach');

// restaurant.orderPizza('mushrooms');

// console.log('-----OR------');
// //Use any data type, return ANY data type,short-circuting
// console.log(3 || 'Josub');
// console.log('' || 'Josub');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || '' || 0 || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('-----And------');

// console.log(0 && 'Yusuf');
// console.log(7 && 'Yusuf');
// console.log('Hello' && 22 && null && 'Yusuf');

// //practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

////////////////////////////////////////////////////////////////
//spread Operator(...)

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy array of
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //Iterables: arrays,strings,maps,sets,Not objects
// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2'),
//   // prompt('Ingredient 3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// //Objects

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Yusuf' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Risorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////
//Destructuring Objects
// restaurant.orderDelivery({
//   time: '22.30',
//   address: 'Via del Sole,21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name: testuarantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(testuarantName, hours, tags);

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// //Nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// //switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
