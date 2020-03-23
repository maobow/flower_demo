<template>
  <div>
    <van-nav-bar title="奇花异草">
      <van-icon name="arrow-left" slot="left" size="1.5rem" @click="onClickLeft" />
    </van-nav-bar>

    <div v-for="(item,index) in testList1" class="imgBorder" @click="showPopup">
      <van-row>
        <div v-for="imgitem in item.content" class="imgTest">
          <van-col span="12">
            <div class="imgBox">
              <van-image width="80%" height="9.375rem" fit="cover" :src="imgitem.pic" />
            </div>
            <p class="head">{{imgitem.head}}</p>
          </van-col>
        </div>
      </van-row>
    </div>
    <van-popup v-model="show" closeable close-icon="close" class="topContent">
      <div>
        <p class="contentTitle01">植物图鉴</p>
        <div class="contentImg">
          <van-image width="90%" height="13rem" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <p class="contentTitle02">向日葵（黄瓣黄心）</p>
        <div></div>
        <van-divider />
        <div class="smell">
          <van-row>
            <van-col span="8">
              <p class="smell01">无味</p>
              <p class="smell02">气味浓度</p>
            </van-col>
            <van-col span="8">
              <p class="smell01">50%</p>
              <p class="smell02">湿度要求</p>
            </van-col>
            <van-col span="8">
              <p class="smell01">易</p>
              <p class="smell02">养护难度</p>
            </van-col>
          </van-row>
        </div>
        <van-divider />
        <p class="content01">向日葵代表太阳、沉默的爱。向日葵代表太阳、沉默的爱。向日葵代表太阳、沉默的爱。向日葵代表太阳、沉默的爱。向日葵代表太阳、沉默的爱。向日葵代表太阳、沉默的爱。</p>
        <p class="contentBottom">©花田小憩</p>
      </div>
    </van-popup>
  </div>

</template>

<script>
  import Vue from 'vue';
  import {
    NavBar,
    Popup,
    Divider,
    Col, Row
  } from 'vant';

  Vue.use(NavBar);
  Vue.use(Popup);
  Vue.use(Divider);
  Vue.use(Col);
  Vue.use(Row);

  export default {
    data() {
      return {
        show: false,
        testList1: [{
          content: [{
              pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
              head: '向日葵（黄瓣黄心）'
            },
            {
              pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
              head: '日本蓝星花'
            },
            {
              pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
              head: '洋牡丹（白粉）'
            },
            {
              pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
              head: '泰迪向日葵'
            },
            {
              pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
              head: '喜悦水仙百合（橙）'
            },
            {
              pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
              head: '洋牡丹（橙）'
            },
            {
              pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
              head: '马林水仙百合（紫）'
            }
          ]
        }],
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      showPopup() {
        this.show = true;
      }
    }
  }
</script>

<style>
  .van-nav-bar .van-icon {
    color: darkgray;
  }

  .imgBorder {
    margin: 1.625rem 0;
    /* margin-left: 0.625rem; */
  }

  .imgBorder img {
    border-radius: 0.3125rem;
  }

  .imgBox {
    /* background-color: black; */
    text-align: center;
  }

  .head {
    text-align: center;
    margin-top: 2%;
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1rem;
    color: #696969;
  }

  .topContent {
    width: 86%;
    height: 85%;
  }

  .contentImg {
    margin: 1.5rem auto;
    text-align: center;
    /* background-color: #87CEEB; */
  }

  .contentImg img {
    border-radius: 0.3125rem;
  }

  .contentTitle01 {
    text-align: center;
    font-size: 1rem;
  }

  .contentTitle02 {
    text-align: center;
    font-size: 1.125rem;
  }
  .smell{
    width: 90%;
    height: 3.125rem;
    margin: 0 auto;
    /* background-color: #42B983; */
  }
  .van-divider{
    border-color: #A9A9A9;
    width: 90%;
    margin: 1rem auto;
  }
  .smell01{
    margin: 0;
    text-align: center;
    font-size: 1rem;
  }
  .smell02{
    margin: 0.5rem 0;
    text-align: center;
    font-size: 0.875rem;
    color: gray;
  }
  .content01{
    /* width: 80%; */
    /* background-color: #87CEEB; */
    margin: 1rem ;
    font-size: 1rem;
    color: gray;
  }
  .contentBottom{
    margin: 15% 0 0.625rem 0;
    text-align: center;
    font-size: 0.875rem;
    color: gray;
  }
</style>
