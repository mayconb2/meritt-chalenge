const boardPositionsService = require('./boardPositionsService.js')

const {getBoardPositions} = boardPositionsService;

const boardPositions = getBoardPositions()

const calculateNextPositions = (currentPosition) => {

    const upperCurrentPosition = currentPosition.toUpperCase()

    if (upperCurrentPosition.length > 2) {
        throw new Error('Not valid position: should have one letter and one number')
    }

    const currentPositionLetter = upperCurrentPosition.slice(0,1);
    const currentPositionNumber = parseInt(upperCurrentPosition.slice(1,2));

    if(!boardPositions.letters.includes(currentPositionLetter)) {
        throw new Error('Not valid position: invalid letter');
    }

    if(!boardPositions.numbers.includes(currentPositionNumber)) {
        throw new Error('Not valid position: invalid number');
    }

    return {currentPositionLetter, currentPositionNumber}
    // return `Sua posição atual é ${upperCurrentPosition}`;
}

module.exports = { calculateNextPositions };
