<template>
  <div class="login">
    <el-card>
      <div class="top">
        <img src="../assets/img/cadtech.png" alt="" style="width: 30%" />
        <h2 class="item">凱群系統登入</h2>
      </div>
      <el-form
        class="login-form"
        :model="model"
        ref="form"
        @submit.native.prevent="login"
      >
        <el-form-item prop="username">
          <el-input
            v-model="model.username"
            placeholder="帳號"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="model.password"
            placeholder="密碼"
            type="password"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            :loading="loading"
            class="login-button"
            type="primary"
            native-type="submit"
            block
            >Login</el-button
          >
        </el-form-item>
        <a class="forgot-password" href="http://www.cadtech.com.tw/"
          >Cadtech.com.tw</a
        >
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  created() {
    localStorage.clear();
    if (!localStorage.getItem("jwt")) {
      localStorage.setItem("jwt", "");
    }
  },
  name: "login",
  data() {
    return {
      validCredentials: {
        username: "lightscope",
        password: "lightscope",
      },
      model: {
        username: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
    simulateLogin() {
      return new Promise((resolve) => {
        setTimeout(resolve, 800);
      });
    },
    async login() {
      // let valid = await this.$refs.form.validate();
      // if (!valid) {
      //   return;
      // }
      const data = {
        userid: this.model.username,
        userpw: this.model.password,
      };
      this.$axios({
        url: "/user/login",
        method: "post",
        data: data,
      })
        .then((res) => {
          if (res.status == 200) {
            // console.log(res.data);
            this.$store.commit("accessToken", res.data);
            localStorage.setItem(
              "jwt",
              this.$store.state.authority.access_token
            );
            const loading = this.$loading({
              lock: true,
              text: "載入中...",
              spinner: "el-icon-loading",
              background: "rgba(255, 255, 255, 0.7)",
            });
            setTimeout(() => {
              loading.close();
              this.$router.replace({ name: "Home" });
            }, 2000);
          }
        })
        .catch((err) => {
          console.log(err);
          this.$message({
            type: "error",
            message: "帳號密碼有錯",
          });
          // this.$router.push({ name: "Login" });
        });
      // this.loading = true;
      // await this.simulateLogin();
      // this.loading = false;

      // if (
      //   this.model.username === this.validCredentials.username &&
      //   this.model.password === this.validCredentials.password
      // ) {
      //   this.$message.success("Login successfull");
      // } else {
      //   this.$message.error("Username or password is invalid");
      // }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .login {
  margin: 0;
  padding: 0;
  background: #102a43;
  background-image: url("https://uploads.codesandbox.io/uploads/user/c3fb8e8a-35ea-4232-b5d6-0f3c5373510b/LVs7-dots.png");
  background-size: contain;
} */

.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-button {
  width: 100%;
  margin-top: 40px;
}
.login-form {
  width: 290px;
}
.forgot-password {
  margin-top: 10px;
}
</style>

<style lang="scss">
$teal: rgb(0, 124, 137);
.el-button--primary {
  background: $teal;
  border-color: $teal;

  &:hover,
  &.active,
  &:focus {
    background: lighten($teal, 7);
    border-color: lighten($teal, 7);
  }
}

.login .el-input__inner:hover {
  border-color: $teal;
}

.login .el-input__prefix {
  background: rgb(238, 237, 234);
  left: 0;
  height: calc(100% - 2px);
  left: 1px;
  top: 1px;
  border-radius: 3px;
  .el-input__icon {
    width: 30px;
  }
}

.login .el-input input {
  padding-left: 35px;
}

.login .el-card {
  padding-top: 0;
  padding-bottom: 30px;
}

.item {
  font-family: "Open Sans";
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;
  // padding-bottom: 20px;
}

a {
  color: $teal;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    color: lighten($teal, 7);
  }
}
.login .el-card {
  width: 340px;
  display: flex;
  justify-content: center;
}

.top {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
