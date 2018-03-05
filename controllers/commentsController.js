const commentsDB = require('../models/commentsDB')

module.exports = {
  create (req, res, next) {
    console.log('yo')
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
      console.log('4')
      res.locals.comments = result
      next()
    })
    .catch(err => {
      console.log(err)
      next()
    })
  },

  getComment(req, res, next){
    console.log(`1`)
    commentsDB.getInfo(req.params.id)
    .then(result => {
      res.locals.comment = result;
      console.log(`heres my result`, result)
      next()
    })
    .catch(err => {
      next(err);
    })
  },

  update(req, res, next){
    console.log(`3`)
    commentsDB.update(req.body)
        .then(result => {
          res.locals.comment = result;
          console.log(result)
          next()
    })
    .catch(err => {
      next(err);
    })
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
