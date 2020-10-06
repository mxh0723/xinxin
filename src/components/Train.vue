<template>
  <div class="train">
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
    <div class="form">
      <p>
        <input
          v-model="input"
          placeholder="点击输入"
          value="上海"
          class="input"
        />
        <span class="icon"></span>
        <input
          v-model="inputend"
          placeholder="点击输入"
          value="北京"
          class="inputend"
        />
      </p>
      <p>
        <span class="lef ">出发日期</span>
        <span class="rig">只搜高铁/动车</span>
      </p>
      <p>
        <el-date-picker
          v-model="value"
          type="date"
          placeholder="选择日期"
          class="date"
        ></el-date-picker>
        <el-switch
          v-model="val"
          active-color="#13ce66"
          inactive-color="#999"
          class="switch"
        ></el-switch>
      </p>
      <input type="submit" class="Btn" value="查询" />
    </div>
    <div class="sub">
      <p>热门站点</p>
      <div class="txt">
        <span v-for="(item, i) in items" :key="i">{{ item }}</span>
      </div>
    </div>
    <div class="pic">
      <img src="../../static/train1.jpg" alt="" width="100%" />
    </div>
    <div class="sub">
      <p>热门车次</p>
      <div class="txt">
        <span v-for="(item, i) in items1" :key="i">{{ item }}</span>
      </div>
    </div>
    <div class="sub1">
      <p>热门火车票代售点</p>
      <div class="txt">
        <span v-for="(item, i) in items2" :key="i">{{ item }}</span>
      </div>
    </div>
    <div class="sub1">
      <p>热门路线</p>
      <div class="txt">
        <span v-for="(item, i) in items3" :key="i">{{ item }}</span>
      </div>
    </div>
    <div class="sub">
      <p>分省火车站导航</p>
      <div class="txt">
        <span v-for="(item, i) in items4" :key="i">{{ item }}</span>
      </div>
    </div>
    <About></About>
  </div>
</template>

<script>
import About from "@/components/About";
export default {
  name: "Train",
  components: { About },
  data() {
    return {
      input: "上海",
      inputend: "北京",
      value: "",
      val: true,
      items: [
        "上海",
        "福州",
        "成都",
        "厦门",
        "广州",
        "北京",
        "温州南",
        "青岛",
        "杭州",
        "深圳",
        "上海虹桥",
        "宁波",
        "南京",
        "合肥",
        "泉州",
        "郑州"
      ],
      items1: [
        "K706/K070",
        "K708/K705",
        "K309/K312",
        "K612/K613",
        "K614/K611",
        "K92/K93",
        "K94/K91",
        "1228/1229",
        "1230/1227",
        "1462",
        "Z9814",
        "K102",
        "K152/K153",
        "K154/K151",
        "K161"
      ],
      items2: [
        "北京",
        "上海",
        "天津",
        "广州",
        "深圳",
        "南京",
        "济南",
        "杭州",
        "厦门",
        "重庆",
        "合肥",
        "武汉"
      ],
      items3: [
        "厦深动车时刻表",
        "沪宁高铁时刻表",
        "福厦动车时刻表",
        "沪杭高铁时刻表",
        "成渝高铁时刻表",
        "京沪高铁时刻表",
        "武广高铁时刻表",
        "广深火车时刻表",
        "京广火车时刻表",
        "武广火车时刻表",
        "哈大火车时刻表",
        "沪昆火车时刻表"
      ],
      items4: [
        "安徽",
        "北京",
        "福建",
        "甘肃",
        "安徽",
        "北京",
        "福建",
        "甘肃",
        "安徽",
        "北京",
        "福建",
        "甘肃",
        "安徽",
        "北京",
        "福建",
        "甘肃",
        "安徽",
        "北京",
        "福建",
        "甘肃",
        "安徽",
        "北京",
        "福建",
        "甘肃",
        "安徽",
        "北京",
        "福建",
        "甘肃",
        "安徽",
        "北京",
        "福建",
        "甘肃",
        "安徽",
        "北京",
        "福建",
        "甘肃",
        "安徽",
        "北京",
        "福建",
        "甘肃"
      ]
    };
  },
  methods: {
    fun() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
.train {
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
  .form {
    padding: 15px;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    overflow: hidden;
    p {
      overflow: hidden;
      margin: 0;
      margin-bottom: 15px;
    }
    .input {
      width: 163px;
      height: 46px;
      font-size: 20px;
      float: left;
      border: none;
      border-bottom: 1px solid #ddd;
      font-weight: bold;
    }
    .icon {
      display: inline-block;
      width: 30px;
      height: 30px;
      background-image: url("../../static/icon_train.gif");
      background-size: 30px 30px;
      position: absolute;
      left: 215px;
    }
    .inputend {
      width: 163px;
      height: 46px;
      text-align: right;
      font-size: 20px;
      float: right;
      border: none;
      font-weight: bold;
      border-bottom: 1px solid #ddd;
    }
    .lef {
      float: left;
      color: #999;
    }
    .rig {
      float: right;
      color: #999;
    }
    .switch {
      float: right;
    }
    .date {
      float: left;
    }
    .Btn {
      width: 100%;
      height: 42px;
      margin-top: 10px;
      font-size: 16px;
      background-color: #ff9c00;
      color: #fff;
      border-radius: 5px;
      border: none;
    }
  }
  .sub {
    margin: 10px 0;
    background-color: #fff;
    p {
      padding: 10px 0 10px 10px;
      border-top: 1px solid #ddd;
    }
    .txt {
      span {
        display: inline-block;
        width: 24.5%;
        height: 35px;
        text-align: center;
        line-height: 35px;
        border: 1px solid #ddd;
      }
    }
  }
  .sub1 {
    margin: 10px 0;
    background-color: #fff;
    p {
      padding: 10px 0 10px 10px;
      border-top: 1px solid #ddd;
    }
    .txt {
      span {
        display: inline-block;
        width: 32.5%;
        height: 35px;
        text-align: center;
        line-height: 35px;
        border: 1px solid #ddd;
      }
    }
  }
}
</style>
