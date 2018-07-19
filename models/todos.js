'use strict';

let tasks = {}; // a place to store tasks by person

module.exports = {
  reset: function () {
    tasks = {}; // (this function is completed for you.)
  },
  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: function () {
    return Object.keys(tasks);
  },
  add: function (name, task) {
    if (!task.complete) task.complete = false;
    if (tasks[name]) tasks[name].push(task);
    else tasks[name] = [task];
  },
  list: function (name) {
    return tasks[name];
  },
  complete: function (name, taskIndex) {
    tasks[name][taskIndex].complete = true;
  },
  remove: function(name, taskIndex) {
    tasks[name].splice(taskIndex, 1);
  }
};
