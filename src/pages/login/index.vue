<template>
  <div class="login-container">
    <div class="left-con">
      <span>一些说明</span>
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
        <el-form-item label="账号" prop="account">
          <el-input v-model="ruleForm.account" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
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

  const ruleFormRef = ref<FormInstance>()

  const ruleForm = reactive({
    account: '',
    pass: '',
  })

  const rules = reactive({
    account: [{ required: true, message: '请输入账号' }],
    pass: [{ required: true, message: '请输入密码' }],
  })

  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        console.log('submit!')
      } else {
        console.log('error submit!')
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
