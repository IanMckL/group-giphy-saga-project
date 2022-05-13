const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "favorites";
  `;
  pool.query(queryText)
  .then((result) => { res.send(result.rows); })
  .catch((err) => {
    console.log('error getting gif from database', err);
    res.sendStatus(500);
  })
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  const gif = req.body;
  const queryText = `INSERT INTO "favorites" ("url")
  VALUES ('$1');
  `;
  const queryValues = [
    gif
  ];
  pool.query(queryText, queryValues)
  .then(()=> { res.sendStatus(200); })
  .catch((err) => {
    console.log('error posting gif to database', err);
    res.sendStatus(500);
  })
  
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
