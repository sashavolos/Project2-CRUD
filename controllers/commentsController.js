const commentsDB = require('../models/commentsDB')

module.exports = {
  create (req, res, next) {
    console.log(req.body)
    commentsDB.save(req.body)
    .then(result => {
      res.locals.comment = result
      console.log('IT WORKED', result)
      // res.json({
      //   message: 'ok',
      // })
      next()
    })
    .catch(err => {
      console.log('IT FAILED', err)
      res.status(500).json({
        message: 'Error',
        error: err
      })
      next()
    })
  },

getAll (req, res, next) {
  commentsDB.findAll()
  .then(result => {
    console.log('IT WORKED IN ALL', result)
    res.locals.comments = result
    next()
  })
  .catch(err => {
    console.log(err)
    next()
  })
},

  update (req, res, next){
    commentsDB.update(req.body)
        .then(result => {
          console.log('result --->', result)
          res.locals.comment = result
          next()
    })
    .catch(err => next(err))
    next()
  },

  delete (req, res, next) {
    commentsDB.delete(req.params.id)
    .then(() => {
      next()
    })
    .catch(err => {
      next(err)
      })
  }
}
