module.exports = {
  showComments (req, res) {
    console.log( 'HERE ARE THE COMMENTS IN VIEW', res.locals.comments)
    console.log(res.locals)
    res.render('feedbackForum', {
      data: res.locals.comments,
    })
  },
  showForm (req, res) {
    res.render('createComment');

  }
}
// showForm (req, res) {
//   res.render('updateComment');
//
// }
