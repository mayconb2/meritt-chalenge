const {positionValidator} = require('./../src/services/positionValidatorService.js');

describe('Position validator service test', () => {

    it('Should return error with invalid number position', () => {
        const positionFromReq = 'A9';
        expect(positionValidator('a9')).toThrowError('Not')
    });

});