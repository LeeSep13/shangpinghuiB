<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-14 10:47:01
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-14 10:49:36
 * @FilePath: \shangpinghui-bs\src\components\HintButtion\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <a :title="title" style="margin:10px">
    <el-button v-bind="$attrs" v-on="$listeners"></el-button>
  </a>
</template>

<script>

export default {
  name: 'HintButton',
  props: ["title"],
}
</script>
<style scoped>
</style>
