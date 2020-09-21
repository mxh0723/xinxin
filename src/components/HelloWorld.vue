<template>
  <div class="hello">
    <div class="el">
    <el-row :gutter="20">
      <el-col :xs="2" :sm="2" :md="2" :xl="2">
        <router-link to="/Suggest" class="logo">
        <img :src="logo" width="38.40" height="38.40">
        </router-link>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :xl="5">
        <router-link to="/City" class="city">
        <span class="linyi">临沂</span><i class="el-icon-arrow-down"></i>
        </router-link>
      </el-col>
      <el-col :xs="14" :sm="14" :md="14" :xl="14">
        <router-link to="" class="headerinput">
        <el-input placeholder="线路/景点门票/旅行社" prefix-icon="el-icon-search">
        </el-input>
        </router-link>
      </el-col>
      <el-col :xs="3" :sm="3" :md="3" :xl="3">
        <router-link to="" class="headture">
          <img src="../../static/icon_people.png" alt="">
        </router-link>
      </el-col>
    </el-row>  
    </div>
      <wc-swiper class="wc-swiper">
        <wc-slide class="swiper">
          <img src="../../static/1.jpg">
        </wc-slide>
        <wc-slide class="swiper">
          <img src="../../static/2.jpg">
        </wc-slide>
        <wc-slide class="swiper">
          <img src="../../static/3.jpg">
        </wc-slide>
      </wc-swiper>
      <wc-swiper class="mdfun" :autoplay="false">
        <wc-slide><Mdfun1></Mdfun1></wc-slide>
        <wc-slide><Mdfun2></Mdfun2></wc-slide>
      </wc-swiper>
      <textScrolling class="kandian"></textScrolling>
      <Activity class="act"></Activity>
      <div class="box">
      <el-row class="dangdi">
        <el-col :xs="6" :sm="6" :md="6" :xl="6" class="mdl">当地游</el-col>
        <el-col :xs="6" :sm="6" :md="6" :xl="6" class="mdl">周边游</el-col>
        <el-col :xs="6" :sm="6" :md="6" :xl="6" class="mdl">国内游</el-col>
        <el-col :xs="6" :sm="6" :md="6" :xl="6" class="md2">出境游</el-col>
      </el-row>
      <div class="line">
        <div class="txt">

        </div>
        <div class="more">
          查看更多
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      </div>
      <About></About>
  </div>
</template>

<script>
import Mdfun1 from '@/components/Mdfun1'
import Mdfun2 from '@/components/Mdfun2'
import textScrolling from '@/components/textScrolling'
import Activity from '@/components/Activity'
import About from '@/components/About'
export default {
  name: 'HelloWorld',
  data () {
    return {
      logo: '/static/icon_cncn.png',
    }
  },
  components:{
    Mdfun1,
    Mdfun2,
    textScrolling,
    Activity,
    About
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
  width: 100%;
  background-color: #f2f2f2;
  .el{
    background-color: #fff;
  }
  .kandian{
    background-color: #fff;
  }
  .mdfun{
    overflow: hidden;
    background-color: #fff;
  }
  .act{
    margin: 20px 0;
    background-color: #fff;
  }
  .dangdi{
    background-color: #fff;
    .mdl{
      text-align: center;
      border-right: 1px solid #ddd;
      height: 45px;
      line-height: 45px;
      font-size: 20px;
    }
    .md2{
      text-align: center;
      height: 45px;
      line-height: 45px;
      font-size: 20px;
    }
  }
  .line{
      width: 100%;
      height: 218px;
      .txt{
        background-color: #fff;
        width: 100%;
        height: 168px;
        border-bottom: 1px solid #ddd;
      }
      .more{
        width: 100%;
        height: 49px;
        line-height: 49px;
        background-color: #fff;
        text-align: center;
        font-size: 20px;
        color: #00bf48;
      }
    }
}
.logo{
  width: 39px;
  height: 39px;
  // margin-left: 12.8px;
  display:inline-block;
}
.city{
  display: inline-block;
  width:56px;
  height:56px;
  text-align: center;
  position: relative;
  top: -9px;
  line-height: 56px;
  padding: 0 12.8px;
  // margin:0 6.4px ;
  text-decoration: none;
  color: #00bf48;
}
.linyi{
  font-size: 20px;
}
.headerinput{
  display: inline-block;
  width: 100%;
}
.headture{
  display: inline-block;
  padding-left: 0;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #00bf48;
  img{
    position: relative;
    top: 5px;
  }
}
.wc-swiper{
  padding: 0;
  margin: 0;
  background-color: #fff;
  img{
    width: 100%;
    height: auto;
    touch-action: none;
  }
  .swiper{
    width: 100%;
  }
}
</style>
