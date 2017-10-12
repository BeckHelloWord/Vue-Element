<template>
  <div class="element">
    <input type="text" v-model="companyName">
    <input type="text" v-model="iAge">
    <button :disabled=getDis>提交</button>
    <p>{{foramtDate}}</p>
    <el-table :data="getList" border style="width: 100%">
      <el-table-column prop="id" label="id">
      </el-table-column>
      <el-table-column prop="date" label="日期">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'element',
  data() {
    return {
      companyName: '',
      iAge: null,
      isVal: true,
      isDis: true,
      list: [1, 9, 3, 20, 6, 38],
      tableData: [{
        id: 1,
        date: '2016-05-01',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1 弄'
      }, {
        id: 20,
        date: '2016-05-20',
        name: '王小虎20',
        address: '上海市普陀区金沙江路 20 弄'
      }, {
        id: 5,
        date: '2016-05-05',
        name: '王小虎5',
        address: '上海市普陀区金沙江路 5 弄'
      }, {
        id: 15,
        date: '2016-05-15',
        name: '王小虎15',
        address: '上海市普陀区金沙江路 15 弄'
      }]
    }
  },
  methods: {

  },
  computed: {
    //计算属性
    foramtDate: {
      get: function() {
        //读
        return this.companyName + '有限公司';
      },
      set: function(value) {
        //取
        this.companyName = value;
      }
    },
    getDis: {
      get: function() {
        if (this.companyName && this.iAge) {
          return this.isDis = false;
        } else {
          return this.isDis
        }
      },
      set: function() {

      }
    },
    getList: {
      get: function() {
        //从小到打排序
        return this.tableData.sort(function(x, y) {
          if (x.id > y.id) {
            return 1;
          }
        })
      },
      set: function() { }
    }
  },
  watch: {
    // 观察者
    iAge: function(newVal, oldVal) {
      // 注意传参有顺序，第一个新值，第二个老值
      console.log(`老值:${oldVal},新值:${newVal}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pass {
  border: 2px solid yellowgreen;
}

.text-danger {
  text-align: right;
}

ul li {
  list-style: none;
}
</style>
