const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

router.get('/create',coursesController.create);
router.post('/store',coursesController.store);
router.get('/:id/edit',coursesController.edit);
router.put('/:id',coursesController.update);
router.patch('/:id/restore',coursesController.restore);
router.delete('/:id/softDelete',coursesController.softDelete);
router.delete('/:id/hardDelete',coursesController.hardDelete);
router.get('/:slug',coursesController.show);


module.exports = router;