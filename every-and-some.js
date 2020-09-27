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
            username: "fbmikezetlow",
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
            username: "fbjsmith",
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

const hasGithubUsers = users.some((user) => {
   // go through all the social profiles
   const siteNames = user.socialProfiles.map((profile) => {
      return profile.site;
   });

   return siteNames.includes("github");
});

console.log("Do we have any Github users? ", hasGithubUsers);
