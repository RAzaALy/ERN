const router = require('express').Router();
const data = require('../Data/const')

router.get('/data', (_, res) => {
    res.status(200).send(data);
})

module.exports = router;