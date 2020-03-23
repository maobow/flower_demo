<template>
  <div style="padding-bottom: 4.25rem">
    <van-nav-bar title="线下活动"></van-nav-bar>
    <!-- 图片轮播 -->
    <!-- <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="100%"/>
      </van-swipe-item>
    </van-swipe> -->
    <div class="roundPic">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image lazy-load fit="cover" :src="image"/>
          <!-- <img v-lazy="image" fit="cover"/> -->
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 开店创业 -->
    <div v-for="(item,index) in testList1" class="imgBorder">
      <span class="title0">{{item.title}}</span>
      <van-row>
        <div v-for="imgitem in item.content" class="imgTest">
          <van-col span="12">
            <div class="imgBox">
              <van-image width="80%" height="9.375rem" fit="cover" :src="imgitem.pic" />
            </div>
            <p class="headWords titleWords">{{imgitem.head}}</p>
            <p class="headWords timeWords">{{imgitem.teacher}}</p>
            <p class="headWords timeWords">{{imgitem.time}}</p>
            <p class="headWords priceWords">￥{{imgitem.price}} / 人</p>
          </van-col>
        </div>
      </van-row>
    </div>
    <!-- 职业设计 -->
    <div v-for="(item,index) in testList3" class="imgBorder">
      <span class="title0">{{item.title}}</span>
      <van-row>
        <div v-for="imgitem in item.content" class="imgTest">
          <van-col span="12">
            <div class="imgBox">
              <van-image width="80%" height="9.375rem" fit="cover" :src="imgitem.pic" />
            </div>
            <p class="headWords titleWords">{{imgitem.head}}</p>
            <p class="headWords timeWords">{{imgitem.teacher}}</p>
            <p class="headWords timeWords">{{imgitem.time}}</p>
            <p class="headWords priceWords">￥{{imgitem.price}} / 人</p>
          </van-col>
        </div>
      </van-row>
    </div>
    <!-- 网红活动 -->
    <div v-for="(item,index) in testList2" class="imgBorder">
      <span class="title0">{{item.title}}</span>
      <van-row>
        <div v-for="(imgitem,index) in item.content" @click="jump(index)" class="imgTest">
          <van-col span="12">
            <div class="imgBox">
              <van-image width="80%" height="9.375rem" fit="cover" :src="imgitem.pic" />
            </div>
            <p class="headWords titleWords">{{imgitem.head}}</p>
            <p class="headWords timeWords">{{imgitem.teacher}}</p>
            <p class="headWords timeWords">{{imgitem.time}}</p>
            <p class="headWords priceWords">￥{{imgitem.price}} / 人</p>
          </van-col>
        </div>
      </van-row>
    </div>
    <navbottom></navbottom>
  </div>

</template>

<script>
  import navbottom from '../../common/navbottom.vue'
  import Vue from 'vue';
  import {
    NavBar,
    Image,
    Swipe, SwipeItem
  } from 'vant';

  Vue.use(NavBar);
  Vue.use(Swipe);
  Vue.use(SwipeItem);
  Vue.use(Image);

  export default {
    name: 'activity',
    components: {
      navbottom
    },
    data() {
      return {
        current: 0,
        images: [
          require('../../../static/image/test1.jpg'),
          require('../../../static/image/test2.jpg'),
          require('../../../static/image/test3.jpg')
        ],
        SwiperImg: [
          "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg",
          "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34869/14/3703/113972/5cb953c1E4294d8ea/b73c538710f5c462.jpg!cr_1125x549_0_72!q70.jpg.dpg",
          "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg",
          "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34729/14/3948/120618/5cbeee07Efbe17ec5/d57ddd4fbbbc09e0.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        ],
        testList1: [{
          title: '开店创业',
          content: [{
              pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
              head: 'PBL花店创业营',
              teacher: '讲师：曹雪',
              time: '2019.11.04~11.15',
              place: '北京',
              price: '9800'
            },
            {
              pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
              head: '秋拾-专业花艺师班',
              teacher: '讲师：季丹',
              time: '每月开课',
              place: '成都',
              price: '4980'
            }
          ]
        }],
        testList2: [{
          title: '网红活动',
          content: [{
              pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
              head: '《花店的定位与竞争11111111》',
              teacher: '讲师：曹雪',
              time: '2019.11.04~11.15',
              place: '北京',
              price: '298'
            },
            {
              pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
              head: '花艺摄影系统课程',
              teacher: '讲师：季丹',
              time: '每月开课',
              place: '成都',
              price: '2580'
            }
          ]
        }],
        testList3: [{
          title: '职业设计',
          content: [{
              pic: require('../../assets/test1.jpg'),
              head: '《花店的定位与竞争11111111》',
              teacher: '讲师：曹雪',
              time: '2019.11.04~11.15',
              place: '北京',
              price: '298'
            },
            {
              pic: require('../../assets/test1.jpg'),
              head: '花艺摄影系统课程',
              teacher: '讲师：季丹',
              time: '每月开课',
              place: '成都',
              price: '2580'
            }
          ]
        }]
      }
    },
    methods: {
      jump(index) {
        if (index == 0) {
          console.log(index)
          this.$router.push({
            name: 'order'
          })
        } else {
          console.log(index)
          // this.$router.push({
          //   name:'order'
          // })
        }

      }
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

  .imgBorder {
    margin-bottom: 1.625rem;
    /* margin-left: 0.625rem; */
  }

  .imgBorder img {
    border-radius: 0.3125rem;
  }

  .imgBox {
    /* background-color: black; */
    text-align: center;
  }

  .title0 {
    font-size: 1.125rem;
    font-weight: 600;
    display: block;
    margin: 0.625rem;
    padding-left: 0.625rem;
    padding-bottom: 0.625rem;
  }

  .headWords {
    text-align: left;
    margin: 2% 0 0 10%;
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.875rem;
  }

  .titleWords {
    font-size: 1rem;
    /* font-weight: bold; */
  }

  .timeWords {
    color: gray;
  }

  .priceWords {
    color: #cca27c;
  }
</style>
