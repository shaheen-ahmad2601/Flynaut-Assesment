// 2)longest-chain-of-letters-in-word-javascript
// const word = '00000111110101001111100001001'

function LongestChain(char) {
    let longestChain = 0;
    let currentChain = 0;
    
    // Iterate over each character in the word
    for (let i = 0; i < char.length; i++) {
      // Check if the character is "1"
      if (char[i] === "1") {
        currentChain++; 
        // Inc the current chain length
        
        // Update the longest chain if the current chain is longr
        longestChain = Math.max(longestChain, currentChain);
      } else {
        currentChain = 0; 
        // reset the current chain length if char is not "1"
      }
    }
    
    return longestChain; // return the value
  }
  
   const char = "00000111110101001111100001001";
  const longestChain = LongestChain(char);
  console.log("The longestChain is:", longestChain);
  