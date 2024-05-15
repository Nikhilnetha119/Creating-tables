const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userControllers');

router.get('/', UserController.index);
router.post('/', UserController.create);
router.delete('/:id', UserController.delete);

module.exports = router;
