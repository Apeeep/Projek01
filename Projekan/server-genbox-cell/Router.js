const express = require('express')
const { body } = require('express-validator')
const router = express.Router()
const { Create, Read, Update, Detele } = require('./Controller')

router.post('/post', [
    body('Tanggal').isLength({min : 2}).withMessage('Tanggal tidak sesuai'),
    body('Nomor_HP').isLength({min : 12},{max : 15}).withMessage('Nomor HP Tidak Valid'),
], Create)

router.get('/get', Read)

router.put('/update/:id', [
    body('Tanggal').isLength({min : 2}).withMessage('Tanggal tidak sesuai'),
    body('Nomor_HP').isLength({min : 12},{max : 15}).withMessage('Nomor HP Tidak Valid'),
], Update)

router.delete('/delete/:id', Detele)

module.exports = router