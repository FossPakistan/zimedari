const express = require('express');
const path = require('path');

const auth         = require('./auth');
const user         = require('./user');
const users        = require('./users');
const todos        = require('./todos');

const router = express.Router();

router.use('/api/auth', auth);
router.use('/api/user', user);
router.use('/api/users', users);
router.use('/api/todos', todos);

router.get('/api/tags', (req, res) => {
  res.send([
    'Zimedari', 'Pakistan Politics', 'Pakistan', 'Issues', 'News', 'Current Affairs', 'Army',
    'Terrorism', 'Imran Khan', 'Corruption', 'Pakistan Economy', 'Pubjab', 'Sindh', 'KPK', 'Balochistan',
  ]);
});

router.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
});

module.exports = router;
