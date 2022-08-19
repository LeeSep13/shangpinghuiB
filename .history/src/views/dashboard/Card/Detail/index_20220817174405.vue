<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-16 17:47:02
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-17 17:44:05
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Card\Detail\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <div class="card-header">
      <span class="f14">{{ title }}</span>
      <i class="el-icon-warning-outline"></i>
    </div>
    <div class="card-content">{{ count }}</div>
    <div class="card-charts f14">
      <slot name="charts"></slot>
    </div>
    <div class="card-footer f14">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ['title', 'count'],
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.f14 {
  font-size: 14px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  color: #d9d9d9;
}

.card-content {
  font-size: 30px;
  padding-bottom: 20px;
}

.card-charts {
  height: 50px;
}

.card-charts>span {
  line-height: 60px;
}

.card-footer {
  border-top: 1px solid #eee;
  padding-top: 10px;
}
</style>
