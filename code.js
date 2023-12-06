// Step 2
// Problem 1
function addToZero(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length; j++) {
        if (array[i] + array[j] === 0) {
          return true;
        }
      }
    }
    return false;
  }
  
  console.log("addToZero", addToZero([]));
  console.log("addToZero", addToZero([1]));
  console.log("addToZero", addToZero([1, 2, 3]));
  console.log("addToZero", addToZero([1, 2, 3, -2]));
  
  // ExtraCredit:
  // I believe the runtime of this function is O(n²) because there is a nested loop within it, which is n * n operations
  // I believe the space complexity of this function is O(1) because the parameter being passed does not get stored in any way and is therefore constant
  
  // Problem 2
  
  function hasUniqueChars(string) {
    const uniqueChars = [];
    for (let i = 0; i < string.length; i++) {
      if (!uniqueChars.includes(string[i])) {
      } else {
        return false;
      }
    }
    return true;
  }
  
  console.log("hasUniqueChars", hasUniqueChars("Monday"));
  console.log("hasUniqueChars", hasUniqueChars("Moonday"));
  
  // ExtraCredit:
  // I believe the runtime complexity of this function is also O(n²) because .includes is essentially a loop making this function a nested loop again.
  // I believe the space complexity of this function is O(n) because because uniqueChars array can grow linearly depending on the number of unique characters in the parameter, and therefore isnt constant

// Problem 3

function isPangram(sentence) {
    const letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
  
    for (let i = 0; i < letters.length; i++) {
      if (!sentence.includes(letters[i])) {
        return false;
      }
    }
    return true;
  }
  
  console.log(
    "isPangram",
    isPangram("The quick brown fox jumps over the lazy dog!")
  );
  console.log("isPangram", isPangram("I like cats, but not mice"));
  
  // ExtraCredit:
  // The runtime complexity of this one is also quadratic for the same reason problems 1 and 2 were.
  // The space complexity of this one is O(1) because the parameter to the function does not count towards space complexity and the alphabet is fixed length.
  // the variable i's space complexity also will not increase depending on the parameter thats passed in
  
  // Problem 4
  
  function findLongestWord(array) {
    let biggestWordCount = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (biggestWordCount < array[i].length) {
        biggestWordCount = array[i].length;
      }
    }
  
    return biggestWordCount;
  }
  
  console.log(findLongestWord(["hi", "hello"]));
  
  // ExtraCredit:
  // The runtime is just O(n) or linear runtime because there is only a single loop. so the complexity of this function will only increase depending on the size of the loop.
  // The space complexity of this one is O(1) because no additional storage space is required beyond what the function already requires. the parameter does not effect it