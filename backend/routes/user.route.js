const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controller');


router.post('/', controller.store);
router.post('/login', controller.login);
//router.get('/', controller.index);
//router.get('/:id', controller.get)
//.delete('/:id', controller.destroy)
//.put('/:id', controller.update)

module.exports = router;
