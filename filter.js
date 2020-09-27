const users = [
   { name: "Mike", isActive: true, createdAt: 1601234512420 },
   { name: "John", isActive: true, createdAt: 1601234512430 },
   { name: "Michelle", isActive: false, createdAt: 1601234512450 },
];

const mostRecentUsers = users.filter((user) => {
   return user.createdAt >= 1601234512430;
});

console.log(mostRecentUsers);
