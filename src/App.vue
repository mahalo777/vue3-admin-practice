<template>
  <div id="app">
    <el-container v-if="showMenu">
      <el-aside width="200px">
        <Layout />
      </el-aside>
      <el-container>
        <el-header>
          <TopHeader />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
    <router-view v-else />
  </div>
</template>
<script lang="ts">
  import Layout from '/@/components/Layout/index.vue'
  import TopHeader from '/@/components/Header/index.vue'

  export default {
    components: {
      Layout,
      TopHeader,
    },
    setup() {
      const state = reactive({
        showMenu: true,
      })

      const route = useRoute()
      watch(
        () => route.path,
        () => {
          state.showMenu = !route.path.includes('login')
        },
      )

      return {
        ...toRefs(state),
      }
    },
  }
</script>

<style scoped lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: var(--color-bg-1);
  }
</style>
