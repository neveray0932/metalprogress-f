<template>
  <div>
    <div class="navbar">
      <div></div>
      <div>
        <span v-if="value" style="color: white; margin-right: 5px">電腦版</span>
        <span v-else style="color: white; margin-right: 5px">手機版</span>
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div>

      <el-button @click="logout" type="primary">登出</el-button>
    </div>

    <el-card class="app-container">
      <el-row style="margin: 5px">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item name="1">
            <template slot="title">
              <h2 style="margin-right: 5px">展開/收縮</h2>
              <h2>
                查詢條件
                <i class="el-icon-search"></i>
              </h2>
            </template>
            <el-col :xs="7" :sm="3" :md="3" :lg="3"> 只查下單料號 </el-col>
            <el-col
              style="padding-left: 2.5px; padding-right: 2.5px"
              :xs="17"
              :sm="9"
              :md="9"
              :lg="9"
            >
              <el-checkbox v-model="father"></el-checkbox>
            </el-col>
            <el-col :xs="7" :sm="3" :md="3" :lg="3">
              <el-checkbox v-model="c_sname" label="客戶簡稱"></el-checkbox>
            </el-col>
            <el-col
              style="padding-left: 2.5px; padding-right: 2.5px"
              :xs="17"
              :sm="9"
              :md="9"
              :lg="9"
            >
              <el-input
                v-model="csname"
                style="width: 80%"
                placeholder="客戶簡稱"
              >
              </el-input>
            </el-col>
            <el-col :xs="7" :sm="3" :md="3" :lg="3">
              <el-checkbox
                v-model="o_custbillcode"
                label="客戶單號"
              ></el-checkbox>
            </el-col>
            <el-col
              style="padding-left: 2.5px; padding-right: 2.5px"
              :xs="17"
              :sm="9"
              :md="9"
              :lg="9"
            >
              <el-input
                v-model="ocode"
                style="width: 80%"
                placeholder="客戶單號"
              >
              </el-input>
            </el-col>
            <el-col :xs="7" :sm="3" :md="3" :lg="3">
              <el-checkbox v-model="o_date" label="訂單日期"></el-checkbox>
            </el-col>
            <el-col
              style="padding-left: 2.5px; padding-right: 2.5px"
              :xs="17"
              :sm="9"
              :md="9"
              :lg="9"
            >
              <el-date-picker
                type="date"
                placeholder="選擇日期"
                v-model="odate1"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
              ~
              <el-date-picker
                type="date"
                placeholder="選擇日期"
                v-model="odate2"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-col>
            <el-col :xs="7" :sm="3" :md="3" :lg="3">
              <el-checkbox
                v-model="o_targetdate"
                label="預交日期"
              ></el-checkbox>
            </el-col>
            <el-col
              style="padding-left: 2.5px; padding-right: 2.5px"
              :xs="17"
              :sm="9"
              :md="9"
              :lg="9"
            >
              <el-date-picker
                type="date"
                placeholder="選擇日期"
                v-model="otargetdate1"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
              ~
              <el-date-picker
                type="date"
                placeholder="選擇日期"
                v-model="otargetdate2"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-col>
            <el-col :xs="7" :sm="3" :md="3" :lg="3">
              <el-checkbox v-model="o_prodno" label="產品編號"></el-checkbox>
            </el-col>
            <el-col
              style="padding-left: 2.5px; padding-right: 2.5px"
              :xs="17"
              :sm="9"
              :md="9"
              :lg="9"
            >
              <el-input v-model="pno" style="width: 80%" placeholder="產品編號">
              </el-input>
            </el-col>
            <el-col :xs="7" :sm="3" :md="3" :lg="3">
              <el-checkbox v-model="p_name" label="產品名稱"></el-checkbox>
            </el-col>
            <el-col
              style="padding-left: 2.5px; padding-right: 2.5px"
              :xs="17"
              :sm="9"
              :md="9"
              :lg="9"
            >
              <el-input
                v-model="pname"
                style="width: 80%"
                placeholder="產品名稱"
              >
              </el-input>
            </el-col>

            <el-col :xs="24" :sm="2" :md="2" :lg="12">
              <el-button @click="clear" type="danger" icon="el-icon-close">
                清除
              </el-button>
              <el-button @click="search" type="primary" icon="el-icon-search">
                查詢
              </el-button>
            </el-col>
          </el-collapse-item>
        </el-collapse>
      </el-row>
    </el-card>

    <datatable
      v-bind:fatherChecked="father"
      v-bind:c_sname="c_sname"
      v-bind:o_custbillcode="o_custbillcode"
      v-bind:o_date="o_date"
      v-bind:o_targetdate="o_targetdate"
      v-bind:o_prodno="o_prodno"
      v-bind:p_name="p_name"
      v-bind:loadingbyf="loadingbyf"
      v-bind:value="value"
    ></datatable>
  </div>
