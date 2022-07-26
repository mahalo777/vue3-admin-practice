<script lang="ts">
  export default {
    name: 'THeader',
    setup() {
      const route = useRoute()
      const state = reactive({
        breadcrumb: [],
      })

      watch(
        () => route.path,
        () => {
          state.breadcrumb = route.matched.map((item) => {
            const arr = { ...item, title: item.meta.title }
            return arr
          })
        },
      )

      return {
        ...toRefs(state),
      }
    },
  }
</script>

<template>
  <div class="top-header">
    <div class="left-con">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="(item, index) in breadcrumb"
          :key="index"
          :to="{ path: item.path }"
          >{{ item.title }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="right-con">2</div>
  </div>
</template>

<style lang="less" scoped>
  .top-header {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }
</style>
