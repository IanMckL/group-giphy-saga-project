const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "favorites";
  `;
  pool
    .query(queryText)
    .then((result) => {
      console.log('these are the rows:', result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('error getting gif from database', err);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post('/', (req, res) => {
  const gif = req.body;
  console.log('this is the req dot body:', gif.gif);
  const queryText = `INSERT INTO "favorites" ("url")
  VALUES ($1);
  `;
  const queryValues = [gif.gif];
  pool
    .query(queryText, queryValues)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('error posting gif to database', err);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  console.log(req.params);
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
