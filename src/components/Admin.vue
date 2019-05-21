<template>
  <div id="admin">
    <h1>admin</h1>
  </div>
</template>

<script>
    export default {
        data(){
          return{
            name:"Henry",
          }
        },
      //在进入组件之前执行的函数（组件守卫）
      // beforeRouteEnter:(to,from,next)=>{
      //   //alert("hello"+this.name);//拿不到this.name，因为还没有进组件
      //   //next();
      //   //回调函数，进入组件之后，可以拿到
      //   next(vm=>{
      //     alert("Hello" + vm.name);
      //
      //   });
      // }

      //在离开组件之前执行的函数
    //   beforeRouteLeave(to,from ,next){
    //       if(confirm("确认离开吗？") == true){
    //         next();
    //       }else{
    //         next(false);
    //       }
    // }

    }
</script>

<style scoped>

</style>
