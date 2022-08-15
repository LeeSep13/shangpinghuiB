<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:21:47
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-13 21:50:30
 * @FilePath: \shangpinghui-bs\src\views\product\spu\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <el-card style="margin:20px 0px">
      <CategorySelect @getCategoryId="getCategoryId" :show="!isShowTable" />
    </el-card>
    <el-card></el-card>
  </div>
</template>

<script>
export default {
  name: "spu",
  data() {
    return {
      category1Id: '',
      category2Id: '',
      category3Id: '',
    };
  },
  methods: {
    // 三级联动的自定义事件,可以把子组件的相应id传递给父组件
    getCategoryId({ categoryId, level }) {
      // categoryId:获取一  二  三级分类的id level:为了区分几级id
      if (level == 1) {
        this.category1Id = categoryId;
        // 清除二,三级分类的id
        this.category2Id = '';
        this.category3Id = '';
      }
    }
  }
};
</script>
<style scoped>
</style>
