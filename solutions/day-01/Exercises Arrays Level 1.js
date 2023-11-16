// 1

const anArray = [];

// 2

const anotherArray = new Array(6).fill(40);

// 3

console.log(anotherArray.length);

// 4

console.log(anotherArray[0]);

console.log(anotherArray[anotherArray.length - 1]);

console.log(anotherArray[Math.floor((anotherArray.length) / 2)]);

// 5

const mixedDataTypes = [
    'teste',
    22,
    [1, 2, 3],
    {
        name: 'John',
        age: 30
    },
    true,
    false
]

console.log(mixedDataTypes.length);

// 6

let itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon',
];

// 7

console.log(itCompanies);

// 8

console.log(itCompanies.length);

//9 

console.log(itCompanies[0]);

console.log(itCompanies[itCompanies.length - 1]);

console.log(itCompanies[Math.floor((itCompanies.length) / 2)]);

// 10

itCompanies.forEach(company => console.log(company));

// 11

for (let index = 0; index < itCompanies.length; index++) {
    itCompanies[index] = itCompanies[index].toLocaleUpperCase();
    console.log(itCompanies[index]);
}

// 12 

itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon',
];

console.log(itCompanies.join(', ') + 'are big IT companies.');

// 13

console.log(itCompanies.indexOf('Apple') > -1 ? 'Apple' : 'not found');
console.log(itCompanies.indexOf('Gerdau') > -1 ? 'Gerdau' : 'not found');
console.log(itCompanies.indexOf('Embraer') > -1 ? 'Embraer' : 'not found');

//14 

let items = itCompanies.length;

for (let index = 0; index < items; index++) {
    if (itCompanies[index].indexOf('o') != itCompanies[index].lastIndexOf('o')){
        itCompanies.splice(index, 1, itCompanies[items - 1]);
        items--;
    };
}

// 15

itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon',
];

itCompanies.sort();

// 16 

itCompanies = itCompanies.reverse();

// 17 

itCompanies.splice(0, 3);

// 18

itCompanies.splice(-3);

// 19

itCompanies.splice(Math.floor(itCompanies.length / 2), 1);

// 20

itCompanies.shift();

// 21

itCompanies.splice(Math.floor(itCompanies.length / 2), 1);

// 22

itCompanies.pop();

// 23

itCompanies.splice(0);


