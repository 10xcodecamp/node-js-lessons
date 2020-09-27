const users = [
   {
      name: "Mike",
      isActive: true,
      createdAt: 1601234512420,
      socialProfiles: [
         {
            site: "twitter",
            username: "mzetlow",
         },
         {
            site: "facebook",
            username: "mikezetlow",
            profilePhoto: {
               sm: "small.jpg",
               lg: "large.jpg",
            },
         },
      ],
   },
   {
      name: "John",
      isActive: true,
      createdAt: 1601234512430,
      socialProfiles: [
         {
            site: "facebook",
            username: "jsmith",
            profilePhoto: {
               sm: "small.jpg",
               lg: "large.jpg",
            },
         },
      ],
   },
   {
      name: "Michelle",
      isActive: false,
      createdAt: 1601234512450,
      socialProfiles: [
         {
            site: "twitter",
            username: "michelledoe",
         },
      ],
   },
];

const fbUsers = users.map((user) => {
   // name * fb name only
   const newUser = {
      name: user.name,
      fbName: getFbName(user),
   };
   return newUser;
});

function getFbName(user) {
   // return FB name if they have one
   // if they don't, return empty string: ""
   // if site: facebook is in social profiles array
   // return the username
}

console.log(fbUsers);
