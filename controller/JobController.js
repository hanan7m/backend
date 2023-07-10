const jobModel = require('../model/JobModel')

// Create and Save a new Hr
exports.create = async (req, res) => {
    if (!req.body.jobname && !req.body.qualification && !req.body.s_date && !req.body.e_date && !req.body.requirment && !req.body.address) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const Job = new jobModel({
        jobname: req.body.jobname,
        qualification: req.body.qualification,
        requirment: req.body.requirment,
        address: req.body.address,
        s_date: req.body.s_date,
        e_date: req.body.e_date,
        expernence: req.body.expernence,
        salary: req.body.salary ,
        skills: req.body.skills      
    });
    
    await Job.save().then(data => {
        res.send({
            message:"Job created successfully!!",
            Job:data
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
        const Job = await jobModel.find();
        res.status(200).json(Job);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single Hr with an id
exports.findOne = async (req, res) => {
    try {
        const Job = await jobModel.findById(req.params.id);
        res.status(200).json(Job);
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
    await jobModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Job not found.`
            });
        }else{
            res.send({ message: "Job updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// Delete a Hr with the specified id in the request
exports.destroy = async (req, res) => {
    await jobModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Job not found.`
          });
        } else {
          res.send({
            message: "Job deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({  
          message: err.message
        });
    });
};