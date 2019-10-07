const user={
  //创建state
     state : sessionStorage.getItem('state')? JSON.parse(sessionStorage.getItem('state')) : {
      user:{
        username:''
      }
    },
  //通过此方法获取user,计算属性
   getters : {
    getUser(state){
      return state.user;
    }
  },
  //只能通过此方法来修改user，但是缺点是同步并阻塞(类似于Java中的setter)
   mutations : {
    updateUser(state,user){
      state.user = user;
    }
  },
  //定于异步执行mutations里面方法，让mutations里面的方法异步执行
   actions : {
    asyncUpdateUser(context,user){
      context.commit('updateUser',user);
    }
  }
};

export default user;
