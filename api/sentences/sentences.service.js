const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;
const asyncLocalStorage = require('../../services/als.service');
const logger = require('../../services/logger.service');

module.exports = {
  query,
};

async function query() {
  try {
    console.log('query from service');
    const collection = await dbService.getCollection('sentences');
    var sentences = await collection.find({}).toArray()
    console.log('sentence from service', sentences);
    return sentences;
  } catch (err) {
    logger.error('cannot find sentences', err);
    throw err;
  }
}


 