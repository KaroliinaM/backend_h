const mongoose=require('mongoose')

const url= 'mongodb://fullstack:@ds229448.mlab.com:29448/backend_database'

mongoose.connect(url)

const Note=mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean
})

module.exports=Note
