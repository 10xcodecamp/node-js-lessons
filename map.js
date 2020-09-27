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
const formattedUsers = users.map((user) => {
   // make a copy
   const newUser = { ...user };
   // mutable actions
   newUser.createdAt = Date.now(); // create a new property
   delete newUser.isActive; // destroy a property
   newUser.name = user.name.toLowerCase(); // updating a property
   return newUser; // a new array
});
console.log(formattedUsers);
// console.log(users);
