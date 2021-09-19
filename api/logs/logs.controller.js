const logsService = require('./logs.service');
const logger = require('../../services/logger.service');

module.exports = {
  addLogs

};

const logsToActions = {
  1: 'Game Over',
  2: 'Win',
  3: 'Player got Spoiled alcohol',
}

async function addLogs(req, res) {
  try {
    const logs = req.body;
    console.log('logs',logs);
    const ip = req.ip
    let logsToSave = []

    logs.forEach(log => {
      if (log.action in logsToActions)
        logsToSave.push({
          ip: ip,
          action: logsToActions[log.action],
          timestamp: log.timestamp
        })
    });

    const savedLogs = await logsService.add(logsToSave);
    res.send(savedLogs);
  } catch (err) {
    logger.error('Failed to update logs', err);
    res.status(500).send({ err: 'Failed to update logs' });
  }
}

