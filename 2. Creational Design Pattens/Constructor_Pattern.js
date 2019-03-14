/* 
The new keyword  - Creates a brand new objects
                    - Links to object prototype
                    - Binds 'this' to the new object scope
                    - Implicitly returns 'this'

Create object from funcions

function ObjectName(param1, param2) {
  this.param1 = param1;  Property 1
  this.param2 = param2;  Property 2

  Method of an object (Drawback - this methods is recreated every time 
  an object is created which is not efficient ).
  This can be solved by using prototype so that instances of an object 
  link to one prototype method 

  this.toString = function() {
    return this.param1 + ' ' + this.param2;
  }; 
}

Prototype - An encapsulation of properties that an object links to 
ObjectName.prototype.toString = function() {
  return this.param1 + ' ' + this.param2;
} 
*/

//import Task from './Task';
var Task = require('./taskConstructor');
var TaskClass = require('./taskClass');

var task1 = new Task('create a demo for constructors');
var task2 = new Task('create a demo for module');
var task3 = new TaskClass('create a demo for factory');
var task4 = new TaskClass('create a demo for singleton');

task1.complete();
task2.save();
task3.save();
task4.save();
