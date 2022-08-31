<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    status-icon
    class="w-100"
  >
    <el-form-item label="用户昵称" prop="user_name">
      <el-input v-model="ruleForm.user_name" />
    </el-form-item>
    <el-form-item label="真实姓名" prop="real_name">
      <el-input v-model="ruleForm.real_name" />
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="ruleForm.email" />
    </el-form-item>
    <el-form-item label="角色" prop="role">
      <el-select v-model="ruleForm.role" placeholder="请选择用户角色">
        <el-option label="管理员" value="admin" />
        <el-option label="普通用户" value="user" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">{{
        isEdit ? '保存' : '新建'
      }}</el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { ElMessage, FormInstance, FormRules } from 'element-plus'
  import { addUser, getUserById, updateUser } from '/@/api/user/index'
  import { useRouter, useRoute } from 'vue-router'

  const router = useRouter()
  const route = useRoute()
  const ruleFormRef = ref<FormInstance>()
  const state = reactive({
    ruleForm: {
      user_name: '',
      real_name: '',
      email: '',
      role: '',
    },
    isEdit: route.query.id,
  })
  const { ruleForm, isEdit } = toRefs(state)

  const getUserInfo = async () => {
    if (route.query.id) {
      const data = await getUserById({ user_id: route.query.id as string })
      state.ruleForm = data
    }
  }
  onMounted(() => {
    getUserInfo()
  })

  const rules = reactive<FormRules>({
    user_name: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 1, max: 5, message: '用户名长度为3-5', trigger: 'blur' },
    ],
    real_name: [
      { required: true, message: '请输入真实姓名', trigger: 'blur' },
      { min: 1, max: 10, message: '真实姓名长度为1-10', trigger: 'blur' },
    ],
    email: [
      { required: true, message: '请输入邮箱', trigger: 'blur' },
      { min: 1, max: 20, message: '邮箱长度为1-20', trigger: 'blur' },
    ],
    role: [
      {
        required: true,
        message: '请选择用户角色',
        trigger: 'change',
      },
    ],
  })

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        isEdit.value ? updateUser(ruleForm.value) : addUser(ruleForm.value)
        ElMessage({
          message: '操作成功',
          type: 'success',
        })
        router.go(-1)
      } else {
        console.log('error submit!', fields)
      }
    })
  }

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
</script>
