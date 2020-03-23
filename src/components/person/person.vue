<template>
  <div>
    <router-link :to="'install'">
      <van-nav-bar>
        <van-icon name="more-o" slot="right" size="1.5rem" />
      </van-nav-bar>
    </router-link>
    <van-row>
      <van-col span="8" class="colLeft">
        <van-image round width="5.25rem" height="5.25rem" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </van-col>
      <van-col span="16" class="colRight">
        <p class="userName">{{name}}</p>
        <div class="detailed">
          <span>个人资料</span>
          <span> | </span>
          <span>账号管理</span>
        </div>
      </van-col>
    </van-row>
    <div class="midInfo">
      <div class="information">
        <van-row>
          <van-col span="12" class="colInfo">
            <van-icon name="other-pay" size="2rem" />
            <p>订单</p>
          </van-col>
          <van-col span="12" class="colInfo">
            <van-icon name="chat-o" size="2rem" />
            <p>消息</p>
          </van-col>
        </van-row>
      </div>
      <div class="information">
        <van-row>
          <van-col span="12" class="colInfo">
            <van-icon name="friends-o" size="2rem" />
            <p>商务合作</p>
          </van-col>
          <van-col span="12" class="colInfo">
            <van-icon name="add-o" size="2rem" />
            <p>下载邀请</p>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="edition">
      <span>当前版本{{edition}}</span>
    </div>
    <navbottom></navbottom>
  </div>

</template>

<script>
  import navbottom from '../../common/navbottom.vue'
  import Vue from 'vue';
  import {
    NavBar,
    Col,
    Row
  } from 'vant';

  Vue.use(NavBar);
  Vue.use(Col);
  Vue.use(Row);

  export default {
    name: 'person',
    components: {
      navbottom
    },
    data() {
      return {
        edition: '1.0.0',
        name: '用户名'
      }
    }
  }
</script>

<style>
  .van-nav-bar .van-icon {
    color: black;
  }

  .colLeft {
    /* background-color: #42B983; */
    text-align: center;
  }

  .colRight {
    /* background-color: pink; */
  }

  .detailed span {
    padding: 0 0.625rem;
    color: gray;
  }

  .userName {
    padding: 0 0.625rem;
    font-size: 1.125rem;
    font-weight: bold;
  }

  .information {
    width: 90%;
    /* background-color: #87CEEB; */
    margin: 3rem auto;
    box-shadow: 0 0 0.625rem lightgray;
    text-align: center;
  }

  .information p {
    margin: 0;
    padding: 0;
  }

  .colInfo {
    margin: 0.9375rem 0;
  }

  .midInfo {
    margin-top: 4rem;
    /* background-color: #42B983; */
  }

  .edition {
    text-align: center;
    color: darkgray;
  }
</style>
