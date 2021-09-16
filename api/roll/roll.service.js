const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;
// const logger = require('../../services/logger.service');

module.exports = {
  randomNumber,
  rollDice,
  getUserLastRoll
  // query,
  // getById,
  // remove,
  // update,
  // add,
  // addReview,
};


const funnySentences = [
  "כל אדם שמכור להימורים יהיה מוכן להתערב איתך שהוא לא",
  "למות? זה הדבר האחרון שאעשה",
  "אם תיפול מחלון ותשבור את הרגליים, אל תרוץ לבכות לי"
];




 function rollDice() {
  const diceRollResults = createDiceRollResults();
  const userDiceRollResults = createUserDiceRollResults(user, diceRollResults);
  UserDiceRollDao.getInstance().create(userDiceRollResults);
  return diceRollResults;
}
 async function getUserLastRoll(userId) {
  return UserDiceRollDao.getInstance().getLatestRoll(userId).then(lastRoll => {
      return lastRoll;
  })
}

function createUserDiceRollResults(user, diceRoll) {
  return {
      user,
      diceRoll
  };
}

function createDiceRollResults() {
  const diceNumber = _randomNumber();
  return {
      number: diceNumber,
      msg: _getMsgFromNumber(diceNumber)
  };
}

function _getMsgFromNumber(diceNumber) {
  switch (diceNumber) {
      case 5:
          return funnySentences[Math.floor(Math.random()*funnySentences.length)];
      break;
      default: return null;
  }
}

function randomNumber() {
  return Math.floor((Math.random() * (7 - 1) + 1));
}


