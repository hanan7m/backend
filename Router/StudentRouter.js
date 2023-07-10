const express = require('express')
const Student = require('../controller/StudentController')
const router=express.Router()

router.get('/', Student.findAll);
router.get('/:id', Student.findOne);
router.post('/', Student.create);
router.patch('/:id', Student.update);
router.delete('/:id', Student.destroy);

module.exports = router