<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-12 17:27:42
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-12 17:32:24
 * @FilePath: \shangpinghui-bs\src\components\CategorySelect\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'CategorySelect',
  components: {},
  data() {
    return {

    }
  },
}
</script>
<style scoped>
</style>
