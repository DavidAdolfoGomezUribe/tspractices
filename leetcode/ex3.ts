// function lengthOfLongestSubstring(s: string): number {
//   //agarrar la primera letra comparar con la que tiene adelante , medir la distancia si son iguales , seguir buscando
//   let firstCharacter: string | undefined
//   let secondCharacter: string | undefined
//   let arrayOne: number[] = []

import log = require("console")
import console = require("console")

//   let result: number = 0
//   let word: string | undefined

//   if (s === "") {
//     console.log(0);
    
//     return 0

//   } else if (s === " " || s.length === 1) {
//     console.log(1);
    
//     return 1
    
//   } else if (new Set(s).size === s.length){
//     console.log(s.length)
    
//     return s.length

//   }else{
  
//     for (let i = 0; i < s.length; i++) {
//       firstCharacter = s[i]

//       for (let j = i + 1; j < s.length; j++) {

//         secondCharacter = s[j]

//         if (firstCharacter === secondCharacter) {

//           word = s.substring(i, j)

//           let newWord = word.substring(1, word.length)

//           if (!newWord.includes(word[0] ?? "")) {

//             //console.log(word)

//             arrayOne.push(word.length)
//           }

//           //si una letra se repite en una cadena de caracteres 



//         }

//       }


//     }


//     result = Math.max(...arrayOne)

//     console.log(result);
    
//     return result
//   }
// };

// lengthOfLongestSubstring("aab")//2
// //lengthOfLongestSubstring("abcabcbb")

// //lengthOfLongestSubstring("bbb")



function lengthOfLongestSubstring(s: string): number {
  // para string (s) crear un set donde ir guardando la cadena, verificar duplicidad , si exsite eliminar el primero y añadir al ultimo, 
  // un contador de distancia y condicionales
  
  let letraInicial = 0 //esto va a seguir incrementando para mover el puntero imaginario hacia adelandte 
  let distanciaTotal = 0 
  
  //estructura de datos
  let memoryTypeSet = new Set()
  
  for (let i = 0; i < s.length; i++) {
    
    //si/mientras que la letra inicial exista en el set entonces
    while (memoryTypeSet.has(s[i])) { //-> esto devuelve true o false 
         
      memoryTypeSet.delete(s[letraInicial]) // esto borraria del set la letra que se introduce y como estamos en un bicle for , eliominaria la primera
      letraInicial++

    }

    memoryTypeSet.add(s[i]) //como eliminamos el duplicado del inicio, hay que agregarlo al final para poder seguir avanzando e incluyendo futuros caracteres
    
    distanciaTotal = Math.max(distanciaTotal,(i-letraInicial+1))


    
  }


  console.log(distanciaTotal)
  return distanciaTotal
}



lengthOfLongestSubstring("abcabcbb")