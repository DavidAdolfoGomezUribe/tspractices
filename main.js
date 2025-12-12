//Write a function called sumZero which accepts a sorted array of integers.
//The function should find the first pair where the sum is 0.
//Return an array that includes both values that sum to zero or undefined if a pair does not exist.

const { log } = require("console")


function sumZero(array=[]) {
    for (let i = 0; i < array.length; i++) {
        
        let startingNumber = array[i]

        for (let j = i + 1 ; j < array.length; j++) {
            
            if (startingNumber + array[j] === 0) {
                let newArray = [startingNumber,array[j]]
                return newArray
            }
            
        }
        
    }
    
    return false

}



function sumZeroTwo(array= []){

    if (array.length === 0) {
        return false
    }
    
    let startPoniter = 0
    let endPointer = array.length - 1
    

    while( startPoniter < endPointer){
        
        let sum = array[startPoniter] + array[endPointer]
        
        if (sum === 0) {
            let newArray = [array[startPoniter],array[endPointer]]
            return newArray
        }else if(sum > 0){
            endPointer--
        }else{
            startPoniter++
        }
    }
}

console.log(sumZeroTwo([-3,-2,0,1,2,3,4,5,6,7]))


