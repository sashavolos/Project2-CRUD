// require dependencies
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const commentsRouter = require('./routes/comments')

const PORT = process.env.PORT || 3005

// create an app
const app = express()

app.set('view engine', 'ejs')

app.use(logger('dev'))

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(methodOverride('_method'))
app.get('/', (req, res) => {
  res.render("./partials/boilerplate.ejs")
})

app.use('/comments', commentsRouter)

// app.get('/comments', (req, res) => {
// })

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
