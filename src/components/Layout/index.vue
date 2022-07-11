<template>
  <div class="layout-con">
    <div>请输入系统名字</div>
    <el-menu default-active="2" @open="handleOpen" @close="handleClose">
      <template v-for="item in menus">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}</el-menu-item
                >
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="'sub' + subItem.index"
                >{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }

  type MenuItem = { index: string; title: string; icon?: string; subs?: Array<MenuItem> }

  const menus: MenuItem[] = [
    {
      index: '/home',
      title: '系统首页',
      icon: 'el-icon-lx-home',
    },
    {
      index: '/basicChart',
      title: '基础表单',
      icon: 'el-icon-lx-cascades',
      subs: [
        {
          index: '/form',
          title: '基本表单',
        },
      ],
    },
  ]
</script>
<style scoped lang="less"></style>
