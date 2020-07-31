const knightNextPosition = require('../services/knightNextPositionService.js');

const {calculateNextValidPositions} = knightNextPosition;

const nextPosition = (req, res) => {

    const reqPosition = req.params.currentPosition;

    try {
        const nextValidPositions = calculateNextValidPositions(reqPosition)
        res.status(200).send(nextValidPositions);

    } catch (e) {
        console.log(e.message)
        res.status(400).send({Error: e.message});
    }

}

module.exports = { nextPosition };
