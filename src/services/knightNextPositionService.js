
const {getBoardPositions} = require('./boardPositionsService.js');
const { positionValidator } = require('./positionValidatorService.js');

const calculateNextValidPositions = (currentPosition) => {
    
    if (positionValidator(currentPosition) != false) {
        
        const upperCurrentPosition = currentPosition.toUpperCase();

        const currentPositionLetter = upperCurrentPosition.slice(0,1);
        const currentPositionNumber = parseInt(upperCurrentPosition.slice(1,2));

        const nextPositions = [];
        const nextValidPositions = [];

        const  currentCode = currentPositionLetter.charCodeAt(0);

        nextPositions.push(`${String.fromCharCode(currentCode-2)}${currentPositionNumber-1}`);
        nextPositions.push(`${String.fromCharCode(currentCode-2)}${currentPositionNumber+1}`);
        nextPositions.push(`${String.fromCharCode(currentCode-1)}${currentPositionNumber-2}`);
        nextPositions.push(`${String.fromCharCode(currentCode-1)}${currentPositionNumber+2}`);
        nextPositions.push(`${String.fromCharCode(currentCode+1)}${currentPositionNumber-2}`);
        nextPositions.push(`${String.fromCharCode(currentCode+1)}${currentPositionNumber+2}`);
        nextPositions.push(`${String.fromCharCode(currentCode+2)}${currentPositionNumber-1}`);
        nextPositions.push(`${String.fromCharCode(currentCode+2)}${currentPositionNumber+1}`);


        nextPositions.map(position => {
            
            const boardPositions = getBoardPositions();

            const newPositionLetter = position.slice(0,1);
            const newPositionNumber = parseInt(position.slice(1,2));

            if(boardPositions.letters.includes(newPositionLetter) && boardPositions.numbers.includes(newPositionNumber)) {
                nextValidPositions.push(position)
            }

        });

        return {nextValidPositions};


    }
    
}

module.exports = { calculateNextValidPositions };
