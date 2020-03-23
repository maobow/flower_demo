<template>
  <div>
    <van-nav-bar>
      <van-icon @click="back" name="cross" slot="left" size="1.5rem" />
    </van-nav-bar>
    <p class="resTitle">欢迎你，来到植物的世界</p>
    <van-form>
      <van-field class="fieldStyle" v-model="tel" type="tel" placeholder="请输入手机号码" />
      <!-- 允许输入数字，调起全键盘 -->
      <!-- <van-field class="fieldStyle" v-model="number" type="number" placeholder="请输入图形验证码" /> -->
      <van-field class="fieldStyle" v-model="sms" center clearable placeholder="请输入短信验证码">
        <van-button round slot="button" size="small" type="primary" :disabled="disable" @click="countDown">{{content}}</van-button>
      </van-field>
      <div class="botWords">
        <span class="botGrey">注册使用即表示同意</span>
        <div style="margin-top: 1rem;">
          <span>《花田小憩服务条例》</span>
          <span class="botGrey">和</span>
          <span>《隐私政策》</span>
        </div>
      </div>

      <div style="margin: 16px;">
        <van-button round block type="info" @click="submit">
          注册
        </van-button>
      </div>
    </van-form>
    <div class="login">
      <span class="botGrey">已有账号？</span>
      <span @click="login">点击登录</span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {
    NavBar,
    Icon,
    Form,
    Field,
    Button
  } from 'vant';

  Vue.use(NavBar);
  Vue.use(Icon);
  Vue.use(Form);
  Vue.use(Field);
  Vue.use(Button);

  export default {
    data() {
      return {
        tel: '',
        sms: '',
        content: '发送验证码',
        totalTime: 3,
        disable:false
      }
    },
    methods: {
      back() {
        this.$router.replace('/find')
      },
      submit(tel,sms) {
        console.log([this.tel,this.sms]);
        this.$router.push('/person')
      },
      login(){
        this.$router.push('/login')
      },
      countDown () {
        if (this.disable) return  //改动的是这两行代码
         this.disable = true
       this.content = this.totalTime + 's后重发' //解决60秒不见了的问题
       let clock = window.setInterval(() => {
        this.totalTime--
        this.content = this.totalTime + 's后重发'
        if (this.totalTime < 0) {     //当倒计时小于0时清除定时器
          window.clearInterval(clock)
          this.content = '发送验证码'
          this.totalTime = 3
          this.disable = false
          }
       },1000)
      },
    }
  }
</script>

<style>
  .van-nav-bar .van-icon {
    color: darkgray;
  }

  .resTitle {
    text-align: center;
    font-size: 1.7rem;
    margin: 3.25rem 0;
  }

  .botWords {
    text-align: center;
    font-size: 0.75rem;
    margin: 3rem 0;
  }
  .login {
    text-align: center;
    font-size: 1rem;
    margin: 3.5rem 0;
  }

  .botGrey {
    color: grey;
  }

  .fieldStyle {
    /* background-color: pink; */
    margin: 0.625rem auto;
    width: 90%;
    border-radius: 1.625rem;
    box-shadow: 0 0 0.05rem lightgrey;
  }

  .van-button--primary {
    background-color: #cca27c;
    border: 0.0625rem solid #cca27c;
  }

  .van-button--info {
    background-color: #cca27c;
    border: 0.0625rem solid #cca27c;
  }
</style>
