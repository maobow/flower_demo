import Vue from 'vue';
import Router from 'vue-router';
import find from '../components/find/find';
import knowledge from '../components/knowledge/knowledge';
import activity from '../components/activity/activity';
import person from '../components/person/person';
import search from '../components/find/common/search';
import register from '../components/person/register';
import login from '../components/person/login';
import install from '../components/person/common/install';
import order from '../components/activity/order/order';
import article from '../components/find/article';
import map from '../components/find/map';
import pic from '../components/find/pic';
import score from '../components/knowledge/score'

Vue.use(Router);
export default new Router({
  routes: [{
      path: '/find',
      name: 'find',
      component: find,
      // children:[
      //   {
      //     path:'/search',
      //     name:'search',
      //     component: search
      //   }
      // ]
    },
    {
      path:'/article',
      name:'article',
      component:article
    },
    {
      path:'/map',
      name:'map',
      component:map
    },
    {
      path:'/pic',
      name:'pic',
      component:pic
    },
    {
      path: '/install',
      name: 'install',
      component: install
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: knowledge
    },
    {
      path:'/score',
      name:'score',
      component:score
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/order',
      name:'order',
      component:order
    },
    {
      path: '*',
      redirect: '/find'
    }
  ]
})
