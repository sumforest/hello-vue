<template>
    <div>用户信息 ID:{{id}}</div>
</template>

<script>
    export default {
      props:['id'],
        name: "UserProfile",
      beforeRouteEnter:(to,from,next)=>{

        next(vm => {
          vm.getData();
        });
      },
      beforeRouteLeave: (to, from,next)=>{

        next();
    },
      methods:{
        getData:function () {
          this.axios({
            method:'get',
            url:'http://localhost:8080/data.json'
          }).then(function (data) {
            console.log(data);
          })
        }
      }
    }
</script>

<style scoped>

</style>
