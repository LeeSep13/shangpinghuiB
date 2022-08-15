<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-11 16:21:47
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-15 21:59:50
 * @FilePath: \shangpinghui-bs\src\views\product\spu\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <el-card style="margin:20px 0px">
      <CategorySelect @getCategoryId="getCategoryId" :show="scene != 0" />
    </el-card>
    <el-card>
      <div v-show="scene == 0">
        <!-- 展示SPU列表的结构 -->
        <el-button type="primary" icon="el-icon-plus" :disabled="!category3Id" @click="addSpu">添加SPU</el-button>
        <el-table style="width:100%" border :data="records">
          <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
          <el-table-column prop="spuName" label="SPU名称"></el-table-column>
          <el-table-column prop="description" label="SPU描述"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="{row,$index}">
              <hint-button type="success" icon="el-icon-plus" size="mini" title="添加sku" @click="addSku(row)">
              </hint-button>
              <hint-button type="warning" icon="el-icon-edit" size="mini" title="修改spu" @click="updataSpu(row)">
              </hint-button>
              <hint-button type="info" icon="el-icon-info" size="mini" title="查看当前spu全部sku列表"></hint-button>
              <el-popconfirm title="这是一段内容确定删除吗？" @onConfirm="deleteSpu(row)">
                <hint-button type="danger" icon="el-icon-delete" size="mini" title="删除spu" slot="reference">
                </hint-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination :total="total" :current-page="page" :page-sizes="[3, 5, 10]" :page-size="limit"
          layout="prev,pager,next,jumper,->,sizes,total" style="text-align:center" @current-change="getSpuList"
          @size-change="handleSizeChange"></el-pagination>
      </div>
      <SpuForm v-show="scene == 1" @changeScene="changeScene" ref="spu" />
      <SkuForm v-show="scene == 2" @changeScenes="changeScenes" ref="sku" />
    </el-card>
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import SpuForm from './SpuForm'
import SkuForm from './SkuForm'
export default {
  name: "spu",
  data() {
    return {
      category1Id: '',
      category2Id: '',
      category3Id: '',
      page: 1, // 分页器当前第几页
      limit: 3, // 每一页需要展示多少条数据
      records: [], // spu列表的数据
      total: 0, // 分页器一共需要展示数据的条数
      scene: 0, // 0代表展示SPU列表数据  1 添加SPU|修改SPU  2 添加SKU
    };
  },
  components: {
    SpuForm,
    SkuForm,
  },
  methods: {
    // 点击分页器的第几页按钮的回调
    // handleCurrentChange(page) {
    //   this.page = page;
    //   this.getSpuList();
    // },

    // 三级联动的自定义事件,可以把子组件的相应id传递给父组件
    getCategoryId({ categoryId, level }) {
      // categoryId:获取一  二  三级分类的id level:为了区分几级id
      if (level == 1) {
        this.category1Id = categoryId;
        // 清除二,三级分类的id
        this.category2Id = '';
        this.category3Id = '';
      } else if (level == 2) {
        this.category2Id = categoryId;
        this.category3Id = '';
      } else {
        // 代表三级分类的id有了
        this.category3Id = categoryId;
        // 获取SPU列表数据进行展示
        this.getSpuList();
      }
    },
    // 获取SPU列表数据的方法
    async getSpuList(pages = 1) {
      this.page = pages;
      const { page, limit, category3Id } = this;
      // 携带三次参数：page第几页 limit每一页需要展示多少条数据 三级分类id
      let result = await this.$API.spu.reqSpuList(page, limit, category3Id);
      if (result.code == 200) {
        this.total = result.data.total;
        this.records = result.data.records;
      }
    },
    // 当分页器的某一个展示数据条数发生变化的回调
    handleSizeChange(limit) {
      // 修改参数
      this.limit = limit;
      this.getSpuList();
    },
    // 添加SPU的按钮的回调
    addSpu() {
      this.scene = 1;
      // 通知子组件SpuForm发请求--两个
      this.$refs.spu.addSpuData(this.category3Id);
    },
    // 修改某一个SPU
    updataSpu(row) {
      this.scene = 1;
      // 获取子组件SpuForm子组件的
      this.$refs.spu.initSpuData(row);
    },
    // 自定义事件回调(SpuForm)
    changeScene({ scene, flag }) {
      // 切换结构
      this.scene = scene;
      // 子组件通知父组件切换场景，需要再次获取SPU列表的数据进行展示
      if (flag == "修改") {
        this.getSpuList(this.page);
      } else {
        this.getSpuList();
      }

    },
    // 删除SPU的回调
    async deleteSpu(row) {
      let result = await this.$API.spu.reqDeleteSpu(row.id);
      if (result.code == 200) {
        this.$message({ type: 'success', message: '删除成功' })
        // 代表SPU个数大于1删除的时候停留在当前页，如果SPU个数小于1回到上一页
        this.getSpuList(this.records.length > 1 ? this.page : this.page - 1);
      }
    },
    // 添加Sku的回调
    addSku(row) {
      // 切换场景为2
      this.scene = 2;
      // 父组件调用子组件的方法，让子组件发请求---三个请求
      this.$refs.sku.getData(this.category1Id, this.category2Id, row);
    },
    // skuForm通知父组件修改场景
    changeScenes(scene) {
      this.scene = scene;
    }
  },
};
</script>
<style scoped>
</style>
