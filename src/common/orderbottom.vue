<template>
  <!-- 订单页面 底部导航栏 -->

  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="咨询" @click="onClickIcon" />
    <van-goods-action-button color="#3D3D3D" type="warning" text="报名参与" @click="onClickButton" />
  </van-goods-action>
</template>

<script>
  import Vue from 'vue';
  import {
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    Sku
  } from 'vant';

  Vue.use(GoodsAction);
  Vue.use(GoodsActionButton);
  Vue.use(GoodsActionIcon);
  Vue.use(Sku);

  export default {
    data() {
      return {
        name: 'orderbottom',

        }
    },
    methods: {
      onClickIcon() {
        console.log('点击图标');
      },
      onClickButton() {
        console.log('点击按钮');
      }
    }
  }
</script>

<style>
  .van-goods-action-icon__icon {
    width: 3rem;
    font-size: 1.375rem;
    color: #3D3D3D;
  }
</style>
