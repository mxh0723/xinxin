<template>
  <div class="feature">
      <div class="nr">
          <div :class="ismore?con:classC">
              <p class="phone"><b>产品经理推荐理由：报名电话 13876017100</b></p>
              <p class="tui"><b>推荐：三亚6天5晚（1天自由行+3天跟团游）旅游线路</b></p>
              <p class="te"><b>◆产品特色：</b></p>
              <ul>
                  <li v-for="(item,i) in items" :key="i">{{item}}</li>
              </ul>
          </div>
          <div class="more" @click="morefun">
              <span>{{ismore?'查看全部内容':'点击收起'}}<i :class="ismore?classA:classB"></i></span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Feature',
    data(){
        return {
            items:[
                "诺：100%零自费的一价全包产品，全程导游不收取任何费用（包括特色餐、电瓶车、缆车），违约现场赔付2000元/人",
                "宿：全程连住三亚近海酒店（不挪窝）",
                "享：赠海景篝火激情派对、赠拉斯维加斯表演秀（价值238元/人）",
                "味：赠社会小炒、疍家海鲜火锅",
                "游：西岛、蜈支洲、南山、天涯海角等",
                "行：精选专业优质导游服务；绝不更换景点（不可抗力因素除外）；不压缩游览时间；不减少景点",
                "赠：旅行中矿泉水1瓶/天/人"
            ],
            ismore:true,
            classA:'el-icon-arrow-up',
            classB:'el-icon-arrow-down',
            con:'con',
            classC:'con1'
        }
    },
    methods:{
        morefun(){
            this.ismore = !this.ismore
        }
    }
}
</script>

<style scoped lang='less'>
.feature{
    background-color: #fff;
    padding: 0 18.398px;
    .nr{
        padding: 12.2px 0;
        .con{
            height: 123px;
            overflow: hidden;
            .phone{
                margin: 0;
                b{
                    color: red;
                }
            }
            .tui{
                margin: 0;
            }
            .te{
                margin: 20px 0 0 0;
                b{
                    color: #0066cc;
                }
            }
            ul{
                margin: 0;
                padding: 0;
                list-style-position: inside;
            }
        }
        .con1{
            .phone{
                margin: 0;
                b{
                    color: red;
                }
            }
            .tui{
                margin: 0;
            }
            .te{
                margin: 20px 0 0 0;
                b{
                    color: #0066cc;
                }
            }
            ul{
                margin: 0;
                padding: 0;
                list-style-position: inside;
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
}
</style>