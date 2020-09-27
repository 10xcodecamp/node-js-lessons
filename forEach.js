function getUserId(num) {
   return num;
}

function getUser(cb) {
   const userId = cb(Date.now());
   return {
      name: "mike",
      id: userId,
   };
}

const user = getUser(getUserId);
// console.log(user);

const users = [
   {
      name: "Mike",
      isActive: true,
   },
   {
      name: "John",
      isActive: true,
   },
   {
      name: "Michelle",
      isActive: false,
   },
];

for (let i = 0; i < users.length; i++) {
   const user = users[i];
   // console.log(user.name);
}

users.forEach(function (user) {
   // console.log(user.name);
});

users.forEach((user) => {
   // console.log(user.name);
});

let activeUsers = [];

users.forEach((user) => {
   if (user.isActive) {
      activeUsers = activeUsers.concat(user);
   }
});

console.log(activeUsers);

users.forEach((user) => {
   // whatever you want to do
   // This is technically a side effect
});
