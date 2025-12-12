//Write a function called same, which accepts two arrays.
//The function should return true if every value in the array has its corresponding value squared in the second array.
//The frequency of values must be the same.


const { log } = require("console")

//Write a function called same, which accepts two arrays.
//The function should return true if every value in the array has its corresponding value squared in the second array.
//The frequency of values must be the same.



function same(array1,array2){
    let counter = 0

    array1.sort((a,b)=> a - b)
    array2.sort((a,b)=> a - b)

    
    for (let i = 0; i < array1.length; i++) {
        if ( Math.pow( array1[i] , 2) === array2[i]) {
            counter ++
        }    
        
    }

    if (counter === array1.length) {
        log(true)
        return true
    } else {
        log(false)
        return false
    }
}

let array1 = [1,2,1]
let array2 = [4,4,1]

same(array1,array2)






