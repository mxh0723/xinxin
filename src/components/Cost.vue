<template>
  <div class="cost">
      <div class="t">
          <span></span> 三亚双岛戏海6日游
      </div>
      <div :class="ismore?classC:classD">
          <div class="j">
              <p class="color"><b>住宿标准：</b>全程入住指定 - 全程连住三亚近海酒店（不挪窝）</p>
              <p class="color"><b>用餐标准：</b>含3正5早（不用不退费）；早餐：围桌或自助餐；正餐：围桌或自助餐；餐标：25元/人/餐</p>
              <p class="color"><b>赠送特色餐：</b>社会小炒、疍家海鲜火锅</p>
              <p>旅游用车：海南地接指定委派GPS安全监控系统旅游车配置空调旅游车（实行滚动发班，确保每人一个正座）</p>
              <p>注：海南正规26座以下旅游车均无行李箱</p>
              <p>景点门票：行程中注明含的景点第一道门票（不含景区内设自费项目，另有约定除外）</p>
              <p>赠送景点或项目因时间或天气原因不能前往或自动放弃，按“不退费用”和“不更换景点”处理！</p>
              <p>儿童标准：2岁以上1.2米以下儿童只含半价餐+车位</p>
              <p>购物须知：购物随客意！（部分景区、酒店内设有购物场所，属于自行商业行为。）</p>
              <p>接送机服务：由公司派专职人员负责机场接送</p>
              <p>导游服务：持有导游资格证书的专业导游全程优质服务；8人以下由经验丰富的自由行司机兼导游服务</p>
              <p>旅游保险：海南旅行社责任险（最高保额10万元/人）。强烈建议游客自行购买旅游意外险</p>
              <p>品质承诺：全程不加白天景点和晚上自费演出项目！</p>
              <p>A绝不增加自费景点：开开心心旅游，快快乐乐体验、明明白白消费</p>
              <p>B绝不增加行程以外购物店：消费透明，畅行无忧</p>
              <p>C绝不更换行程所含景点：不可抗力因素除外：如台风、暴雨、国家政策，战争等</p>
              <p>D绝不压缩游览时间：保证足够的游览时间，深度享感受海岛风光，好好和大海亲密接触</p>
          </div>
      </div>
        <div class="more" @click="morefun">
            <span>{{ismore?'查看全部内容':'点击收起'}}<i :class="ismore?classA:classB"></i></span>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Cost',
    data(){
        return {
            ismore:true,
            classA:'el-icon-arrow-up',
            classB:'el-icon-arrow-down',
            classD:'nr',
            classC:'nr1'
        }
    },
    methods:{
        morefun(){
            this.ismore = !this.ismore
        }
    }
}
</script>

<style scoped lang="less">
.cost{
    background-color: #fff;
    padding: 12.266px 18.398px;
    .t{
        padding-bottom: 6.133px;
        span{
            display: inline-block;
            width: 5px;
            height: 5px;
            border-radius: 2.5px;
            background-color: #ff9911;
        }
    }
    .nr{
        padding-left: 11.039px;
        margin-bottom: 12.266px;
        .j{
            .color{
                color: red;
            }
            p{
                margin: 0;
            }
        }
    }
    .nr1{
        height: 105px;
        overflow: hidden;
        padding-left: 11.039px;
        margin-bottom: 12.266px;
        .j{
            .color{
                color: red;
            }
            p{
                margin: 0;
            }
        }
    }
    .more{
            height: 18px;
            line-height: 18px;
            text-align: center;
            padding: 12.266px 0;
            margin: 12.266px 103.719px;
            span{
                color: #00bf4b;
            }
        }
}
</style>