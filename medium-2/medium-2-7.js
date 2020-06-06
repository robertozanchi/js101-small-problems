// Bubble Sort
// June 6, 2020

/*
procedure bubbleSort(A : list of sortable items)
    n := length(A)
    repeat
        newn := 0
        for i := 1 to n - 1 inclusive do
            if A[i - 1] > A[i] then
                swap(A[i - 1], A[i])
                newn := i
            end if
        end for
        n := newn
    until n ≤ 1
end procedure
*/

let bubbleSort = function (arr) {
  let n = arr.length;

  do {
    newN = 0;
    for (let idx = 1; idx <= n - 1; idx += 1) {
      if (arr[idx - 1] > arr[idx]) {
        [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
        newN = idx;
      }
    }
    n = newN;
  } while (n > 1);
};

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

let array3 = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
