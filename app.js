const fs =require('fs');
const os=require('os');
const _=require('lodash');
const yargs=require('yargs');
console.log('starting project')

const notes=require('./notes.js');
var argv = yargs.argv
console.log(argv);
console.log(process.argv);
var command = process.argv[2]
console.log("command:",command);
if (command ==='add'){
     let note = notes.addNotes(argv.title,argv.body);
     if (note){
         console.log("Note successfully created!");
         console.log("----");
         console.log("Title:"+ argv.title +"Body:"+ argv.body);
     }else{
         console.log("the title of the note has already bee taken!");
     }

}else if(command==='list'){
    let allNotes=notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => {
        notes.logNote(note);
    });
} else  if (command==='read'){
    let  note = notes.readNotes(argv.title);
    if (note) {
        console.log("note found");
        notes.logNote(note);
    }
    else {
        console.log("note not found");
    }
}else if(command ==='remove'){
   let noteRemoved = notes.removeNotes(argv.title);
   let message = noteRemoved ? 'Note successfully removed' : 'Note not found';
    console.log(message);

}else{
    console.log("Invalid command..");
}