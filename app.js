const express = require('express');
const employee = require("./routes/empRoute.js")
const web = require("./routes/webRoute.js")
const globalErrorHandler = require("./utils/MyAPIError.js");
const MyApiError = require('./utils/MyAPIError.js');
const errorController = require('./controllers/errorController.js')
const app = express();

//setting ejs
app.set("view engine","ejs")

/*if you are using different folder name other than view
app.set("views",path.resolve("/frr"))*/

app.use(express.json())
app.use("/api/v1/employee",employee)
app.use("/",web)
app.all("*",(req,res,next) => {
    /*res.status(400).json({
        status:'Error',
        message:`${req.originalUrl} is not found`
    })*/
    /*const error = new Error(`${req.originalUrl} is not found`)
    error.statusCode=404*/
    next(new MyApiError(404,`${req.originalUrl} is no found`))
})

//handeling exception using middleware
app.use(errorController.errorMiddleware)

module.exports = app;

