const express = require('express')
const Resume = require('../controller/ResumeController')
const router=express.Router()

router.get('/', Resume.findAll);
router.get('/:id', Resume.findOne);
router.post('/', Resume.create);
router.patch('/:id', Resume.update);
router.delete('/:id', Resume.destroy);

module.exports = router