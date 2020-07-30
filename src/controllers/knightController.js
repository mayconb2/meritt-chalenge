const knightNextPosition = require('../services/knightNextPositionService.js');

const {calculateNextPositions} = knightNextPosition;

const nextPosition = (req, res) => {

    const reqPosition = req.params.currentPosition;

    try {
        const toSend = calculateNextPositions(reqPosition)
        res.status(200).send(toSend);

    } catch (e) {
        console.log(e.message)
        res.status(400).send({Error: e.message});
    }

}

module.exports = { nextPosition };
