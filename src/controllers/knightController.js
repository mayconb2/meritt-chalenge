const knightNextPosition = require('../services/knightNextPositionService.js');

const {calculateNextPositions} = knightNextPosition;

const nextPosition = (req, res) => {

    const reqPosition = req.params.currentPosition;

    const toSend = calculateNextPositions(reqPosition)

    res.send(toSend);
}

module.exports = { nextPosition };
