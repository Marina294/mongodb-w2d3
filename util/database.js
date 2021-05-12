const mongodb = require('mongodb')
require('dotenv').config()

const MongoClient = mongodb.MongoClient

exports.mongoConnect = (callback) => {
    MongoClient.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

}
// const mongoConect = () => {
//     MongoClient.connect(process.env.MONGODB_URL).then(client => {
//         console.log(client)
//     }).catch(err => console.log(err))
// }

// mongoConect()
// module.exports = mongoConect
