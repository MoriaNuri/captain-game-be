const rollService = require('./roll.service');
// const socketService = require('../../services/socket.service');
const logger = require('../../services/logger.service');

module.exports = {
  rollDice,
 
};

async function rollDice(req, res) {
  try {
    
    const toys = await toyService.query(filterBy);
    res.send(toys);
  } catch (err) {
    // logger.error('Failed to get toys', err);
    res.status(500).send({ err: 'Failed to get toys' });
  }
}

// async function getToy(req, res) {
//   try {
//     const toy = await toyService.getById(req.params.id);
//     res.send(toy);
//   } catch (err) {
//     // logger.error('Failed to get toy', err);
//     res.status(500).send({ err: 'Failed to get toy' });
//   }
// }

// async function deleteToy(req, res) {
//   try {
//     await toyService.remove(req.params.id);
//     res.send({ msg: 'Deleted successfully' });
//   } catch (err) {
//     logger.error('Failed to delete toy', err);
//     res.status(500).send({ err: 'Failed to delete toy' });
//   }
// }

// async function updateToy(req, res) {
//   try {
//     const toy = req.body;
//     const savedToy = await toyService.update(toy);
//     res.send(savedToy);
//     // socketService.broadcast({ type: 'user-updated', data: review, to: savedUser._id });
//   } catch (err) {
//     logger.error('Failed to update toy', err);
//     res.status(500).send({ err: 'Failed to update toy' });
//   }
// }

// async function addToy(req, res) {
//   try {
//     const toy = req.body;
//     const savedToy = await toyService.add(toy);
//     res.send(savedToy);
//     // socketService.broadcast({ type: 'user-updated', data: review, to: savedUser._id });
//   } catch (err) {
//     logger.error('Failed to update toy', err);
//     res.status(500).send({ err: 'Failed to update toy' });
//   }
// }

// async function addReview(req, res) {
//   try {
//     var review = req.body;
//     review.byUserId = req.session.user._id;
//     review = await toyService.addReview(review);
//     console.log('review SERVER CONTROLLER :>> ', review);
//     res.send(review);
//     return review;
//   } catch (err) {
//     logger.error('Failed to add review', err);
//     res.status(500).send({ err: 'Failed to add review' });
//   }
// }
