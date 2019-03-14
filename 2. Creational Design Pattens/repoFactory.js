var repoFactory = function() {
  this.getRepo = function(repoType) {
    if (repoType === 'task') {
      // Cache task repo
      if (this.taskRepo) {
        console.log('Retrieving from cache');
        return this.taskRepo;
      } else {
        var taskRepo = require('./Repository/taskRepository')();
        return taskRepo;
      }
    }
    if (repoType === 'user') {
      var userRepo = require('./Repository/userRepository')();
      return userRepo;
    }
    if (repoType === 'project') {
      var projectRepo = require('./Repository/projectRepository')();
      return projectRepo;
    }
  };
};

module.exports = new repoFactory();
