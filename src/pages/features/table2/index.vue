<template>
  <div>简单一个表</div>
  <div>
    <div>权限：</div>
    <el-select v-model="role" class="m-2" placeholder="Select" size="large">
      <el-option
        v-for="item in roleArr"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="user_name" label="昵称" width="180" />
    <el-table-column prop="role" label="角色" width="180" />
    <el-table-column prop="location" label="地址" />
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
    // mounted() {
    //   this.getTableData()
    // },
  }
</script>
