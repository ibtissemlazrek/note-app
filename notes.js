
const fs=require('fs');
fetchNotes = () =>{
    try{
        let noteString=fs.readFileSync('notes-data.json');
        notes=JSON.parse(noteString);
        console.log(notes,'dghhdfhjfdh')
        return notes
    }catch(e){
        return [];
    }
};
const saveNotes=(notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};
const addNotes = (title,body)=>{
    let notes=fetchNotes();
    console.log(notes)

    let note={
        title,
        body
    };
     let duplicateNotes=notes.filter((note)=> note.title === title);
    if (duplicateNotes.length===0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};
const removeNotes=(title)=>{
    let notes = fetchNotes();//fetch
    let filteredNotes = notes.filter((note)=>
    {return note.title != title});//filter
    
    saveNotes(filteredNotes);
    console.log(filteredNotes);
    console.log(notes);
   return notes.length !== filteredNotes.length;//save
 };
const readNotes=(title)=>{
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note)=>
    {
       return note.title === title;
    });
    return filteredNotes[0];
 };
 const logNote = (note)=>{
    console.log("----");
    console.log("Title:  "+ note.title + " Body: " + note.body );
};
const getAll=()=>{
    return fetchNotes();
}
module.exports={
    addNotes,
    removeNotes,
    readNotes,
    getAll,
    logNote
};