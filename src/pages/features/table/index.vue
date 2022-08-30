<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <div>权限：</div>
      <el-select
        v-model="role"
        class="m-2"
        placeholder="选择用户权限"
        size="middle"
        @change="getTableData"
      >
        <el-option
          v-for="item in roleArr"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <el-button type="primary">+新增</el-button>
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="user_name" label="昵称" width="180" />
    <el-table-column prop="role" label="角色" width="180" />
    <el-table-column prop="email" label="邮箱" />
    <el-table-column prop="avatar" label="头像" width="180">
      <template #default="scope">
        <img :src="scope.row.avatar" class="w-8 h-8" />
      </template>
    </el-table-column>
    <el-table-column label="操作" width="180">
      <template #default>
        <el-button size="small">编辑</el-button>
        <el-button size="small" type="danger">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
  import { getUserTable } from '/@/api/user/index'

  export default {
    setup() {
      const state = reactive({
        tableData: [],
        role: '',
        roleArr: [],
      })

      state.roleArr = [
        { value: 'admin', label: '管理员' },
        { value: 'user', label: '用户' },
      ]

      const getTableData = async () => {
        const result = await getUserTable()
        state.tableData = result
      }

      onMounted(() => {
        getTableData()
      })
      return {
        ...toRefs(state),
        getTableData,
      }
    },
  }
</script>
