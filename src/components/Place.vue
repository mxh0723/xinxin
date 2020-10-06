<template>
  <div class="place">
        <div class="way">
            <el-input placeholder="请输入城市或景点名称" v-model="input1" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="fun"></el-button>
            </el-input>
        </div>
        <div class="search">
          <div class="hotcity">
              热门搜索词
          </div>
          <div class="citybox">
             <el-button v-for="(item,v) in items" :key="v" @click="fun">{{item}}</el-button>
          </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Place',
    data(){
        return{
            items:["上海迪士尼","鼓浪屿","长隆","北京","故宫","上海","锦江乐园","蜈支洲岛","桂林"],
            input1:''
        }
    },
    methods:{
        fun(){
            this.$router.push({path:'/Null'})
            this.input=""
        }
    }
}
</script>

<style scoped lang="less">
.way{
    padding: 10px;
    background-color: #00aa41;

}
.search{
        background-color: #fff;
        padding: 10px;
        .hotcity{
            font-size: 10px;
            height: 16px;
            padding: 10px;
        }
    }
</style>