<template>
  <div class="tag">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs">
            <el-tab-pane name="first"><span slot="label" class="tab1">华东</span>
                <div class="tag1">
                    <ul>
                        <li @click="fun">上海</li>
                        <li @click="fun">安徽</li>
                        <li @click="fun">浙江</li>
                    </ul>
                    <div class="area">
                        <i class="icon"></i>
                        <div class="txt">
                            <b>华东</b>
                            <p>华东五市风光</p>
                        </div>
                    </div>
                    <div class="text">
                        <router-link to="/SanYa" v-for="(item,i) in items" :key="i" class="link">
                            <img :src="item.img" alt="">
                            <div class="con">
                                <b class="b1">{{item.txt}}</b>
                                <p>
                                    <span class="save">{{item.save}}</span>
                                    <span class="money">￥<b>{{item.money}}</b>起</span>
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="more">
                        <router-link to="/SanYa" class="rlink">
                            更多线路》
                        </router-link>
                    </div>
                    <div class="box">
                        <ul>
                            <li>一日游</li>
                            <li>二日游</li>
                            <li>三日游</li>
                        </ul>
                    </div>
                    <About></About>
                </div>
            </el-tab-pane>
            <el-tab-pane name="second"><span slot="label" class="tab1">华北</span>
                 <div class="tag1">
                    <ul>
                        <li @click="fun">北京</li>
                        <li @click="fun">山西</li>
                        <li @click="fun">内蒙古</li>
                        <li @click="fun">黑龙江</li>
                        <li @click="fun">吉林</li>
                    </ul>
                    <div class="area">
                        <i class="icon"></i>
                        <div class="txt">
                            <b>华北</b>
                            <p>看遍祖国大好河山</p>
                        </div>
                    </div>
                    <div class="text">
                        <router-link to="/SanYa" v-for="(item,i) in items" :key="i" class="link">
                            <img :src="item.img" alt="">
                            <div class="con">
                                <b class="b1">{{item.txt}}</b>
                                <p>
                                    <span class="save">{{item.save}}</span>
                                    <span class="money">￥<b>{{item.money}}</b>起</span>
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="more">
                        <router-link to="/SanYa" class="rlink">
                            更多线路》
                        </router-link>
                    </div>
                    <div class="box">
                        <ul>
                            <li>一日游</li>
                            <li>二日游</li>
                            <li>三日游</li>
                        </ul>
                    </div>
                    <About></About>
                </div>
            </el-tab-pane>
            <el-tab-pane name="third"><span slot="label" class="tab1">西南</span>
                <div class="tag1">
                    <ul>
                        <li @click="fun">重庆</li>
                        <li @click="fun">四川</li>
                        <li @click="fun">云南</li>
                        <li @click="fun">西藏</li>
                    </ul>
                    <div class="area">
                        <i class="icon"></i>
                        <div class="txt">
                            <b>西南</b>
                            <p>体味云贵川的别样风情</p>
                        </div>
                    </div>
                    <div class="text">
                        <router-link to="/SanYa" v-for="(item,i) in items" :key="i" class="link">
                            <img :src="item.img" alt="">
                            <div class="con">
                                <b class="b1">{{item.txt}}</b>
                                <p>
                                    <span class="save">{{item.save}}</span>
                                    <span class="money">￥<b>{{item.money}}</b>起</span>
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="more">
                        <router-link to="/SanYa" class="rlink">
                            更多线路》
                        </router-link>
                    </div>
                    <div class="box">
                        <ul>
                            <li>一日游</li>
                            <li>二日游</li>
                            <li>三日游</li>
                        </ul>
                    </div>
                    <About></About>
                </div>
            </el-tab-pane>
            <el-tab-pane name="fourth"><span slot="label" class="tab1">华南</span>
                <div class="tag1">
                    <ul>
                        <li @click="fun">广东</li>
                        <li @click="fun">福建</li>
                        <li @click="fun">湖北</li>
                        <li @click="fun">湖南</li>
                        <li @click="fun">广西</li>
                        <li @click="fun">海南</li>
                    </ul>
                    <div class="area">
                        <i class="icon"></i>
                        <div class="txt">
                            <b>华南</b>
                            <p>陪你一起去看海</p>
                        </div>
                    </div>
                    <div class="text">
                        <router-link to="/SanYa" v-for="(item,i) in items" :key="i" class="link">
                            <img :src="item.img" alt="">
                            <div class="con">
                                <b class="b1">{{item.txt}}</b>
                                <p>
                                    <span class="save">{{item.save}}</span>
                                    <span class="money">￥<b>{{item.money}}</b>起</span>
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="more">
                        <router-link to="/SanYa" class="rlink">
                            更多线路》
                        </router-link>
                    </div>
                    <div class="box">
                        <ul>
                            <li>一日游</li>
                            <li>二日游</li>
                            <li>三日游</li>
                        </ul>
                    </div>
                    <About></About>
                </div>
            </el-tab-pane>
            <el-tab-pane name="five"><span slot="label" class="tab1">西北</span>
                <div class="tag1">
                    <ul>
                        <li @click="fun">陕西</li>
                        <li @click="fun">甘肃</li>
                        <li @click="fun">新疆</li>
                        <li @click="fun">河南</li>
                        <li @click="fun">内蒙古</li>
                        <li @click="fun">银川</li>
                    </ul>
                    <div class="area">
                        <i class="icon"></i>
                        <div class="txt">
                            <b>西北</b>
                            <p>领略大西北的豪放之美</p>
                        </div>
                    </div>
                    <div class="text">
                        <router-link to="/SanYa" v-for="(item,i) in items" :key="i" class="link">
                            <img :src="item.img" alt="">
                            <div class="con">
                                <b class="b1">{{item.txt}}</b>
                                <p>
                                    <span class="save">{{item.save}}</span>
                                    <span class="money">￥<b>{{item.money}}</b>起</span>
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="more">
                        <router-link to="/SanYa" class="rlink">
                            更多线路》
                        </router-link>
                    </div>
                    <div class="box">
                        <ul>
                            <li>一日游</li>
                            <li>二日游</li>
                            <li>三日游</li>
                        </ul>
                    </div>
                    <About></About>
                </div>
            </el-tab-pane>
        </el-tabs>
  </div>
