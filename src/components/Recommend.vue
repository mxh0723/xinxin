<template>
  <div class="recommend">
      <ul>
          <li v-for="(item,i) in items" :key="i" @click="tochanpin">
              <img :src="item.img" alt="" width="40%">
              <div class="r">
                  <p>{{item.text}}</p>
                  <span>￥<b>{{item.money}}</b>起</span>
              </div>
          </li>
      </ul>
      <div class="more" @click="morefun">
          查看更多》
      </div>
      <div class="foot">
          欣欣旅游提供技术支持 & 服务保障
      </div>
  </div>
</template>

<script>
export default {
    name: 'Recommend',
    data(){
        return {
            items:[
                {"img":"../../static/xin5.jpg","text":"特惠三亚五日游，三亚五天四晚游线路推荐","money":"1380"},
                {"img":"../../static/xin3.jpg","text":"三亚蜈支洲岛一日游，零自费无购物亲海之旅","money":"140"},
                {"img":"../../static/xin2.jpg","text":"三亚南山寺+天涯海角一日游、门票、含中餐、车接送、纯玩0购物","money":"298"},
                {"img":"../../static/xin4.jpg","text":"南海之梦游轮西沙五日游，追梦西沙游轮新征程，享受一生蜜月之旅","money":"3780"}
            ]
        }
    },
    methods:{
        tochanpin(){
            this.$router.push({path:'/ChanPin'})
        },
        morefun(){
            this.$router.push({path:'/Select'})
        }
    }
}
</script>

<style scoped lang="less">
.recommend{
    background-color: #fff;
    padding: 12.266px 0;
    ul{
        list-style: none;
        padding: 0;
        padding-left: 18.398px;
        margin: 0;
        li{
            height: 123px;
            padding: 12.266px 0;
            img{
                float: left;
            }
            .r{
                float: left;
                padding-left: 12.266px;
                width: 55%;
                height: 122px;
                p{
                    height: 60px;
                    line-height: 30px;
                    margin: 0;
                }
                span{
                    display: inline-block;
                    margin-top: 16px;
                    color: red;
                    b{
                        font-size: 23px;
                    }
                }
            }
        }
    }
    .more{
        height: 49px;
        line-height: 49px;
        text-align: center;
        font-size: 20px;
        color: black;
    }
    .foot{
        font-size: 12px;
        margin: 18.398px 0;
        text-align: center;
        color: #aaa;
    }
}
</style>