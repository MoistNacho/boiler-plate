const express = require('express');
const app = express();
const port = 5000;

const config = require('./config/key');

const bodyParser = require('body-parser');
const {User} = require('./models/User');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('MongoDB Connected...'))
  .catch(error => console.log(error))

app.get('/', (req, res) => {
  res.send('Hello 준성!2')
})

app.post('/register', (req, res) => {
  // 회원가입 할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에 넣어준다.

  const user = new User(req.body);
  user.save((err, userInfo)=>{
    if(err) return res.json({success:false, err});
    return res.status(200).json({
      success: true,
      userInfo
    });
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})