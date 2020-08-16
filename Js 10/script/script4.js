const users = [
    {
    name: "John", 
    gender: 'm',
    date_of_birth: '10.12.1996',
    },
    {
    name: "Mary",
    gender: 'f',
    date_of_birth: '15.02.1990',
    },
    {
    name: "Alex",
    gender: 'm',
    date_of_birth: '05.12.1992',
    },
    {
    name: "John",
    gender: 'm',
    date_of_birth: '02.05.1994',
    },
    {
    name: "Andy",
    gender: 'm',
    date_of_birth: '22.11.1991',
    },
    {
    name: "Lena",
    gender: 'f',
    date_of_birth: '06.01.1993',
    },
 ];

let males = null;
let females = null;

for (let key in users) {
    users[key].index = key;
    if (users[key].gender === 'm')
        males += 1;
    else 
        females += 1;
}
   
console.log(users);

if (males > females) {
    console.log("More M");
} else 
    if (males < females) {
        console.log("More F");
    } else 
        console.log("Equally");

        
const counter = ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo'];

const count = counter.reduce((prev, next) => {
  prev[next] = (prev[next] || 0) + 1;
  return prev;
}, {})

console.log(counter);

console.log(count);

let user = {
    name: "Mykola",
    age: 56,
  };

let arr_value = []; 
let arr_key = []; 

for (key in user) {
    arr_key.push(key);
    arr_value.push(user[key]);
}

//console.log(arr_value);
//console.log(arr_key);
   
function reverse(Object) {
    let user_reverse = {};             
    for (let i = 0; i < arr_key.length; i++) {
      user_reverse[arr_value[i]] = arr_key[i];
    }
    return user_reverse;
}

console.log(user);

console.log(reverse(user));


 