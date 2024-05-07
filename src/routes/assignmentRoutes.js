const express = require('express');
const multer = require('multer');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');
const upload = multer();
router.post('/check',upload.array(),  assignmentController.checkAssignment);
router.get('/demo', assignmentController.demo);
module.exports = router;
