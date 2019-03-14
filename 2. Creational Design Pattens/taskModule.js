var repo = function() {
  /* methods will have access to db setup because of closures */
  var db = {};

  // Reaviling module pattern
  var get = function(id) {
    console.log('Getting task ' + id);
    return {
      name: 'create a demo for module'
    };
  };

  var save = function(task) {
    console.log('Saving ' + task.name + ' to the database');
  };

  return {
    get: get,
    save: save
  };
};

module.exports = repo();
