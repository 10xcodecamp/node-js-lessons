console.log("heel");

const type = (func, returnType, obj) => {
   console.log(JSON.stringify(func.toString()));
   // console.log(obj["firstName?"]);
};

const getUserId = (User) => {
   type(getUserId, "");
   // return User.id;
};

// const getUserId = (User) => {
//    type(getUserId, "", {
//       id: "",
//       isAdmin: true,
//       lastLoggedInAt: 1,
//       "firstName?": "Mike",
//    });
//    return User.id;
// };

getUserId();
