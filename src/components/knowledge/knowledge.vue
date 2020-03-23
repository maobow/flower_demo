<template>
  <div  style="padding-bottom: 4.25rem">
    <van-tabs>
      <!-- 模块一 -->
      <van-tab title="今日推荐">
        <!-- 图片轮播 -->
        <div class="roundPic">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <van-image lazy-load fit="cover" :src="image"/>
            </van-swipe-item>
          </van-swipe>
        </div>
        <!-- 图片排列 -->
        <div v-for="(item,index) in testList1" class="imgBorder">
          <span class="title">{{item.title}}</span>
          <van-row>
            <!-- 图片排列 -->
            <div v-for="imgitem in item.image">
              <van-col span="8">
                <div class="imgBox">
                  <van-image class="arrangeImg" fit="cover" :src="imgitem"  @click="showPopup"/>
                </div>
              </van-col>
            </div>
          </van-row>
        </div>
      </van-tab>
      <van-tab title="花束">
        <van-row class="top">
          <!-- 图片排列 -->
          <div v-for="imgitem in bouquetList" class="imgBorder">
            <van-col span="8">
              <div class="imgBox">
                <van-image class="imgCon" fit="cover" :src="imgitem.image"  @click="showPopup"/>
              </div>
            </van-col>
          </div>
        </van-row>
      </van-tab>
      <van-tab title="商业插花">
        <van-row class="top">
          <!-- 图片排列 -->
          <div v-for="imgitem in bouquetList" class="imgBorder">
            <van-col span="8">
              <div class="imgBox">
                <van-image class="imgCon" fit="cover" :src="imgitem.image"  @click="showPopup"/>
              </div>
            </van-col>
          </div>
        </van-row>
      </van-tab>
      <van-tab title="单品花材">
        <van-row class="top">
          <!-- 图片排列 -->
          <div v-for="imgitem in bouquetList" class="imgBorder">
            <van-col span="8">
              <div class="imgBox">
                <van-image class="imgCon" fit="cover" :src="imgitem.image"  @click="showPopup"/>
              </div>
            </van-col>
          </div>
        </van-row>
      </van-tab>
      <van-tab title="瓶花">
        <van-row class="top">
          <!-- 图片排列 -->
          <div v-for="imgitem in bouquetList" class="imgBorder">
            <van-col span="8">
              <div class="imgBox">
                <van-image class="imgCon" fit="cover" :src="imgitem.image"  @click="showPopup"/>
              </div>
            </van-col>
          </div>
        </van-row>
      </van-tab>
      <van-tab title="婚礼">
        <van-row class="top">
          <!-- 图片排列 -->
          <div v-for="imgitem in bouquetList" class="imgBorder">
            <van-col span="8">
              <div class="imgBox">
                <van-image class="imgCon" fit="cover" :src="imgitem.image"  @click="showPopup"/>
              </div>
            </van-col>
          </div>
        </van-row>
      </van-tab>
    </van-tabs>

    <navbottom></navbottom>
  </div>

</template>

<script>
  import navbottom from '../../common/navbottom.vue';
  import Vue from 'vue';
  import axios from "axios";
  import {
    Swipe,
    SwipeItem,
    Lazyload,
    Tab,
    Tabs,
    Grid,
    GridItem
  } from 'vant';

  Vue.use(Swipe);
  Vue.use(SwipeItem);
  Vue.use(Lazyload);
  Vue.use(Tab);
  Vue.use(Tabs);
  Vue.use(Grid);
  Vue.use(GridItem);

  export default {
    data() {
      return {
        bouquetList: [],
        current: 0,
        images: [
          require('../../../static/image/test1.jpg'),
          require('../../../static/image/test2.jpg'),
          require('../../../static/image/test3.jpg')
        ],
        testList1: [{
            title: '有些花束很漂亮',
            image: [
              'https://img.yzcdn.cn/vant/cat.jpeg',
              'https://img.yzcdn.cn/vant/cat.jpeg',
              'https://img.yzcdn.cn/vant/cat.jpeg',
              'https://img.yzcdn.cn/vant/cat.jpeg',
              'https://img.yzcdn.cn/vant/cat.jpeg'
            ]
          },
          {
            title: '奇怪的花草',
            image: [
              'https://img.yzcdn.cn/vant/cat.jpeg',
              'https://img.yzcdn.cn/vant/cat.jpeg',
              'https://img.yzcdn.cn/vant/cat.jpeg',
              'https://img.yzcdn.cn/vant/cat.jpeg',
              'https://img.yzcdn.cn/vant/cat.jpeg'
            ]
          }
        ]
      }
    },
    methods: {
      onChange(index) {
        this.current = index;
      },
      getData() {
        axios.get('./static/knowledge_bouquet.json').then(response => {
          let _data = response.data.bouquet
          // console.log(_data)
          this.bouquetList = _data;
        }).catch(err => {
          console.log(err)
        });
      },
      showPopup() {
        console.log('show')
        this.$router.push('/pic')
      }
    },
    mounted() {
      this.getData();
    },
    name: 'knowledge',
    components: {
      navbottom
    }
  }
</script>

<style>
  .roundPic {
    padding: 0.625rem 0.625rem 1.625rem 0.625rem;
    border-radius: 0.625rem;
  }

  .roundPic img {
    border-radius: 0.625rem;
    width: 100%;
    height: 18.75rem;
  }

  .imgBorder img {
    border-radius: 0.3125rem;
  }

  .imgBox {
    /* background-color: black; */
    text-align: center;
  }
  .imgCon{
    /* width: 80%; */
    width: 6.5rem;
    height: 9.5rem;
    margin: 0.3rem auto;
  }
  .arrangeImg{
    width: 6.5rem;
    height: 6.5rem;
    margin: 0.3rem auto;
  }

  .title {
    font-size: 1.125rem;
    font-weight: 600;
    display: block;
    margin: 0.625rem;
    padding: 0.625rem 0;
  }

  .top {
    margin-top: 0.625rem;
  }

  .van-tabs__line {
    background-color: #cca27c;
  }
</style>
