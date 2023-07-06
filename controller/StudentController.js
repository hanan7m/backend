const studentModel = require('../model/StudentModel')

// Create and Save a new student
exports.create = async (req, res) => {
    if (!req.body.fullName && !req.body.ssn && !req.body.password && !req.body.email && !req.body.phone) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const Student = new studentModel({
        fullName: req.body.fullName,
        ssn: req.body.ssn,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    });
    
    await Student.save().then(data => {
        res.send({
            message:"student created successfully!!",
            Student:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating student"
        });
    });
};

// Retrieve all students from the database.
exports.findAll = async (req, res) => {
    try {
        const Student = await studentModel.find();
        res.status(200).json(Student);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single students with an id
exports.findOne = async (req, res) => {
    try {
        const Student = await studentModel.findById(req.params.id);
        res.status(200).json(Student);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update a student by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    await studentModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `student not found.`
            });
        }else{
            res.send({ message: "student updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// Delete a student with the specified id in the request
exports.destroy = async (req, res) => {
    await studentModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `student not found.`
          });
        } else {
          res.send({
            message: "student deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({  
          message: err.message
        });
    });
};