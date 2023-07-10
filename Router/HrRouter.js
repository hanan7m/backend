const express = require('express')
const Hr = require('../controller/HrController')
const router=express.Router()

router.get('/', Hr.findAll);
router.get('/:id', Hr.findOne);
router.post('/', Hr.create);
router.patch('/:id', Hr.update);
router.delete('/:id', Hr.destroy);

module.exports = router