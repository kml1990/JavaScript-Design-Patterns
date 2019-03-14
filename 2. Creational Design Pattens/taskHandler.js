var myRepo = require('./repoSingleton');

var taskHandler = function() {
  return {
    save: function() {
      myRepo.save('Hi from taskHandler');
    }
  };
};

module.exports = taskHandler();
