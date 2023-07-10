const express = require('express')
const Job = require('../controller/JobController')
const router=express.Router()

router.get('/', Job.findAll);
router.get('/:id', Job.findOne);
router.post('/', Job.create);
router.patch('/:id', Job.update);
router.delete('/:id', Job.destroy);

module.exports = router