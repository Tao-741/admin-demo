<template>
<div class="className">
  <el-card class="anoCard">
    <div slot="header">
      <div class="searchDiv">
        <el-row>
          <el-button type="primary" icon="el-icon-circle-plus-outline" @click="addClick">添加</el-button>
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
    <el-dialog
      title="新增"
      :visible.sync="dialogVisible"
      width="45%" class="diaForm">
      <el-form ref="diaForm" :model="formData" :rules="rules" label-width="80px">
        <el-form-item label="订单号">
          <el-input v-model="formData.order" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="下单时间" prop="date">
          <el-date-picker v-model="formData.date"></el-date-picker>
        </el-form-item>
        <el-form-item label="配送员" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="配送地址" prop="address">
          <el-input v-model="formData.address"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="formData.status" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="changeTab('diaForm',editType)">确 定</el-button>
  </span>
    </el-dialog>
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
      dialogVisible: false,
      editType: '',
      formData: {},
      rules: {
        date: [{ required: true, message: '请输入时间', trigger: 'change' }],
        address: [{ required: true, message: '请输入地址', trigger: 'blur' }],
        name: [{ required: true, message: '请输入地址', trigger: 'blur' }],
        status: [{ required: true, message: '请输入订单状态', trigger: 'change' }]
      }
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
    },
    // 新增
    addClick () {
      this.dialogVisible = true
      this.formData.order = (Math.random() * 10e18).toString()
      this.editType = 'add'
    },
    // dialog确定按钮
    changeTab (formName, type) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (type === 'add') {
            console.log(this.formData)
            this.tableData.unshift(this.formData)
          }
          this.dialogVisible = false
        }
      })
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
  .diaForm {
    .el-input,.el-select {
      width: 350px;
    }
  }
</style>
<style>
.searchDiv [class^='el-icon'] {
  color: #fff;
}
</style>
