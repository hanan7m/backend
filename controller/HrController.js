const hrModel = require('../model/HrModel')

// Create and Save a new Hr
exports.create = async (req, res) => {
    if (!req.body.fullName && !req.body.address && !req.body.password && !req.body.email && !req.body.phone) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const Hr = new hrModel({
        fullName: req.body.fullName,
    
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    });
    
    await Hr.save().then(data => {
        res.send({
            message:"Hr created successfully!!",
            Hr:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating Hr"
        });
    });
};

// Retrieve all Hr from the database.
exports.findAll = async (req, res) => {
    try {
        const Hr = await hrModel.find();
        res.status(200).json(Hr);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single Hr with an id
exports.findOne = async (req, res) => {
    try {
        const Hr = await hrModel.findById(req.params.id);
        res.status(200).json(Student);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update a Hr by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    await hrModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Hr not found.`
            });
        }else{
            res.send({ message: "Hr updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// Delete a Hr with the specified id in the request
exports.destroy = async (req, res) => {
    await hrModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Hr not found.`
          });
        } else {
          res.send({
            message: "Hr deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({  
          message: err.message
        });
    });
};