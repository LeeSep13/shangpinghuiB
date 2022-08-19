<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-17 17:10:18
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-18 16:35:46
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Observe\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <Search />
      </el-col>
      <el-col :span="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <Category />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Search from './Search'
import Category from './Category'
export default {
  name: 'Observe',
  components: { Search, Category },
  data() {
    return {

    }
  },
}
</script>
<style scoped>
</style>
