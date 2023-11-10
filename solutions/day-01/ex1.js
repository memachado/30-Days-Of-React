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

const itCompanies = [
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
