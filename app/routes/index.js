const router = require('express').Router();

router.get('/', (req,res) => res.send("Wellcome to the Bot Application"));
router.use('/bots', require('./bots'));
router.use('/messages', require('./messages'));

module.exports = router;