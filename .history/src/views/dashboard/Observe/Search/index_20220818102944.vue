<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-17 17:11:20
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-18 10:29:44
 * @FilePath: \shangpinghui-bs\src\views\dashboard\Observe\Search\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <el-card>
    <div slot="header">
      <div class="search-header">
        <span>线上热门搜索</span>
        <el-dropdown>
          <span>
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div>
      <el-row :gutter="10">
        <el-col :span="12">
          <lineCharts />
        </el-col>
        <el-col :span="12">
          <lineCharts />
        </el-col>
      </el-row>
      <!-- table表格 -->
      <el-table :data="tableData" style="width: 100%;font-size:10px" border>
        <el-table-column label="排名" width="80" type="index">
        </el-table-column>
        <el-table-column prop="word" label="搜索关键字" width="180">
        </el-table-column>
        <el-table-column prop="user" label="用户数" sortable>
        </el-table-column>
        <el-table-column prop="count" label="周涨幅" sortable>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination layout="->,prev, pager, next" :total="total" :current-page="page" :page-sizes="[3, 5, 10]"
        :page-size="limit" @current-change="getSearchList" @size-change="handleSizeChange">
      </el-pagination>
    </div>
  </el-card>
</template>

<script>
import lineCharts from './lineCharts'
import { mapState } from 'vuex'
export default {
  name: 'Search',
  components: { lineCharts },
  data() {
    return {
      tableData: [],
      total: 0,
      page: 1,
      limit: 3,
    }
  },
  computed: {
    ...mapState({
      listState: state => state.home.list
    })
  },
  watch: {
    listState() {
      this.tableData = this.listState.searchWord
    }
  },
  mounted() {
    this.getSearchList();
  },
  methods: {
    // 获取搜索列表的数据
    getPageList(pager = 1) {
      this.page = pager;
      const { page, limit } = this;
      // // 获取品牌列表的接口
      // let result = await this.$API.trademark.reqTradeMarkList(page, limit)
      // if (result.code == 200) {
      //   this.total = result.data.total;
      //   this.list = result.data.records;
      // }
      this.total = this.tableData.length;
    },
  }
}
</script>
<style scoped>
.search-header {
  display: flex;
  justify-content: space-between;
}
</style>
