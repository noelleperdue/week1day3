var str = process.argv[2];
function countLetters(str) {
  var count = {};
  //var str = process.argv[2];
  var noSpaceArr = str.split(" ").join("");
  var newArr = noSpaceArr.split("");
  // change to number??
  for(var i = 0; i < newArr.length; i++) {
    var letter = newArr[i];
    //var index = newArr.indexOf(newArr[i]);
    if (!count[letter]) {
      count[letter] = [i];
      //why is i in square brackets???
    } else {
      count[letter].push(i);
    }
  }
  return count;
}
console.log(countLetters(str));