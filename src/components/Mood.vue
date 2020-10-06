<template>
  <div class="mood">
      <div class="box">
          <router-link to="/ChanPin" v-for="(item,i) in items" :key="i" class="link">
            <i class="icon"></i>
            <div class="pic">
                <img :src="item.img" alt="">
                <span><b>{{item.money}}</b>起</span>
            </div>
            <div class="txt">
                <p class="p1"><b>{{item.tit}}</b></p>
                <p class="p2"><span>无购物无自费</span> <span>在线支付</span></p>
                <p class="p3">{{item.txt}}</p>
            </div>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Mood',
    data(){
        return{
            items:[
                {"img":"../../static/xin3.jpg","money":"￥140","tit":"三亚蜈支洲岛一日游，零自费无购物亲海之旅","txt":"【行程】： 告别走马观花，您的行程您说了算，我们是旅行，不是旅游； 【纯净】： 杜绝强制消费，由传统观光转变为休闲度假，三..."},
                {"img":"../../static/mood1.jpg","money":"￥999","tit":"＜新疆喀纳斯湖四日游＞[乌鲁木齐到喀纳斯汽车四日游品质游]","txt":"独家尊享 品质升级 畅游瑞士风光喀纳斯湖自然保护区 主要线路：乌鲁木齐/石河子/布尔津/喀纳斯/禾木/克拉玛依/乌鲁木齐 游览景点..."},
                {"img":"../../static/mood2.jpg","money":"￥430","tit":"西安兵马俑华清池城墙钟鼓楼大雁塔2日游可含长恨歌门票晚发车","txt":"赠送使用无线耳机，听导游讲解。市场价格58元，儿童10岁以下无耳麦。 咨询电话：029-86696808 行程特色： 手机版请：查看行程图..."},
                {"img":"../../static/mood3.jpg","money":"￥360","tit":"福建人游厦门鼓浪屿、日光岩、炮台、环岛路2天1晚纯玩团","txt":"此行程只限福建户口预定 非福建福口价格+200/人 2020年12月31日前"},
                {"img":"../../static/mood4.jpg","money":"￥100","tit":"呼和浩特周边跟团内蒙古希拉穆仁草原一日游报价","txt":"咨询电话：0471-6270086 13204802290（微信同号） 行程亮点 1.打卡网红地：领略草原马背文化风情；推荐指数 2.美食热搜：品尝草..."},
                {"img":"../../static/mood5.jpg","money":"￥148","tit":"【散客天天发】新疆天山天池品质一日游  乌鲁木齐到天池纯玩游","txt":"★行程特色： ①绝不进购物点 ②全程无任何强迫消费 ③送旅行社责任险 为什么报天池一日游： 特色一：天池纯玩没有任何强制购物..."},
                {"img":"../../static/mood6.jpg","money":"￥140","tit":"三亚南山寺＋天涯海角一日游、门票、含中餐、车接送、纯玩0购物","txt":"南山寺（又名南山文化旅游区），本行程游览南山寺和天涯海角景区。 1、 中国的南山有好几座，但是南山+南海的就只有海南三亚； 2..."}
            ]
        }
    }
}
</script>

<style scoped lang="less">
.mood{
    background-color: #fff;
    .box{
        padding: 24px;
        position: relative;
        top: 0;
        left: 0;
        .link{
            display: block;;
            text-decoration: none;
            padding-bottom: 12px;
            border-bottom: 1px solid #ddd;
            margin-bottom: 12px;
            color: black;
            .icon{
                display: inline-block;
                width: 74px;
                height: 24px;
                background-image: url('../../static/icon_select.png');
                background-size: 360px;
                background-position: -154.2px -120.6px;
                position: absolute;
                left: 30px;
                z-index: 10;
            }
            .pic{
                position: relative;
                top: 0;
                left: 0;
                img{
                    display: block;
                    width: 100%;
                    height: 214.5px;
                    border-radius: 5px;
                }
                span{
                    position: absolute;
                    top: 160px;
                    color: #fff;
                    background-color: #f60;
                    display: block;
                    padding: 0 12px 0 6px;
                    border-radius: .5rem;
                    width: 85px;
                    line-height: 40px;
                    height: 40px;
                    b{
                        font-size: 24px;
                    }
                }
            }
            .txt{
                p{
                    margin: 6px 0;
                }
                .p1{
                    font-size: 20px;
                    height: 24px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .p2{
                    span{
                        border: 1px solid #f91;
                        color: #f91;
                        font-size: 14px;
                    }
                }
                .p3{
                    height: 18px;
                    color: #999;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
    }
}
</style>