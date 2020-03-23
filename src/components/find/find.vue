<template>
  <div style="padding-bottom: 4.25rem">
    <!-- 三大模块 -->
    <van-tabs animated>
      <!-- 模块：文章 -->
      <van-tab title="文章">
        <!-- 图片懒加载 -->
        <div v-for="item in articleList" class="imgIn" @click="goArticle">
          <van-image width="100%" height="30rem" fit="cover" lazy-load :src="item.image" />
          <!-- 图上的文字 -->
          <!-- <div>文字{{nowDate}}</div> -->
          <div class="imgWords">
            <p class="tWords">
              {{item.title}}
            </p>
            <p class="pWords">
              {{item.words}}
            </p>
          </div>
        </div>
      </van-tab>

      <!-- 模块：植物图鉴 -->
      <van-tab title="植物图鉴">
        <van-row>
          <!-- 图片排列 -->
          <div v-for="(item,index) in mapList" class="imgBorder">
            <van-col span="12">
              <div class="outBox">
                <van-row type="flex" justify="center">
                  <van-col span="24" class="inBox" @click="goMap">
                    <div class="mapTitle">{{item.title}}</div>
                    <div class="imgBox0">
                      <van-image class="imgSize" fit="cover" :src="item.image" />
                    </div>
                  </van-col>
                </van-row>
              </div>
            </van-col>
          </div>
        </van-row>
      </van-tab>

      <!-- 模块：壁纸 -->
      <van-tab title="壁纸">
        <van-row>
          <!-- 图片排列 -->
          <div v-for="(item,index) in wallpaperList" class="imgBorder" @click="showPopup">
            <van-col span="8">
              <div class="imgBox">
                <van-image width="7rem" height="10rem" fit="cover" :src="item.image" />
              </div>
            </van-col>
          </div>
        </van-row>
      </van-tab>
    </van-tabs>

    <!-- 底部导航栏 -->
    <navbottom></navbottom>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from "axios";
  import moment from 'moment';
  import {
    Search,
    Tab,
    Tabs,
    Lazyload,
    Image,
    Swipe,
    SwipeItem,
    Col,
    Row,
    Popup
  } from 'vant';
  import navbottom from '../../common/navbottom.vue';

  Vue.use(Search);
  Vue.use(Tab);
  Vue.use(Tabs);
  Vue.use(Lazyload);
  Vue.use(Image);
  Vue.use(Swipe);
  Vue.use(SwipeItem);
  Vue.use(Col);
  Vue.use(Row);
  Vue.use(Popup);

  export default {
    name: 'find',
    components: {
      navbottom
    },
    data() {
      return {
        articleList: [],
        mapList: [],
        wallpaperList: [],
        nowTime: new Date().getTime(),
        tabList: [
          '文章',
          '植物图鉴',
          '壁纸'
        ],
        imageList: [
          require('../../assets/test1.jpg'),
          require('../../assets/test1.jpg'),
          require('../../assets/test1.jpg'),
          require('../../assets/test1.jpg'),
          require('../../assets/test1.jpg'),
          require('../../assets/test1.jpg'),
          require('../../assets/test1.jpg'),
          'https://img.yzcdn.cn/vant/apple-2.jpg',
          'https://img.yzcdn.cn/vant/cat.jpeg',
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg',
          'https://img.yzcdn.cn/vant/cat.jpeg',
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg',
          'https://img.yzcdn.cn/vant/cat.jpeg',
        ]
      };
    },
    created() {
      // 转换时间格式年月日时分秒
      this.nowDate = moment(this.nowDate).format('YYYY-MM-DD HH:mm')
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        axios.get('/static/find_article.json').then(response => {
          let _data = response.data.article
          // console.log(_data)
          this.articleList = _data;
        }).catch(err => {
          console.log(err)
        });
        axios.get('/static/find_map.json').then(response => {
          let _data = response.data.map
          // console.log(_data)
          this.mapList = _data;
        }).catch(err => {
          console.log(err)
        });
        axios.get('/static/find_wallpaper.json').then(response => {
          let _data = response.data.wallpaper
          // console.log(_data)
          this.wallpaperList = _data;
        }).catch(err => {
          console.log(err)
        });
      },
      goArticle() {
        console.log('goArticle')
        this.$router.push('/article')
      },
      goMap() {
        console.log('goMap')
        this.$router.push('/map')
      },
      showPopup() {
        console.log('show')
        this.$router.push('/pic')
      }
    },


  }
</script>

<style>
  .van-swipe__indicators {
    width: 0;

  }

  .imgBox {
    /* background-color: #42B983; */
    text-align: center;
  }

  .outBox {
    height: 12rem;
    /* background-color: #42B983; */
  }

  .inBox {
    /* background-color: antiquewhite; */
    /* padding: 10%; */
    border-radius: 0.3125rem;
    box-shadow: 0 0 0.625rem lightgrey;
    margin-top: 10%;
    /* margin-bottom: 10%; */
    width: 10.225rem;
    height: 11rem;
    text-align: center;
  }

  .mapTitle {
    /* background-color: coral; */
    padding: 6%;
  }

  .imgBox0 {
    /* background-color: darkorange; */
    padding: 0 5% 0 5%;
  }

  .imgSize {
    width: 9.375rem;
    height: 7rem;
  }

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

  .imgTitle {
    position: absolute;
    background-color: skyblue;
    color: black;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-25%, -50%);
  }

  .imgColor {
    background: #000;
  }

  .imgBack {
    opacity: 0.6;
    filter: alpha(opacity=60);
  }

  .imgBorder img {
    border-radius: 0.3125rem;
  }

  .van-tabs__line {
    background-color: #cca27c;
  }
</style>
