<template>
  <div class="sos">
      <div class="header">
          <i class="el-icon-arrow-left" @click="fun"></i>
          <span>搜索</span>
      </div>
      <div>
          <div class="routerlink">
            <router-link to="/Sos/Line"><div :class="isA?icon:d1"  @click="icon1fun"><i class="icon1"></i>线路</div></router-link>
            <router-link to="/Sos/Place"><div :class="isB?icon:d1"  @click="icon2fun"><i class="icon2"></i>景点门票</div></router-link>
            <router-link to="/Sos/Service"><div :class="isC?icon:d1"  @click="icon3fun"><i class="icon3"></i>旅行社</div></router-link>
          </div>
      <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Sos',
    data(){
        return {
            isA:false,
            isB:true,
            isC:true,
            icon:'icon',
            d1:'d1'
        }
    },
    methods:{
        fun(){
            this.$router.go(-1)
        },
        icon1fun(){
            this.isA = false
            this.isB = true
            this.isC = true
        },
        icon2fun(){
            this.isA = true
            this.isB = false
            this.isC = true
        },
        icon3fun(){
            this.isA = true
            this.isB = true
            this.isC = false
        }
    }
}
</script>

<style scoped lang="less">
.sos{
    background-color: #ddd;
    .header{
        width: 100%;
        height: 44px;
        background-color: #00bf49;
        i{
            display: inline-block;
            text-align: center;
            width: 40px;
            height: 44px;
            font-size: 20px;
            line-height: 44px;
            color: #fff;
        }
        span{
            display: inline-block;
            width: 300px;
            text-align: center;
            color:#fff;
            height: 44px;
        }
    }
    .routerlink{
        padding: 0 10px;
        height: 30px;
        background-color: #00bf49;
        .d1{
            background-color: #00aa41;
             display: inline-block;
            width: 30%;
            height: 30px;
            line-height: 30px;
            text-decoration: none;
            color: #fff;
            font-size: 14px;
            text-align: center;
        }
        .icon{
            display: inline-block;
            width: 30%;
            height: 30px;
            line-height: 30px;
            text-decoration: none;
            color: #fff;
            font-size: 14px;
            text-align: center;
        }
        i{
            display: inline-block;
            position: relative;
            top: 3px;
            width: 15px;
            height: 15px;
            background-image: url('../../static/bg_search_icon.png');
            background-size: 150px 150px;
        }
        .icon1{
            background-position: 0 -43px;
        }
        .icon2{
            background-position: -20px -43px;
        }
        .icon3{
            background-position: -38px -43px;
        }
    }
}
</style>