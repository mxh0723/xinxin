<template>
  <div class="city">
      <div class="header">
          <el-row :gutter="10">
              <el-col :xs="3" :sm="3" :md="3" :xl="3" class="left"><i class="el-icon-arrow-left"></i></el-col>
              <el-col :xs="18" :sm="18" :md="18" :xl="18" class="mid">选择城市</el-col>
              <el-col :xs="3" :sm="3" :md="3" :xl="3" class="right"><i class="el-icon-more"></i></el-col>
          </el-row> 
      </div>
      <p class="historyCity">历史城市</p>
  </div>
</template>

<script>
export default {
    name: 'City'
}
</script>

<style scoped lang="less">
.city{
    width: 100%;
    background-color: #ddd;
    .header{
        width: 100%;
        height: 49px;
        background-color: #00bf49;
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
    .historyCity{
        height: 44px;
        padding: 0 16.8px;
    }
}
</style>