const express = require('express')
const commentsRouter = express.Router()
const commentsController = require('../controllers/commentsController')
// const viewsController = require('../controllers/viewsController')

// commentsRouter.get('/', (req, res) => {
//   res.send('Hi again')
// })

commentsRouter.get('/', (req, res) => {
  res.render('../comments/createComment')
})
commentsRouter.get('/', (req, res) => {
  res.render('../comments/updateComment')
})
commentsRouter.post('/', commentsController.create)

commentsRouter.put('/', commentsController.update)

commentsRouter.delete('/', commentsController.delete)

module.exports = commentsRouter
