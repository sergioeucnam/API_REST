const { default: axios } = require("axios");

const loadUsers = async (req, res) => {
    const users = []
    const response = await axios('https://jsonplaceholder.typicode.com/users')
    const data = response.data
    users.push(data)
    res.json(data)
}
module.exports = loadUsers;