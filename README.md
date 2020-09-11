# Algorithm_101
Notes and code for algorithms I'm learning

# Sort
Rearranging items in collection in order
why? 1. it's common problem/need 2. many ways to do same job with diffrent pro and con

## Bubble Sort
Compare two elements next to each other and move MAX to end of array
* https://visualgo.net/en/sorting?slide=1

```javascript
function bubbleSort(arr){
  let noSwaps;
  for(let i = arr.length; i > 0; i--){
    noSwaps = true;
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}
```

## Selection Sort
Selecting the MIN of array and move it to beginning of array


## Resources
* https://www.toptal.com/developers/sorting-algorithms
