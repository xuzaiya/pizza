<template>

  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">


      <a href="/" class="navbar-brand">Pizza点餐系统</a>
      <ul class="nav navbar-nav">
        <!--可以在router-link里面加一个属性tag=“div” 让他显示成div元素，正常跳转不影响-->
        <!--<li><router-link to="/" tag="div" class="nav-link">主页</router-link></li>-->

        <!--可以给to绑定属性,改变属性，就可以动态的改变跳转-->
        <!--<li><router-link :to="homeLink" tag="div" class="nav-link">主页</router-link></li>-->


        <li><router-link to="{name:'homeLink'}"  class="nav-link">主页</router-link></li>

        <!--在main.js中配置的name属性，可以在这里用-->
        <li><router-link :to="{name:'menuLink'}" class="nav-link">菜单</router-link></li>
        <li><router-link :to="{name:'adminLink'}" class="nav-link">管理</router-link></li>
        <li><router-link :to="{name:'aboutLink'}" class="nav-link">关于我们</router-link></li>

      </ul>

      <ul class="  navbar-nav navbar-right">
        <li><router-link :to="{name:'loginLink'}" class="nav-link">登录</router-link></li>
        <li><router-link :to="{name:'registerLink'}" class="nav-link">注册</router-link></li>


      </ul>
    </nav>

  </header>

</template>

<script>
    export default {
       data(){
         return {
           //homeLink:'/'
         }
       }
    }
</script>

<style scoped>

</style>
