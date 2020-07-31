const {positionValidator} = require('./../src/services/positionValidatorService.js');

describe('Position validator service test', () => {

    it('Should return the next two valid positions', () => {
        expect(() => positionValidator('a1')).toBeTruthy();
    });

    it('Should return error wit h invalid number position', () => {
        expect(() => positionValidator('a9')).toThrow(new Error('Not valid position: invalid number'))
    });

    it('Should return error with invalid letter position', () => {
        expect(() => positionValidator('z4')).toThrow(new Error('Not valid position: invalid letter'))
    });

    it('Should return error with not valid position', () => {
        expect(() => positionValidator('a25')).toThrow(new Error('Not valid position: should have one letter and one number'))
    });

});