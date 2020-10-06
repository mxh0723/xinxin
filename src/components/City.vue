<template>
  <div id="city">
    <div class="header">
      <el-row :gutter="10">
        <el-col :xs="3" :sm="3" :md="3" :xl="3" class="left">
          <i class="el-icon-arrow-left" @click="fun"></i>
        </el-col>
        <el-col :xs="18" :sm="18" :md="18" :xl="18" class="mid">
          选择城市
        </el-col>
        <el-col :xs="3" :sm="3" :md="3" :xl="3" class="right">
          <i class="el-icon-more" @click="$store.commit('fun1')"></i>
        </el-col>
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
    <p class="historyCity">历史城市</p>
    <div class="historypush">
      <span
        v-for="(v, i) in $store.state.HistoryCity"
        :key="i"
        @click="ElCity"
        >{{ v }}</span
      >
    </div>
    <p class="hotCity">热门城市</p>
    <el-row :gutter="10" class="citybox">
      <el-col :xs="6" :sm="6" :md="6" :xl="6" class="cityren">
        <span @click="ElCity">北京</span>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :xl="6" class="cityren">
        <span @click="ElCity">上海</span>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :xl="6" class="cityren">
        <span @click="ElCity">广州</span>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :xl="6" class="cityren">
        <span @click="ElCity">深圳</span>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="citybox">
      <el-col :xs="6" :sm="6" :md="6" :xl="6" class="cityren">
        <span @click="ElCity">天津</span>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :xl="6" class="cityren">
        <span @click="ElCity">重庆</span>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :xl="6" class="cityren">
        <span @click="ElCity">西安</span>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :xl="6" class="cityren">
        <span @click="ElCity">成都</span>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="citybox">
      <el-col :xs="6" :sm="6" :md="6" :xl="6" class="cityren">
        <span @click="ElCity">武汉</span>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :xl="6" class="cityren">
        <span @click="ElCity">杭州</span>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :xl="6" class="cityren">
        <span @click="ElCity">南京</span>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :xl="6" class="cityren">
        <span @click="ElCity">苏州</span>
      </el-col>
    </el-row>
    <p class="hotCity">更多城市</p>
    <Cityjson></Cityjson>
    <About class="about"></About>
  </div>
</template>

<script>
import About from "@/components/About";
import Cityjson from "@/components/Cityjson";
export default {
  name: "City",
  data() {
    return {
      city: ""
    };
  },
  methods: {
    fun() {
      this.$router.go(-1);
    },
    ElCity(v) {
      this.city = v.srcElement.innerHTML;
      this.$store.commit("localcity", this.city);
      this.$router.push({ path: "/" });
    }
  },
  components: {
    About,
    Cityjson
  }
};
</script>

<style scoped lang="less">
#city {
  width: 100%;
  background-color: #ddd;
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
  .historyCity {
    height: 44px;
    line-height: 44px;
    padding: 0 16.8px;
    margin: 0;
  }
  .historypush {
    background-color: #fff;
    span {
      display: inline-block;
      width: 24%;
      height: 48px;
      text-align: center;
      line-height: 48px;
    }
  }
  .hotCity {
    height: 44px;
    line-height: 44px;
    padding: 0 16.8px;
    margin: 0;
  }
  .citybox {
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    .cityren {
      text-align: center;
      height: 44px;
      line-height: 44px;
      border-left: 1px solid #ddd;
    }
  }
  .about {
    margin-top: 10px;
  }
}
</style>
