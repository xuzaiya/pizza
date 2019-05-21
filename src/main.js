import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
//路由的抽离，单独写到一个js文件中
import {routes} from './routes';

// import Home from './components/Home'
// import Menu from './components/Menu'
// import Admin from './components/Admin'
// import About from './components/about/About'
// import Login from './components/Login'
// import Register from './components/Register'
//
//
//
//
// //二级路由
// import Contact from './components/about/Contact'
// import Delivery from './components/about/Delivery'
// import History from './components/about/History'
// import OrderingGuide from './components/about/OrderingGuide'
//
//
// //三级路由
// import Phone from './components/about/contact/Phone'
// import PersonName from './components/about/contact/PersonName'

Vue.use(VueRouter);
// const routes = [
//   //可以为路由设置一个name的属性
//   {path:'/',name:'homeLink',component:Home},
//   {path:'/menu',name:'menuLink',component:Menu},
//   {path:'/admin',name:'adminLink',component:Admin,
//     // beforeEnter:(to,from,next)=>{
//     //
//     //     //alert("非登录状态，不能访问此页面");
//     //     //next();//会跳转到admin页面
//     //     next(false);//不会跳到admin页面
//     // }
//   },
//   {path:'/about',name:'aboutLink',redirect:'/about/contact',component:About,children:[
//       {path:'/about/contact',redirect:'/phone',name:'contactLink',component:Contact,children:[
//           {path:'/phone',name:"phoneNumber",component:Phone},
//           {path:'/personName',name:"personName",component:PersonName}
//         ]},
//       {path:'/history',name:'historyLink',component:History},
//       {path:'/delivery',name:'deliveryLink',component:Delivery},
//       {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
//
//     ]},
//   {path:'/login',name:'loginLink',component:Login},
//   {path:'/register',name:'registerLink',component:Register},
//   //如果路径错误，默认跳到以下路径
//   {path:'*',redirect:'/'}
//
//
// ]


const router = new VueRouter({
    routes,
    mode:'history',
  //控制滚动行为x轴为0，y轴为100
  scrollBehavior(to,from,savedPosition){
      return {x:0,y:100};
     // return{selector:'.btn'};  选择器，直接定位到.btn
    /*if (savedPosition){
      return savedPosition;
    }else{
      return {x:0,y:0};

    }*/

  }
})

//路由守卫  全局守卫beforEach   ,后置钩子afterEach  ，独享守卫beforeEach
//组件守卫  beforeRouterEnter    beforeRouterLeave

//全局守卫,to代表要进入到那个路有，from代表从哪个路由来，next 函数
// router.beforeEach((to,from,next)=>{
//     //alert("还没有登录，请先登录");
//     //next();
//     console.log(to);
//
//     //判断store。gettes.isLogin===false
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert("还没有登录，请先登录");
//     next('/login');
//   }
//
// })

//后置钩子
// router.afterEach((to,from)=>{
//   alert("after each"); //进入组件会弹出一句话
//
//
// })











new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
