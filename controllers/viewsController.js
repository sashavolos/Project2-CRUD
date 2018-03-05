module.exports = {
  showComments (req, res) {
    console.log( '5')
    res.render('feedbackForum', {
      data: res.locals.comments,
    })
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
handleUpdate(req, res) {
  res.redirect(`/comments`)
}
}
