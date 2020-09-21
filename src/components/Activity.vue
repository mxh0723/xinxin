<template>
  <div class="activity">
      <el-row :gutter="20">
          <el-col :xs="6" :sm="6" :md="6" :xl="6">
              <img src="../../static/4.jpg" alt="" >
          </el-col>
          <el-col :xs="6" :sm="6" :md="6" :xl="6">
              <img src="../../static/5.jpg" alt="">
          </el-col>
          <el-col :xs="6" :sm="6" :md="6" :xl="6">
              <img src="../../static/6.jpg" alt="">
          </el-col>
          <el-col :xs="6" :sm="6" :md="6" :xl="6">
              <img src="../../static/7.jpg" alt="">
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    name: 'Activity'
}
</script>

<style scoped lang="less">
.activity{
    img{
        width: 100%;
    }
}
</style>