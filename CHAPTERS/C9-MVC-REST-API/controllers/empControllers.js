const data = {}
data.employees = require('../../model/employees.json')

const getAllEmployees = (req, res) => {
    res.json(data.employees)
}

const createNewEmployee = (req, res) => {
    res.json({
        "name": req.body.name,
        "email": req.body.email,
        "phone": req.phone,
        "department": req.dept,
        "position": req.pos,
        "salary": req.salery,
        "joiningDate": req.date,
        "status": req.status
    })
}

const updateEmployee = (req, res) => {
    res.json({
        "name": req.body.name,
        "email": req.body.email,
        "phone": req.phone,
        "department": req.dept,
        "position": req.pos,
        "salary": req.salery,
        "joiningDate": req.date,
        "status": req.status
    })
}

const deleteEmployee = (req, res) => {
    res.json({
        'id': req.body.id
    })
}

const getEmployee = (req, res) => {
    res.json({ 'id': req.params.id })
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}