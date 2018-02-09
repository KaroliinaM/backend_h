const mongoose=require('mongoose')
const url= 'mongodb://fullstack:<salasana>@ds229448.mlab.com:29448/backend_database'

mongoose.connect(url)

const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean
})

Note
  .find({})
  .then(result => {
    result.forEach(note => {
      console.log(note)
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
