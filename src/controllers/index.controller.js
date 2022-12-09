const { Pool } = require('pg'); 

const pool = new Pool ({
    host: 'containers-us-west-150.railway.app',
    user: 'postgres',
    password: 'BEhOB1hhtyuwxrh5dAAH',
    database: 'railway',
    port: '6082'
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    console.log(response.rows);
    res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    console.log(response.rows);
};

const createUsers = async (req,res) => {
    const { name, email } = req.body;
    
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    res.send(response);
    res.json({
        message: 'User Added Succesfully',
        body: {
            user: {name, email}
        }
    })
};

const updateUsers = async (req,res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
        name,
        email,
        id
    ]);
    console.log(response);
    res.json('User Updated successfully');
}

const deleteUser = async (req,res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json(`User ${id} deleted success`);
};


module.exports = {
    getUsers,
    createUsers,
    getUserById,
    deleteUser,
    updateUsers
}