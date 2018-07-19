'use strict';

const express = require('express');
const router = express.Router();
const Todos = require('../models/todos');

module.exports = router;

// write your routes here. Feel free to split into multiple files if you like.



router.get('/', (req, res) => {
  res.send(Todos.listPeople());
});

router.get('/:name/tasks', (req, res) => {
  const { status } = req.query;
  const taskList = Todos.list(req.params.name);
  if (typeof taskList === 'undefined') {
    res.statusCode = 404;
    res.send();
  }
  else if (status === 'complete') res.send(taskList.filter(task => task.complete));
  else if (status === 'active') res.send(taskList.filter(task => !task.complete));
  else res.send(taskList); 
})

router.post('/:name/tasks', (req, res) => {
  if (req.body.content.length === 0) {
    res.statusCode = 400;
    res.send();
  } else {
    Todos.add(req.params.name, req.body);
    res.statusCode = 201;
    res.send(req.body);
  }
});

router.put('/:name/tasks/:index', (req, res) => {
  Todos.complete(req.params.name, req.params.index);
  res.send();
});

router.delete('/:name/tasks/:index', (req, res) => {
  Todos.remove(req.params.name, req.params.index);
  res.statusCode = 204;
  res.send();
})
