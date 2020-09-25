/*
Given a document, implement an algorithm to count the number of word occurrences.

- Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
- Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`
*/


const string = "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"


function wordCount(string){ 
    const array1 = string.split(' ')
    const array2 = array1.map(word => word.replace(/[^a-z0-9+]+/gi,"").toLowerCase())
    const object = {}
    
    array2.forEach(word => object[word]=0)

    for(let i=0; i<array2.length; i++){
        if(object.hasOwnProperty(array2[i])){
          object[array2[i]] = object[array2[i]] + 1
        }
    }
    
    return object;
}


console.log(wordCount(string))



