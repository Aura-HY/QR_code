<template>
  <div class="main">
  <var-app-bar
  title="注册"
  title-position="center"
  color="linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)"
  />

  <div class="container">
      <div class="card">
        <div >
          <var-input  variant="outlined" placeholder="id" style="margin-bottom: 25px;margin-top:15%;" type="userId" v-model=" userRegister.userId" />
        </div>
        <div>
          <var-input variant="outlined" label="确认密码" placeholder="password" style="margin-bottom: 20%;margin-top:18%;" type="password" v-model="userRegister.password" />
        </div>

      <div>
    <var-button @click="gotologin" color="linear-gradient(to right, #69dbaa, #3a7afe)" text-color="#fff" style="margin-right: 20px;margin-left: 35%;">注册
    </var-button>
        </div>
        

        
      </div>
    </div>

  </div>
  
  
 </template>
 
 <script>
 import { Snackbar } from '@varlet/ui';
 import user from '../api/user';
 export default {
  data() {
  return {
  userRegister:{
    userId: '',
    password: ''
  }
  
  };
  },
  methods: {
    async gotologin(){
      if(this.userRegister.userId===''||this.userRegister.password===''){
      Snackbar.error('注册失败');
    }else{
      Snackbar.success('注册成功');
      await user.addUser(this.userRegister.userId,this.userRegister.password)
      this.$router.push({name:'login'})
    }
  }
 },
}
 </script>
 
 <style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.card {
  height: 41%;
  width: 65%;
  padding: 30px;
  box-shadow:
  -2px -3px #FFF,
  inset -5px -5px #E7EFF3,
  inset 5px 5px #FFFF;
  border-radius: .5em;
  background-color:#F2F5FA;
  margin: 10px;
}

input {
  margin-bottom: 10px;
}


 </style>
 