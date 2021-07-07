function findUser(id, callback) {
  setTimeout(function () {
    var fakeUser = {
      id: id,
      name: "Joe#" + id,
      email: id + "@test.com",
    };
    callback(fakeUser);
  }, 1000);
}

function findUsers(userIds) {
  for (var i in userIds) {
    findUser(userIds[i], function (user) {
      console.log("Found for id,", userIds[i]);
      console.log("=> A user founded:", user);
    });
  }
}

findUsers([3, 7, 29, 105]);

// Found for id, 105
//   => A user founded: { id: 3, name: 'Joe#3', email: '3@test.com' }
// Found for id, 105
//   => A user founded: { id: 7, name: 'Joe#7', email: '7@test.com' }
// Found for id, 105
//   => A user founded: { id: 29, name: 'Joe#29', email: '29@test.com' }
// Found for id, 105
//   => A user founded: { id: 105, name: 'Joe#105', email: '105@test.com' }
