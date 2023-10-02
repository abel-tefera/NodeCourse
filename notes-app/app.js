const fs = require('fs')
const chalk = require('chalk')
// const { isEmail, isURL } = require('validator')
const { getNotes } = require('./notes.js');
// const { name: firstName } = require('./utils.js');
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
// const argv = yargs(hideBin(process.argv)).argv

// fs.writeFileSync('notes.txt', 'My name is Abel.')
// fs.appendFileSync('notes.txt', '\nI live in Addis Ababa.')

// console.log(firstName);

// console.log(chalk.red.bgGreen.underline.bold(getNotes()));

// console.log(chalk.blue.bgRed.bold(isEmail('email@mail.com')))
// console.log(isURL('http://www.example.com'))

// console.log(chalk.red('My name is'), chalk.bgGreen('Abel'));

// const command = process.argv[2];
// switch (command) {
//     case 'add':
//         console.log('Adding note...')
//         fs.writeFileSync(`${argv.title}.txt`, argv.body)
//         break;
//     case 'show':
//         console.log('Showing note...')
//         console.log(fs.readFileSync(`${argv.title}.txt`, 'utf8'));
//         break;
//     case 'remove':
//         console.log('Removing note...')
//         break;
//     case 'list':
//         console.log('Listing note...')
//         break;
//     default:
//         console.log('Command not recognized!')
//         break;
// }

yargs(hideBin(process.argv))
    .command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title'
            },
            body: {
                describe: 'Note body'
            }
        },
        handler: (argv) => {
            console.log("Adding");
            console.log('Title: ', argv.title);
            console.log('Body: ', argv.body);
            fs.writeFileSync(`${argv.title}.txt`, argv.body)
        }
    })

yargs(hideBin(process.argv))
    .command({
        command: 'remove',
        describe: 'Remove a note',
        handler: () => {
            console.log('Removing note...')
        }
    })

yargs(hideBin(process.argv))
    .command({
        command: 'list',
        describe: 'List all notes',
        handler: () => {
            console.log('Listing notes...')
        }
    })

yargs(hideBin(process.argv))
    .command({
        command: 'show',
        describe: 'Show a note',
        handler: (argv) => {
            console.log('Showing note...')
            console.log(fs.readFileSync(`${argv.title}.txt`, 'utf8'));
        }
    })