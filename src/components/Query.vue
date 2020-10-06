<template>
  <div class="query">
      <div class="header">
          <el-row :gutter="10">
              <el-col :xs="3" :sm="3" :md="3" :xl="3" class="left"><i class="el-icon-arrow-left" @click="fun"></i></el-col>
              <el-col :xs="18" :sm="18" :md="18" :xl="18" class="mid">我的订单</el-col>
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
        <div class="content">
            <router-link to="/Logon" v-for="(item,i) in items" :key="i" class="link">
                <i :class="item.icon"></i>
                {{item.text}}
                <span class="el-icon-arrow-right right"></span>
            </router-link>
        </div>
  </div>
</template>

<script>
export default {
    name:'Query',
    data(){
        return{
            items:[
                {"icon":"icon1","text":"线路订单"},
                {"icon":"icon2","text":"定制游订单"},
                {"icon":"icon3","text":"门票订单"},
                {"icon":"icon4","text":"机票订单"},
                {"icon":"icon5","text":"酒店订单"},
                {"icon":"icon6","text":"旅游服务订单"},
                {"icon":"icon7","text":"其他订单"}
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
.query{
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
    .content{
        margin-top: 12.266px;
        background-color: #fff;
        .link{
            display: block;
            height: 53px;
            line-height: 53px;
            color: black;
            text-decoration: none;
            font-size: 20px;
            padding: 0 12.266px;
            border-bottom:1px solid #ddd;
            border-top: 1px solid #ddd;
            i{
                display: inline-block;
                width: 38px;
                height: 37px;
                background-image: url('../../static/icon_query.png');
                background-size: 20rem;
                margin: 6.133px 6.133px 0 0;
                float: left;
            }
            .icon1{
                background-position: -2.5rem 0;
            }
            .icon2{
                background-position: -5.8rem 0;
            }
            .icon3{
                background-position: -11rem -3rem;
            }
            .icon4{
                background-position: -5.7rem -3rem;
            }
            .icon5{
                background-position: -8.7rem 0;
            }
            .icon6{
                background-position: -13.7rem -3rem;
            }
            .icon7{
                background-position: -12rem 0;
            }
            .right{
                float: right;
                margin-top:7px;
            }
        }
    }
}
</style>