const fs = require('fs');

// add colors to printing output in console
const chalk = require('chalk');

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON); 
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return []
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicatedNote = notes.find((note) => note.title === title)

    debugger

    if(!duplicatedNote){
        notes.push({title, body});
        saveNotes(notes);
        console.log('New note added!');
    }else{
        console.log('Note title taken!');
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note) => note.title !== title)
    if(notes.length > newNotes.length){
        // one note was deleted 
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(newNotes);
    }else{
        // no thing was remover
        console.log(chalk.red.inverse('Note not found!'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.red.inverse('Listing out all notes!'));
    notes.forEach(note => console.log(note.title + ": " + note.body))
}

const readNote = (title) => {
    const notes = loadNotes();
    const wantedNote = notes.find((note) => note.title === title)
    if(wantedNote){
        console.log(chalk.blue.inverse(wantedNote.title), ": " ,chalk.white(wantedNote.body));
    }else{
        console.log(chalk.red.inverse('Note not founded!'));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}