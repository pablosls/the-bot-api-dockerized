const router = require('express').Router();
const controller = require('app/controllers/bots');

router.get('/:_id', controller.getById);
router.get('/', controller.get);
router.post('/', controller.post);
router.delete('/:_id', controller.destroy);


module.exports = router;