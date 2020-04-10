const express = require('express');
const router = express.Router();

const uploadImageController = require('../controllers/upload-image');

router.post('', uploadImageController.uploadImage);

module.exports = router;