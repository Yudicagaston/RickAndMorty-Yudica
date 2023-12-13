const axios = require('axios')
const getCharById = async (req, res) => {
    try {
        const charId = req.params.id;
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${charId}`);
        const { id, name, gender, species, origin, image, status, location } = data;
        const character = { id, name, gender, species, origin, image, status, location };
        return character.name
            ? res.json(character)
            : res.status(404).send("Not Found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = getCharById