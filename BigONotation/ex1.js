const { log } = require("console")

function charCount (str){
    let objectCounter = {}
    let char = ""

    for (let i = 0; i < str.length; i++) {
        
        char = str[i]
        //log(char)

        if (objectCounter[char] > 0 ) {
            
            
            objectCounter[char] += 1    
            
        }else{
            
            objectCounter[char] = 1   
        }
        
        
    }


    console.log(objectCounter)
}

charCount("aaaeee")