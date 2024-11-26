const empModel = require("./../models/employeeModel.js");
const MyApiError = require("./../utils/MyAPIError.js");
const globalErrorHandler = require("./../utils/MyAPIError.js");


exports.getEmployees = async (req, res, next) => {
    try {
        const employees = await empModel.find();
        res.status(200).json({
            status: "Success",
            msg: "Employees fetched successfully",
            data: employees
        })

    } catch (error) {
        next(new MyApiError(404, "Error fetching data"))
    }

}

exports.addNewEmployee = async (req, res, next) => {
    try {
        console.log("entered")
        console.log(req.body)
        const newEmployee = await empModel.create(req.body);
        res.status(200).json({
            status: "Success",
            msg: "Employee added successfully",
            data: newEmployee
        })
    }
    catch (error) {
        next(new MyApiError(404, "Error adding data"))

    }
}

exports.updateEmployee = async (req, res, next) => {
    try {
        const id = req.params.id; 
        const updatedEmployee = await empModel.findOneAndUpdate({ eid: id }, req.body);
        res.status(200).json({
            status: "Success",
            msg: "Employee updated successfully",
            data:updatedEmployee
        })
    }
    catch (error) {
        next(new MyApiError(404, "Error updating data"))

    }
}

exports.deleteEmployee = async (req, res, next) => {
    try {
        const employee = await empModel.findOne({eid:req.params.id})
        console.log(employee._id)
        await empModel.findByIdAndDelete(employee._id.toString());
        res.status(200).json({
            status: "Success",
            msg: "Employee deleted successfully",
        })
    }
    catch (error) {
        next(new MyApiError(404, "Error deleting data"))

    }
}

exports.update = async (req, res) => {
    try {
        return res.render("Update",{
            id:req.params.id
        })
    }
    catch (error) {
        return res.render("error")
    }

}



exports.showHome = async (req, res) => {
    try {
        const employees = await empModel.find();
        console.log("Hi")
        return res.render("Home", {
            name:"Jagatha",
            employeeList: employees
        })
    }
    catch (error) {
        return res.render("error")
    }

}

exports.signup = async (req, res) => {
    try {
        return res.render("signup")
    }
    catch (error) {
        return res.render("error")
    }

}