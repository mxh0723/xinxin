<template>
  <div class="line">
      <div class="way">
           <el-input placeholder="搜索目的地或线路关键词" v-model="input" class="input-with-select">
                   <el-button @click="btntoAllCity" slot="prepend"><i class="icon"></i> 邢台</el-button>
                <el-button slot="append" icon="el-icon-search" @click="fun"></el-button>
            </el-input>
      </div>
      <div class="search">
          <div class="hotcity">
              热门搜索词
          </div>
          <div class="citybox">
             <el-button v-for="(item,v) in citys" :key="v" @click="fun">{{item}}</el-button>
          </div>
      </div>
  </div>
  
</template>

<script>
export default {
    name: 'Lines',
    data(){
        return {
            citys:["厦门","三亚","上海","云南","普吉岛","香港","马尔代夫"],
            input:''
        }
    },
    methods:{
        btntoAllCity(){
            console.log(123)
            this.$router.push({path:'/AllCity'})
        },
        fun(){
            this.$router.push({path:'/Null'})
            this.input=""
        }
    }
}
</script>

<style scoped lang="less">
    .way{
        background-color: #00aa41;
        padding: 10px;
        .el-input{
            border: none;
            .el-button{
                border: none;
                background-color: #fff;
                border-radius: 0;
            }
            i{
                display: inline-block;
                position: absolute;
                top: 9px;
                left: 6px;
                width: 15px;
                height: 15px;
                background-image: url('../../static/bg_search_icon.png');
                background-size: 150px 150px;
            }
            .icon{
                background-position: -40px -73px;
            }
        }
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