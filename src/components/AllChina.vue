<template>
  <div class="allchina">
      <div class="tit">
          <span>|</span>
          全国各省市产品
      </div>
      <div class="txt">
          <ul>
              <li v-for="(item,i) in items" :key="i" @click="AllCity">{{item}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: 'AllChina',
    data(){
        return {
            items:["北京","山西","内蒙古","辽宁","吉林","黑龙江","上海","江苏","浙江","安徽","福建","河南","湖北","湖南","广东","广西","海南","重庆","四川","贵州","云南","西藏","陕西","甘肃","新疆"]
        }
    },
    methods:{
        AllCity(){
            this.$router.push({path:'/BeiJing'})
        }
    }
}
</script>

<style scoped lang="less"> 
.allchina{
    margin: 20px 0;
    .tit{
        height: 51px;
        line-height: 51px;
        padding: 0 16.8px;
        span{
            height: 51px;
            display: inline-block;
            font-weight: bolder;
            color: green;
            line-height: 51px;
        }
    }
    .txt{
        ul{
            list-style: none;
            padding: 0;
            margin: 0;
            
            li{
                display: inline-block;
                width: 24%;
                height: 46px;
                text-align: center;
                line-height: 46px;
                border: 1px solid #ddd;
                .router-link-active{
                    text-decoration: none;
                    color: black;
                }
            }
        }
    }
}
</style>