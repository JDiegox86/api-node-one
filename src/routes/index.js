const { Router } = require('express'); 
const router = Router();

const { getUsers, createUsers, getUserById, deleteUser, updateUsers } = require('../controllers/index.controller')

router.get('/users', getUsers );
router.get('/users/:id', getUserById);
router.post('/users', createUsers);
router.delete('/users/:id', deleteUser);
router.put('/users/id', updateUsers);
module.exports = router;