</template>

<script>
import About from '@/components/About'
export default {
    name: 'Tag',
    data() {
      return {
          items:[
              {"img":"../../static/tag1.jpg","txt":"东方明珠+豪华游船+城隍庙一日游/白天班、夜游班二选一","save":"省￥62","money":"198"},
              {"img":"../../static/tag1.jpg","txt":"东方明珠+豪华游船+城隍庙一日游/白天班、夜游班二选一","save":"省￥62","money":"198"},
              {"img":"../../static/tag1.jpg","txt":"东方明珠+豪华游船+城隍庙一日游/白天班、夜游班二选一","save":"省￥62","money":"198"},
              {"img":"../../static/tag1.jpg","txt":"东方明珠+豪华游船+城隍庙一日游/白天班、夜游班二选一","save":"省￥62","money":"198"},
              {"img":"../../static/tag1.jpg","txt":"东方明珠+豪华游船+城隍庙一日游/白天班、夜游班二选一","save":"省￥62","money":"198"},
              {"img":"../../static/tag1.jpg","txt":"东方明珠+豪华游船+城隍庙一日游/白天班、夜游班二选一","save":"省￥62","money":"198"},
              {"img":"../../static/tag1.jpg","txt":"东方明珠+豪华游船+城隍庙一日游/白天班、夜游班二选一","save":"省￥62","money":"198"},
              {"img":"../../static/tag1.jpg","txt":"东方明珠+豪华游船+城隍庙一日游/白天班、夜游班二选一","save":"省￥62","money":"198"}
          ],
        activeName: 'first'
      };
    },
    components:{About},
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      fun(){
          this.$router.push({path:'/SanYa'})
      }
    }
}
</script>

<style scoped lang="less">
.tag{
    background-color: #fff;
    .tab1{
        font-size: 24px;
        padding: 0 8px;
    }
    .tag1{
        ul{
            list-style: none;
            display: block;
            font-size: 20px;
            padding: 0;
            margin: 0;
            li{
                display: inline-block;
                text-align: center;
                width: 90px;
                height: 48px;
                line-height: 48px;
                padding: 0 6px;
                border-radius: 10px;
                background-color: #eef7f2;
                color: #00bf48;
            }
        }
        .area{
            overflow: hidden;
            padding: 12px 18px;
            .icon{
                display: block;
                width: 60px;
                height: 60px;
                background-image: url('../../static/icon_select.png');
                background-size: 360px;
                float: left;
            }
            .txt{
                float: left;
            }
        }
        .text{
            padding: 0 12px;
            .link{
                display: inline-block;
                width: 47%;
                color: black;
                text-decoration: none;
                padding: 0 12px 12px 0;
                img{
                    width: 100%;
                    height: 132px;
                    border-radius: 10px;
                }
                .con{
                    .b1{
                        display: block;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    p{
                        overflow: hidden;
                        height: 32px;
                        line-height: 32px;
                        .save{
                            float: left;
                            padding: 0 3px;
                            color: #fff;
                            background-color: #f91;
                            border-radius: 5px;
                        }
                        .money{
                            float: right;
                            color: #f91;
                            b{
                                font-size: 24px;
                            }
                        }
                    }
                }
            }
        }
        .more{
            padding: 0 12px 12px 0;
            .rlink{
                display: block;
                width: 100%;
                color: #00bf48;
                text-decoration: none;
                height: 52px;
                line-height: 52px;
                text-align: center;
            }
        }
        .box{
            background-color: #ddd;
            padding: 12px 0;
            ul{
                background-color: #fff;
                li{
                    color: black;
                    background-color: #fff;
                    width: 28%;
                    text-align: center;
                }
            }
        }
    }
}
</style>