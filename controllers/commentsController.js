const commentsDB = require('../models/commentsDB')

module.exports = {
  create (req, res) {
    console.log(req.body)
    commentsDB.save(req.body)
    .then(result => {
      res.json({
        message: 'ok',
        data: result
      })
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error',
        error: err
      })
    })
  },


  update (req, res, next){
    commentsDB.update(req.body)
    console.log('result --->', req.body)
    .then(result => {
      res.locals.comment = result
      next()
    })
    .catch(err => next(err))
  },

  delete (req, res) {
    commentsDB.destroy(req.params.id)
    .then(() => {
      res.json({
        message: 'ok'
      })
    })
    .catch(err => {
      res.status(500).json({
        message: 'error',
        error: err
      })
    })
  }
}
