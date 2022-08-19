<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-17 17:11:20
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-18 11:55:16
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
          <lineCharts :linedata="searchusers" />
        </el-col>
        <el-col :span="12">
          <lineCharts :linedata="searchpercapita" />
        </el-col>
      </el-row>
      <!-- table表格 -->
      <el-table :data="tableData.slice((page - 1) * limit, page * limit)" style="width: 100%;font-size:10px" border>
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
      <el-pagination layout="->,prev, pager, next" :total="total" :current-page="page" :page-size="limit"
        @current-change="getSearchList">
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
      limit: 2,
      // 搜索用户数
      searchusers: {},
      // 人均搜索次数
      searchpercapita: {}
    }
  },
  computed: {
    ...mapState({
      listState: state => state.home.list
    })
  },
  watch: {
    listState() {
      this.total = this.listState.searchWord.length;
      this.tableData = this.listState.searchWord;
      this.searchusers = this.listState.searchtimes.users
      this.searchpercapita = this.listState.searchtimes.percapita
    }
  },
  mounted() {
    this.getSearchList();
  },
  methods: {
    // 获取搜索列表的数据
    getSearchList(pager = 1) {
      this.page = pager;
      this.total = this.listState.searchWord.length;
      this.tableData = this.listState.searchWord
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
