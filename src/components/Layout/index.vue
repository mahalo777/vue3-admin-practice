<template>
  <div class="layout-con">
    <div class="logo">Secret Garden</div>
    <el-menu default-active="1" :router="true" background-color="#222832" text-color="#fff">
      <template v-for="item in menus">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}</el-menu-item
                >
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.index" :key="'sub' + subItem.index"
                >{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
  type MenuItem = { index: string; title: string; icon?: string; subs?: Array<MenuItem> }

  const menus: MenuItem[] = [
    {
      index: '/home',
      title: '系统首页',
    },
    {
      index: '/dashboard',
      title: '仪表盘',
    },
    {
      index: '/features',
      title: '功能',
      subs: [
        {
          index: '/features/table',
          title: '列表1',
        },
        {
          index: '/features/table2',
          title: '列表2',
        },
      ],
    },
  ]
</script>
<style scoped lang="less">
  .layout-con {
    background-color: #222832;
    height: 100vh;

    .logo {
      text-align: center;
      padding: 20px 0;
      color: #fff;
      font-weight: 500;
    }
  }
</style>
