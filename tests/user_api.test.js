const supertest=require('supertest')
const {app, server}= require('../index')
const api=supertest(app)
const {format, initialNotes, nonExistingId, notesInDb, usersInDb }=require('./test_helper')
const User=require('../models/user')

describe.only('when there is initially one user in db', async ()=>{
  beforeAll(async()=> {
    await User.remove({})
    const user=new User({username: 'root', password: 'salis'})
    await user.save()
  })

  test('POST /api/users succeeds with a fresh username', async()=>{
    const usersBeforeOperation=await usersInDb()

    const newUser={
      username: "mluukkai",
      name: "Matti Luukkainen",
      password: "salainen"
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAfterOperation=await usersInDb()
    expect(usersAfterOperation.length).toBe(usersBeforeOperation.length+1)
    const usernames=usersAfterOperation.map(u=>u.username)
    expect(usernames).toContain(newUser.username)
  })
  test('POST /api/users fails wiht proper statuscode and message if username alreafy taken', async()=>{
    const usersBeforeOperation=await usersInDb()
      const newUser={
        username:'root',
        name:'Superuser',
        password: 'salainen'
      }
      const result=await api
        .post('/api/users')
        .send(newUser)
        .expect(400)
        .expect('Content-Type', /application\/json/)

      expect(result.body).toEqual({error: 'username must be unique'})
      const usersAfterOperation=await usersInDb()
      expect(usersAfterOperation.length).toBe(usersBeforeOperation.length)

  })
  afterAll(()=>{
    server.close()
  })
})
