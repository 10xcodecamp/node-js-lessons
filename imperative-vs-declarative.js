const passwords = [
   "123456",
   "password",
   "admin",
   "freecodecamp",
   "mypassword123",
];

// using the passwords constant from above
// let longPasswords = [];
// for (let i = 0; i < passwords.length; i++) {
//    const password = passwords[i];
//    if (password.length >= 9) {
//       longPasswords = longPasswords.concat(password);
//    }
// }

// using the passwords constant from above
const longPasswords = passwords.filter((password) => {
   return password.length >= 9;
});
console.log(longPasswords);
// logs ["freecodecamp", "mypassword123"];
