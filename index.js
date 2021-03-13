const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hajo1563:abcd123@boiler.h86hs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('MongoDB Connected...'))
  .catch(error => console.log(error))

app.get('/', (req, res) => {
  res.send('Hello 준성!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})