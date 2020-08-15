
const arr = [-246,753,-468,475,-683,476,-583,746,-581];

const arr_filter = arr.filter(el => el < 0).sort((a, b) => a - b);

console.log(`Исходный массив: ${arr}`);

console.log(`Массив отрицательных элементов: ${arr_filter}`);

console.log(`Измененный массив (реверс): ${arr.reverse()}`);

arr.reverse(); 

const arr_mass = arr.map((el) => el / 2);

console.log(`Массив из элементов деленных на два: ${arr_mass}`);

const arr_math = arr.filter(el => el % 2 != 0).reduce((acc, el) => acc + el);

console.log(`Сумма нечетных элементов массива: ${arr_math}`);

const users = [
   {
   name: 'John', 
   age: 21,
   },
   {
   name: 'Mary',
   age: 15,
   },
   {
   name: 'Alex',
   age: 27,
   },
   {
   name: 'John',
   age: 18,
   },
];

const sort_name = users.sort((prev, next) => {
   if ( prev.name < next.name ) return -1;
   if ( prev.name > next.name ) return 1;
});

console.log('Сортировка по именам: ');

sort_name.forEach( sort_name => console.log(sort_name));

console.log('Юзеры старше 18:');

const arrays = users.filter((item) => item.age > 18);

arrays.forEach( arrays => console.log(arrays));

const average = users.reduce((prev, user) => prev + user.age, 0) / users.length; 

console.log(`Средний возраст юзеров: ${Math.round(average)}`);
 
let max_age = users.reduce((prev, next) => next.age > prev.age ? next:prev);

console.log('Старший юзер:');

console.log(max_age);




