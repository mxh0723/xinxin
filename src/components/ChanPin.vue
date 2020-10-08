<template>
  <div class="chanpin">
    <div class="headtop">
      <i class="el-icon-arrow-left left" @click="chanpinfun"></i>
      <span>产品详情</span>
      <i class="el-icon-more right" @click="$store.commit('fun1')"></i>
      <img src="../../static/icon_people.png" alt="" @click="ToLogon" />
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
    <div>
      <wc-swiper class="wc-swiper">
        <wc-slide><i class="wc1"></i></wc-slide>
        <wc-slide><i class="wc2"></i></wc-slide>
        <wc-slide><i class="wc3"></i></wc-slide>
        <wc-slide><i class="wc4"></i></wc-slide>
        <wc-slide><i class="wc5"></i></wc-slide>
      </wc-swiper>
    </div>
    <div class="bgimg">
      <span class="fr">产品编码:14649960</span>
      <span>跟团游</span>
      <span><i class="icon1"></i>三亚出发</span>
    </div>
    <div class="xl">
      <div class="xltitle">
        <img
          src="../../static/icon_you.png"
          alt=""
          width="70px"
          height="20px"
        />
        三亚度假六日游，三亚1天自由行+3天跟团游，三亚6天游推荐
      </div>
      <div class="bq">
        <i>海岛游</i>
        <i>户外游</i>
        <i>休闲度假</i>
        <i>暑假旅游</i>
      </div>
      <div class="num">
        <span class="un">7674人关注</span>
        <span class="money">￥<b>1350</b></span>
        <s>￥2350</s>
      </div>
    </div>
    <div class="type">预订类型：三亚双岛戏海6日游</div>
    <div class="day">
      <div class="tit">
        出游日期
        <span>（以下价格为起价）</span>
      </div>
      <ul class="daymoney">
        <li v-for="(item, i) in items" :key="i">
          <p>{{ item }}</p>
          <span>￥1350</span>
        </li>
        <li class="more">更多团期</li>
      </ul>
    </div>
    <div class="jifen">
      本行程无购物，无自费，以您与旅行社签订的旅游合同为准
    </div>
    <DaoHang
      @scroll="handleScroll"
      ref="content"
      :scrollTop="scrollTop"
    ></DaoHang>
    <div class="yuding">
      <span class="f" @click="open">
        <i class="icon_tel"></i>
        电话咨询
      </span>
      <a
        href="https://chat.cncn.com/?action=yk-m-win&amp;to_id=208280&amp;msg_ext="
        class="f"
      >
        <i class="icon_er"></i>
        在线咨询
      </a>
      <a class="f" href="https://m.cncn.com/lxs/78964">
        <i class="icon_shop"></i>
        店铺
      </a>
      <a class="r j_xl_yuding" href="https://m.cncn.com/xianlu/789641464960"
        >立即预订</a
      >
    </div>
    <el-backtop></el-backtop>
  </div>
