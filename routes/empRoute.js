const express = require('express')
const router = express.Router();
const employeeController = require("./../controllers/employeeController.js")


router.route("/home")
.get(employeeController.getEmployees)
.post(employeeController.addNewEmployee)


router.route("/home/:id")
.put(employeeController.updateEmployee)
.delete(employeeController.deleteEmployee)

module.exports = router