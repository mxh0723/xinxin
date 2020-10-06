<template>
  <div class="suggest">
      <div class="header">
        <div class="return" @click="fun">
            <i class="el-icon-arrow-left"></i>
        </div>
        <div class="right" @click="fun1">
            <i class="el-icon-more"></i>
        </div>
        <div class="isshow" v-show="show">
            <router-link to="/" class="routerlink">
                <i class="iconhome"></i>
                欣欣首页
            </router-link>
            <router-link to="/All" class="routerlink">
                <i class="iconall"></i>
                全部分类
            </router-link>
            <router-link to="/Sos" class="routerlink">
                <i class="iconsos"></i>
                搜索
            </router-link>
            <router-link to="/Logon" class="routerlink">
                <i class="iconmy"></i>
                我的欣欣
            </router-link>
        </div>
      </div>
      <div class="pic">
          <img src="../../static/pic.jpg" alt="">
      </div>
      <div class="box">
          <div class="show">
            <p>
               &emsp;&emsp;欣欣旅游是一家服务于文旅全产业链的科技型企业。聚焦文旅产业信息化，深耕目的地运营，专注为文旅主管机构、旅游集团、旅行社和景区等文旅企业提供包括系统建设、网络营销、内容打造、数据挖掘、金融服务等整体化解决方案。
            </p>
            <p>
                &emsp;&emsp;公司成立于2009年，拥有“欣欣旅游网”和“欣欣同业”两大业务平台，累计服务国内外8000多万游客、14万多个旅行社会员、400多家景区、80多个目的地文旅主管机构和文旅集团，是国内领先的文旅产业运营综合服务商。
            </p>
            <p>
                &emsp;&emsp;公司目前已获A、B两轮融资5亿元，总部设在福建厦门，并在广东、黑龙江、江苏、四川、河南、上海等省市设立分支机构，拥有在职员工400余人，并已通过CMMI3及ISO资质认证，拥有自主知识产权和技术专利达100多项，连续获得“国家级高新技术企业”、“福建省龙头旅游企业”、“福建十佳旅游企业”、“诚信电子商务企业”、“全域旅游独角兽企业”等多项殊荣。
            </p>
            <p> &emsp;&emsp;十年磨剑，一朝成锋。欣欣旅游以“凝聚行业力量，助推产业升级”为使命，立志成为世界一流的文旅产业服务企业。</p>
            <p> &emsp;&emsp;凝聚力量，共同成长！欣欣旅游与您携手共创未来！</p>
          </div>
      </div>
      <div class="showcon">
              <h3>产品&服务</h3>
              <div class="pic1">
                  <a href="https://m.cncn.com/about/intro_to1">
                  <img src="../../static/TO1.jpg">
                  </a>
                  <a href="https://m.cncn.com/about/intro_to2">
                  <img src="../../static/TO2.jpg">
                  </a>
                  <a href="https://m.cncn.com/about/intro_to3">
                      <img src="../../static/TO3.jpg" alt="">
                  </a>
                  <a href="https://m.cncn.com/about/intro_to3">
                      <img src="../../static/To4.jpg" alt="">
                  </a>
              </div>
        </div>
        <About class="about"></About>
  </div>
</template>

<script>
import About from '@/components/About'
export default {
    name: 'Suggest',
    data () {
        return {
            show: false
        }
    },
    components:{
        About
    },
    methods:{
        fun(){
            this.$router.go(-1)
        },
        fun1(){
            this.show = !this.show
        }
    }
}
</script>

<style scoped lang="less">
.suggest{
    width: 100%;
    background-color: #ddd;
    .header{
        width: 100%;
        height: 57px;
        overflow: hidden;
        .return{
            width: 40px;
            height: 40px;
            border-radius: 20px;
            background-color: #938275;
            text-align: center;
            line-height: 40px;
            float: left;
            position: relative;
            top: 17px;
            z-index: 100;
            opacity: 0.7;
        }
        .right{
            color: #fff;
            width: 40px;
            height: 40px;
            border-radius: 20px;
            background-color: #938275;
            text-align: center;
            line-height: 40px;
            float: right;
            position: relative;
            top: 17px;
            z-index: 100;
            opacity: 0.7;
        }
        .isshow{
            width: 140px;
            height: 175px;
            position: fixed;
            border-radius: 10px;
            top: 70px;
            right: 20px;
            z-index: 100;
            background-color: rgba(51, 51, 51, 0.95);
            .routerlink{
                width: 140px;
                height: 43px;
                line-height: 43px;
                display: block;
                text-decoration: none;
                margin-left: 10px;
                color:#fff;
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
    }
    .pic{
        width: 100%;
        position: relative;
        top: -57px;
        img{
            width:100%;
        }
    }
    .box{
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 10px;
        position: relative;
        top: -70px;
        background-color: #fff;
        .show{
            width: 90%;
            margin: auto;
        }
    }
    .showcon{
        width: 100%;
        margin: 20px 0 0 0;
        padding: 0 15px 10px 15px;
        box-sizing: border-box;
        background-color: #fff;
        position: relative;
        top: -70px;
        h3{
            height: 44px;
            display: block;
            color: #f68b1e;
            text-align: center;
            box-sizing: border-box;
            padding-top: 10px;
            line-height: 44px;
        }
        .pic1{
            img{
                width: 100%;
            }
            a{
                display: block;
                margin: 10px 0;
            }
        }
    }
    .about{
        position: relative;
        top: -70px;
    }
}
</style>