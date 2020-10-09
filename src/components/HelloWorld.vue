<template>
  <div class="hello">
    <div class="el">
      <router-link to="/Suggest" class="logo">
        <img :src="logo" width="38.40" height="38.40" />
      </router-link>
      <router-link to="/City" class="city">
        <span class="linyi">{{ $store.state.city }}</span
        ><i class="el-icon-arrow-down"></i>
      </router-link>
      <router-link to="/Sos" class="headerinput">
        <el-input
          placeholder="线路/景点门票/旅行社"
          prefix-icon="el-icon-search"
        >
        </el-input>
      </router-link>
      <router-link to="/Logon" class="headture">
        <img src="../../static/icon_people.png" alt="" />
      </router-link>
    </div>
    <wc-swiper class="wc-swiper">
      <wc-slide class="swiper">
        <img src="../../static/1.jpg" @click="ToSanYa" />
      </wc-slide>
      <wc-slide class="swiper">
        <img src="../../static/2.jpg" @click="ToSanYa" />
      </wc-slide>
      <wc-slide class="swiper">
        <img src="../../static/3.jpg" @click="ToSanYa" />
      </wc-slide>
    </wc-swiper>
    <wc-swiper class="mdfun" :autoplay="false">
      <wc-slide><Mdfun1></Mdfun1></wc-slide>
      <wc-slide><Mdfun2></Mdfun2></wc-slide>
    </wc-swiper>
    <textScrolling class="kandian"></textScrolling>
    <Activity class="act"></Activity>
    <div class="box">
      <el-tabs v-model="activeName">
        <el-tab-pane name="first"
          ><span slot="label" class="label1">当地游</span>
          <div class="txt">
            <div
              class="index"
              @click="ToChanPin"
              v-for="(item, i) in items"
              :key="i"
            >
              <div class="pic">
                <b>跟团游</b>
                <img :src="item.img" alt="" width="144px" height="96px" />
              </div>
              <div class="text">
                <div class="title">{{ item.txt }}</div>
                <div class="type"><span>海岛游</span><span>休闲度假</span></div>
                <div class="money">
                  <span class="rig"
                    >￥<b>{{ 138 }}</b
                    >起</span
                  ><span class="lef">一日游</span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="second"
          ><span slot="label" class="label">周边游</span>
          <div class="txt">
            <div
              class="index"
              @click="ToChanPin"
              v-for="(item, i) in items1"
              :key="i"
            >
              <div class="pic">
                <b>跟团游</b>
                <img :src="item.img" alt="" width="144px" height="96px" />
              </div>
              <div class="text">
                <div class="title">{{ item.txt }}</div>
                <div class="type"><span>海岛游</span><span>休闲度假</span></div>
                <div class="money">
                  <span class="rig"
                    >￥<b>{{ 138 }}</b
                    >起</span
                  ><span class="lef">一日游</span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="third"
          ><span slot="label" class="label">国内游</span>
          <div class="txt">
            <div
              class="index"
              @click="ToChanPin"
              v-for="(item, i) in items2"
              :key="i"
            >
              <div class="pic">
                <b>跟团游</b>
                <img :src="item.img" alt="" width="144px" height="96px" />
              </div>
              <div class="text">
                <div class="title">{{ item.txt }}</div>
                <div class="type"><span>海岛游</span><span>休闲度假</span></div>
                <div class="money">
                  <span class="rig"
                    >￥<b>{{ 138 }}</b
                    >起</span
                  ><span class="lef">一日游</span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="fourth"
          ><span slot="label" class="label1">出境游</span>
          <div class="txt">
            <div
              class="index"
              @click="ToChanPin"
              v-for="(item, i) in items3"
              :key="i"
            >
              <div class="pic">
                <b>跟团游</b>
                <img :src="item.img" alt="" width="144px" height="96px" />
              </div>
              <div class="text">
                <div class="title">{{ item.txt }}</div>
                <div class="type"><span>海岛游</span><span>休闲度假</span></div>
                <div class="money">
                  <span class="rig"
                    >￥<b>{{ 138 }}</b
                    >起</span
                  ><span class="lef">一日游</span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div class="more" @click="more">
        查看更多
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <About></About>
  </div>
</template>

