const logger = require('../../services/logger.service');
const sentencesService = require('./sentences.service');

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
