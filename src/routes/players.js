const { Router } = require('express');
const { addPlayer, deletePlayer, getAll, editPlayer, getById } = require('../controllers/players.controllers');
const router = Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Players:
 *       type: array
 *       properties:
  *        name:
  *          type: string
  *          description: The name of the player
  *        age:
  *          type: integer
  *          description: The age of the player
  *        lastName:
  *          type: string
  *          description: The lastName of the player
 *       required:
 *         - name
 *         - age
 *         - lastName
 *       example:
 *         name: Chicharito
 *         age: 37
 *         lastName: Hernandez
 */
router.get('/', getAll)
router.get('/:id', getById)
router.post('/', addPlayer)
router.delete('/:id', deletePlayer)
router.put('/:id', editPlayer)

module.exports = router;