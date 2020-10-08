<template>
  <div class="select">
    <div class="header">
      <el-row :gutter="10">
        <el-col :xs="3" :sm="3" :md="3" :xl="3" class="left"
          ><i class="el-icon-arrow-left" @click="fun"></i
        ></el-col>
        <el-col :xs="18" :sm="18" :md="18" :xl="18" class="mid"
          >欣欣优选</el-col
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
    <wc-swiper height="174px">
      <wc-slide v-for="(img, i) in imgs" :key="i">
        <img :src="img" alt="" height="174px" width="100%" @click="ToChanPin" />
      </wc-slide>
    </wc-swiper>
    <wc-swiper class="swiper">
      <wc-slide>
        <span
          v-for="(city, i) in citys1"
          :key="i"
          class="slide"
          @click="ToChanPin"
        >
          <i :class="city.icon"></i>
          <b>{{ city.text }}</b>
          <p>{{ city.eng }}</p>
        </span>
      </wc-slide>
      <wc-slide>
        <span
          v-for="(city, i) in citys2"
          :key="i"
          class="slide"
          @click="ToChanPin"
        >
          <i :class="city.icon"></i>
          <b>{{ city.text }}</b>
          <p>{{ city.eng }}</p>
        </span>
      </wc-slide>
      <wc-slide>
        <span
          v-for="(city, i) in citys3"
          :key="i"
          class="slide"
          @click="ToChanPin"
        >
          <i :class="city.icon"></i>
          <b>{{ city.text }}</b>
          <p>{{ city.eng }}</p>
        </span>
      </wc-slide>
    </wc-swiper>
    <stories></stories>
    <Mood></Mood>
    <Tag></Tag>
  </div>
</template>

<script>
import stories from "@/components/stories";
import Mood from "@/components/Mood";
import Tag from "@/components/Tag";
export default {
  name: "Select",
  data() {
    return {
      imgs: ["../../static/select1.png", "../../static/select2.png"],
      citys1: [
        { icon: "icon1", text: "成都", eng: "Chenhdu" },
        { icon: "icon2", text: "重庆", eng: "Chongqing" },
        { icon: "icon icon3", text: "厦门", eng: "Xiamen" },
        { icon: "icon icon4", text: "上海", eng: "Shanghai" },
      ],
      citys2: [
        { icon: "icon icon5", text: "西安", eng: "Xian" },
        { icon: "icon icon6", text: "乌鲁木齐", eng: "Urumqi" },
        { icon: "icon icon7", text: "丽江", eng: "Lijiang" },
        { icon: "icon icon8", text: "西宁", eng: "Xining" },
      ],
      citys3: [{ icon: "icon9", text: "三亚", eng: "Sanya" }],
    };
  },
  components: {
    stories,
    Mood,
    Tag,
  },
  methods: {
    fun() {
      this.$router.go(-1);
    },
    ToChanPin() {
      this.$router.push({ path: "/SanYa" });
    },
  },
};
</script>

<style scoped lang="less">
.select {
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
  .swiper {
    height: 139px;
    overflow: hidden;
    padding: 12px;
    .slide {
      display: inline-block;
      margin-right: 15px;
      background-color: #fff;
      width: 97px;
      text-align: center;
      i {
        display: block;
        margin: auto;
        width: 57px;
        height: 57px;
      }
      .icon1 {
        background-image: url("../../static/icon_chengdu.png");
        background-size: cover;
      }
      .icon2 {
        background-image: url("../../static/icon_chongqing.png");
        background-size: cover;
      }
      .icon {
        background-image: url("../../static/icon_select.png");
        background-size: 350px 230px;
      }
      .icon3 {
        background-position: 0 -60px;
      }
      .icon4 {
        background-position: -55px -60px;
      }
      .icon5 {
        background-position: -165px -60px;
      }
      .icon6 {
        background-position: -220px -120px;
      }
      .icon7 {
        background-position: -275px -120px;
      }
      .icon8 {
        background-position: -275px -60px;
      }
      .icon9 {
        background-image: url("../../static/icon_sanya.png");
        background-size: cover;
      }
    }
  }
}
</style>