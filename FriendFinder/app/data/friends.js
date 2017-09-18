// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [ // opens array of objects
{
  "name":"Profile 1",
  "photo":"http://placehold.it/200x200",
  "scores":[
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ]
}, 

{
  "name":"Profile 2",
  "photo":"http://placehold.it/200x200",
  "scores":[
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3
    ]
}, 

{
  "name":"Profile 3",
  "photo":"http://placehold.it/200x200",
  "scores":[
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ]
}, 

{
  "name":"Profile 4",
  "photo":"http://placehold.it/200x200",
  "scores":[
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7
  ]
}, 

{
  "name":"Profile 5",
  "photo":"http://placehold.it/200x200",
  "scores":[
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10
    ]
}

]; // closes the array of objects

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;