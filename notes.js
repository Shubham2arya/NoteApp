const fs=require('fs')
const chalk=require('chalk')

const readNote=(title)=>{
    const notes=loadNotes()
    const data=notes.find((note)=>note.title==title)
    if(data==undefined){
        console.log(chalk.red.inverse('error'))
    }
    else{
        console.log(chalk.bold.underline.yellow('Title: '+data.title))
        console.log(data.body)
    }
} 

const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.yellow('Your Notes : '))
    notes.forEach((note)=>{
        console.log(note.title)
    })
}

const removeNote=(title)=>{
    const notes=loadNotes()
    const noteToKeep=notes.filter((note)=>note.title!=title)
    if(noteToKeep.length==notes.length)
        console.log(chalk.red.inverse('No note found!'))
          
    else{
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(noteToKeep)
    }
}

const addNote=(title,body)=>{
    const notes=loadNotes()
    const duplicateNote=notes.find((note)=>note.title==title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green.inverse('Note added'))
    }
    else{
        console.log(chalk.red.inverse('title already exixt!'))
    }
    
    saveNotes(notes)
}

const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}
module.exports={
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}