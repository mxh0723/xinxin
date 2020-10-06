<template>
  <div class="tocity">
      <div class="header">
          <el-row :gutter="10">
              <el-col :xs="3" :sm="3" :md="3" :xl="3" class="left"><i class="el-icon-arrow-left" @click="fun"></i></el-col>
              <el-col :xs="18" :sm="18" :md="18" :xl="18" class="mid">请选择目的地</el-col>
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
        <div class="piao">
            <input type="text" placeholder="请输入关键字进行搜索">
            <router-link to="/SanYa" class="link">搜索</router-link>
        </div>
      <Cityjson></Cityjson>
  </div>
</template>

<script>
import Cityjson from '@/components/Cityjson'
export default {
    name: 'ToCity',
    components:{Cityjson},
    methods:{
        fun(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="less">
.tocity{
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
    .piao{
        height: 48px;
        line-height: 48px;
        padding: 12px 18px;
        background-color: #fff;
        input{
            height: 48px;
            font-size: 20px;
            width: 70%;
            border: none;
            background-color: #ddd;
            padding: 0 18px;
        }
        .link{
            display: inline-block;
            text-decoration: none;
            font-size: 20px;
            border-radius: 0 10px 10px 0;
            height: 48px;
            width: 15%;
            text-align: center;
            color: #fff;
            background-color: #00bf48;
        }
    }
}
</style>