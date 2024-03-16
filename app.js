const yargs=require('yargs')

const notes=require('./notes.js')

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder:{
        title:{
            describe:'read title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.command({
    command:'listNotes',
    describe:'list all notes',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'add',
    describe: 'this will add your note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'add a body',
            demantOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove the command',
    builder:{
        title:{
            describe:'name of the title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.parse()