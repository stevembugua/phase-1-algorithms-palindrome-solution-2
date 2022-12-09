function isPalindrome(word) {
    // First, we need to remove all non-alphanumeric characters and turn the
    // string into all lowercase, so that we can compare it easily.
    word = word.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
    // Now, we can loop through the string and compare the character at the
    // beginning of the string with the character at the end, and so on.
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        // If we find a pair of characters that don't match, we know that
        // the string is not a palindrome and we can return false.
        return false;
      }else{
        return true;
      }
    }
  
    // If we make it through the entire loop without finding any non-matching
    // characters, we know that the string is a palindrome and we can return
    // true.
    
  }
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
