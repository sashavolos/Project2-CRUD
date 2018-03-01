module.exports = {
  showComments (req, res) {
    res.render('createComment', {
      data: res.locals.comment,
    })
  }
}
