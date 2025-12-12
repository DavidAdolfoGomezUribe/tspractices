

function twoSum(nums: number[], target: number): number[] {
    //eh?
    let newNums:number[] = []
        
    for(let i=0;i<nums.length;i++){

      let numOne = nums[i]??0
      
      
      for(let j = i+1; j<nums.length;j++){
        
        let numTwo = nums[j]??0
          
          if( (numOne + numTwo ) == target ){
  
              newNums = [i , j]
              console.log([i,j]);
              
              
          }
      }
      
      
    }

    console.log(newNums,"expected");
    
    return newNums

}

twoSum([3,3],6)


