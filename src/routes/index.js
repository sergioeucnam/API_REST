const { Router } = require('express')
const router = Router();

router.get('/', (req, res) => {
    res.json({
        "status": "todo OK mi rey"
    })
})

module.exports = router;