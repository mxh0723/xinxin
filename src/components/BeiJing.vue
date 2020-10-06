<template>
  <div class="sanya">
      <div class="header">
          <el-row :gutter="10">
              <el-col :xs="3" :sm="3" :md="3" :xl="3" class="left"><i class="el-icon-arrow-left" @click="fun"></i></el-col>
              <el-col :xs="18" :sm="18" :md="18" :xl="18" class="mid">欣欣北京优选</el-col>
              <el-col :xs="3" :sm="3" :md="3" :xl="3" class="right"><i class="el-icon-more" @click="$store.commit('fun1')"></i></el-col>
          </el-row> 
      </div>
      <div class="isshow" v-show="$store.state.show">
            <router-link to="/" class="routerlink">
                <i class="iconhome"></i>
                <p>欣欣首页</p>
            </router-link>
            <router-link to="/All" class="routerlink">
                <i class="iconall"></i>
                <br>
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
        <div class="place">
            当前位置：
            <router-link to="" class="link">欣欣旅游</router-link> >
            <router-link to="" class="link">欣欣优选</router-link> >
            <router-link to="" class="link">北京旅游</router-link>
        </div>
        <div class="box">
            <div class="bocn" v-for="(item,i) in items" :key="i" @click="Nextfun">
                <div class="pic">
                    <img :src="item.img" alt="">
                </div>
                <div class="text">
                    <div class="title">
                        <b>{{item.title}}</b>
                    </div>
                    <div class="type">
                        <span v-for="(count,i) in counts" :key="i">{{count}}</span>
                    </div>
                    <p>
                        {{item.place}}
                        <span>￥<b>{{item.money}}起</b></span>
                    </p>
                </div>
            </div>
        </div>
        <div class="boxcon">
            <div class="tit">
                <span>|</span>
                海南各城市旅游产品
            </div>
            <div class="txt">
                <ul>
                    <li>
                        <router-link to="/SanYa">全部</router-link>
                    </li>
                    <li>
                        <router-link to="/SanYa">海口</router-link>
                    </li>
                    <li>
                        <router-link to="/SanYa">三亚</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <AllChina></AllChina>
        <About></About>
  </div>
</template>

<script>
import AllChina from '@/components/AllChina'
import About from '@/components/About'
export default {
    name: 'BeiJing',
    data(){
        return {
            items:[
                {"img":"../../static/xin1.jpg","title":"三亚度假六日游，三亚1天自由行+3天跟团游，三亚6天游推荐","place":"海南旅总国际旅行社","money":"1350"},
                {"img":"../../static/xin2.jpg","title":"南海之梦游轮西沙五日游，追梦西沙游轮新征程，享受一生蜜月之旅","place":"9人已购买|海南旅总国际旅行社","money":"3780"},
                {"img":"../../static/xin3.jpg","title":"三亚南山寺+天涯海角一日游.门票.含中餐.车接送.纯玩0购物","place":"43人已购买|海南旅总国际旅行社","money":"298"},
                {"img":"../../static/xin4.jpg","title":"三亚蜈支洲岛一日游，零自费无购物亲海之旅","place":"海南旅总国际旅行社","money":"140"},
                {"img":"../../static/xin5.jpg","title":"特惠三亚五日游，三亚五天四晚游线路推荐","place":"海南旅总国际旅行社","money":"1380"}
            ],
            counts:["无购物 无免费","在线支付","即使确认"]
        }
    },
    components:{
       AllChina,
       About
    },
    methods:{ 
        fun(){
            this.$router.go(-1)
        },
        Nextfun(){
            this.$router.push({path:'/ChanPin'})
        }
    }
}
</script>

<style scoped lang="less">
.sanya{
    background-color: #fff;
}
.header{
        width: 100%;
        height: 49px;
        background-color: #00bf49;
        margin: 0;
        .left{
            height: 49px;
            line-height: 49px;
            text-align: center;
            font-size: 20px;
            color: #fff;
        }
        .mid{
            height: 49px;
            line-height: 49px;
            text-align: center;
            font-size: 20px;
            color: #fff;
        }
        .right{
            height: 49px;
            line-height: 49px;
            text-align: center;
            font-size: 20px;
            color: #fff;
        }
  }
  .isshow{
            width: 100%;
            height: 79px;
            position: absolute;
            border-radius: 10px;
            top: 50px;
            z-index: 100;
            background-color: #fff;
            .routerlink{
                width: 23%;
                display: inline-block;
                text-decoration: none;
                text-align: center;
                color: black;
                i{
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    background-image: url(../../static/icon_top.png);
                    background-size: 150px 30px;
                    background-repeat: no-repeat;
                    position: relative;
                    top: 7px;
                }
                .iconall{
                    background-position: -30px 0px;
                }
                .iconsos{
                    background-position: -60px 0;
                }
                .iconmy{
                    background-position: -90px 0;
                }
            }
        }
.place{
    padding: 9px 12px;
    font-size: 14px;
    background-color: #fff;
    border-bottom:1px solid #ddd;
    .link{
        text-decoration: none;
        color: black;
    }
}
.box{
    background-color: #fff;
    margin-top: 12px;
    margin-left: 15px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    .bocn{
        border-bottom: 1px solid #ddd;
        .pic{
            display: inline-block;
            height: 96px;
            line-height: 96px;
            padding: 12px 12px 12px 0;
            img{
                width: 130px;
                height: 96px;
            }
        }
        .text{
            display: inline-block;
            width: 280px;
            height: 96px;
            font-size: 14px;
            .title{
                font-size: 20px;
            }
            .type{
                font-size: 10px;
                span{
                    border: 1px solid #ddd;
                    padding: 0 3px;
                    color: #ddd;
                }
            }
            p{
                font-size: 10px;
                color: #ddd;
                span{
                    color: red;
                    font-size: 20px;
                    float: right;
                }
            }
        }
    }
    
}
.boxcon{
    height: 96px;
    padding: 1px 0;
    margin-top: 11.2px;
    .tit{
        height: 51px;
        line-height: 51px;
        padding: 0 16.8px;
        span{
            height: 51px;
            display: inline-block;
            font-weight: bolder;
            color: green;
            line-height: 51px;
        }
    }
    .txt{
        height: 46px;
        ul{
            list-style: none;
            padding: 0;
            margin: 0;
            li{
                display: inline-block;
                width: 24%;
                height: 46px;
                text-align: center;
                line-height: 46px;
                border-left: 1px solid #ddd;
                a{
                    text-decoration: none;
                    color: black;
                }
            }
        }
    }
}
</style>