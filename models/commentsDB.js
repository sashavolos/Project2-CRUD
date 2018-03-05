const pgp = require('pg-promise')()
const dbConfig = require('../config/dbConfig')

const db = pgp(dbConfig)

module.exports = {
  save (comment) {
    console.log('hey create comment now', comment)
    return db.one('INSERT INTO comments \
      (name, comment) VALUES \
      ($[name], $[comment]) \
      RETURNING *', comment)
  },

  getInfo(id){
    return db.one(`SELECT * FROM comments WHERE id=$1`, id)
  },

  update (comment) {
    console.log(comment)
    return db.one('UPDATE comments \
    SET name=$[name], comment=$[comment] \
    WHERE id=$[id] \
    RETURNING *', comment)
  },


  delete (id) {
    return db.none('DELETE FROM comments WHERE id=$1', id)
  },
  findAll () {
    return db.many('SELECT * FROM comments')
  },

  findById (id) {
    return db.one('SELECT * FROM comments WHERE id=$1', id)
  }
}
module.exports.delete ({
  id: 2,
  name: 'john',
  comment: 'hello world!!'
}).then(comments => {
  console.log(comments)
})
.catch(err => {
  console.log(err.message)
})
