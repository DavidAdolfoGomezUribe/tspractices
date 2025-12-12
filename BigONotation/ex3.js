const { log } = require("console")

//ANAGRAMS

//Given two strings, write a function to determine if the second string is an anagram of the first.
//An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function anagram(str1,str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string" ) {
        return "no es un anagrama"
    }
    if (str1.length !== str2.length){
        return "no es un anagrama"
    }

    let newstr1 = str1.split("").sort().join("")
    let newstr2 = str2.split("").sort().join("")

    log(newstr1,newstr2)

    if (newstr1 === newstr2) {
        return "es un anagrama"
    }else{

        return "no es un anagrama"
    }
}


function validAnagram (str1 = "",str2 = ""){
    if (typeof str1 !== "string" || typeof str2 !== "string" ) {
        return "no es un anagrama"
    }
    if (str1.length !== str2.length){
        return "no es un anagrama"
    }


    let objetoContador = {}

    for (let i = 0; i < str1.length; i++) {
        
        if ( objetoContador[str1[i]] >= 1 ) {
            objetoContador[str1[i]] += 1 
        } else {
            objetoContador[str1[i]] = 1 
        }
        
    }

    for (let j = 0; j < str1.length; j++) {
        
        if ( typeof objetoContador[str2[j]] === "undefined" ) {
            objetoContador[str2[j]] -= 1 

        } else {
            log(objetoContador)
            return false
        }
        
    }
    
    log(objetoContador)
    return true
}


log(validAnagram("aaaasssgl","aaaassssk"))




//log(validAnagram('', ''),"true") // true
//log(validAnagram('aaz', 'zza'),"false") // false
// log(validAnagram('anagram', 'nagaram'),"true") // true


//  log(validAnagram("rat","car"),"false") // false) // false
//  log(validAnagram('awesome', 'awesom'),"false") // false
//  log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'),"false") // false
//  log(validAnagram('qwerty', 'qeywrt'),"true") // true
//  log(validAnagram('texttwisttime', 'timetwisttext'),"true") // true