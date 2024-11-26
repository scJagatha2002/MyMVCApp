const express = require('express')
const router = express.Router();
const employeeController = require("./../controllers/employeeController.js")


router.route("/showEmployees").get(employeeController.showHome)
router.route("/updateEmployee/:id").get(employeeController.update)
router.route("/signup").get(employeeController.signup)



module.exports = router