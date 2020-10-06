<template>
  <div class="left">
    <el-row :gutter="20">
      <el-col :xs="6" :sm="6" :md="6" :xl="6">
        <i class="icon"></i>
      </el-col>
      <el-col :xs="18" :sm="18" :md="18" :xl="18">
        <div class="texts">
            <div class="text-container">
            <transition class="inner-container2" name="slide" mode="out-in">
                <p class="text2" :key="text.id">{{text.val}}</p>
            </transition>
            </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
 
<script>
  const totalDuration = 2000;
 
  export default {
    name: 'stories',
    props: [],
    data() {
      return {
        arr: [
          '郑州游记：登顶嵩山',
          '郑州游记：登顶嵩山少林寺',
          '日本名古屋游记：名古屋仁门王通·大须观音通商店街',
          '日本名古屋游记：名古屋大须观音',
          '日本爱知县游记：犬山犬山城',
          '郑州游记：登顶嵩山',
          '郑州游记：登顶嵩山少林寺',
          '日本名古屋游记：名古屋Oasis 21.名古屋电视塔',
        ],
        number: 0,
      }
    },
    computed: {
      text() {
        return {
          id: this.number,
          val: this.arr[this.number]
        }
      }
    },
    mounted() {
      this.startMove()
    },
    methods: {
      startMove() {
        let timer = setTimeout(() => {
          if (this.number === 5) {
            this.number = 0;
          } else {
            this.number += 1;
          }
          this.startMove();
        }, totalDuration)
      },
    },
    components: {}
  }
</script>
 
<style scoped lang="less">
  .left{
    width: 100%;
    height: 40px;
    margin-bottom: 12.8px;
    padding: 0 18px;
    background-color: #fff;
  }
  .icon{
      display: inline-block;
      width: 120px;
      height: 30px;
      background-image: url('../../static/icon_select.png');
      background-size: 350px 230px;
      background-position: 0 -120px;
  }
  .texts{
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .text-container {
    width: 100%;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    margin:auto;
  }
  .text, .text2 {
    margin: 0;
  }
  .inner-container {
    animation: myMove 5s linear infinite;
    animation-fill-mode: forwards;
  }
  /*文字停顿滚动*/
  @keyframes myMove2 {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(-30px);
    }
    20% {
      transform: translateY(-30px);
    }
    30% {
      transform: translateY(-60px);
    }
    40% {
      transform: translateY(-60px);
    }
    50% {
      transform: translateY(-90px);
    }
    60% {
      transform: translateY(-90px);
    }
    70% {
      transform: translateY(-120px);
    }
    80% {
      transform: translateY(-120px);
    }
    90% {
      transform: translateY(-150px);
    }
    100% {
      transform: translateY(-150px);
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s linear;
  }
  .slide-leave-to {
    transform: translateY(-20px);
  }
  .slide-enter{
    transform: translateY(20px);
  }
</style>
 