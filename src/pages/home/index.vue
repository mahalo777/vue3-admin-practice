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

  // 深度优先
  let objTree = {
    index: 0,
    children: [
      {
        index: 1,
        children: [
          {
            index: 11,
            children: [
              {
                index: 111,
              },
            ],
          },
        ],
      },
      {
        index: 2,
      },
      {
        index: 3,
        children: [
          {
            index: 33,
            children: [
              {
                index: 333,
              },
            ],
          },
        ],
      },
      {
        index: 4,
      },
    ],
  }

  const BFS = (tree) => {
    let node = tree
    const stack = []
    const result = []
    stack.push(node)
    while (stack.length) {
      const current = stack.shift()
      result.push(current.index)
      if (current.children) {
        stack.push(...current.children)
      }
    }
    return result
  }
  console.log('BFS', BFS(objTree))

  const DDFS = (node, result = []) => {
    if (node) {
      result.push(node.index)
      if (node.children) {
        for (let i = 0; i < node.children.length; i++) {
          DDFS(node.children[i], result)
        }
      }
    }
    return result
  }
  console.log(DDFS(objTree))

  const DFS = (node) => {
    const result = []
    const stack = []
    stack.push(node)
    while (stack.length) {
      const item = stack.pop()
      result.push(item.index)
      const children = item.children || []
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i]) // 逆序和栈的思维
      }
    }
    return result
  }
  console.log('DFS2', DFS(objTree))

  // 贪心算法
  const tanXin = () => {
    const fin_stations = []
    let states_needed = ['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']

    const stations = {}
    stations['kone'] = ['id', 'nv', 'ut']
    stations['ktwo'] = ['wa', 'id', 'mt']
    stations['kthree'] = ['or', 'nv', 'ca']
    stations['kfour'] = ['nv', 'ut']
    stations['kfive'] = ['ca', 'az']

    while (states_needed.length) {
      let best_station = ''
      let states_covered = []
      for (let state in stations) {
        const current_covered = stations[state].filter((i) => states_needed.includes(i))
        if (current_covered.length > states_covered.length) {
          states_covered = current_covered
          best_station = state
        }
      }
      fin_stations.push(best_station)
      states_needed = states_needed.filter((i) => !states_covered.includes(i))
    }
    console.log('tan', fin_stations)
  }
  tanXin()

  // 动态规划
  const dong = (str1, str2) => {
    let recordI = 0
    let recordJ = 0

    const table = []

    for (let i = 0; i < str1.length; i++) {
      table[i] = []
      for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j] && table[i - 1]) {
          recordI = i
          recordJ = j
          table[i][j] = (table[i - 1][j - 1] || 0) + 1
        } else {
          table[i][j] = 0
        }
      }
    }
    console.log(table[recordI][recordJ]) // 可以截取
  }
  console.log(dong('apple2234', 'clues2234'))

  // 狄克斯特拉算法
  const dikes = () => {
    const graph = {
      start: {
        a: 6,
        b: 2,
      },
      a: {
        fin: 1,
      },
      b: {
        a: 3,
        fin: 5,
      },
      fin: {},
    }

    const costs = {
      a: 6,
      b: 2,
      fin: Infinity,
    }

    const parents = {
      a: 'start',
      b: 'start',
      fin: '',
    }

    const processed = []

    const find_lowest_cost_node = (costs) => {
      let l_cost = 9999
      let l_cost_node = ''
      for (let n in costs) {
        if (costs[n] < l_cost && !processed.includes(n)) {
          l_cost_node = n
          l_cost = costs[n]
        }
      }
      return l_cost_node
    }

    let node = find_lowest_cost_node(costs)
    while (node) {
      let cost = costs[node]
      let neighbor = graph[node]
      for (let item in neighbor) {
        let new_cost = cost + neighbor[item]
        if (costs[item] > new_cost) {
          costs[item] = new_cost
          parents[item] = node
        }
      }
      processed.push(node)
      node = find_lowest_cost_node(costs)
    }

    console.log('---', JSON.stringify(parents), costs)
  }
  dikes()

  // 深度优先的循环实现,很有意思,倒序push保持顺序和递归
  // 迪克斯特拉算法,始终找到和记录最便宜的节点
  // 贪心算法,寻找局部最优解,企图以这种方式获取全局最优解,易于实现,运行速度快(NP完全问题、所有组合、交集)
  // vue和react 深度优先和广度优先
  // 新的数据结构: 堆、栈、队列、数组、链表、散列表、图、树
  // 递归,被很多算法应用,如快速排序
  // 如果不确定该如何高效解决,可以尝试分而治之(递归)或者动态规划;如果意识到根本没有高效的解决方案,可以转用贪心算法,找到近似答案
  // 动态规划解决方案都涉及网格,单元格中的值通常是要优化的值.每个单元格都是一个子问题,将问题分解成子问题,再逐步解决大问题.
  // 需要在给定约束条件下优化某种指标时,动态优化很有用;问题可以分解为离散子问题时,可以使用动态规划
</script>
