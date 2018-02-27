const pgp = require('pg-promise')()
const dbConfig = require('../config/dbConfig')

const db = pgp(dbConfig)

module.exports = {
  create (id) {
    return db.one('INSERT INTO comments \
   (name, comment) VALUES \
   ($[name], $[comment]) \
   RETURNING *', comment)
  },

  update (id) {
    return db.one('UPDATE comments \
    SET name=$[name], comment=$[comment] \
    WHERE id=$[id] \
    RETURNING *', comment)
  },


  delete (id) {
    return db.none('DELETE FROM comments WHERE id=$1', id)
  }
}
