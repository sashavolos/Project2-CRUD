module.exports = {
  showComments (req, res) {
    console.log( '5')
    res.redirect('/comments')
  },
  showForm (req, res) {
    res.render('createComment');
  },
  showForm2 (req, res) {
    console.log(`2`, res.locals.comment.id)
    res.render('updateComment',{
      data: res.locals.comment
  });
},
showForm3 (req, res) {
  res.render('maps');
},
  handleUpdate(req, res) {
    res.redirect(`/comments`)
  },
}
