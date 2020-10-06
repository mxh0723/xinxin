<template>
  <div class="arrange">
      <ul class="ange">
            <li>行程天数：6天</li>
            <li>形成方式：汽车去汽车回</li>
            <li>途经景点：
                <p>
                    <span>亚龙湾</span>
                    <span>蜈支洲岛</span>
                    <span>天涯海角</span>
                    <span>南海海上观音</span>
                </p>
                
            </li>
            <li>温馨提示：本产品天天发团，请至少提前1天报名。无购物无自费！</li>
      </ul>
      <ul :class="ismore?classC:classD">
          <li>
                <i class="el-icon-location icon"></i>
                <div class="day">
                    <span class="cor">第一天</span>
                    <b>全国各地 - 三亚凤凰国际机场</b> 
                </div>
                <div class="chizhu">
                    <div class="c">
                        <font><i class="icon_chi"></i>用餐：</font>
                        <div class="p">
                            <p>早餐：敬请自理</p>
                            <p>午餐：敬请自理</p>
                            <p>晚餐：敬请自理</p>
                        </div>
                    </div>
                    <div class="c">
                        <font><i class="icon_zhu"></i>住宿：</font>
                        <div class="p">
                            <p>三亚指定酒店</p>
                        </div>
                    </div>
                </div>
                <div class="js">
                    <p>乘机抵达“国际旅游岛”三亚市，地接社工作人员将举着您的姓名牌在机场接待出口接您，</p>
                    <p>沿途新上路城美景，回酒店休息，准备明天丰富的旅程</p>
                    <img src="../../static/chanpin4.jpg" alt="" width="100%">
                </div>
          </li>
           <li>
                <i class="el-icon-location icon"></i>
                <div class="day">
                    <span class="cor">第2天</span>
                    <b>三亚一地</b> 
                </div>
                <div class="chizhu">
                    <div class="c">
                        <font><i class="icon_chi"></i>用餐：</font>
                        <div class="p">
                            <p>早餐：包含</p>
                            <p>午餐：敬请自理</p>
                            <p>晚餐：包含</p>
                        </div>
                    </div>
                    <div class="c">
                        <font><i class="icon_zhu"></i>住宿：</font>
                        <div class="p">
                            <p>三亚指定酒店</p>
                        </div>
                    </div>
                </div>
                <div class="js">
                    <p>乘机抵达“国际旅游岛”三亚市，地接社工作人员将举着您的姓名牌在机场接待出口接您，</p>
                    <p>沿途新上路城美景，回酒店休息，准备明天丰富的旅程</p>
                    <img src="../../static/daytow.jpg" alt="" width="100%">
                </div>
          </li>
           <li>
                <i class="el-icon-location icon"></i>
                <div class="day">
                    <span class="cor">第3天</span>
                    <b>三亚一地</b> 
                </div>
                <div class="chizhu">
                    <div class="c">
                        <font><i class="icon_chi"></i>用餐：</font>
                        <div class="p">
                            <p>早餐：包含</p>
                            <p>午餐：包含</p>
                            <p>晚餐：敬请自理</p>
                        </div>
                    </div>
                    <div class="c">
                        <font><i class="icon_zhu"></i>住宿：</font>
                        <div class="p">
                            <p>三亚指定酒店</p>
                        </div>
                    </div>
                </div>
                <div class="js">
                    <p>乘机抵达“国际旅游岛”三亚市，地接社工作人员将举着您的姓名牌在机场接待出口接您，</p>
                    <p>沿途新上路城美景，回酒店休息，准备明天丰富的旅程</p>
                    <img src="../../static/chanpin2.jpg" alt="" width="100%">
                </div>
          </li>
           <li>
                <i class="el-icon-location icon"></i>
                <div class="day">
                    <span class="cor">第4天</span>
                    <b>三亚一地</b> 
                </div>
                <div class="chizhu">
                    <div class="c">
                        <font><i class="icon_chi"></i>用餐：</font>
                        <div class="p">
                            <p>早餐：包含</p>
                            <p>午餐：敬请自理</p>
                            <p>晚餐：包含</p>
                        </div>
                    </div>
                    <div class="c">
                        <font><i class="icon_zhu"></i>住宿：</font>
                        <div class="p">
                            <p>三亚指定酒店</p>
                        </div>
                    </div>
                </div>
                <div class="js">
                    <p>乘机抵达“国际旅游岛”三亚市，地接社工作人员将举着您的姓名牌在机场接待出口接您，</p>
                    <p>沿途新上路城美景，回酒店休息，准备明天丰富的旅程</p>
                    <img src="../../static/chanpin1.jpg" alt="" width="100%">
                </div>
          </li>
           <li>
                <i class="el-icon-location icon"></i>
                <div class="day">
                    <span class="cor">第5天</span>
                    <b>三亚一地（自由活动）</b> 
                </div>
                <div class="chizhu">
                    <div class="c">
                        <font><i class="icon_chi"></i>用餐：</font>
                        <div class="p">
                            <p>早餐：包含</p>
                            <p>午餐：敬请自理</p>
                            <p>晚餐：包含</p>
                        </div>
                    </div>
                    <div class="c">
                        <font><i class="icon_zhu"></i>住宿：</font>
                        <div class="p">
                            <p>三亚指定酒店</p>
                        </div>
                    </div>
                </div>
                <div class="js">
                    <p>乘机抵达“国际旅游岛”三亚市，地接社工作人员将举着您的姓名牌在机场接待出口接您，</p>
                    <p>沿途新上路城美景，回酒店休息，准备明天丰富的旅程</p>
                    <img src="../../static/day5.jpg" alt="" width="100%">
                </div>
          </li>
          <li>
                <i class="el-icon-location icon"></i>
                <div class="day">
                    <span class="cor">第6天</span>
                    <b>三亚 - 三亚凤凰国际机场</b> 
                </div>
                <div class="chizhu">
                    <div class="c">
                        <font><i class="icon_chi"></i>用餐：</font>
                        <div class="p">
                            <p>早餐：包含</p>
                            <p>午餐：敬请自理</p>
                            <p>晚餐：敬请自理</p>
                        </div>
                    </div>
                    <div class="c">
                        <font><i class="icon_zhu"></i>住宿：</font>
                        <div class="p">
                            <p>三亚指定酒店</p>
                        </div>
                    </div>
                </div>
                <div class="js">
                    <p>乘机抵达“国际旅游岛”三亚市，地接社工作人员将举着您的姓名牌在机场接待出口接您，</p>
                    <p>沿途新上路城美景，回酒店休息，准备明天丰富的旅程</p>
                    <img src="../../static/day6.jpg" alt="" width="100%">
                </div>
          </li>
      </ul>
        <div class="more" @click="morefun">
            <span>{{ismore?'查看完整6天行程安排':'收起行程安排'}}<i :class="ismore?classA:classB"></i></span>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Arrange',
    data(){
        return {
            ismore:true,
            classA:'el-icon-arrow-up',
            classB:'el-icon-arrow-down',
            classD:'xsday',
            classC:'xsday1'
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
.arrange{
    padding: 12.266px 18.398px;
    background-color: #fff;
    .ange{
        margin: 0;
        padding: 0;
        list-style: none;
        p{
            display: inline-block;
        }
        span{
            border: 1px dashed #aaa;
            color: #00bf4b;
            padding: 0 6.133px;
            margin: 0 3.680px;
        }
    }
    .xsday{
        list-style: none;
        margin: 18.398px 0 0 0;
        padding: 0 0 0 9.812px;
        border-left: 1px dashed #ddd;
        li{
            padding: 0 0 18.398px 20.852px;
        }
        .icon{
            position: relative;
            font-size: 20px;
            left: -35px;
        }
        .icon{
            color:#ff6600;
        }
        .cor{
            color: #ff6600;
            border: none;
        }
        .chizhu{
            
            padding: 12.266px 0;
            .c{
                overflow: hidden;
                font{
                    float: left;
                    .icon_chi{
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        background-image: url('../../static/xianlu_icon.png');
                        background-size: 200px 200px;
                        background-position: -125px -60px;
                    }
                    .icon_zhu{
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        background-image: url('../../static/xianlu_icon.png');
                        background-size: 200px 200px;
                        background-position: -125px -78px;
                    }
                }
                .p{
                    float: left;
                    p{
                        margin: 0;
                    }
                }
            }
        }
    }
    .xsday1{
        height: 1600px;
        overflow: hidden;
        list-style: none;
        margin: 18.398px 0 0 0;
        padding: 0 0 0 9.812px;
        border-left: 1px dashed #ddd;
        li{
            padding: 0 0 18.398px 20.852px;
        }
        .icon{
            position: relative;
            font-size: 20px;
            left: -35px;
        }
        .icon{
            color:#ff6600;
        }
        .cor{
            color: #ff6600;
            border: none;
        }
        .chizhu{
            
            padding: 12.266px 0;
            .c{
                overflow: hidden;
                font{
                    float: left;
                    .icon_chi{
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        background-image: url('../../static/xianlu_icon.png');
                        background-size: 200px 200px;
                        background-position: -125px -60px;
                    }
                    .icon_zhu{
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        background-image: url('../../static/xianlu_icon.png');
                        background-size: 200px 200px;
                        background-position: -125px -78px;
                    }
                }
                .p{
                    float: left;
                    p{
                        margin: 0;
                    }
                }
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