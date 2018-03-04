module.exports = {
  showComments (req, res) {
    console.log( 'HERE ARE THE COMMENTS IN VIEW', res.locals.comments)
    res.render('feedbackForum', {
      data: res.locals.comments,
    })
  },
  showForm (req, res) {
    res.render('createComment');
  }
}
