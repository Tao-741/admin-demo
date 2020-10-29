<template>
<div class="className">
  <el-card class="anoCard">
    <div slot="header">
      <div class="searchDiv">
        <el-row>
          <el-button type="primary" icon="el-icon-circle-plus-outline">添加</el-button>
          <el-input type="text"
                    clearable
                    v-model="listQuery.order"
                    placeholder="请输入订单号"
                    @keyup.enter.native="handleFilter"
                    class="btn"
          style="width: 200px">
          </el-input>
          <el-date-picker
            v-model="listQuery.date"
            type="date"
            placeholder="选择日期" @change="handleFilter"
            class="btn">
          </el-date-picker>
          <el-select v-model="listQuery.status" clearable placeholder="状态" @change="handleFilter" class="btn">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-row>
      </div>
    </div>
    <el-table
      border stripe
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="order"
        label="订单号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="下单时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="配送员"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="配送地址">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="180">
      </el-table-column>
      <el-table-column
        label=操作
        width="180">
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="total,sizes,prev, pager, next"
      :current-page="listQuery.page"
      :page-size="listQuery.size"
      :page-sizes="[10,20,50]"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    class="fyDiv">
    </el-pagination>
  </el-card>
</div>
</template>

<script>import { getTableData } from '@/api/table'

export default {
  name: 'BasicTable',
  data () {
    return {
      tableData: [],
      total: null,
      listQuery: {
        order: null,
        date: null,
        status: null,
        page: 1,
        size: 10
      },
      options: [{
        value: 0,
        label: '待审核'
      }, {
        value: 1,
        label: '配送中'
      }, {
        value: 2,
        label: '已完成'
      }, {
        value: 3,
        label: '已取消'
      }],
      value: ''
    }
  },
  mounted () {
    this.getPage()
  },
  methods: {
    getPage () {
      getTableData(this.listQuery).then(res => {
        this.tableData = res.data.records
        this.total = res.data.total
      })
    },
    handleSizeChange (val) {
      this.listQuery.size = val
      this.getPage()
    },
    handleCurrentChange (val) {
      this.listQuery.page = val
      this.getPage()
    },
    handleFilter () {
      this.listQuery.page = 1
      this.getPage()
    }
  }
}
</script>

<style lang="scss" scoped>
  .fyDiv {
    float: right;
    margin-top: 30px;
    padding-bottom: 20px;
  }
  .searchDiv {
    margin-bottom: 20px;
    .el-button {
      padding: 11px 20px;
    }
    .btn {
      float: right;
      padding-right: 20px;
    }
  }

</style>
<style>
.searchDiv [class^='el-icon'] {
  color: #fff;
}
</style>
