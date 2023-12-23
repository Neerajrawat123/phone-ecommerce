const express = require('express')
const dataController = require('./dataController')
const router = express.Router()

router.get('/data', dataController)


module.exports = router