const logger = require('../../services/logger.service');
const userService = require('../user/user.service');
// const toyService = require('../roll/roll.service.js');
const socketService = require('../../services/socket.service');
const sentencesService = require('./sentences.service');
const { ObjectID } = require('mongodb');

async function getSentences(req, res) {
  try {
    console.log('req.query :>> ', req.query);
    const sentences = await sentencesService.query();
    res.send(sentences);
  } catch (err) {
    logger.error('Cannot get sentences', err);
    res.status(500).send({ err: 'Failed to get sentences' });
  }
}




module.exports = {
  getSentences
};
