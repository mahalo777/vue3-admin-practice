<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <Layout />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
  import Layout from '/@/components/Layout/index.vue'
  import Header from '/@/components/Header/index.vue'
</script>

<style scoped lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: var(--color-bg-1);
    display: flex;
  }
</style>