<script>
import Mdfun1 from "@/components/Mdfun1";
import Mdfun2 from "@/components/Mdfun2";
import textScrolling from "@/components/textScrolling";
import Activity from "@/components/Activity";
import About from "@/components/About";
export default {
  name: "HelloWorld",
  data() {
    return {
      logo: "static/icon_cncn.png",
      activeName: "first",
      items: [
        {
          img: "static/ee.jpg",
          txt: "三亚蜈支洲纯玩一日游（含接送/门票/船票）",
        },
        {
          img: "static/ee.jpg",
          txt: "三亚蜈支洲纯玩一日游（含接送/门票/船票）",
        },
        {
          img: "static/ee.jpg",
          txt: "三亚蜈支洲纯玩一日游（含接送/门票/船票）",
        },
        {
          img: "static/ee.jpg",
          txt: "三亚蜈支洲纯玩一日游（含接送/门票/船票）",
        },
        {
          img: "static/ee.jpg",
          txt: "三亚蜈支洲纯玩一日游（含接送/门票/船票）",
        },
        {
          img: "static/ee.jpg",
          txt: "三亚蜈支洲纯玩一日游（含接送/门票/船票）",
        },
      ],
      items1: [
        {
          img: "static/ee.jpg",
          txt: "三亚蜈支洲纯玩一日游（含接送/门票/船票）",
        },
        {
          img: "static/ee.jpg",
          txt: "三亚蜈支洲纯玩一日游（含接送/门票/船票）",
        },
        {
          img: "static/ee.jpg",
          txt: "三亚蜈支洲纯玩一日游（含接送/门票/船票）",
        },
        {
          img: "static/ee.jpg",
          txt: "三亚蜈支洲纯玩一日游（含接送/门票/船票）",
        },
      ],
      items2: [
        {
          img: "static/ee.jpg",
          txt: "三亚蜈支洲纯玩一日游（含接送/门票/船票）",
        },
        {
          img: "static/ee.jpg",
          txt: "三亚蜈支洲纯玩一日游（含接送/门票/船票）",
        },
      ],
      items3: [
        {
          img: "static/ee.jpg",
          txt: "三亚蜈支洲纯玩一日游（含接送/门票/船票）",
        },
        {
          img: "static/ee.jpg",
          txt: "三亚蜈支洲纯玩一日游（含接送/门票/船票）",
        },
        {
          img: "static/ee.jpg",
          txt: "三亚蜈支洲纯玩一日游（含接送/门票/船票）",
        },
        {
          img: "static/ee.jpg",
          txt: "三亚蜈支洲纯玩一日游（含接送/门票/船票）",
        },
      ],
    };
  },
  methods: {
    ToSanYa() {
      this.$router.push({ path: "/SanYa" });
    },
    ToChanPin() {
      this.$router.push({ path: "/ChanPin" });
    },
    more() {
      this.$router.push({ path: "/Select" });
    },
  },
  components: {
    Mdfun1,
    Mdfun2,
    textScrolling,
    Activity,
    About,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  width: 100%;
  overflow: hidden;
  background-color: #f2f2f2;
  .el {
    width: 100%;
    background-color: #fff;
    display: flex;
    .logo {
      width: 39px;
      height: 39px;
      display: inline-block;
      position: relative;
      left: 8px;
    }
    .city {
      display: inline-block;
      width: 56px;
      height: 56px;
      text-align: center;
      position: relative;
      top: -9px;
      line-height: 56px;
      padding: 0 12.8px;
      // margin:0 6.4px ;
      text-decoration: none;
      color: #00bf48;
    }
    .linyi {
      font-size: 20px;
    }
    .headerinput {
      display: inline-block;
      flex: 1;
      width: 40%;
      margin-top: 5px;
    }
    .headture {
      display: inline-block;
      padding: 0;
      text-align: center;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background-color: #00bf48;
      img {
        position: relative;
        top: 5px;
      }
    }
  }
  .kandian {
    background-color: #fff;
  }
  .mdfun {
    overflow: hidden;
    background-color: #fff;
  }
  .act {
    margin: 20px 0;
    background-color: #fff;
  }
  .box {
    width: 100%;
    background-color: #fff;
    .label {
      font-size: 20px;
      display: inline-block;
    }
    .label1 {
      font-size: 20px;
      display: inline-block;
      padding: 3px 20px;
    }
    .txt {
      margin-left: 15px;
      .index {
        overflow: hidden;
        padding: 12px 12px 12px 0;
      }
      .pic {
        float: left;
        margin-right: 10px;
        b {
          display: inline-block;
          color: #fff;
          padding: 5px 10px;
          background-color: #00bf49;
          border-radius: 0 0 20px 0;
          position: absolute;
        }
      }
      .text {
        width: 60%;
        height: 96px;
        float: left;
        .title {
          font-size: 18px;
        }
        .type {
          span {
            font-size: 10px;
            color: #999;
            border: 1px solid #999;
            border-radius: 3px;
            display: inline-block;
            padding: 0 3px;
          }
        }
        .money {
          overflow: hidden;
          line-height: 26px;
          .rig {
            float: right;
            color: #f60;
            b {
              font-size: 20px;
            }
          }
          .lef {
            float: left;
            color: #999;
          }
        }
      }
    }
  }
  .more {
    width: 100%;
    height: 49px;
    line-height: 49px;
    background-color: #fff;
    text-align: center;
    font-size: 20px;
    color: #00bf48;
  }
}
.wc-swiper {
  padding: 0;
  margin: 0;
  background-color: #fff;
  img {
    width: 100%;
    height: auto;
    touch-action: none;
  }
  .swiper {
    width: 100%;
  }
}
</style>
