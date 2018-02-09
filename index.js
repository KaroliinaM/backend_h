const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const Note=require('./models/note')

app.use(cors())
app.use(express.static('build'))




const formatNote =(note)=> {
  return{
    content: note.content,
    date: note.date,
    important: note.important,
    id: note._id
  }
}



app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (request, response) => {
  Note
    .find({})
    .then(notes => {
      response.json(notes.map(formatNote))
    })
})

app.use(bodyParser.json())

app.get('/api/notes/:id', (request, response) => {
  Note
    .findById(request.params.id)
    .then(note => {
      response.json(formatNote(note))
    })
})
const generateId=()=> {
  const maxId=notes.length > 0 ? notes.map(n => n.id).sort().reverse()[0] : 1
  return maxId + 1
}
app.post('/api/notes', (request, response)=> {
  const body=request.body

  if(body.content===undefined) {
    return response.status(400).json({error: 'content missing'})
  }

  const note= new Note({
    content: body.content,
    important: body.important || false,
    date: new Date()
  })

  note
    .save()
    .then(savedNote => {
      response.json(formatNote(savedNote))
    })

})

app.delete('/api/notes/:id', (request, response) => {
  const id=Number(request.params.id)
  notes=notes.filter(note=note.id!==id)

  response.status(204).end()
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
