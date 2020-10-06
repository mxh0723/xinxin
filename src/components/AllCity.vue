<template>
  <div class="allcity">
      <div class="header">
          <el-row :gutter="10">
              <el-col :xs="3" :sm="3" :md="3" :xl="3" class="left"><i class="el-icon-arrow-left" @click="AllCityfun"></i></el-col>
              <el-col :xs="18" :sm="18" :md="18" :xl="18" class="mid">选择出发地</el-col>
              <el-col :xs="3" :sm="3" :md="3" :xl="3" class="right"><i class="el-icon-more" @click="AllCityfun1"></i></el-col>
          </el-row> 
      </div>
      <div class="isshow" v-show="show">
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
        <el-collapse accordion>
            <el-collapse-item class="morecity" v-for="(city,i) in citys" :key="i">
                <template slot="title">
                    <p>&nbsp;{{city.title}}</p> 
                </template>
                <div class="list" v-for="(list,i) in city.lists" :key="i">
                    &nbsp;{{list}}
                </div>
            </el-collapse-item>
        </el-collapse>
  </div>
</template>

<script>
export default {
    name: 'AllCity',
    data(){
        return {
            show: false,
            citys:[]
        }
    },
    beforeMount(){
        this.axios({
            methods:'get',
            url:'/static/new.json'
        })
        .then(res =>{
            this.citys=res.data.city
            console.log(this.citys)
        })
    },
    methods:{
        AllCityfun(){
        this.$router.go(-1)
        },
        AllCityfun1(){
            this.show = !this.show
        }
    }
}
</script>

<style scoped lang="less">
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
.morecity{
    .title{
        height: 40px;
        line-height: 40px;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        i{
            display: inline-block;
            position: relative;
            left: 330px;
        }
    }
    .list{
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ddd;
        background-color: #fff;
    }
}
</style>