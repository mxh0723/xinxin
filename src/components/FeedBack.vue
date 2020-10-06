<template>
  <div class="feedback">
      <div class="header">
          <el-row :gutter="10">
              <el-col :xs="3" :sm="3" :md="3" :xl="3" class="left"><i class="el-icon-arrow-left" @click="fun"></i></el-col>
              <el-col :xs="18" :sm="18" :md="18" :xl="18" class="mid">反馈意见</el-col>
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
        <div class="form">
            <dl>
                <dt>您的意见：</dt>
                <dd>
                    <textarea name="content" id="content" cols="30" rows="10" placeholder="请输入您的意见，谢谢！" v-model="area"></textarea>
                </dd>
            </dl>
            <dl>
                <dt>联系方式：</dt>
                <dd>
                    <input type="text" name="contact" id="contact" placeholder="请输入手机号码或邮箱以便和您联系" v-model="text">
                </dd>
            </dl>
            <div class="btn">
                <input type="button" value="确定" class="save" @click="btn">
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'FeedBack',
    data(){
        return{
            text:"",
            area:""
        }
    },
    methods:{
        fun(){
            this.$router.go(-1)
        },
        btn(){
            if(!this.area){
                alert("请输入您的意见？")
            }else if(!this.text){
                alert("请输入您的联系方式")
            }else{
                this.text = ""
                this.area = ""
            }
        }
    }
}
</script>

<style scoped lang="less">
.feedback{
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
    .form{
        background-color: #fff;
        padding: 12px;
        margin: 12px;
        border: none;
        dl{
            padding: 12px 0;
            border-bottom: #ddd;
            dt{
                float: left;
            }
            dd{
                textarea{
                    width: 300px;
                    padding: 6px;
                    display: block;
                    height: 82px;
                    border: 1px solid #ddd;
                    font-size: 16px;
                    color: #ddd;
                }
                input{
                    width: 300px;
                    border: none;
                }
            }
        }
        .btn{
            margin-top: 12px;
            .save{
                width: 100%;
                line-height: 52px;
                color: #fff;
                background-color: #ffa11c;
                text-align: center;
                font-size: 24px;
                border: none;
                border-radius: 5px;
            }
        }
    }
}
</style>