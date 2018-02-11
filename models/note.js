const mongoose=require('mongoose')

<<<<<<< HEAD
const url= 'mongodb://fullstack:salis1@ds229448.mlab.com:29448/backend_database'
=======
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const url= process.env.MONGODB_URI
>>>>>>> 998c73259bf6272ba5a268cbac5224a9640e3ddb

mongoose.connect(url)

const Note=mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean
})

module.exports=Note
