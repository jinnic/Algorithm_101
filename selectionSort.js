//TRY OUT
function selectionSort(arr){
  for(let i = 0 ; i < arr.length; i++){
    let min = i
    for(let j = i+1 ; j< arr.length; j++){
      console.log("I and J : ", i,j)
      if(arr[min] > arr[j]) min = j
    }
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
    console.log("arr ", arr)
  }
  return arr
}

//OPTIMIZED 
function selectionSort(arr){
  for(let i = 0 ; i < arr.length; i++){
    let min = i
    for(let j = i+1 ; j< arr.length; j++){
      console.log("I and J : ", i,j)
      if(arr[min] > arr[j]) min = j
    }
    if(i !== lowest){
      //SWAP!
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
  }
    console.log("arr ", arr)
  }
  return arr
}
selectionSort([2,1,3,0])

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0,2,34,22,10,19,17]);
