<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-14 11:11:46
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-15 16:06:17
 * @FilePath: \shangpinghui-bs\src\views\product\spu\SkuForm\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="SPU名称">
        海绵宝宝
      </el-form-item>
      <el-form-item label="SKU名称">
        <el-input placeholder="SKU名称"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'SkuForm',
  components: {},
  data() {
    return {

    }
  },
}
</script>
<style scoped>
</style>
