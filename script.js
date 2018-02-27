// require dependencies
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const quotesRouter = require('./routes/quotes')

const PORT = process.env.PORT || 3000

// create an app
const app = express()

app.set('view engine', 'ejs')

app.use(logger('dev'))

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(methodOverride('_method'))

app.use('/comments', commentsRouter)

app.listen(port, () => {
  console.log(`Listening on port ${PORT}`)
})
