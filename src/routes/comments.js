const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

router.get('/', commentsController.getAll);
router.get('/post/:postId', commentsController.getByPostId);
router.post('/', commentsController.create);

module.exports = router;