</template>

<script>
import datatable from "../components/Table.vue";
export default {
  name: "Home",
  components: { datatable },
  data() {
    return {
      activeNames: ["1"],
      value: true,
      father: true,
      c_sname: true,
      o_custbillcode: true,
      o_date: false,
      o_targetdate: false,
      o_prodno: true,
      p_name: false,
      pname: "",
      pno: "",
      csname: "",
      ocode: "",
      odate1: "",
      odate2: "",
      otargetdate1: "",
      otargetdate2: "",
      loadingbyf: false,
    };
  },
  methods: {
    handleChange(val) {
      val;
      // console.log(val);
    },
    search() {
      this.$store.state.single = [];
      this.$store.state.lists = [];
      var data = {
        csname: this.csname,
        pname: this.pname,
        pno: this.pno,
        ocode: this.ocode,
        odate1: this.odate1,
        odate2: this.odate2,
        otargetdate1: this.otargetdate1,
        otargetdate2: this.otargetdate2,
      };
      data;

      //檢查日期是否為null
      this.odate1 = this.isDateNull(this.odate1);
      this.odate2 = this.isDateNull(this.odate2);
      this.otargetdate1 = this.isDateNull(this.otargetdate1);
      this.otargetdate2 = this.isDateNull(this.otargetdate2);
      data.odate1 = this.isDateNull(this.odate1);
      data.odate2 = this.isDateNull(this.odate2);
      data.otargetdate1 = this.isDateNull(this.otargetdate1);
      data.otargetdate2 = this.isDateNull(this.otargetdate2);

      //如果第2日期為空默認加30天
      // this.odate2 = this.defaultDatePlus30(this.odate1, this.odate2);
      // data.odate2 = this.defaultDatePlus30(this.odate1, this.odate2);
      // this.otargetdate2 = this.defaultDatePlus30(
      //   this.otargetdate1,
      //   this.otargetdate2
      // );
      // data.otargetdate2 = this.defaultDatePlus30(
      //   this.otargetdate1,
      //   this.otargetdate2
      // );
      //如果第2日期為空默認為第1日期
      this.odate2 = this.defaultDateTheSame(this.odate1, this.odate2);
      data.odate2 = this.defaultDateTheSame(this.odate1, this.odate2);
      this.otargetdate2 = this.defaultDateTheSame(
        this.otargetdate1,
        this.otargetdate2
      );
      data.otargetdate2 = this.defaultDateTheSame(
        this.otargetdate1,
        this.otargetdate2
      );

      //判斷訂單日期是否為空
      if (this.odate1.length != 0 || this.otargetdate1.length != 0) {
        console.log("有填日期");
        //判斷訂單日期是否超過31天
        if (
          new Date(this.odate2) - new Date(this.odate1) <= 2764800000 ||
          new Date(this.otargetdate2) - new Date(this.otargetdate1) <=
            2764800000
        ) {
          //如果訂單相減日期不為NaN即可進行查詢
          if (
            !isNaN(new Date(this.odate2) - new Date(this.odate1)) ||
            !isNaN(new Date(this.otargetdate2) - new Date(this.otargetdate1))
          ) {
            console.log("ok 可進行查詢");
            this.loadingbyf = true;
            this.$store.commit("BACK_TO_ONE", 1);
            this.activeNames = [];
            console.log(data);
            this.$axios({
              url: "/fatherwhere",
              method: "post",
              data: data,
            }).then((res) => {
              console.log("開始");
              // console.log(res);
              var tableData = [];

              if (res.status == 200) {
                res.data.forEach((element, index) => {
                  if (element.o_status != 7) {
                    tableData.push({
                      index: index,
                      p_id: element.p_id,
                      b_process: this.convertArray(element.b_process),
                      c_sname: element.c_sname,
                      o_billqty: element.o_billqty,
                      o_custbillcode: element.o_code,
                      o_date: this.convertDate(element.o_date),
                      o_qty: element.o_qty,
                      o_targetdate: this.convertDate(element.o_targetdate),
                      p_name: element.p_name,
                      o_prodno: element.o_prodno,
                    });
                  }
                });
                // console.log(tableData);
                let aftertableData = [];
                tableData.forEach((element, index) => {
                  aftertableData.push({
                    index: index + 1,
                    p_id: element.p_id,
                    b_process: element.b_process,
                    c_sname: element.c_sname,
                    o_billqty: element.o_billqty,
                    o_code: element.o_custbillcode,
                    o_date: element.o_date,
                    o_qty: element.o_qty,
                    o_targetdate: element.o_targetdate,
                    p_name: element.p_name,
                    o_prodno: element.o_prodno,
                  });
                });
                this.$store.commit("tableData", aftertableData);

                this.loadingbyf = false;
              }
            });

            this.$axios({
              url: "/childwhere",
              method: "post",
              data: data,
            }).then((res) => {
              var tableDatas = [];

              res.data.forEach((element) => {
                if (element.o_status != 7) {
                  tableDatas.push({
                    p_id: element.p_id,
                    mp_over: element.mp_over,
                    b_process: element.mp_process,
                    c_sname: element.c_sname,
                    o_billqty: element.o_billqty,
                    o_custbillcode: element.o_code,
                    o_date: this.convertDate(element.o_date),
                    o_qty: element.o_qty,
                    o_targetdate: this.convertDate(element.o_targetdate),
                    p_name: element.p_name,
                    o_prodno: element.o_prodno,
                  });
                }
              });

              let obj = {};

              for (let i = 0; i < tableDatas.length; i++) {
                if (typeof obj[tableDatas[i].p_id] === "undefined") {
                  obj[tableDatas[i].p_id] = {
                    p_id: tableDatas[i].p_id,
                    o_code: tableDatas[i].o_custbillcode,

                    o_qty: tableDatas[i].o_qty,
                    o_prodno: tableDatas[i].o_prodno,

                    o_targetdate: tableDatas[i].o_targetdate,

                    o_billqty: tableDatas[i].o_billqty,

                    c_sname: tableDatas[i].c_sname,

                    b_process_mp_over: [
                      {
                        mp_process: tableDatas[i].b_process,
                        mp_over: tableDatas[i].mp_over,
                      },
                    ],

                    o_date: tableDatas[i].o_date,

                    p_name: tableDatas[i].p_name,
                  };
                } else {
                  obj[tableDatas[i].p_id].b_process_mp_over.push({
                    mp_process: tableDatas[i].b_process,
                    mp_over: tableDatas[i].mp_over,
                  });
                }
              }

              let arr = Object.values(obj);
              // console.log(arr);
              let afterarr = [];
              arr.forEach((element, index) => {
                afterarr.push({
                  index: index + 1,
                  b_process_mp_over: element.b_process_mp_over,
                  c_sname: element.c_sname,
                  o_billqty: element.o_billqty,
                  o_code: element.o_code,
                  o_date: element.o_date,
                  o_prodno: element.o_prodno,
                  o_qty: element.o_qty,
                  o_targetdate: element.o_targetdate,
                  p_id: element.p_id,
                  p_name: element.p_name,
                });
              });
              // console.log(afterarr);
              this.$store.commit("tableDatas", afterarr);
            });
          }
        } else {
          alert("請勿超過一個月");
        }
      } else {
        alert("第一格訂單或預交日期不可為空");
      }
    },
    clear() {
      this.$store.state.single = [];
      this.$store.state.lists = [];
    },
    convertDate(date) {
      const d = new Date(date);
      return d.toLocaleDateString();
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
      if (str == null) {
        str = " ";
      } else {
        str = str.split(";");
      }
      return str;
    },
    convertArray1(str) {
      return str.split(",");
    },
    logout() {
      this.$router.replace({ name: "Login" });
    },
    datePlus30(date) {
      var date1 = new Date(date);
      var date2 = new Date(date1);
      date2.setDate(date1.getDate() + 0);
      console.log(date2.getDate());
      // console.log(
      //   date2.getFullYear() +
      //     "-" +
      //     (date2.getMonth() + 1) +
      //     "-" +
      //     date2.getDate()
      // );
      return (
        date2.getFullYear() +
        "-" +
        (date2.getMonth() + 1) +
        "-" +
        date2.getDate()
      );
    },
    isDateNull(date) {
      if (date == null) {
        date = "";
      }

      return date;
    },
    defaultDatePlus30(date1, date2) {
      if (date1.length != 0) {
        if (date2.length == 0) {
          date2 = this.datePlus30(date1);
        }
      }
      return date2;
    },
    defaultDateTheSame(date1, date2) {
      if (date1.length != 0) {
        if (date2.length == 0) {
          date2 = date1;
        }
      }
      return date2;
    },
  },
};
</script>
<style scoped>
.form {
  margin-top: 20px;
}
.navbar {
  text-align: right;
}
body {
  height: 100%;
}
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
.header {
  text-align: left;
}
.app-container {
  text-align: left;
  margin-bottom: 10px;
}
.el-col {
  margin-bottom: 20px;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
