<template>
  <div class="login-container">
    <div class="left-con">
      <div class="logo">Secret Garden</div>
    </div>
    <div class="login-form">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="form"
        size="large"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model="ruleForm.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import type { FormInstance } from 'element-plus'
  import { useUserStore } from '/@/store'
  const router = useRouter()

  const ruleFormRef = ref<FormInstance>()
  const userStore = useUserStore()
  const ruleForm = reactive({
    username: '',
    password: '',
  })

  const rules = reactive({
    username: [{ required: true, message: '请输入账号' }],
    password: [{ required: true, message: '请输入密码' }],
  })

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid) => {
      if (valid) {
        userStore.login(ruleForm).then(() => {
          router.push('/home')
        })
      } else {
        return false
      }
    })
  }

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
</script>

<style lang="less" scoped>
  .login-container {
    display: flex;
    justify-content: space-between;
    height: 100vh;

    .left-con {
      flex: 1;
      background-image: url(/@/assets/images/login-bg.svg);
      background-repeat: no-repeat;
      background-size: auto 100%;
      background-position: 100%;

      .logo {
        padding: 100px;
        color: #fff;
        font-weight: 500;
        font-size: 30px;
      }
    }

    .login-form {
      flex: 1;
      display: flex;
      align-items: center;

      .form {
        width: 400px;
      }
    }
  }
</style>
