// 1. CREATING OBJECTS

var obj = {};
var nextObj = Object.create(Object.prototype); 
var lastObj = new Object(); 

// 2. READING AND WRITING OBJECTS

var obj = {}; // Create object 
obj.param = 'new value'; // Assign value using dot notation
console.log(obj.param); // Read value

var obj = {}; // Create object 
obj['param'] = 'new value'; // Assign value using square bracket
console.log(obj.param); // Read value

var obj = {}; // Create object 
var val = 'value'; // Create variable
obj[val] = 'new value'; // Use variable as a property name of an object and assign value
console.log(obj[val]); // Read value

// 3. TASK CREATION 

var task = {
  due: 'tomorrow'
}; // Or Object.create(Object.prototype) or new Object();
task.title = 'My title';
task.description = 'My Description';
task.toString = function() {
  return this.title + ' ' + this.description;
}
console.log(task.toString());

// 4. PROPERTY

Object.defineProperty(obj, 'name', {
  value: 'my name',
  writable: true, // Wheter constant value or not 
  enumerable: true, // Wheter can be iterated 
  configurable: true // Wheter configuration can be changed once its set 
});

// 5. DEFINE PROPERTY 

var task = {
  title: 'My title',
  description: 'My Description'
};
Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + ' ' + this.description;
  },
  writable: false, // Whether constant value or not 
  enumerable: false, // Whethr can be iterated 
  configurable: false // Whether configuration can be changed once its set 
});

task.toString = 'hi'; // Will broke code as it can be assigned if writable is true

console.log(Object.keys(task)); // Will not show toString function as its not enumerable
console.log(task.toString());

// 6. INHERITANCE

var task = {
  title: 'My title',
  description: 'My Description'
};
Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + ' ' + this.description;
  },
  writable: false, // Whether constant value or not 
  enumerable: false, // Whethr can be iterated 
  configurable: false // Whether configuration can be changed once its set 
});

var urgentTask = Object.create(task); // Will be same as task
Object.defineProperty(urgentTask, 'toString', {
  value: function() {
    return this.title + ' is urgent';
  },
  writable: false, // Whether constant value or not 
  enumerable: false, // Whethr can be iterated 
  configurable: false // Whether configuration can be changed once its set 
});

console.log(urgentTask.toString());