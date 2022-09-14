<template>
  <div>不知道写什么的首页</div>
</template>

<script lang="ts" setup>
  // 二分法
  const binary_search = (arr: number[], guess: number) => {
    let left = 0
    let right = arr.length - 1
    let mid = 0

    while (left <= right) {
      mid = Math.floor((left + right) / 2)
      if (arr[mid] === guess) {
        console.log('got u', mid, arr[mid])
        return true
      }
      if (arr[mid] > guess) {
        right = mid - 1
      }

      if (arr[mid] < guess) {
        left = mid + 1
      }
    }
    console.log('none')
    return false
  }
  binary_search([1, 2, 32, 40, 50, 77, 99], 50)

  // 选择排序
  const selectionSort = (arr: string[]) => {
    const findSmallest = (list: string[]) => {
      if (list.length <= 1) {
        return 0
      }
      let minIndex = 0
      for (let i = 1; i < list.length; i++) {
        if (list[minIndex] > list[i]) {
          minIndex = i
        }
      }
      return minIndex
    }

    const sorted = []
    while (arr.length) {
      const minIdx = findSmallest(arr)
      sorted.push(arr[minIdx])
      arr.splice(minIdx, 1)
    }
    console.log(sorted)
    return sorted
  }

  selectionSort(['pipeneple', 'banna', 'apple', 'waterm', 'stra'])

  // 递归
  const fact = (x: number) => {
    return x <= 1 ? x : x * fact(x - 1)
  }

  console.log(fact(5))

  // 快速排序
  const quickSort = (arr: number[]) => {
    if (arr.length <= 1) {
      return arr
    }
    const flag = arr[0]
    const minList: string[] = []
    const maxList: string[] = []
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= flag) {
        minList.push(arr[i])
      }
      if (arr[i] > flag) {
        maxList.push(arr[i])
      }
    }
    return [...quickSort(minList), flag, ...quickSort(maxList)]
  }

  console.log(quickSort([8, 9, 12, 5, 6, 1, 6, 8, 0]))
</script>
