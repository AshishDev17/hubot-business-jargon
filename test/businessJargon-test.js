const Helper = require('hubot-test-helper');
const chai = require('chai');
const expect = chai.expect;
const gifs = require('../src/data/gifs');

const helper = new Helper('../src/businessJargon.js');

describe('testing hubot-businessJargon', () => {
    let room;
    beforeEach(() => {
        room = helper.createRoom();
    });

    afterEach(() => {
        room.destroy();
    });

    describe(`when hubot hears business jargon 'asap'`, () => {
        beforeEach(() => room.user.say('ashish', 'asap'));
        it('should check if the output is an array', () => expect(Array.isArray(room.messages)).to.eql(true));
        it('should check if the length of the output array is equal to two', () => expect(room.messages.length).to.eql(2));
        it('should check if output is as expected', () => expect(gifs.indexOf(room.messages[1][1])).to.be.above(-1));
    });

    describe(`when hubot hears random word 'wow' which is not a business jargon`, () => {
        beforeEach(() => room.user.say('ashish', 'wow'));
        it('should check if the output is an array', () => expect(Array.isArray(room.messages)).to.eql(true));
        it('should check if the length of the output array is equal to one', () => expect(room.messages.length).to.eql(1));
    });       
});