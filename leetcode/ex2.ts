 class ListNode {
      val: number
      next: ListNode | null
      
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      
     }
  }

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
 
const listOne: ListNode = {
  val: 1,
  next: {
    val: 0,
    next: {
      val: 0,
      next: {
        val: 0,
        next: {
          val: 0,
          next: {
            val: 0,
            next: {
              val: 0,
              next: {
                val: 0,
                next: {
                  val: 0,
                  next: {
                    val: 0,
                    next: {
                      val: 0,
                      next: {
                        val: 0,
                        next: {
                          val: 0,
                          next: {
                            val: 0,
                            next: {
                              val: 0,
                              next: {
                                val: 0,
                                next: {
                                  val: 0,
                                  next: {
                                    val: 0,
                                    next: {
                                      val: 0,
                                      next: {
                                        val: 0,
                                        next: {
                                          val: 0,
                                          next: {
                                            val: 0,
                                            next: {
                                              val: 0,
                                              next: {
                                                val: 0,
                                                next: {
                                                  val: 0,
                                                  next: {
                                                    val: 0,
                                                    next: {
                                                      val: 0,
                                                      next: {
                                                        val: 0,
                                                        next: {
                                                          val: 0,
                                                          next: {
                                                            val: 0,
                                                            next: {
                                                              val: 1,
                                                              next: null
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}


const listTwo: ListNode = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
}



function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  
let keyword:boolean = true  
let newListOne:Number[] = []  
let newListTwo:Number[] = []  
let currentOne = l1
let currentTwo = l2

while (keyword) {
  if(currentOne!==null){
    newListOne.push(currentOne.val)
    currentOne = currentOne.next
  }else{
    break
  }
}

while (keyword) {
  if(currentTwo!==null){
    newListTwo.push(currentTwo.val)
    currentTwo = currentTwo.next
  }else{
    break
  }
}

let arrayOne = []
for(let i = (newListOne.length-1) ; i>=0 ; i--){
   arrayOne.push(newListOne[i])
     
}

let arrayTwo= []
for(let i = (newListTwo.length-1) ; i>=0 ; i--){
   arrayTwo.push(newListTwo[i])
} 

let ordenedArryOne = BigInt(arrayOne.join(""))
let ordenedArryTwo = BigInt(arrayTwo.join(""))

let result = (BigInt(ordenedArryOne) + BigInt(ordenedArryTwo)).toString()


let head:ListNode|null = null
let actual: ListNode|null= null

for (let i = (result.length-1) ; i>=0 ; i--) {
  
  const newList = new ListNode(parseInt(result[i]||"0")) 

  if(head === null){
  
    head = newList
    actual = newList
  
  }else{
    
    actual!.next = newList
    actual = newList
  
  }
  
}

console.log(head)

  

console.log("-----------")
console.log(result)

// console.log(current)
// console.log(ordenedArryOne)
// console.log(ordenedArryTwo)
// console.log(newListOne,newListTwo)
// const example = newListOne.join("")

// console.log(example)
// console.log("----------")

// console.log(l1)
// console.log(l2)

return head
};

addTwoNumbers(listOne,listTwo)