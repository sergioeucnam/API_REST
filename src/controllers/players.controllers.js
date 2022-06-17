const generateId = () => Math.random().toFixed(5).toString().slice(2)
let players = require('../mock.json');

const getById = (req, res) => {
    const { id } = req.params;
    let playerID = players.find((index) => index.id == id)
    res.json({ playerID })
}
const getAll = (req, res) => {
    res.json(players)
}
const addPlayer = (req, res) => {
    const { name, lastname, age, team } = req.body
    if (name && lastname && age && team) {
        let id = generateId();
        const newPlayer = { id, ...req.body };
        players.push(newPlayer);
        res.status(201).json({ msg: `Se agrego con existo a ${name} a la lista` })
    }
    else { res.status(400).json({ error: 'Bad request, missing parameters' }) }
}
const deletePlayer = (req, res) => {
    const { id } = req.params;
    let playerID = players.find((index) => index.id == id);
    if (!playerID) {
        res.status(400).json({ error: `El jugador con el id ${id} no existe` })
    } else {
        players = players.filter((index) => index.id !== id);
        res.status(200).json({ msg: `El jugador con el id ${id} fue eliminado correctamente` })
    }
}
const editPlayer = (req, res) => {
    const { id } = req.params;
    const { name, lastname, age, team } = req.body;
    if (name && lastname && age && team) {
        let founded = players.find(player => (player.id == id))
        if (founded) {
            founded.name = name
            founded.lastname = lastname
            founded.age = age
            founded.team = team
            res.status(201).json({ msg: `The player with the id: ${id} has been changed` })
        } else {
            res.status(400).json({ error: `El jugador con el id ${id} no existe` })
        }
    } else {
        res.status(500).json({ msg: 'Missing parameters' })
    }
}
module.exports = {
    addPlayer,
    deletePlayer,
    getAll,
    editPlayer,
    getById
}