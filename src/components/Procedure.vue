<template>
  <div class="procedure">
      <div :class="ismore?classC:classD">
          <p><b class="cor1">第1步：（电话咨询）</b>通过我社专线电话（<b class="cor2">0898-66677990</b>)详细了解旅游路线并确定旅游计划；</p>
          <p><b class="cor1">第2步：（代订交通）</b>我社工作人员根据游客的要求和时间安排预订往返程飞机票3</p>
          <p><b class="cor1">第3步：（签约方式）</b></p>
          <p><b class="cor3">【在线签约】</b>通过在线进行签约，付款成功后，将通过电子邮件发送电子版合同，与门市签约同等有效；</p>
          <p><b class="cor3">【传真签约】</b>双方在合同上签字盖章后，通过传真进行签约，与门市签约同等有效；</p>
          <p><b class="cor3">【上门签约】</b>专业团队为您提供上门签约（支持POS刷卡支付）；</p>
          <p><b class="cor3">【门市签约】</b>在门市进行签约付款。</p>
          <p><b class="cor1">第4步：（付款方式）</b></p>
          <p><b class="cor3">【网上支付】</b>支持开通网上银行的储蓄卡。</p>
          <p><b class="cor3">【门市支付】</b>门市现金付款，转账支票，刷卡。</p>
          <p><b class="cor3">【对公汇款】</b>通过银行将相关款项汇至公司指定账户。</p>
          <p><b class="cor3">【第三方支付】</b>支付宝、银联在线。</p>
          <p><b class="cor1">第5步：（开心出游）</b>海口和三亚机场免费接、送机；按双方约定开心旅游。</p>
          <p><b class="cor1">第6步：（游后点评）</b>出游归来，游客可以对整个行程加以评价，赢取积分。</p>
      </div>
        <div class="more" @click="morefun">
            <span>{{ismore?'查看全部内容':'点击收起'}}<i :class="ismore?classA:classB"></i></span>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Procedure',
    data(){
        return {
            ismore:true,
            classA:'el-icon-arrow-up',
            classB:'el-icon-arrow-down',
            classD:'j',
            classC:'j1'
        }
    },
    methods:{
        morefun(){
            this.ismore = !this.ismore
        }
    }
}
</script>

<style scoped lang="less">
.procedure{
    background-color: #fff;
    padding: 12.226px 18.398px;
    .j{
        p{
            margin: 0;
        }
        .cor1{
            color: #0066cc;
        }
        .cor2{
            color: #dd0000;
        }
        .cor3{
            color: #336600;
        }
    }
    .j1{
        height: 105px;
        overflow: hidden;
        p{
            margin: 0;
        }
        .cor1{
            color: #0066cc;
        }
        .cor2{
            color: #dd0000;
        }
        .cor3{
            color: #336600;
        }
    }
    .more{
        height: 18px;
        line-height: 18px;
        text-align: center;
        padding: 12.266px 0;
        margin: 12.266px 103.719px;
        span{
            color: #00bf4b;
        }
    }
}
</style>