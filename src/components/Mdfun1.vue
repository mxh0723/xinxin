<template>
    <div class="mdfun">
    <el-row :gutter="20">
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
            <router-link to="">
                <i class="icon1"></i>
                <br>
                <span>周边游</span>
            </router-link>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
            <router-link to="">
                <i class="icon2"></i>
                <br>
                <span>国内游</span>
            </router-link>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
            <router-link to="">
                <i class="icon3"></i>
                <br>
                <span>出境游</span>
            </router-link>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
            <router-link to="">
                <i class="icon4"></i>
                <br>
                <span>目的地</span>
            </router-link>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
            <router-link to="">
                <i class="icon5"></i>
                <br>
                <span>旅游定制</span>
            </router-link>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
            <router-link to="">
                <i class="icon6"></i>
                <br>
                <span>欣欣优选</span>
            </router-link>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
            <router-link to="">
                <i class="icon7"></i>
                <br>
                <span>酒店</span>
            </router-link>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
            <router-link to="">
                <i class="icon8"></i>
                <br>
                <span>景点门票</span>
            </router-link>
        </el-col>
    </el-row>
    </div>
</template>

<script>
export default {
    name: 'Mdfun1',
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
    .icon1{background-position: -220px -110px;}
    .icon2{background-position: -110px 0px;}
    .icon3{background-position: -55px 0px;}
    .icon4{background-position: -55px -165px;}
    .icon5{background-position: -165px 0px;}
    .icon6{background-position: -220px 0px;}
    .icon7{background-position: -55px -110px;}
    .icon8{background-position: -165px -165px;}
    span{
        display: inline-block;
        width: 110px;
        color: black;
        text-align: center;
        text-decoration: none;
        font-size: 14px;
    }
}
</style>