</template>
<script>
import DaoHang from "@/components/DaoHang";
export default {
  name: "ChanPin",
  data() {
    return {
      items: [
        "09-30 周三",
        "10-01 周四",
        "10-02 周五",
        "10-03 周六",
        "10-04 周四",
        "10-05 周一",
        "10-06 周二",
      ],
      scrollTop: "",
    };
  },
  components: {
    DaoHang,
  },
  mounted() {},
  methods: {
    handleScroll(el) {
      this.scrollTop = this.$refs.content.scrollTop;
    },
    ToLogon() {
      this.$router.push({ path: "/Logon" });
    },
    chanpinfun() {
      this.$router.go(-1);
    },
    open() {
      this.$confirm("13876017100", "", {
        confirmButtonText: "拨打",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "拨打成功",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style scoped lang="less">
.chanpin {
  background-color: #ddd;
  margin-bottom: 80px;
  .headtop {
    background-color: #00bf49;
    overflow: hidden;
    i {
      display: inline-block;
      width: 40px;
      height: 44px;
      text-align: center;
      line-height: 44px;
      color: #fff;
      font-size: 24px;
    }
    .left {
      float: left;
    }
    .right {
      float: right;
    }
    span {
      display: inline-block;
      width: 350px;
      height: 44px;
      text-align: center;
      line-height: 44px;
      color: #fff;
      font-size: 20px;
    }
    img {
      width: 41px;
      height: 44px;
      text-align: center;
      line-height: 44px;
      float: right;
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
  .wc-swiper {
    height: 168px;
    .wc1 {
      display: inline-block;
      width: 100%;
      height: 168px;
      background-image: url("../../static/xin1.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .wc2 {
      display: inline-block;
      width: 100%;
      height: 168px;
      background-image: url("../../static/chanpin1.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .wc3 {
      display: inline-block;
      width: 100%;
      height: 168px;
      background-image: url("../../static/chanpin2.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .wc4 {
      display: inline-block;
      width: 100%;
      height: 168px;
      background-image: url("../../static/chanpin3.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .wc5 {
      display: inline-block;
      width: 100%;
      height: 168px;
      background-image: url("../../static/chanpin4.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  .bgimg {
    background-color: transparent;
    padding: 0 16.8px;
    color: #fff;
    position: absolute;
    width: 90%;
    top: 190px;
    .fr {
      float: right;
    }
    .icon1 {
      display: inline-block;
      width: 11px;
      height: 13px;
      background-image: url("../../static/index_icon.png");
      background-size: 150px 150px;
      background-position: 0 -115px;
    }
  }
  .xl {
    background-color: #fff;
    padding: 5.6px 16.8px;
    .xltitle {
      font-size: 20px;
    }
    .bq {
      i {
        font-size: 10px;
        border: 1px solid #999999;
        color: #999999;
        display: inline-block;
        margin-right: 10px;
      }
    }
    .num {
      margin-top: 16.8px;
      .un {
        color: #999999;
        float: right;
      }
      .money {
        color: #ff6600;
        b {
          font-size: 25px;
        }
      }
    }
  }
  .type {
    font-size: 20px;
    height: 48px;
    line-height: 40px;
    background-color: #fff;
    margin: 11.2px 0;
    padding: 0 16.8px;
  }
  .day {
    background-color: #fff;
    margin: 11.2px 0;
    padding: 0 16.8px 7.84px 16.8px;
    .tit {
      font-size: 20px;
      span {
        font-size: 14px;
      }
    }
    .daymoney {
      list-style: none;
      padding: 0;
      li {
        display: inline-block;
        border: 1px solid #ddd;
        padding: 0 8px;
        margin-left: 10.08px;
        margin-bottom: 8.96px;
        text-align: center;
        p {
          margin: 0;
        }
        span {
          color: red;
        }
      }
      .more {
        width: 81px;
        height: 42px;
        padding: 0 8px;
        margin: 0 0 8.96px 10.08px;
        position: absolute;
        line-height: 42px;
        color: #47d17d;
      }
    }
  }
  .jifen {
    background-color: #fff5e7;
    padding: 8.96px 16.8px;
  }
  .yuding {
    width: 100%;
    height: 5rem;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    text-align: center;
    z-index: 100;
    margin: 0;
    padding: 0;
    a {
      text-decoration: none;
    }
    .f {
      flex: 1;
      padding-top: 8.585px;
      color: #999;
      line-height: 2rem;
      .icon_tel {
        display: block;
        width: 2.1rem;
        height: 2.1rem;
        background-image: url("../../static/xianlu_icon.png");
        background-size: 20rem auto;
        background-position: 0 -9.7rem;
        margin: auto;
      }
      .icon_er {
        display: block;
        width: 2.1rem;
        height: 2.1rem;
        background-image: url("../../static/xianlu_icon.png");
        background-size: 20rem auto;
        background-position: 0 -12.3rem;
        margin: auto;
      }
      .icon_shop {
        display: block;
        width: 2.1rem;
        height: 2.1rem;
        background-image: url("../../static/xianlu_icon.png");
        background-size: 20rem auto;
        background-position: -2.3rem -14.7rem;
        margin: auto;
      }
    }
    .r {
      width: 50%;
      line-height: 5rem;
      background-color: #ff9911;
      color: #fff;
      font-size: 1.6rem;
    }
  }
}
</style>