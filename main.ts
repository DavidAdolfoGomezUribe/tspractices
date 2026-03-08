
//console.time("tiempo")


// ex 5 Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 
console.log("ok")

function longestPalindrome(s: string): string {
    //si la midad menos 1 es igual a la mitad mas 1
    // casos aa, aba, abba, ""
    let centro = 0
    let punteroIzq = 1
    let punteroDer = 1

    for (let i = 0; i < s.length; i++) {
        
        if (s[centro-punteroIzq] === s[centro+punteroDer]) {
            
            


        } else {
            
        }
        
        centro++    
    }


    return "ok"
};

//asdfdsa