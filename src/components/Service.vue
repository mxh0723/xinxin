<template>
  <div class="service">
      <div class="way">
            <el-input placeholder="请输入旅行社名称或城市" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="fun"></el-button>
            </el-input>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Service',
    data(){
        return {
            input3:''
        }
    },
    methods:{
        fun(){
            this.$router.push({path:'/Null'})
        }
    }
}
</script>

<style scoped lang="less">
.way{
    padding: 10px;
    background-color: #00aa41;
}
</style>