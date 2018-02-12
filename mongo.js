const mongoose=require('mongoose')
const url= 'mongodb://fullstack:salis1@ds229448.mlab.com:29448/backend_database'

mongoose.connect(url)
const Schema=mongoose.Schema
const noteSchema = new Schema({
  content: String,
  date: Date,
  important: Boolean
})
noteSchema.statics.findNote=function(note) {
  return{
    id: note._id,
    content: note.content,
    date: note.date,
    important: note.important
  }
}
const Note = mongoose.model('Note', noteSchema )


Note
  .find({})
  .then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })

  Note
    .find({})
    .then(result => {
      result.forEach(note => {
        console.log(Note.findNote(note))
      })
      mongoose.connection.close()
    })


/**const note = new Note({
  content: 'HTML on helppoa',
  date: new Date(),
  important: true
})**/

/**note
  .save()
  .then(response => {
    console.log('note saved')
    mongoose.connection.close()
  })**/
