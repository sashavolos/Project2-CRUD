const commentsDB = require('../models/commentsDB')


  create (req, res) {
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


  update (req, res) {
    commentsDB.update(req.body)
    .then(result => {
      res.json({
        message: 'ok',
        data: result
      })
    })
    .catch(err => {
      res.status(500).json({
        message: 'error',
        error: err
      })
    })
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
