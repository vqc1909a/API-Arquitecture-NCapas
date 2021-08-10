const mongoose = require('mongoose')
require('dotenv').config()
const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env
const connectionString = NODE_ENV === 'test' ? MONGO_DB_URI_TEST : MONGO_DB_URI

module.exports = () => mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
)
.then(db => {
  console.log('DB Connected to ' + db.connection.host)
})
.catch(err => {
  console.log(err)
  process.exit(1)
})

