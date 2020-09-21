const user = {
   email: getEmail(),
   password: getPassword(),
   createdAt: getCreatedAt(),
   id: getId(),
};

const copyOfUser = { ...user }; // Object.assign({}, theNameOfYourObj)
copyOfUser.isActive = true;
copyOfUser.tokenExpiredAt = user.createdAt + 86400000;
copyOfUser.isCoolPerson = true;
copyOfUser.isCoolPerson = false;
delete copyOfUser.isCoolPerson;

console.log(user);
console.log(copyOfUser);

/* functions start here */

function getEmail() {
   // get the user's email from the input with jQuery
   return "mike@gmail.com";
}

function getPassword() {
   // get the user's password from the input with jQuery
   return "skywalker83";
}

function getCreatedAt() {
   // generate createdAt number, e.g. 1600730742258
   return Date.now();
}

function getId() {
   // generate id string, e.g. "005061"
   return "005061";
}
