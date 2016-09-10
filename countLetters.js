//var nestedObject = {
  //theValue: countLetters();
  //counterFunction: funct
var str = process.argv[2];
function countLetters(str) {
  var count = {};
  //var str = process.argv[2];
  var newArr = str.split(" ");
  // change to number??
  for(var i = 0; i < newArr.length; i++) {
    // get each one of the letters
    var letter = newArr[i];
    //console.log(letter);
    if (!count[letter]) {
      count[letter] = 1;
    } else {
      count[letter] += 1;
      //console.log(letter);
      //console.log(count);
    }
      //console.log(count);

    // Find out if we already have the letter in count
    // if we DON'T have it, add it with value 1
    // if we DO have it, add 1 to the existing value
    //var howMany = string[i];
//create a counter
//run through loop, check for letter
//
  }
  return count;
  //console.log(count);
}
console.log(countLetters(str));