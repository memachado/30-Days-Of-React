// 1

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sortedAges = ages.sort((a, b) => a - b);

const min = sortedAges[0];

const max = sortedAges[sortedAges.length - 1];

let mid = 0;

if (sortedAges.length % 2 === 1) {
    mid = sortedAges[Math.floor(sortedAges.length / 2)];
} else {
    mid = (sortedAges[sortedAges.length / 2 - 1] + sortedAges[sortedAges.length / 2]) / 2;
}

let average = 0;

sortedAges.forEach((age) => (average += age));

average = average/sortedAges.length;

let r = sortedAges[sortedAges.length - 1] - sortedAges[0];

let mina = average - min;

let maxa = max - average;

// 2

import countries from "./countries.js"

let midle = []

if (countries.length % 2 === 1) {
    midle = [countries[Math.floor(countries.length / 2)]];
} else {
    midle = [countries[countries.length / 2 - 1] , sortedAges[sortedAges.length / 2]] ;
}

// 3 

let countries_ext = [];

countries_ext = countries.splice(Math.floor(countries.length/2));

