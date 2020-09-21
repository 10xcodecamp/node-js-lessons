const users = [
   ["MIKE", "ZETLOW", "MIKE@GMAIL.COM", "met him at Demo Day"],
   ["John", "John@gmail.com"],
   [20200921, "sue"],
];

// Please provide normalized data for each user field (everything lower cased)
// Please keep in their original rows

let normalizedUsers = [];

for (let i = 0; i < users.length; i++) {
   const userFields = users[i];

   let newUserFields = [];

   for (let i2 = 0; i2 < userFields.length; i2++) {
      const userField = String(userFields[i2]);
      const lowerCasedField = userField.toLowerCase();
      newUserFields = newUserFields.concat(lowerCasedField);
   }

   normalizedUsers = normalizedUsers.concat([newUserFields]);
}

console.log(normalizedUsers);
