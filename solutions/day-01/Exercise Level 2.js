//1 

// main.js

// 2

let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.replace(/[,\.]/g, ''). split(' ');
console.log(words)
console.log(words.length)

// 3

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';

// 4

import countries from "./countries.js";

if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA')
} else {
    countries.push('Ethiopia');
}   

// 5

import web_techs from "./web_techs.js";

if (web_techs.includes('Sass')) {
    console.log('Sass is a CSS preprocess')
} else {
    web_techs.push('Sass');
    console.log(web_techs)
}   

// 6

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd);

console.log(fullStack)