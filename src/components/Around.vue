<template>
  <div class="around">
      <div class="header">
          <el-row :gutter="10">
              <el-col :xs="3" :sm="3" :md="3" :xl="3" class="left"><i class="el-icon-arrow-left" @click="fun"></i></el-col>
              <el-col :xs="18" :sm="18" :md="18" :xl="18" class="mid">国内游</el-col>
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
        <router-link to="/ToCity" class="link">
            <div class="piao">
                <span class="city">阿拉善<i class="el-icon-arrow-down"></i></span>
                <span class="name">输入城市名、景点或游玩主题</span>
            </div>
        </router-link>
        <div class="img">
            <img src="../../static/zhoubian.jpg" alt="" width="100%">
        </div>
        <div class="box">
            <div class="tit">
                <b><i class="icon"></i>热门目的地<i class="icon"></i></b>
            </div>
            <div class="txt">
                <ul>
                    <li v-for="(item,i) in items" :key="i">
                        <router-link :to="item.to" class="link">{{item.text}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="box">
            <div class="tit">
                <b><i class="icon"></i>按天数分<i class="icon"></i></b>
            </div>
            <div class="txt">
                <ul>
                    <li v-for="(item,i) in days" :key="i">
                        <router-link :to="item.to" class="link">{{item.text}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <router-link to="/SanYa" class="router" v-for="(v,i) in more" :key="i">
            <i :class="v.icon"></i>
            <span><b>{{v.txtb}}</b><p>{{v.txtp}}</p></span>
            <i class="el-icon-arrow-right right"></i>
        </router-link>
        <About class="about"></About>
  </div>
</template>

<script>
import About from '@/components/About'
export default {
    name: 'Around',
    components:{About},
    data(){
        return{
            items:[
                {"to":"/Null","text":"塔尔寺"},
                {"to":"/Null","text":"青海湖"},
                {"to":"/Null","text":"西宁"},
                {"to":"/ToCity","text":"更多+"}
            ],
            days:[
                {"to":"/Null","text":"3日游及以下"},
                {"to":"/Null","text":"4日游"},
                {"to":"/Null","text":"5日游"},
                {"to":"/Null","text":"6日游"},
                {"to":"/Null","text":"7日游"}
            ],
            more:[
                {"icon":"icon","txtb":"国内热门景点","txtp":"看看我身边有什么好玩的"},
                {"icon":"icon icon1","txtb":"更多旅游攻略","txtp":"攻略在手，吃喝玩乐不愁"}
            ]
        }
    },
    methods:{
        fun(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="less">
.around{
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
    .link{
        text-decoration: none;
        .piao{
            background-color: #fff;
            padding: 12px 18px;
            height: 48px;
            line-height: 48px;
            .city{
                width: 80px;
                display: inline-block;
                padding: 0 12px;
                font-size: 20px;
                color: #00bf49;
            }
            .name{
                display: inline-block;
                padding: 0 12px;
                font-size: 20px;
                color: #999;
                border-left: 1px solid #ddd;
            }
        }
    }
    .box{
        background-color: #fff;
        margin-top: 12px;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        .tit{
            height: 60px;
            width: 100%;
            text-align: center;
            font-size: 20px;
            line-height: 60px;
            .icon{
                display: inline-block;
                width: 34px;
                height: 17px;
                background-image: url('../../static/icon_yiriyou.png');
                background-size: 160px 160px;
            }
        }
        .txt{
            margin-top: 12px;
            ul{
                margin: 0;
                padding: 0;
                list-style: none;
                li{
                    display: inline-block;
                    width: 24%;
                    height: 48px;
                    text-align: center;
                    .link{
                        color: black;
                    }
                }
            }
        }
    }
    .router{
        display: block;
        padding: 18px 0;
        background-color: #fff;
        margin-top: 12px;
        text-decoration: none;
        color: black;
        height: 70px;
        line-height: 20px;
        text-align: center;
        .icon{
            display: inline-block;
            width: 69px;
            height: 69px;
            background-image: url('../../static/sprite_jingdian.png');
            background-size: 210px 150px;
        }
        .icon1{
            background-position: -71px 0;
        }
        span{
            display: inline-block;
            position: relative;
            top: -18px;
            height: 70px;
            p{
                margin: 0;
                height: 30px;
            }
        }
        .right{
            height: 70px;
            line-height: 70px;
            position: relative;
            top: -25px;
        }
    }
    .about{
        margin-top: 12px;
    }
}
</style>