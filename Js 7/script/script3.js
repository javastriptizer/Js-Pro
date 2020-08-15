//FUNCTION MAP

const arr = [1,2,3];

function map(arr, callback) {
    let maps = [];
    for (let i = 0; i < arr.length; i++) {
       maps.push(callback(arr[i], i));
    }
    return maps;
};

const mapped = map(arr, (el) => el + 1);

console.log(`Function Map: \n1 mass - ${arr}`);

console.log(`2 mass - ${mapped}`);

//FUNCTION FILTER

const arr_f = [1, null, 2, 3];

function filter(arr_f, callback) {
    let filters = [];
    for(let i = 0; i < arr_f.length; i++) {
        if(callback(arr_f[i], i)) {
            filters.push(arr_f[i]);
        } 
    }
    return filters;
}

const filtered = filter(arr_f, (el) => el !== null);

console.log(`Function Filter: \n1 mass - ${arr_f}`);

console.log(`2 mass - ${filtered}`);

//FUNCTION REDUCE

const arr_r = [1, 2, 3];

function reduce(arr_r, callback, initialValue) {
    let reduces = initialValue;
    for(let i = 0; i < arr_r.length; i++) {
       reduces = callback.call(null, reduces, arr_r[i], i)
    }
    return reduces;
}

const sum = reduce(arr_r, (value, el) => value + el, 0); 

console.log(`Function Reduce: \nsum -  ${sum}`);



