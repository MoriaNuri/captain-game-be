const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;
// const logger = require('../../services/logger.service');

module.exports = {
  add,
};

async function add(logs) {
  try {
    if (!logs.length | !logs ) return
    const collection = await dbService.getCollection('logs');
    await collection.insertMany(logs);
    return logs;
  } catch (err) {
    logger.error('cannot insert logs', err);
    throw err;
  }
}





