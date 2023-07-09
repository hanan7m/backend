const companyModel = require('../model/CompanyModel')

// Create and Save a new Company
exports.create = async (req, res) => {
    if (!req.body.fullName && !req.body.address  && !req.body.email && !req.body.phone) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const Company = new companyModel({
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    });
    
    await Company.save().then(data => {
        res.send({
            message:"Company created successfully!!",
            Company:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating Company"
        });
    });
};

// Retrieve all Company from the database.
exports.findAll = async (req, res) => {
    try {
        const Company = await companyModel.find();
        res.status(200).json(Company);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single Company with an id
exports.findOne = async (req, res) => {
    try {
        const Company = await companyModel.findById(req.params.id);
        res.status(200).json(Company);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update a Company by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    await companyModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Company not found.`
            });
        }else{
            res.send({ message: "Company updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// Delete a Company with the specified id in the request
exports.destroy = async (req, res) => {
    await companyModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Company not found.`
          });
        } else {
          res.send({
            message: "Company deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({  
          message: err.message
        });
    });
};