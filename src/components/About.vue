<template>
  <div class="about">
      <el-row class="aboutrow">
          <el-col :xs="6" :sm="6" :md="6" :xl="6" class="aboutcol col"><span @click="Logon">登录</span> </el-col>
          <el-col :xs="6" :sm="6" :md="6" :xl="6" class="aboutcol col"><span @click="query">订单查询</span></el-col>
          <el-col :xs="6" :sm="6" :md="6" :xl="6" class="aboutcol col"><span @click="Help">帮助中心</span></el-col>
          <el-col :xs="6" :sm="6" :md="6" :xl="6" class="aboutcol"><span @click="sug">关注我们</span></el-col>
      </el-row>
      <el-row class="aboutrow">
          <el-col :xs="6" :sm="6" :md="6" :xl="6" class="aboutcol col"><span @click="sug">关于欣欣</span></el-col>
          <el-col :xs="6" :sm="6" :md="6" :xl="6" class="aboutcol col"><span @click="back">反馈意见</span></el-col>
          <el-col :xs="6" :sm="6" :md="6" :xl="6" class="aboutcol col"><span @click="sug">免责声明</span></el-col>
          <el-col :xs="6" :sm="6" :md="6" :xl="6" class="aboutcol"><span @click="tohead">回到首页</span></el-col>
      </el-row>
      <p>欣欣旅游网手机版-m.cncn.com</p>
  </div>
</template>

<script>
export default {
    name: 'About',
    methods:{
        Logon(){
            console.log(123)
            this.$router.push({path:'/Logon'})
        },
        query(){
            this.$router.push({path:'/Query'})
        },
        Help(){
            this.$router.push({path:'/Help'})
        },
        sug(){
            this.$router.push({path:'/Suggest'})
        },
        back(){
            this.$router.push({path:'/FeedBack'})
        },
        tohead(){
            this.$router.push({path: '/'})
        }
    }
}
</script>

<style scoped lang="less">
.about{
    background-color: #fff;
    .aboutrow{
        border-bottom: 1px solid #ddd;
        .aboutcol{
            height: 40px;
            text-align: center;
            line-height: 40px;
        }
        .col{
            border-right: 1px solid #ddd;
        }
    }
    p{
        width: 100%;
        height: 22px;
        line-height: 22px;
        color: #999;
        text-align: center;
    }
}
</style>