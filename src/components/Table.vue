<template>
  <div>
    <!-- 電腦版 -->
    <div v-if="value">
      <!-- 父階 -->
      <div v-if="fatherChecked">
        <el-table
          :data="pagedTableDataFather"
          stripe
          style="width: 100%; height: 100%"
          border
          :row-style="{ height: '70px' }"
          :header-cell-style="{
            'background-color': 'white',
            color: 'black',
            'font-weight': '200',
            'border-radius': '4px',
            'text-align': 'center',
          }"
          v-loading="getloadingbyf"
        >
          <el-table-column type="index" label="序">
            <template slot-scope="scope">
              {{ scope.row.index }}
            </template>
          </el-table-column>

          <el-table-column
            v-if="c_sname"
            align="center"
            prop="c_sname"
            label="客戶簡稱"
            width="80"
          >
          </el-table-column>
          <el-table-column
            v-if="o_custbillcode"
            align="center"
            prop="o_custbillcode"
            label="客戶單號"
            width="110"
          >
          </el-table-column>
          <el-table-column
            v-if="o_date"
            align="center"
            prop="o_date"
            label="訂單日期"
            width="100"
          >
          </el-table-column>
          <el-table-column
            v-if="o_targetdate"
            align="center"
            prop="o_targetdate"
            label="預交日期"
            width="100"
          >
          </el-table-column>
          <el-table-column
            v-if="o_prodno"
            align="center"
            prop="o_prodno"
            label="產品編號"
            width="200"
          >
          </el-table-column>
          <el-table-column
            v-if="p_name"
            align="center"
            prop="p_name"
            label="產品名稱"
            width="200"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="o_qty"
            label="訂單數"
            width="80"
          >
          </el-table-column>

          <el-table-column prop="b_process" label="製程進度">
            <template slot-scope="scope">
              <!-- {{scope.row}} -->
              <el-badge
                v-for="item in scope.row.b_process"
                :key="item"
                :value="scope.row.o_qty"
                class="item"
              >
                <el-tag type="info" effect="dark"
                  >{{ convertString(item) }}{{ item }}</el-tag
                >
              </el-badge>
            </template>
          </el-table-column>
        </el-table>
        <div v-if="fatherChecked">
          <el-pagination
            small
            background
            :pager-count="5"
            :current-page.sync="$store.state.backToOne"
            layout="sizes,prev, pager, next"
            :total="$store.state.single.length"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="pageSizes"
            :page-size="pageSize"
          >
          </el-pagination>
        </div>
      </div>

      <!-- 子階 -->
      <div v-else>
        <el-table
          :data="pagedTableDataChild"
          stripe
          style="width: 100%"
          border
          :row-style="{ height: '80px' }"
          :header-cell-style="{
            'background-color': '#white',
            color: 'black',
            'font-weight': '200',
            'border-radius': '4px',
            'text-align': 'center',
          }"
          v-loading="getloadingbyf"
        >
          <el-table-column type="index" label="序">
            <template slot-scope="scope">
              {{ scope.row.index }}
            </template>
          </el-table-column>

          <el-table-column
            v-if="c_sname"
            align="center"
            prop="c_sname"
            label="客戶簡稱"
            width="80"
          >
          </el-table-column>
          <el-table-column
            v-if="o_custbillcode"
            align="center"
            prop="o_custbillcode"
            label="客戶單號"
            width="110"
          >
          </el-table-column>
          <el-table-column
            v-if="o_date"
            align="center"
            prop="o_date"
            label="訂單日期"
            width="100"
          >
          </el-table-column>
          <el-table-column
            v-if="o_targetdate"
            align="center"
            prop="o_targetdate"
            label="預交日期"
            width="100"
          >
          </el-table-column>
          <el-table-column
            v-if="o_prodno"
            align="center"
            prop="o_prodno"
            label="產品編號"
            width="200"
          >
          </el-table-column>
          <el-table-column
            v-if="p_name"
            align="center"
            prop="p_name"
            label="產品名稱"
            width="200"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="o_qty"
            label="訂單數"
            width="80"
          >
          </el-table-column>

          <el-table-column prop="b_process" label="製程進度">
            <template slot-scope="scope">
              <!-- {{ scope.row }} -->
              <el-badge
                v-for="(item, index) in scope.row.b_process_mp_over"
                :key="index"
                :value="scope.row.o_qty"
                class="item"
              >
                <el-tag v-if="item.mp_over" type="success" effect="dark"
                  >{{ convertString(item.mp_process) }}
                  {{ item.mp_process }}</el-tag
                >
                <el-tag v-else type="info" effect="dark"
                  >{{ convertString(item.mp_process) }}
                  {{ item.mp_process }}</el-tag
                >
              </el-badge>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 分頁 -->
      <div v-if="!fatherChecked">
        <el-pagination
          small
          background
          :pager-count="5"
          layout="sizes,prev, next"
          :current-page.sync="$store.state.backToOne"
          :total="$store.state.lists.length"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="pageSizes"
          :page-size="pageSize"
        >
        </el-pagination>
      </div>
    </div>

    <!-- 手機板 -->
    <div v-else>
      <!-- 父階 -->
      <div v-if="fatherChecked">
        <el-table
          :data="pagedTableDataFather"
          stripe
          style="width: 100%; height: 100%"
          border
          :row-style="{ height: '330px' }"
          :header-cell-style="{
            'background-color': 'white',
            color: 'black',
            'font-weight': '200',
            'border-radius': '4px',
            'text-align': 'center',
          }"
          v-loading="getloadingbyf"
        >
          <el-table-column type="index" label="序">
            <template slot-scope="scope">
              {{ scope.row.index }}
            </template>
          </el-table-column>

          <el-table-column label="訂單詳情">
            <template slot-scope="scope">
              <!-- {{ scope.row }} -->
              <h3>客戶簡稱:{{ scope.row.c_sname }}</h3>
              <h3>客戶單號:{{ scope.row.o_custbillcode }}</h3>
              <h3>訂單日期:{{ scope.row.o_date }}</h3>
              <h3>預交日期:{{ scope.row.o_targetdate }}</h3>
              <h3>產品編號:{{ scope.row.o_prodno }}</h3>
              <h3>產品名稱:{{ scope.row.p_name }}</h3>
              <h3>訂單數量:{{ scope.row.o_qty }}</h3>
              <h3>
                製程進度:<el-badge
                  v-for="item in scope.row.b_process"
                  :key="item"
                  :value="scope.row.o_qty"
                  class="item"
                >
                  <el-tag type="info" effect="dark"
                    >{{ convertString(item) }}{{ item }}</el-tag
                  >
                </el-badge>
              </h3>
            </template>
          </el-table-column>
        </el-table>
        <div v-if="fatherChecked">
          <el-pagination
            small
            background
            :pager-count="5"
            :current-page.sync="$store.state.backToOne"
            layout="->"
            :total="$store.state.single.length"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="pageSizes"
            :page-size="pageSize"
          >
          </el-pagination>
        </div>
      </div>

      <!-- 子階 -->
      <div v-else>
        <el-table
          :data="pagedTableDataChild"
          stripe
          style="width: 100%"
          border
          :row-style="{ height: '80px' }"
          :header-cell-style="{
            'background-color': '#white',
            color: 'black',
            'font-weight': '200',
            'border-radius': '4px',
            'text-align': 'center',
          }"
          v-loading="getloadingbyf"
        >
          <el-table-column type="index" label="序">
            <template slot-scope="scope">
              {{ scope.row.index }}
            </template>
          </el-table-column>
          <el-table-column label="訂單詳情">
            <template slot-scope="scope">
              <!-- {{ scope.row }} -->
              <h3>客戶簡稱:{{ scope.row.c_sname }}</h3>
              <h3>客戶單號:{{ scope.row.o_custbillcode }}</h3>
              <h3>訂單日期:{{ scope.row.o_date }}</h3>
              <h3>預交日期:{{ scope.row.o_targetdate }}</h3>
              <h3>產品編號:{{ scope.row.o_prodno }}</h3>
              <h3>產品名稱:{{ scope.row.p_name }}</h3>
              <h3>訂單數量:{{ scope.row.o_qty }}</h3>
              <h3>
                製程進度:<el-badge
                  v-for="(item, index) in scope.row.b_process_mp_over"
                  :key="index"
                  :value="scope.row.o_qty"
                  class="item"
                >
                  <el-tag v-if="item.mp_over" type="success" effect="dark"
                    >{{ convertString(item.mp_process) }}
                    {{ item.mp_process }}</el-tag
                  >
                  <el-tag v-else type="info" effect="dark"
                    >{{ convertString(item.mp_process) }}
                    {{ item.mp_process }}</el-tag
                  >
                </el-badge>
              </h3>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 分頁 -->
      <div v-if="!fatherChecked">
        <el-pagination
          small
          background
          :pager-count="5"
          layout="->"
          :current-page.sync="$store.state.backToOne"
          :total="$store.state.lists.length"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="pageSizes"
          :page-size="pageSize"
        >
        </el-pagination>
      </div>
    </div>
    <div style="height: 50px">
      <div
        v-if="
          !value &&
          $store.state.single.length != 0 &&
          $store.state.lists.length != 0
        "
        class="elbutton"
      >
        <el-button
          type="info"
          icon="el-icon-arrow-left"
          @click="prev(page)"
          id="prev"
        ></el-button>
        <span class="pageinfo"
          >當前在第{{ page }}頁，共{{
            Math.round($store.state.single.length / pageitem)
          }}筆</span
        >
        <el-button
          type="info"
          icon="el-icon-arrow-right"
          @click="next(page)"
          id="next"
        ></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "fatherChecked",
    "c_sname",
    "o_custbillcode",
    "o_date",
    "o_targetdate",
    "o_prodno",
    "p_name",
    "loadingbyf",
    "value",
  ],
  created() {
    this.getProcess();
  },

  beforeUpdate() {
    if (this.$store.state.single.length != 0) {
      console.log("ok");
    } else {
      console.log("ok is clear");
      this.page = 1;
    }
  },
  data() {
    return {
      tableData: [],
      tableData1: [],
      process: [
        { mpNo: "false", mpName: "未完工" },
        { mpNo: "true", mpName: "完  工" },
        { mpNo: null, mpName: "無" },
        { mpNo: "", mpName: "無" },
      ],
      afterprocess: [],
      active: 0,

      page: 1,
      pageSize: 1,
      pageSizes: [1, 3, 10],
      currentPage: 1,
      loading: false,
      pageitem: 1,
    };
  },
  methods: {
    backOnePage() {
      this.currentPage = 1;
    },
    setPage(val) {
      this.page = val;
    },
    handleSizeChange(val) {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        this.$store.commit("BACK_TO_ONE", 1);
        this.pageSize = val;
        this.page = 1;
        loading.close();
      }, 500);

      console.log(`每頁 ${val} 條`);
      this.pageitem = val;
    },
    handleCurrentChange(val) {
      console.log(`當前頁: ${val}`);

      this.page = val;
    },
    next(val) {
      console.log(val);
      this.page = val + 1;
    },
    prev(val) {
      this.page = val - 1;
      if (this.page == 0) {
        this.page = 1;
      }
    },
    getProcess() {
      this.$axios({
        url: "/makeprocess",
        method: "get",
        // headers: {
        //   Authorization: "Cadtech " + localStorage.getItem("jwt")
        // }
      })
        .then((res) => {
          res.data.forEach((element) => {
            this.process.push({
              mpNo: element.mpNo,
              mpName: element.mpName,
            });
          });
          var test = this.process.map(function (obj) {
            var rObj = {};
            rObj[obj.mpNo] = obj.mpName;
            return rObj;
          });
          this.afterprocess = test;
        })
        .catch((error) => {
          error;
          // console.log(error);
        });
    },

    convertDate(date) {
      const d = new Date(date);
      return d.toLocaleDateString();
    },
    indexMethod(index) {
      return index + 1 * 1;
    },

    convertString(eng) {
      var result;
      this.process.forEach((element) => {
        if (element.mpNo == eng) {
          result = element.mpName;
          // console.log(result);
        }
      });
      return result;
    },

    convertArray(str) {
      return str.toString().split(",");
    },
    convertTrueOrFalse(str) {
      // console.log(str);
      if (str == true.toString()) {
        return true;
      } else {
        return false;
      }
    },
  },
  computed: {
    pagedTableDataFather() {
      return this.$store.state.single.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
    },
    pagedTableDataChild() {
      return this.$store.state.lists.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
    },
    getloadingbyf() {
      return this.loadingbyf;
    },
  },
};
</script>
<style scoped>
.el-badge {
  margin: 20px 10px;
}
.el-tag {
  margin: 0 0px;
}
.elbutton {
  /* height: 1px; */
  position: relative;
  top: -400px;
  display: flex;
  justify-content: space-between;
  height: 330px;
}
#prev {
  /* position: relative; */
  /* top: -400px; */

  border: none;
  opacity: 0.5;
}
#next {
  /* position: relative; */
  /* top: -400px; */
  border: none;
  opacity: 0.5;
}
.pageinfo {
  color: white;
  position: relative;
  top: 410px;
  height: 20px;
}
</style>
