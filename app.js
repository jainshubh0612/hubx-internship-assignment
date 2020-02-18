const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const morgan = require('morgan')

const app = express()

const eventRoute = require('./routes/event')

const port = process.env.PORT || 3000

app.engine('handlebars',exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/' , eventRoute)

app.use((req,res)=>{
    res.send('404 not found')
})

mongoose.connect('mongodb+srv://jainshubh0612:shubh123@cluster0-myuso.mongodb.net/eventList?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then((res)=>{
    console.info('Successfully connected')
})
.catch((err)=>{
    console.log(err)
})

app.listen(3000 ,()=>{
    console.log('Server Started at port number 3000')
})