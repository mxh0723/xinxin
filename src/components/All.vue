<template>
  <div class="all">
    <div class="header">
      <el-row :gutter="10">
        <el-col :xs="3" :sm="3" :md="3" :xl="3" class="left"
          ><i class="el-icon-arrow-left" @click="Allfun"></i
        ></el-col>
        <el-col :xs="18" :sm="18" :md="18" :xl="18" class="mid"
          >全部分类</el-col
        >
        <el-col :xs="3" :sm="3" :md="3" :xl="3" class="right"
          ><i class="el-icon-more" @click="Allfun1"></i
        ></el-col>
      </el-row>
    </div>
    <div class="isshow" v-show="show">
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
    <div class="box">
      <ul>
        <li v-for="(item, i) in items" :key="i" @click="ToAround">
          <i :class="item.class"></i>
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
    <About class="aabb"></About>
  </div>
</template>

<script>
import About from "@/components/About";
export default {
  name: "All",
  data() {
    return {
      items: [
        { class: "icon1", name: "旅游顾问" },
        { class: "icon2", name: "周边游" },
        { class: "icon3", name: "国内游" },
        { class: "icon4", name: "出境游" },
        { class: "icon5", name: "旅游定制" },
        { class: "icon6", name: "目的地" },
        { class: "icon7", name: "旅行社" },
        { class: "icon8", name: "景点门票" },
        { class: "icon9", name: "旅游景点" },
        { class: "icon10", name: "旅游攻略" },
        { class: "icon11", name: "旅游指南" },
        { class: "icon12", name: "旅游资讯" },
        { class: "icon13", name: "机票" },
        { class: "icon14", name: "酒店" },
        { class: "icon15", name: "火车时刻表" },
        { class: "icon16", name: "主题游" },
        { class: "icon17", name: "汽车时刻表" },
        { class: "icon18", name: "积分商城" },
        { class: "icon19", name: "旅游天气" },
        { class: "icon20", name: "公交车" },
        { class: "icon21", name: "地铁" },
        { class: "icon22", name: "美食" },
        { class: "icon23", name: "购物" },
        { class: "icon24", name: "邮编查询" },
      ],
      show: false,
    };
  },
  components: {
    About,
  },
  methods: {
    Allfun() {
      this.$router.go(-1);
    },
    Allfun1() {
      this.show = !this.show;
    },
    ToAround() {
      this.$router.push({ path: "/Around" });
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
.box {
  background-color: #fff;
  ul {
    padding: 0;
    margin: 0;
    li {
      width: 25%;
      display: inline-block;
      list-style: none;
      text-align: center;
      margin: 5px 0;
      p {
        margin: 0;
      }
      i {
        display: inline-block;
        width: 48px;
        height: 48px;
        background-image: url("../../static/sprite_more.png");
        background-repeat: no-repeat;
        background-size: 230px 230px;
      }
      .icon1 {
        background-position: -44px -88px;
      }
      .icon2 {
        background-position: -44px -176px;
      }
      .icon3 {
        background-position: -0px -88px;
      }
      .icon4 {
        background-position: -44px -0px;
      }
      .icon5 {
        background-position: -0px -44px;
      }
      .icon6 {
        background-position: -132px -132px;
      }
      .icon7 {
        background-position: -44px -132px;
      }
      .icon8 {
        background-position: -176px -0px;
      }
      .icon9 {
        background-position: -132px -44px;
      }
      .icon10 {
        background-position: -88px 3px;
      }
      .icon11 {
        background-position: -0px -185px;
      }
      .icon12 {
        background-position: -140px -185px;
      }
      .icon13 {
        background-position: -140px -88px;
      }
      .icon15 {
        background-position: -0px -132px;
      }
      .icon16 {
        background-position: -90px -185px;
      }
      .icon17 {
        background-position: -185px -44px;
      }
      .icon18 {
        background-position: -132px -0px;
      }
      .icon19 {
        background-position: -190px -92px;
      }
      .icon20 {
        background-position: -44px -44px;
      }
      .icon21 {
        background-position: -88px -88px;
      }
      .icon22 {
        background-position: -92px -135px;
      }
      .icon23 {
        background-position: -92px -44px;
      }
      .icon24 {
        background-position: -185px -137px;
      }
    }
  }
}
.aabb {
  margin-top: 10px;
}
</style>