const mergeSortBottomUp = (arr) => {
  const N = arr.length

  for (let size = 1; size < N; size = size * 2) {
      for(let low = 0; low < N - size; low += size * 2) {
          const mid = low + size - 1
          const high = Math.min(low + (size * 2 - 1), N - 1);

          merge(arr, low, mid, high);
      }
  }

  return arr;
}

const merge = (arr, low, mid, high) => {
    const aux = []

    let i = low
    let j = mid + 1

    while (i <= mid && j <= high) {
        const num1 = arr[i]
        const num2 = arr[j]

        if (num1 <= num2) {
            aux.push(num1)
            i++
        } else {
            aux.push(num2)
            j++
        }
    }

    while (i <= mid) {
        aux.push(arr[i])
        i++
    }

    while (j <= high) {
        aux.push(arr[j])
        j++
    }

    for (let k = low, i = 0; k <= high; k++, i++) {
        arr[k] = aux[i]
    }
}