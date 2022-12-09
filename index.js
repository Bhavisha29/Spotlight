const express = require('express')
let app = express()

const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Data = require("./dataSchema")

const bodyparser = require('body-parser');

// const Data = mongoose.model = ("Datas",dataSchema)

app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(express.static(__dirname+'/public'))

mongoose.connect("mongodb+srv://sumedha:sumedha123@project.7jytqc9.mongodb.net/?retryWrites=true&w=majority",{
useNewUrlParser:true,
useUnifiedTopology:true,
})

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.get('/index', (req, res)=>{
    res.render('index.ejs')
})

app.get('/login', (req, res)=>{
    res.render('login.ejs')
})

app.get('/maleModel', (req, res)=>{
    res.render('addToCart.ejs')
})

app.get('/femaleModel', (req, res)=>{
    res.render('wishList.ejs')
})

app.get('/signup', (req, res)=>{
    res.render('signup.ejs')
})

app.get('/detailForm', (req, res)=>{
    res.render('form.ejs')
})

app.post("/addData",(req,res)=>{

    const jsonDAta = new Data({
        namePerson : req.body.namePerson,
        number : req.body.number,
         gender : req.body.gender,
         email: req.body.mailid,
         age : req.body.age,
         dob : req.body.dob,
         height : req.body.height,
         weight : req.body.weight,
         address : req.body.address,
         portfolio : req.body.portfolio,
    })
    console.log(jsonDAta);
    jsonDAta.save()
    // console.log(name);
    res.redirect("/")
})

app.listen(8080)