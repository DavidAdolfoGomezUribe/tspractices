//countUniqueValues

//  Implement a function called countUniqueValues, which accepts a sorted array,
//  and counts the unique values in the array. There can be negative numbers in the array,
//  but it will always be sorted.

array=[1,1,1,1,2,2,2,3,3,3,3,3]

function countUniqueValues(array){
    let set = new Set(array)
    console.log(set)


}

countUniqueValues(array)