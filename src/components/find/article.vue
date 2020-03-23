<template>
  <div id="article">
    <!-- 分享、关闭 -->
    <div class="more" @click="more">
      <van-icon name="more-o" />
    </div>
    <div class="close" @click="close">
      <van-icon name="close" />
    </div>
    <van-popup v-model="show" position="top" :style="{ height: '30%' }" closeable>
      分享内容
    </van-popup>

    <!-- 文章图片、标题部分 -->
    <div class="imgIn">
      <van-image width="100%" height="28rem" fit="cover" lazy-load src="https://static.htxq.net/UploadFiles/2020/02/04/test/20200204140251135.jpg" />
      <!-- 图上的文字 -->
      <!-- <div>文字{{nowDate}}</div> -->
      <div class="imgWords">
        <p class="tWords">
          暖爱|立春
        </p>
        <p class="pWords">
          活用质感纤细轻柔的兔葵，能赋予作品微风轻拂庭院的印象。
        </p>
      </div>
    </div>


    <div class="content">
      <!-- 难度、湿度等 -->
      <div class="newImageIcon"></div>
      <!-- 文章详情 -->
      <div class="detailContent">
        <p class="paragraph">— 步骤 —</p>
        <!-- 步骤一 -->
        <p class="paragraph">
          <em>
            <strong>1.</strong>
          </em>
        </p>
        <p class="steps">
          竹编花篮是近几年花艺圈的流行元素，可作为花器插制作品，也可栽植植物、盛放花材。
        </p>
        <p class="stepsImg">
          <van-image fit="cover" src="http://static.htxq.net/UploadFiles/2020/02/04/1580796225470053097.jpg"></van-image>
        </p>

        <!-- 步骤二 -->
        <p class="paragraph">
          <em>
            <strong>2.</strong>
          </em>
        </p>
        <p class="steps">
          以组群的方式将块状花材玫瑰插入花篮中，粉色给人明艳有活力的印象。
        </p>
        <p class="stepsImg">
          <van-image fit="cover" src="http://static.htxq.net/UploadFiles/2020/02/04/1580796243709092540.jpg"></van-image>
        </p>

        <!-- 步骤三 -->
        <p class="paragraph">
          <em>
            <strong>3.</strong>
          </em>
        </p>
        <p class="steps">
          加入浊色系哥伦比亚康乃馨，更显作品柔和、沉着。
        </p>
        <p class="stepsImg">
          <van-image fit="cover" src="http://static.htxq.net/UploadFiles/2020/02/04/1580796266538085445.jpg"></van-image>
        </p>

        <!-- 步骤四 -->
        <p class="paragraph">
          <em>
            <strong>4.</strong>
          </em>
        </p>
        <p class="steps">
          松虫草波浪状的花瓣边缘与康乃馨相呼应，粉中带紫的色泽恰好能起到过渡作用。同期补入相近色系的火烛与多头玫瑰。
        </p>
        <p class="stepsImg">
          <van-image fit="cover" src="http://static.htxq.net/UploadFiles/2020/02/04/1580796294713010346.jpg"></van-image>
        </p>

        <!-- 步骤五 -->
        <p class="paragraph">
          <em>
            <strong>5.</strong>
          </em>
        </p>
        <p class="steps">
          将兔葵放于造型较高的层次空间，填补空隙的同时还能增加作品的趣味性。
        </p>
        <p class="stepsImg">
          <van-image fit="cover" src="http://static.htxq.net/UploadFiles/2020/02/04/1580796315639050005.jpg"></van-image>
        </p>

        <!-- 步骤六 -->
        <p class="paragraph">
          <em>
            <strong>6.</strong>
          </em>
        </p>
        <p class="steps">
          将玫瑰最外一层的花瓣轻轻捻开，丰富作品空间；而且玫瑰花瓣与兔葵花瓣质感相近，使作品更平和。
        </p>
        <p class="stepsImg">
          <van-image fit="cover" src="http://static.htxq.net/UploadFiles/2020/02/04/1580796334139093585.jpg"></van-image>
        </p>

        <!-- 作品配色 -->
        <p class="paragraph">— 作品配色 —</p>
        <p class="stepsImg">
          <van-image fit="cover" src="http://static.htxq.net/UploadFiles/2020/02/04/1580796349723006767.jpg"></van-image>
        </p>
        <!-- 技巧 -->
        <p class="paragraph">— 小技巧 —</p>
        <p class="steps">
          1.在插制花篮时，可刻意制造一些高低差，使每种花材的特点都能展现。
        </p>
        <p class="steps">
          2.玫瑰、郁金香的花瓣易于塑造出花材不具备的形态，增加造型的差异性和趣味性。
        </p>
      </div>
      <!-- 底部 -->
      <div class="footer">
        *版权归花田小憩所有*
      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from "axios";

  import {
    Lazyload,
    Image,
    Icon,
    Popup
  } from 'vant';

  Vue.use(Icon);
  Vue.use(Image);
  Vue.use(Lazyload);
  Vue.use(Popup);

  export default {
    data() {
      return {
        articleContent: [],
        show: false
      }

    },
    mounted() {
      // this.getData();
    },
    methods: {
      getData() {
        axios.get('/static/articleContent.json').then(response => {
          let _data = response.data
          console.log(_data)
          this.articleContent = _data;
        }).catch(err => {
          console.log(err)
        });
      },
      more() {
        console.log(111111)
        this.show = true;
      },
      close() {
        console.log(2222222)
        this.$router.go(-1)
      }
    }
  }
</script>

<style>

  .imgIn {
    position: relative;
    /* margin-right: 0.625rem; */
  }

  .imgWords {
    color: white;
    position: absolute;
    bottom: 1.625rem;
    left: 1.875rem;
    /* background-color: yellowgreen; */
    width: 80%;
  }

  .tWords {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.25rem;
    margin: 0;
  }

  .pWords {
    margin: 0.5rem 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .close {
    position: fixed;
    /* background-color: #42B983; */
    /* width: 6.25rem; */
    /* height: 6.25rem; */
    top: 0.75rem;
    right: 0.75rem;
    letter-spacing: 0.2rem;
    font-size: 1.5rem;
    color: black;
    z-index: 1;
  }

  .more {
    position: fixed;
    /* background-color: #42B983; */
    /* width: 6.25rem; */
    /* height: 6.25rem; */
    top: 0.75rem;
    right: 3.5rem;
    letter-spacing: 0.2rem;
    font-size: 1.5rem;
    color: black;
    z-index: 1;
  }

  .content {
    /* background-color: #42B983; */
    height: 100%;
    /* width: 100%; */
    padding: 0.5rem 2rem;
  }

  .newImageIcon {
    background-color: #f8f9f8;
    height: 6.5rem;
    width: 100%;
    border-radius: 0.08rem;
    margin-top: 0.625rem;
  }

  .detailContent {
    margin-top: 0.625rem;
    /* background-color: #CCA27C; */
    width: 100%;
    /* height: 10rem; */
  }

  .paragraph {
    text-align: center;
    color: #323232;
    font-size: 1.125rem;
  }
  .steps{
    font-size: 1rem;
    color: #323232;
  }
  .footer {
    margin-top: 4rem;
    /* background-color: #87CEEB; */
    font-size: 0.75rem;
    width: 100%;
    /* height: 10rem; */
    color: #777777;
    text-align: center;
  }
</style>
