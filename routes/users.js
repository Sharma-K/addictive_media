const express = require('express');
const router = express.Router();
const users = require('../controllers/users');
const multer = require('multer');
const {storage} = require('../cloudinary');
const upload = multer({storage});

router.get('/', users.index);

router.route('/input')
      .get(users.add)
      .post(upload.array('resume'),users.addIn)

router.route('/listing')
      .get(users.lists)
      
router.get('/sortd',users.sortd)
router.get('/sortn',users.sortn)

router.post('/:id/delete', users.deletet)

      
module.exports = router;