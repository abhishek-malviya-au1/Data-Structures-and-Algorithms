//Usual Simple Approach for counting frequency whose comlexity will be O(n^2)
// Here we will compare two strings/arrays and will return true if all the characters/elements have same frequency in both the Arrays/Strings

let normalFrequencyCounter = (str1, str2) => {
    //Here we are splitting the strings and storing each character from the string into an array as an element
    let arr1 = str1.split("");
    let arr2 = str2.split("");

    //If the length of both the strings is not same, then we will return false
    if(arr1.length !== arr2.length) {
        return false;
    }
    
    //Outer loop to loop through all the elements in the 1st array
    for(let i = 0; i <= arr1.length; i++){
        //Inner loop which will compare the element from first array with all the elements in the second array on each iteration
        for(let j = 0; j <= arr2.length; j++){
            if(arr1[i] === arr2[j]){
                //If element in the first array is same as the element in the second array then we will remove that element so that we don't count it again while comparing
                arr2.splice(j,1)
            }
        }
    }
    
    //If each element from first array have same frequency as it has in second array then we will find second array empty after we have compared all the elements
    if(arr2.length === 0){
        return true;
    } else {
        return false;
    }
}

console.log('Normal Counter =>',normalFrequencyCounter('abhishek', 'shekabhi'));



//Optimised Frequency counter
//This approach's complexity is O(3n) which is quite less than the normal approach
let optimisedFrequencyCounter = (str1, str2) => {
    let arr1 = str1.split("");
    let arr2 = str2.split("");

    if(arr1.length !== arr2.length){
        return false;
    }

    let frequency1 = {}
    let frequency2 = {}

    arr1.forEach(element => {
        frequency1[element] = (frequency1[element] || 0) + 1;
    });

    arr2.forEach( element => {
        frequency2[element] = (frequency2[element] || 0) + 1;
    });

    for(key in frequency1){
        if(frequency2[key] !== frequency1[key]){
            return false;
        }
     }
     return true;
}



console.log('Optimised Counter =>',optimisedFrequencyCounter('amazn','zonama'));