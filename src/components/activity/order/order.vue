<template>
  <div id="order">
    <div class="orderRound">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image lazy-load fit="cover" :src="image" width="100%" height="15rem" />
        </van-swipe-item>
      </van-swipe>
      </van-swipe>
      <div class="headline">
        <h3>秋拾-专业花艺师班</h3>
        <p>讲师：季丹</p>
        <p>￥4980</p>
      </div>
    </div>

    <div class="introduction" @click="goscore">

    </div>
    <button @click="jump">回到活动页面</button>
    <orderbottom></orderbottom>
  </div>
</template>

<script>
  import Vue from 'vue';
  import orderbottom from '../../../common/orderbottom.vue';
  import {
    Swipe,
    SwipeItem,
    Lazyload,
    Panel
  } from 'vant';

  Vue.use(Swipe);
  Vue.use(SwipeItem);
  Vue.use(Lazyload);
  Vue.use(Panel);

  export default {
    data() {
      return {
        images: [
          require('../../../../static/image/test1.jpg'),
          require('../../../../static/image/test2.jpg'),
          require('../../../../static/image/test3.jpg')
        ]
      }
    },
    components: {
      orderbottom
    },
    methods: {
      jump() {
        this.$router.push('/activity')
      },
      goscore() {
        this.$router.push('/score')
      }
    }
  }
</script>

<style>
  #order {
    background-color: #F8F9F8;
  }

  .orderRound {
    position: relative;
  }

  .headline {
    position: absolute;
    bottom: 5%;
    left: 10%;
    color: white;
  }
  .headline h3{
    margin: 0.625rem 0;
  }
  .headline p{
    margin: 0;
  }

  .introduction {
    background-color: #42B983;
    width: 100%;
    height: 18.75rem;
  }
</style>
