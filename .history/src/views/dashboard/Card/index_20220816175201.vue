<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-16 17:43:18
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-16 17:51:17
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Card\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card>
          <Detail></Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail></Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail></Detail>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <Detail></Detail>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from './Detail'
export default {
  name: 'Card',
  components: {
    Detail,
  },
  data() {
    return {

    }
  },
}
</script>
<style scoped>
</style>
