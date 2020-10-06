<template>
    <div class="mdfun">
    <el-row :gutter="20">
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
            <router-link to="/Around">
                <i class="icon1"></i>
                <br>
                <span>签证</span>
            </router-link>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
            <router-link to="/Around">
                <i class="icon2"></i>
                <br>
                <span>主题游</span>
            </router-link>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
            <router-link to="/Around">
                <i class="icon3"></i>
                <br>
                <span>旅行社</span>
            </router-link>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
            <router-link to="/Around">
                <i class="icon4"></i>
                <br>
                <span>旅游景点</span>
            </router-link>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
            <router-link to="/Around">
                <i class="icon5"></i>
                <br>
                <span>旅游指南</span>
            </router-link>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
            <router-link to="/Around">
                <i class="icon6"></i>
                <br>
                <span>旅游攻略</span>
            </router-link>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
            <router-link to="/Around">
                <i class="icon7"></i>
                <br>
                <span>百宝箱</span>
            </router-link>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
            <router-link to="/All">
                <i class="icon8"></i>
                <br>
                <span>更多分类</span>
            </router-link>
        </el-col>
    </el-row>
    </div>
</template>

<script>
export default {
    name: 'Mdfun2',
    data(){
        return{
            sprite:'/static/sprite_index.png'
        }
    }
}
</script>

<style scoped lang="less"> 
.mdfun{
    width: 100%;
    i{
        display: inline-block;
        margin-left: 25px;
        width: 55px;
        height: 55px;
        background-image: url(../../static/sprite_index.png);
        background-size: 275px 275px;
        background-repeat: no-repeat;
    }
    .icon1{background-position: -110px -165px;}
    .icon2{background-position: -220px -165px;}
    .icon3{background-position: -110px -110px;}
    .icon4{background-position: -110px -55px;}
    .icon5{background-position: -220px -55px;}
    .icon6{background-position: 0px -55px;}
    .icon7{background-position: -165px -165px;}
    .icon8{background-position: 0px -165px;}
    span{
        display: inline-block;
        width: 110px;
        color: black;
        text-align: center;
        text-decoration: none;
        font-size: 14/Aroundpx;
    }
}
</style>