const app = require('./app');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:"./config.env"})

mongoose.connect(process.env.DB_URL).then(con => {
    console.log("Connection is successful")
}).catch(error => {
    console.log(error)
})

app.listen(process.env.PORT,() => {
    console.log("Server runningg successfully")
})
