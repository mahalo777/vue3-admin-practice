<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <div>权限：</div>
      <el-select v-model="role" class="m-2" placeholder="选择用户权限" @change="getTableData">
        <el-option
          v-for="item in roleArr"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <el-button type="primary" @click="addUser">+ 新增</el-button>
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="user_name" label="昵称" width="180" />
    <el-table-column prop="role" label="角色" width="180" />
    <el-table-column prop="email" label="邮箱" />
    <el-table-column prop="user_id" label="id" />
    <el-table-column label="头像" width="180">
      <template #default="scope">
        <img :src="scope.row.avatar" class="w-8 h-8" />
      </template>
    </el-table-column>
    <el-table-column label="操作" width="180">
      <template #default="scope">
        <el-button size="small" @click="edit(scope.row.user_id)">编辑</el-button>
        <el-button size="small" type="danger" @click="del(scope.row.user_id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
  import { getUserTable } from '/@/api/user/index'
  import { useRouter } from 'vue-router'
  import { delUser } from '/@/api/user/index'
  import { ElMessage } from 'element-plus'

  export default {
    setup() {
      const state = reactive({
        tableData: [],
        role: '',
        roleArr: [],
      })

      const router = useRouter()

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

      const addUser = () => {
        router.push({ path: '/addUser' })
      }

      const del = async (user_id: string) => {
        await delUser({ user_id })
        ElMessage({
          message: '操作成功',
          type: 'success',
        })
        await getTableData()
      }

      const edit = (user_id: string) => {
        router.push({ path: '/addUser', query: { id: user_id } })
      }
      return {
        ...toRefs(state),
        getTableData,
        addUser,
        del,
        edit,
      }
    },
  }
</script>
