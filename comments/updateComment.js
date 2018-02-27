<% include ../partials/boilerplate.ejs %>
<h1>Update</h1>

<form action="/comments" method="post">
  <label>Comments:
    <input type="text" name="comment" value="">
  </label>
  <label>Name:
    <input type="text" name="Name" value="">
  </label>
  <button type="submit">Submit</button>
</form>>
