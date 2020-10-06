<template>
  <div class="help">
      <div class="header">
          <el-row :gutter="10">
              <el-col :xs="3" :sm="3" :md="3" :xl="3" class="left"><i class="el-icon-arrow-left" @click="fun"></i></el-col>
              <el-col :xs="18" :sm="18" :md="18" :xl="18" class="mid">帮助中心</el-col>
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
        <div class="panel">
            <div class="hd">游客中心</div>
            <div class="bd">
                <router-link :to="item.to" v-for="(item,i) in items" :key="i" class="link">
                    {{item.text}}
                    <i class="el-icon-arrow-right right"></i>
                </router-link>
            </div>
        </div>
        <div class="panel">
            <div class="hd">预订中心</div>
            <div class="bd">
                <router-link :to="item.to" v-for="(item,i) in lods" :key="i" class="link">
                    {{item.text}}
                    <i class="el-icon-arrow-right right"></i>
                </router-link>
            </div>
        </div>
        <About class="about"></About>
  </div>
</template>

<script>
import About from '@/components/About'
export default {
    name: 'Help',
    data(){
        return{
            items:[
                {"to":"/Serve","text":"旅游产品名称解释"},
                {"to":"/Serve","text":"特色服务"},
                {"to":"/Serve","text":"常见问题"},
                {"to":"/Serve","text":"争议解决规则"}],
            lods:[
                {"to":"/Serve","text":"如何预订旅游产品"},
                {"to":"/Serve","text":"支付方式与发票"},
                {"to":"/Serve","text":"旅游产品"}]
        }
    },
    components:{About},
    methods:{
        fun(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="less">
.help{
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
    .panel{
        margin: 12px 12px 0 12px;
        .hd{
            font-size: 24px;
            height: 48px;
            line-height: 48px;
            background-color: #00bf49;
            color: #fff;
            border-radius: 5px 5px 0 0;
            padding: 0 12px;
        }
        .bd{
            background-color: #fff;
            padding: 0 12px;
            .link{
                display: block;
                color: black;
                text-decoration: none;
                font-size: 24px;
                height: 52px;
                line-height: 52px;
                border-bottom: 1px solid #ddd;
                border-top: 1px solid #ddd;
                .right{
                    float: right;
                    margin-top: 10px;
                }
            }
        }
    }
    .about{
        margin-top: 12px;
    }
}
</style>