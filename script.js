// require dependencies
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const path = require(`path`);

const commentsRouter = require('./routes/comments')

const PORT = process.env.PORT || 3005

// create an app
const app = express()

app.set('view engine', 'ejs')

app.use(logger('dev'))

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get(`/trendsvr`, (req, res) => {
  res.render(`trendsvr`);
})

app.get(`/trendslighting`, (req, res) => {
  res.render(`trendslighting`);
})
app.get(`/trendsstagedesign`, (req, res) => {
  res.render(`trendsstagedesign`);
})

app.get(`/trendsbars`, (req, res) => {
  res.render(`trendsbars`);
})
app.get(`/trendsactivations`, (req, res) => {
  res.render(`trendsactivations`);
})

app.get(`/trendsinteractive`, (req, res) => {
  res.render(`trendsinteractive`);
})

app.get(`/trendsfood`, (req, res) => {
  res.render(`trendsfood`);
})
app.get(`/trendsthemes`, (req, res) => {
  res.render(`trendsthemes`);
})

app.get(`/trendsconcepts`, (req, res) => {
  res.render(`trendsconcepts`);
})
app.get(`/trendssports`, (req, res) => {
  res.render(`trendssports`);
})
app.get(`/trendsinflatables`, (req, res) => {
  res.render(`trendsinflatables`);
})

app.get(`/trendsteam`, (req, res) => {
  res.render(`trendsteam`);
})
app.get(`lighting`, (req, res) => {
  res.render(`lighting`);
})

app.get(`/vr`, (req, res) => {
  res.render(`vr`);
})
app.get(`/stagedesign`, (req, res) => {
  res.render(`stagedesign`);
})

app.get(`/activations`, (req, res) => {
  res.render(`activations`);
})
app.get(`/interactive`, (req, res) => {
  res.render(`interactive`);
})

app.get(`/food`, (req, res) => {
  res.render(`food`);
})
app.get(`/themes`, (req, res) => {
  res.render(`themes`);
})



















app.use(methodOverride('_method'))
app.get('/', (req, res) => {
  res.render("index")
})

app.use('/comments', commentsRouter)

// app.get('/comments', (req, res) => {
// })

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
