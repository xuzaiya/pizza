<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
        <div class="backs">
          <h1>欢迎大家品尝pizza！</h1>
          <h2>这里有你非常喜欢的pizza!</h2>

          <button @click="goToMenu" class="btn btn-success">Let's order！</button>
        </div>
    </div>


  </div>
</template>

<script>
    export default {
        methods:{
          goToMenu(){
            //跳转到上一次浏览的页面
            //this.$router.go(-1)

            //指定跳转的地址
            //this.$router.replace('/menu');

            //指定跳转到路由的名字下
            //this.$router.replace({name:'menuLink'});

            //通过push进行跳转
            //this.$router.push('/menu');
            this.$router.push({name:'menuLink'});
          }

        }
    }
</script>

<style scoped>
  #home{
    background: url("../../src/assets/pizza.jpg");
    height: 85vh;//总高度为100，图片占比85
    padding:10%;

  }

  h1,h2{
    margin: 6%;

  }
  .backs{
    background-color: #eee;
    opacity:0.8;
    margin: 0 auto;

  }

</style>
