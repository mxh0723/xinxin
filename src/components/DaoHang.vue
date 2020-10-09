<template>
  <div class="daohang">
    <div class="dianping">
      <div class="more">
        <span class="list">1条<i class="el-icon-arrow-right"></i></span>
        游客点评
        <span class="fen">5分</span>
        <el-rate v-model="value1" class="rate"></el-rate>
      </div>
      <div class="con">
        <div class="top">
          欣欣会员
          <span class="pingjia">评价：</span>
          <span class="icon1">很靠谱</span>
          <span class="rg">2019-10-15</span>
        </div>
        <div class="text">
          往返6天的时间，整个行程比较轻松，最后一天自已活动，第一次来选择跟团不浪费时间，自由活动不懂的提前咨询了导游，很完美的一次旅行！
        </div>
      </div>
    </div>
    <sticky-slot class="stickyTop">
      <div class="tab">
        <ul :active="activeStep">
          <li
            :class="index == 0 ? cor1 : cor2"
            v-for="(item, index) in steps"
            :key="index"
            @click="jump(index)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </sticky-slot>
    <div class="step-jump">产品特色</div>
    <Feature></Feature>
    <div class="step-jump">行程安排</div>
    <Arrange></Arrange>
    <div class="step-jump">费用说明</div>
    <Cost></Cost>
    <div class="step-jump">三亚旅游注意事项</div>
    <Note></Note>
    <div class="step-jump">报名流程（6步搞定、开心出游）：</div>
    <Procedure></Procedure>
    <div class="step-jump">相关推荐</div>
    <Recommend></Recommend>
  </div>
</template>

<script>
import Feature from "@/components/Feature";
import Arrange from "@/components/Arrange";
import Cost from "@/components/Cost";
import stickySlot from "@/common/stickySlot.vue";
import Note from "@/components/Note";
import Procedure from "@/components/Procedure";
import Recommend from "@/components/Recommend";
export default {
  name: "DaoHang",
  components: {
    stickySlot,
    Feature,
    Arrange,
    Cost,
    Note,
    Procedure,
    Recommend,
  },
  data() {
    return {
      steps: ["产品特色", "行程安排", "费用说明", "预订须知"],
      value1: 5,
      iscor: true,
      cor1: "cor1",
      cor2: "",
      activeStep: "",
    };
  },
  props: ["scrolltop"],
  watch: {
    scrollTop(val) {
      this.onScroll();
      this.pageTop = val;
    },
  },
  created() {
    this.$nextTick(() => {
      this.pageTop = this.scrollTop;
    });
  },
  onScroll() {
    let _article = document.querySelectorAll(".step-jump");
    _article.forEach(() => {
      if (this.scrollTop >= item.offsetTop) {
        this.activeStep = index;
      }
    });
  },
  methods: {
    jump(index) {
      let that = this;
      this.activeStep = index;
      // 用 class="step-jump" 添加锚点
      let jump = document.querySelectorAll(".step-jump");
      let total = jump[index].offsetTop;
      console.log("纵坐标", total);
      document.documentElement.scrollTop = total;
    },
  },
};
</script>

<style scoped lang="less">
.daohang {
  background-color: #ddd;
  width: 100%;
  overflow: hidden;
  margin-top: 11.2px;
  .dianping {
    padding: 0 16.8px 12.32px 16.8px;
    background-color: #fff;
    .more {
      height: 49px;
      line-height: 49px;
      .list {
        float: right;
      }
      .fen {
        color: #ff9911;
      }
      .rate {
        display: inline-block;
      }
    }
    .con {
      .top {
        padding: 16.8px 0 8.96px 0;
        .pingjia {
          font-size: 14px;
          color: #999999;
        }
        .icon1 {
          display: inline-block;
          font-size: 10px;
          border: 1px solid red;
          padding: 3px 10px;
          border-radius: 15px;
          color: #fff;
          background-color: #f86767;
        }
        .rg {
          float: right;
        }
      }
    }
  }
  ul {
    background-color: #fff;
    list-style: none;
    padding: 0;
    li {
      display: inline-block;
      width: 24%;
      height: 47px;
      text-align: center;
      line-height: 47px;
    }
    .cor1 {
      color: #00bf4b;
      border-bottom: 3px solid #00bf4b;
    }
  }
  .stickyTop {
    top: 0;
    z-index: 10;
  }
  .step-jump {
    height: 53px;
    line-height: 53px;
    padding: 0 18.398px;
    background-color: #fff;
  }
}
</style>