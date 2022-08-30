<script lang="ts">
  import { useUserStore } from '/@/store'

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

      const userStore = useUserStore()
      userStore.getInfo()
      const { user_name, avatar } = storeToRefs(userStore)

      return {
        ...toRefs(state),
        user_name,
        avatar,
      }
    },
    methods: {
      ...mapActions(useUserStore, ['logout']),
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
    <div>
      <el-popover trigger="hover">
        <template #reference>
          <div class="flex">
            <span>{{ user_name }}</span>
            <img :src="avatar" class="w-8 h-8 ml-3" />
          </div>
        </template>
        <div class="text-center" @click="logout">退出</div>
      </el-popover>
    </div>
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
