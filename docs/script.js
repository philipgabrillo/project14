function bubbleSort(arr) {
  var n = arr.length;
  var swapped;

  do {
      swapped = false;
      for (var i = 0; i < n - 1; i++) {
          if (arr[i] > arr[i + 1]) {
              // Swap elements arr[i] and arr[i+1]
              var temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
              swapped = true;
          }
      }
  } while (swapped);

  return arr;
}

function sortArray() {
  var input = document.getElementById("arrayInput").value;
  var arr = input.split(",").map(function(item) {
      return parseInt(item.trim());
  });

  var sortedArray = bubbleSort(arr);

  document.getElementById("output").innerText = "Sorted Array: " + sortedArray.join(", ");
}

