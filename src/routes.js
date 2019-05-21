import Home from "./components/Home";
import Menu from "./components/Menu";
import Admin from "./components/Admin";
import About from "./components/about/About";
import Contact from "./components/about/Contact";
import Phone from "./components/about/contact/Phone";
import PersonName from "./components/about/contact/PersonName";
import History from "./components/about/History";
import Delivery from "./components/about/Delivery";
import OrderingGuide from "./components/about/OrderingGuide";
import Login from "./components/Login";
import Register from "./components/Register";

 export const routes = [
  //可以为路由设置一个name的属性
   //router-view 的复用
  {path:'/',name:'homeLink',components: {
      default: Home,
      'orderingGuide': OrderingGuide,
      'delivery': Delivery,
      'history': History,

    }},
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/admin',name:'adminLink',component:Admin,
    // beforeEnter:(to,from,next)=>{
    //
    //     //alert("非登录状态，不能访问此页面");
    //     //next();//会跳转到admin页面
    //     next(false);//不会跳到admin页面
    // }
  },
  {path:'/about',name:'aboutLink',redirect:'/about/contact',component:About,children:[
      {path:'/about/contact',redirect:'/phone',name:'contactLink',component:Contact,children:[
          {path:'/phone',name:"phoneNumber",component:Phone},
          {path:'/personName',name:"personName",component:PersonName}
        ]},
      {path:'/history',name:'historyLink',component:History},
      {path:'/delivery',name:'deliveryLink',component:Delivery},
      {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}

    ]},
  {path:'/login',name:'loginLink',component:Login},
  {path:'/register',name:'registerLink',component:Register},
  //如果路径错误，默认跳到以下路径
  {path:'*',redirect:'/'}


]



