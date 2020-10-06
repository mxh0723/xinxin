<template>
  <div class="kandian">
      <div class="header">
          <el-row :gutter="10">
              <el-col :xs="3" :sm="3" :md="3" :xl="3" class="left"><i class="el-icon-arrow-left" @click="fun"></i></el-col>
              <el-col :xs="18" :sm="18" :md="18" :xl="18" class="mid">旅游看点</el-col>
              <el-col :xs="3" :sm="3" :md="3" :xl="3" class="right"><i class="el-icon-more" @click="$store.commit('fun1')"></i></el-col>
          </el-row> 
      </div>
      <div class="isshow" v-show="$store.state.show">
            <router-link to="/" class="routerlink">
                <i class="iconhome"></i>
                <p>欣欣首页</p>
            </router-link>
            <router-link to="/All" class="routerlink">
                <i class="iconall"></i>
                <br>
                <p>全部分类</p>
            </router-link>
            <router-link to="/Sos" class="routerlink">
                <i class="iconsos"></i>
                <p>搜索</p>
            </router-link>
            <router-link to="/Logon" class="routerlink">
                <i class="iconmy"></i>
               <p>我的欣欣</p>
            </router-link>
        </div>
        <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
            <li v-for="(item,i) in items" class="infinite-list-item" :key="i">
                <div class="title">{{item.tit}}</div>
                <div class="pic">
                    <img :src="img" alt="" v-for="(img,i) in item.imgs" :key="i">
                </div>
                <div class="type">
                    <span>苦恋</span>
                    <span class="right"><i class="icon"></i>198</span>
                </div>
            </li>
        </ul>
        <el-backtop></el-backtop>
  </div>
</template>

<script>
export default {
    name: 'KanDian',
    data(){
        return{
            count:{"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
            items:[
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']},
                {"tit":"南平游记，武夷山柳永纪念馆","imgs":['../../static/kandian1.jpg','../../static/kandian2.jpg','../../static/kandian3.jpg']}
            ]
        }
    },
    methods:{
        fun(){
            this.$router.go(-1)
        },
        load(){
            this.items.push(this.count)
        }
    }
}
</script>

<style scoped lang="less">
.kandian{
    .header{
        width: 100%;
        height: 49px;
        background-color: #00bf49;
        margin: 0;
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
  .isshow{
            width: 100%;
            height: 79px;
            position: absolute;
            border-radius: 10px;
            top: 50px;
            z-index: 100;
            background-color: #fff;
            .routerlink{
                width: 23%;
                display: inline-block;
                text-decoration: none;
                text-align: center;
                color: black;
                i{
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    background-image: url(../../static/icon_top.png);
                    background-size: 150px 30px;
                    background-repeat: no-repeat;
                    position: relative;
                    top: 7px;
                }
                .iconall{
                    background-position: -30px 0px;
                }
                .iconsos{
                    background-position: -60px 0;
                }
                .iconmy{
                    background-position: -90px 0;
                }
            }
        }
    ul{
        margin: 0;
        padding: 0;
        background-color: #fff;
        list-style: none;
        padding: 0 12px;
        li{
            padding: 18px 0;
            .title{
                font-size: 24px;
            }
            .pic{
                padding: 6px 0;
                img{
                    width: 33%;
                    height: 90px;
                }
            }
            .type{
                .right{
                    float: right;
                    .icon{
                        background-image: url('../../static/sprite_kandian.png');
                        display: inline-block;
                        width: 18px;
                        height: 12px;
                        background-size: 100px 100px;
                        background-position: -20px -80px;
                    }
                }
            }
        }
    }
}
</style>