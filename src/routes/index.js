const { Router } = require('express');
const loadUsers = require('../controllers/users.controllers');
const router = Router();

router.get('/', (req, res) => {
    res.json({
        "status": "todo OK mi rey"
    })
})
router.get('/users', loadUsers)

module.exports = router;