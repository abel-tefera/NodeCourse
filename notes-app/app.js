const fs = require('fs')
const chalk = require('chalk')
const { isEmail, isURL } = require('validator')
const { getNotes } = require('./notes.js');
const { name: firstName } = require('./utils.js');

fs.writeFileSync('notes.txt', 'My name is Abel.')
fs.appendFileSync('notes.txt', '\nI live in Addis Ababa.')

console.log(firstName);

console.log(chalk.red.bgGreen.underline.bold(getNotes()));

console.log(chalk.blue.bgRed.bold(isEmail('email@mail.com')))
console.log(isURL('http://www.example.com'))

console.log(chalk.red('My name is'), chalk.bgGreen('Abel'));