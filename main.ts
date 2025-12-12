
//console.time("tiempo")

import console = require("console")

//esta solucion es solucion pero no del tipo o n log (m+n)
function findMedianSortedArrays(nums1:number[], nums2:number[]):number {
    
    let array1 = [...nums1,...nums2]
    // console.log(array1)        
    // console.log("----------")        
    
    //comparar el primero con el segundo
    //ordenar los arrays
    let boolean= true

    while(boolean){

        boolean = false

        for (let i = 0; i < array1.length; i++) {
            // console.log("-----",i+1,"iteracion")        
            // console.log("------antes de arreglar-----")        
            // console.log(array1)        
            // console.log("----despues de arreglar-------")        
            
            
            let mayor = array1[i+1]!

            if (mayor === undefined) {
                console.log("hay un indefined")
                mayor = Infinity
                }

            if (array1[i]!>mayor){
                
                let elprimero = array1[i] 
                let elsegundo = array1[i+1]

                if (typeof elprimero === "number" && typeof elsegundo === "number"   ) {
                  array1[i+1] = elprimero
                  array1[i] = elsegundo
                  
                }
                
                boolean=true

                
            } 
            
            
            // console.log("  ")        
            
        }
    }
    
    if (array1.length % 2 === 0) {
        
        let resultado = (array1[array1.length/2]!+array1[(array1.length/2)-1]!)/2
        //console.log(array1)
        //console.log(resultado)
        return resultado

    } else if (array1.length % 2 !== 0){
        
        let resultado = array1[array1.length/2-0.5]!
        //console.log(array1)
        //console.log(resultado)
        return resultado
    }




    // console.log(array1) 
    // console.log(array1.length/2)
    // console.log((array1[array1.length/2]+array1[(array1.length/2)-1])/2)



    return 0
};

const respuest = findMedianSortedArrays([1,2],[3,4])//2.5 expected

console.log(respuest)


//console.timeEnd("tiempo")

