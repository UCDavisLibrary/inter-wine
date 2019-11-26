var router  = require('express').Router();
let fs      = require('fs');
let path    = require('path');

router.get('/mock', (req, res) => {
  let data = fs.readFileSync(path.join(__dirname, '..', '..', 'mock', 'mock-graph.json'), 'utf-8');
  res.json(JSON.parse(data));
});

router.get('/chardonnay', (req, res) => {
  let data = fs.readFileSync(path.join(__dirname, '..', '..', 'mock', 'chardonnay.json'), 'utf-8');
  res.json(JSON.parse(data));
});

module.exports = router;
