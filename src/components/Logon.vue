<template>
  <div>
    <div class="header">
      <el-row :gutter="10">
        <el-col :xs="3" :sm="3" :md="3" :xl="3" class="left"
          ><i class="el-icon-arrow-left" @click="fun"></i
        ></el-col>
        <el-col :xs="18" :sm="18" :md="18" :xl="18" class="mid"
          >欣欣账号登录</el-col
        >
        <el-col :xs="3" :sm="3" :md="3" :xl="3" class="right"
          ><i class="el-icon-more" @click="$store.commit('fun1')"></i
        ></el-col>
      </el-row>
    </div>
    <div class="isshow" v-show="$store.state.show">
      <router-link to="/" class="routerlink">
        <i class="iconhome"></i>
        <p>欣欣首页</p>
      </router-link>
      <router-link to="/All" class="routerlink">
        <i class="iconall"></i>
        <br />
        <p>全部分类</p>
      </router-link>
      <router-link to="/Sos" class="routerlink">
        <i class="iconsos"></i>
        <p>搜索</p>
      </router-link>
      <router-link to="/Logon" class="routerlink">
        <i class="iconmy"></i>
        <p>我的欣欣</p>
      </router-link>
    </div>
    <div class="login_form">
      <input
        type="text"
        class="qxs-ic_user qxs-icon"
        placeholder="用户名"
        v-model="userName"
      />
      <input
        type="password"
        class="qxs-ic_password qxs-icon"
        placeholder="密码"
        v-model="password"
      />
      <!--<button class="login_btn el-button el-button&#45;&#45;primary is-round" type="primary" round>登录</button>-->
      <el-button
        class="login_btn"
        @click.native="login"
        type="primary"
        round
        :loading="isBtnLoading"
        >{{ btnText }}</el-button
      >
      <div style="margin-top: 10px">
        <span style="color: #000099" @click="login">账号登陆</span
        ><span style="float: right; color: #a9a9ab">忘记密码？</span>
      </div>
    </div>
  </div>
</template>
 
 
 
<script>
//  import { userLogin } from '../../api/api';

export default {
  name: "Logon",
  data() {
    return {
      userName: "",
      password: "",
      isBtnLoading: false,
    };
  },
  created() {
    if (
      JSON.parse(localStorage.getItem("user")) &&
      JSON.parse(localStorage.getItem("user")).userName
    ) {
      this.userName = JSON.parse(localStorage.getItem("user")).userName;
      this.password = JSON.parse(localStorage.getItem("user")).password;
    }
    console.log(123);
    console.log(this.$store.state.isLogon);
    if (this.$store.state.isLogon) {
      this.$router.push({ path: "/UserName" });
    }
  },
  computed: {
    btnText() {
      if (this.isBtnLoading) return "登录中...";
      return "登录";
    },
  },
  methods: {
    fun() {
      this.$router.go(-1);
    },
    login() {
      if (!this.userName) {
        this.$message.error("请输入用户名");
        return;
      }
      if (!this.password) {
        this.$message.error("请输入密码");
        return;
      }
      if (this.userName && this.password) {
        this.isBtnLoading = true;
      }
      if (this.isBtnLoading) {
        this.$store.state.isLogon = true;
        this.$router.push({ path: "/" });
        this.$store.state.UserName = this.userName;
      }
    },
  },
};
</script>
<style scoped lang="less">
.header {
  width: 100%;
  height: 49px;
  background-color: #00bf49;
  margin: 0;
  .left {
    height: 49px;
    line-height: 49px;
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
  .mid {
    height: 49px;
    line-height: 49px;
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
  .right {
    height: 49px;
    line-height: 49px;
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
}
.isshow {
  width: 100%;
  height: 79px;
  position: absolute;
  border-radius: 10px;
  top: 50px;
  z-index: 100;
  background-color: #fff;
  .routerlink {
    width: 23%;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    color: black;
    i {
      display: inline-block;
      width: 30px;
      height: 30px;
      background-image: url(../../static/icon_top.png);
      background-size: 150px 30px;
      background-repeat: no-repeat;
      position: relative;
      top: 7px;
    }
    .iconall {
      background-position: -30px 0px;
    }
    .iconsos {
      background-position: -60px 0;
    }
    .iconmy {
      background-position: -90px 0;
    }
  }
}
.login_form {
  padding: 11.2px 28px;
  background-color: #fff;
  margin-top: 70px;
  .qxs-icon {
    width: 100%;
    height: 56px;
    margin: 16.8px 0;
    border: none;
    border-bottom: 1px solid #ddd;
  }
}
/* .qxs-ic_user {
    background: url("../../assets/login/ic_user.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
  }
  .qxs-ic_password {
    background: url("../../assets/login/ic_password.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 20px;
  } */
.login_logo {
  height: 100%;
}
.login_btn {
  width: 100%;
  font-size: 16px;
  background: -webkit-linear-gradient(
    left,
    #000099,
    #2154fa
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    #000099,
    #2154fa
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    #000099,
    #2154fa
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #000099, #2154fa); /* 标准的语法 */
  filter: brightness(1.4);
}
</style>