
const array = [32, 523, 5632, 920, 6000];
//Initialize the largestNum as index of arr[0] element
let largestNum = array[0];
let secondLargestNum = 0;
//Start traversing the array from array[1],
//If the current element in array say arr[i] is greaterthan largestNum. 
//Then update largestNum and secondLargestNum as,
      secondLargestNum = largestNum
      largestNum = arr[i]
for(let i = 1; i < array.length; i++) {
	if(array[i] > largestNum) {
    secondLargestNum = largestNum;
    largestNum = array[i];  
    }
  else if(array[i] !== largestNum && array[i] > secondLargestNum) 
  {
  secondLargestNum = array[i];
  }
}
console.log("Largest Number in the array is " + largestNum);
//Return the value stored in secondLargestNum.
console.log("Second Largest Number in the array is " + secondLargestNum);
