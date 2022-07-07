<template>
  <div class="#app">
    <Layout />
    <div class="flex1">
      <Header />
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts">
  import Layout from '/@/components/Layout/index.vue'
  import Header from '/@/components/Header/index.vue'
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: var(--color-bg-1);
  }
</style>
