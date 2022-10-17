
// Problem 4
// Using the package ‘lodash’ solve below problems(Write all this in route.js in /test-me route handler)
// - Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays
// - Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.


//lodash is a pakadge
const _ = require("lodash");
function lodash() {
  let month1 = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log(_.chunk(month1, 4));

  const oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  console.log(_.tail(oddNum, 9));

  const Num = [2, 5, 4, 2, 7];
  console.log(_.union(Num));

  const keyValue = [
    ["horror", "The Shining"],
    ["drama", "Titanic"],
    ["thriller", "Shutter Island"],
    ["fantasy", "Pans Labyrinth"],
  ];

  console.log(_.fromPairs(keyValue));
}

module.exports.lodash = lodash;
