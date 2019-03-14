/* 
Module Pattern - Object Literal (Collections keys and funcions)
Its different to constructor as it creates only one instance and works on it 
throught the application.
var Module = {
  method: function() {...}
  nextMethod: function() {...}
}
*/

var Task = require('./taskConstructor');
var Repo = require('./taskModule');

var task1 = new Task(Repo.get(1));
var task2 = new Task({ name: 'create a demo for constructor' });
var task3 = new Task({ name: 'create a demo for factory' });
var task4 = new Task({ name: 'create a demo for singleton' });

task1.complete();
task1.save();
task2.save();
task3.save();
task4.save();
