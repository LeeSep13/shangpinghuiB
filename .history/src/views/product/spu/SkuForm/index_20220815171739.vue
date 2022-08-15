<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-14 11:11:46
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-15 17:17:39
 * @FilePath: \shangpinghui-bs\src\views\product\spu\SkuForm\index.vue
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="SPU名称"> {{ spu.spuName }} </el-form-item>
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
      <el-form-item label="销售属性">
        <el-form :inline="true" ref="form" label-width="80px">
          <el-form-item label="屏幕尺寸">
            <el-select placeholder="请选择" value="">
              <el-option label="label" value="value"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item label="图片列表">
        <el-table style="width: 100%" border>
          <el-table-column type="selection" prop="prop" label="" width="80px"></el-table-column>
          <el-table-column prop="prop" label="图片"></el-table-column>
          <el-table-column prop="prop" label="名称"></el-table-column>
          <el-table-column prop="prop" label="操作"></el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "SkuForm",
  components: {},
  data() {
    return {
      // 存储图片信息
      spuImageList: [],
      // 存储销售属性
      spuSaleAttrList: [],
      // 存储平台属性数据
      attrInfoList: [],
      // 收集sku数据的字段
      skuInfo: {
        // 第一类收集的数据：父组件给的数据
        category3Id: 0,
        spuId: 0,
        tmId: 0,
        // 第二类
        price: 0,
        skuAttrValueList: [
          {
            attrId: 0,
            attrName: "string",
            id: 0,
            skuId: 0,
            valueId: 0,
            valueName: "string",
          },
        ],
        skuDefaultImg: "string",
        skuDesc: "string",
        skuImageList: [
          {
            id: 0,
            imgName: "string",
            imgUrl: "string",
            isDefault: "string",
            skuId: 0,
            spuImgId: 0,
          },
        ],
        skuName: "string",
        skuSaleAttrValueList: [
          {
            id: 0,
            saleAttrId: 0,
            saleAttrName: "string",
            saleAttrValueId: 0,
            saleAttrValueName: "string",
            skuId: 0,
            spuId: 0,
          },
        ],
        weight: "string",
      },
      spu: {},
    };
  },
  methods: {
    // 获取SkuForm数据
    async getData(category1Id, category2Id, spu) {
      // 收集父组件给予的数据
      this.skuInfo.category3Id = spu.category3Id;
      this.skuInfo.spuId = spu.id;
      this.skuInfo.tmId = spu.tmId;
      this.spu = spu;
      // 获取图片的数据
      let ImageResult = await this.$API.sku.reqSpuImageList(spu.id);
      if (ImageResult.code == 200) {
        this.spuImageList = ImageResult.data;
      }
      // 获取销售属性的数据
      let SaleAttrResult = await this.$API.sku.reqSpuSaleAttrList(spu.id);
      if (SaleAttrResult.code == 200) {
        this.spuImageList = SaleAttrResult.data;
      }
      // 获取平台属性的数据
      let AttrInfoResult = await this.$API.sku.reqAttrInfoList(
        category1Id,
        category2Id,
        spu.category3Id
      );
      if (AttrInfoResult.code == 200) {
        this.spuImageList = AttrInfoResult.data;
      }
    },
  },
};
</script>
<style scoped>
</style>
