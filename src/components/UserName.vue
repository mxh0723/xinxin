<template>
  <div class="username">
    <div class="header">
      <el-row :gutter="10">
        <el-col :xs="3" :sm="3" :md="3" :xl="3" class="left"
          ><i class="el-icon-arrow-left" @click="fun"></i
        ></el-col>
        <el-col :xs="18" :sm="18" :md="18" :xl="18" class="mid"
          >我的欣欣账号</el-col
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
    <div class="user">
      <i class="icon"></i>
      <p>{{ $store.state.UserName }}</p>
    </div>
    <div class="hello">
      欢迎您尊敬的{{
        $store.state.UserName
      }}用户，我们欣欣旅游将为您旅游全程服务。
    </div>
    <img src="../../static/user.jpg" alt="" width="100%" />
    <About></About>
  </div>
</template>

<script>
import About from "@/components/About";
export default {
  name: "UserName",
  methods: {
    fun() {
      this.$router.push({ path: "/" });
    },
  },
  components: { About },
};
</script>

<style scoped lang="less">
.username {
  width: 100%;
  overflow: hidden;
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
  .user {
    background-color: #fff;
    width: 100%;
    text-align: center;
    .icon {
      display: block;
      width: 100px;
      height: 100px;
      background-image: url("../../static/touxiang.jpg");
      background-size: cover;
      border-radius: 50px;
      margin: auto;
    }
    p {
      font-size: 24px;
      color: #f00;
    }
  }
  .hello {
    font-size: 20px;
    text-align: center;
    color: #00bf49;
    background-color: #fff;
  }
  img {
    background-color: #fff;
  }
}
</style>