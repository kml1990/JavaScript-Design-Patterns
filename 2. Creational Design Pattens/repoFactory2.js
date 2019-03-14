var repoFactory = function() {
  var repos = this;
  var repoList = [
    { name: 'task', source: './Repository/taskRepository' },
    { name: 'user', source: './Repository/userRepository' },
    { name: 'project', source: './Repository/projectRepository' }
  ];

  repoList.forEach(function(repo) {
    repos[repo.name] = require(repo.source)();
  });
};

module.exports = new repoFactory();
