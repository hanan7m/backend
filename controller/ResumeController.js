const resumeModel = require('../model/ResumeModel')

// Create and Save a new Hr
exports.create = async (req, res) => {
    if (!req.body.fullname && !req.body.phone && !req.body.s_date && !req.body.education ) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const Resume = new resumeModel({
        fullname: req.body.fullname,
        phone: req.body.phone,
        education: req.body.education    
    });
    
    await Resume.save().then(data => {
        res.send({
            message:"Job created successfully!!",
            Resume:data
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
        const Resume = await resumeModel.find();
        res.status(200).json(Resume);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single Hr with an id
exports.findOne = async (req, res) => {
    try {
        const Resume = await resumeModel.findById(req.params.id);
        res.status(200).json(Resume);
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
    await resumeModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
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
    await resumeModel.findByIdAndRemove(req.params.id).then(data => {
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