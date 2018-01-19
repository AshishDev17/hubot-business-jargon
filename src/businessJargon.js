const gifs = require('./data/gifs');
const jargons = require('./data/jargons');

const regex = new RegExp(jargons.join('|'), 'gi');

module.exports = (robot) => {
    robot.hear(regex, (res) => {
        res.send(res.random(gifs));
    });
};
