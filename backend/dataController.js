const mobiles = require('./data.js')
const dataController = async (req, res) => {
    const data = req.body
    res.status(200).json({mobiles})
}

module.exports = dataController