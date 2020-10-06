<template>
  <div class="serve">
      <div class="header">
          <el-row :gutter="10">
              <el-col :xs="3" :sm="3" :md="3" :xl="3" class="left"><i class="el-icon-arrow-left" @click="fun"></i></el-col>
              <el-col :xs="18" :sm="18" :md="18" :xl="18" class="mid">特色服务</el-col>
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
        <div class="panel" v-for="(item,i) in items" :key="i">
            <div class="icon">
                <span class="icon1"><b>?</b></span>
                <b>{{item.icon}}</b>
            </div>
            <div class="text">
                {{item.text}}
            </div>
        </div>
        <About class="about"></About>
  </div>
</template>

<script>
import About from '@/components/About'
export default {
    name: 'Serve',
    data(){
        return{
            items:[
                {"icon":"优质服务 品牌承诺","text":"旅行社资质认证、线路品质保证、无零负团费、无特殊附加费、便捷的投诉举报，保障游客安全出行。"},
                {"icon":"五万家供应商 百万条线路 产品丰富","text":"中国领先的旅游产品预订平台，全国5万多家旅行社加盟，旅游产品库荟萃130万条国内外的旅游线路和70万单项旅游服务信息。满足游客多样化、个性化的出行需求。"},
                {"icon":"旅游服务一站式","text":"欣欣不仅为游客提供丰富的线路预订，还为游客提供海量的旅游攻略、游记；特色的旅行服务，如：门票、酒店、机票、导游、租车、签证等服务，满足游客一站式服务。"},
                {"icon":"167个出发城市 覆盖面广","text":"167个出发城市，让游客无论在哪都能随心出行。欣欣还拥有全国395个一级城市的旅游门户阵群，为游客提供中国所有地接市以上城市的详尽的旅游信息服务。"}
            ]
        }
    },
    methods:{
        fun(){
            this.$router.go(-1)
        }
    },
    components:{About}
}
</script>

<style scoped lang="less">
.serve{
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
        background-color: #fff;
        .icon{
            font-size: 24px;
            height: 54px;
            line-height: 54px;
            .icon1{
                display: inline-block;
                font-size: 16px;
                b{
                    background-color: #f91;
                    color: #fff;
                    padding: 4px 8px;
                    border-radius: 15px;
                }
            }
        }
        .text{
            padding: 12px;
            font-size: 24px;
        }
    }
    .about{
        margin-top: 12px;
    }
}
</style>