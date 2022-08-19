<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 10:45:53
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-16 23:05:16
 * @FilePath: \shangpinghui-bs\src\views\dashboard\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <Card></Card>
    <Sale></Sale>
  </div>
</template>

<script>
import Card from "./Card"
import Sale from "./Sale/index.vue";
export default {
  name: 'index',
  components: { Card, Sale },
  data() {
    return {

    }
  },
}
</script>
<style scoped>
</style>
