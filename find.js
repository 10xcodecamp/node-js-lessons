const authors = [
   {
      name: "Margaret Atwood",
      books: [
         {
            title: "Oryx and Crake",
         },
         {
            title: "The Year of the Flood",
         },
      ],
   },
   { name: "Philip Roth", books: [{ title: "American Pastoral" }] },
   { name: "Philip Roth", books: [{ title: "Sabbath's Theater" }] },
   {
      name: "Franz Kafka",
      books: [{ title: "The Castle" }, { title: "The Hunger Artist" }],
   },

   {
      name: "Franz Kafka",
      books: [{ title: "The Castle" }, { title: "The Hunger Artist" }],
   },
];

const query = "philip roth";
const author = authors.find((author) => {
   return author.name.toLowerCase() === query.toLowerCase();
});

// console.log(author);

const dupeAuthorIndex = authors
   .map((author) => {
      return author.name; // [ "Margaret Atwood", "Franz Kafka", ]
   })
   .findIndex((name, i, arr) => {
      return arr.indexOf(name) !== i;
   });

console.log("Remove this: ", authors[dupeAuthorIndex]);
