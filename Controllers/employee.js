const Employee = require("../Models/employee")

exports.newEmployee = (req,res) => {
    const employee = new Employee(req.body)

    employee.save((err,addedEmployee)=>{
        if(err)
        {
            return res.json("Unable to add new employee")
        }
        return res.json(addedEmployee)
    })
}