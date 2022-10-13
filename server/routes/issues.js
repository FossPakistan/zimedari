const express = require('express');
const { requireAuth } = require('./middleware');
const { Issue } = require('../database/schemas');

const router   = express.Router();

module.exports = router;

router.get('/', requireAuth, (req, res) => {
  Issue.find({ user: req.user.id }, { __v: 0, user: 0 }, (err, issues) => {
    if (err) {
      res.status(400).send({ message: 'Get users failed', err });
    } else {
      res.send({ message: 'Issues retrieved successfully', issues });
    }
  });
});

router.post('/', requireAuth, (req, res) => {
  req.body.user = req.user.id;

  const newIssue = Issue(req.body);

  newIssue.save((err, savedIssue) => {
    if (err) {
      res.status(400).send({ message: 'Create issue failed', err });
    } else {
      res.send({ message: 'Issue created successfully', issue: savedIssue });
    }
  });
});

router.put('/complete', requireAuth, (req, res) => {
  Issue.findById(req.body.id, { __v: 0, user: 0 }, (err, issue) => {
    if (err) {
      res.status(400).send({ message: 'Toggle issue failed', err });
    } else {
      issue.completed = !issue.completed;
      issue.save((err, savedIssue) => {
        if (err) {
          res.status(400).send({ message: 'Toggle issue failed', err });
        } else {
          res.send({ message: 'Toggled complete issue successfully', issue: savedIssue });
        }
      });
    }
  });
});

router.put('/', requireAuth, (req, res) => {
  Issue.findById(req.body.id, { __v: 0, user: 0 }, (err, issue) => {
    if (err) {
      res.status(400).send({ message: 'Update issue failed', err });
    } else {
      issue.text = req.body.text;
      issue.updated_at = Date.now();
      issue.save((err, savedIssue) => {
        if (err) {
          res.status(400).send({ message: 'Update issue failed', err });
        } else {
          res.send({ message: 'Updated issue successfully', issue: savedIssue });
        }
      });
    }
  });
});

router.delete('/', requireAuth, (req, res) => {
  Issue.findByIdAndRemove(req.body.id, err => {
    if (err) {
      res.status(400).send({ message: 'Delete issue failed', err });
    } else {
      res.send({ message: 'Issue successfully delete' });
    }
  });
});
