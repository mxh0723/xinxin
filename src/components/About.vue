<template>
  <div class="about">
      <el-row class="aboutrow">
          <el-col :xs="6" :sm="6" :md="6" :xl="6" class="aboutcol col">登录</el-col>
          <el-col :xs="6" :sm="6" :md="6" :xl="6" class="aboutcol col">订单查询</el-col>
          <el-col :xs="6" :sm="6" :md="6" :xl="6" class="aboutcol col">帮助中心</el-col>
          <el-col :xs="6" :sm="6" :md="6" :xl="6" class="aboutcol">关注我们</el-col>
      </el-row>
      <el-row class="aboutrow">
          <el-col :xs="6" :sm="6" :md="6" :xl="6" class="aboutcol col">关于欣欣</el-col>
          <el-col :xs="6" :sm="6" :md="6" :xl="6" class="aboutcol col">反馈意见</el-col>
          <el-col :xs="6" :sm="6" :md="6" :xl="6" class="aboutcol col">免责声明</el-col>
          <el-col :xs="6" :sm="6" :md="6" :xl="6" class="aboutcol">回到首页</el-col>
      </el-row>
      <p>欣欣旅游网手机版-m.cncn.com</p>
  </div>
</template>

<script>
export default {
    name: 'About'
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