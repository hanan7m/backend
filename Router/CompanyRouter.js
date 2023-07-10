const express = require('express')
const Company = require('../controller/CompanyController')
const router=express.Router()

router.get('/', Company.findAll);
router.get('/:id', Company.findOne);
router.post('/', Company.create);
router.patch('/:id', Company.update);
router.delete('/:id', Company.destroy);

module.exports = router