const express = require('express');
const router = express.Router();

const imageDetectionController = require('../../controllers/ai-tool/image-detection');

router.post('', imageDetectionController.getDetection);

module.exports = router;