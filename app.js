// import external script
const notes = require('./notes');

// add colors to printing output in console
const chalk = require('chalk');

// to read data from user or from command line
const yargs = require('yargs');
const { argv } = require('yargs');

//////////////////////////////////////////////

// Customize yargs version
yargs.version('16.11.20')

// Create add command, will run when you run the app and type 'add'
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{ // add an option to the command
        title:{ // a property
            describe:'Note title',
            demandOption: true, // this prop is required!
            type: 'string',
        },
        body:{ // a property
            describe:'Note body',
            demandOption: true, // this prop is required!
            type: 'string',
        }
    },
    handler(argv){ // fire when you run the command
        notes.addNote(argv.title, argv.body);
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder:{ // add an option to the command
        title:{ // a property
            describe:'Note title',
            demandOption: true, // this prop is required!
            type: 'string',
        }
    },
    handler(){ // fire when you run the command
        notes.removeNote(argv.title);
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder:{ // add an option to the command
        title:{ // a property
            describe:'Note title',
            demandOption: true, // this prop is required!
            type: 'string',
        }
    },
    handler(){ // fire when you run the command
        console.log(notes.readNote(argv.title));
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'list a new note',
    handler(){ // fire when you run the command
        console.log(notes.listNotes());
    }
})

// Important to run the script well, without it yargs will not work!
yargs.parse();


