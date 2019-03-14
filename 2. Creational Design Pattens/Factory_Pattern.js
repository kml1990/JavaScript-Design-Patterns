/*
  1. Simplifies object creation - deals with object complexity like 
  creating connection to database, setup caching etc. Anything that don't want to 
  do in our controllers or components.
  2. Creating different objects based on need
  3. Repository Creation 
*/
var Task = require('./taskConstructor');
var repoFactory = require('./repoFactory2');

var task1 = new Task(repoFactory.task.get(1));
var task2 = new Task(repoFactory.task.get(2));

var user = repoFactory.user.get(1);
var project = repoFactory.project.get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();
task2.save();
