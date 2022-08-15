<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-14 11:11:46
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-15 16:11:01
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
      <el-form-item label="价格（元）">
        <el-input placeholder="价格（元）"></el-input>
      </el-form-item>
      <el-form-item label="重量（千克）">
        <el-input placeholder="重量（千克）"></el-input>
      </el-form-item>
      <el-form-item label="规格描述">
        <el-input type="textarea" rows="4" placeholder="规格描述"></el-input>
      </el-form-item>
      <el-form-item label="平台属性">
        <el-form :inline="true" ref="form" label-width="80px">
          <el-form-item label="屏幕尺寸">
            <el-select placeholder="请选择" value="">
              <el-option label="label" value="value"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
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
