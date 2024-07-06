<template>
  <div class="main">
    <var-app-bar
      title="登录"
      title-position="center"
      color="linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)"
    />

    <div class="container">
      <div class="card">
        <div>
          <var-input 
            variant="outlined" 
            placeholder="id" 
            style="margin-bottom: 25px; margin-top: 15%;"  
            v-model="userlogin.userId" 
          />
        </div>
        <div>
          <var-input 
            variant="outlined" 
            label="确认密码" 
            placeholder="password" 
            style="margin-bottom: 20%; margin-top: 18%;" 
            type="password" 
            v-model="userlogin.password" 
          />
        </div>

        <div>
          <var-button 
            @click="gotoRegister" 
            color="linear-gradient(to right, #69dbaa, #3a7afe)" 
            text-color="#fff" 
            style="margin-right: 20%; margin-left: 15%;" 
          >
            注册
          </var-button>
          <var-button 
            @click="gotohome"  
            color="linear-gradient(to right, #69dbaa, #3a7afe)" 
            text-color="#fff" 
          >
            登录
          </var-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import user from '../api/user'
import { Snackbar } from '@varlet/ui'
export default {
  data() {
    return {
      userlogin: {
        userId: "",
        password: ""
      },
      result: false
    }
  },
  methods: {
  async gotohome() {
    const userId = this.userlogin.userId;
    const password = this.userlogin.password;
    console.log(password);
    // 检查用户名和密码是否为空
    if (userId === '' || password === '') {
      Snackbar.error('登录失败,请检查id和密码');
      return;
    }

    
    try {
      const result = await user.login({ userId, password });
      if (result[0].password==this.userlogin.password) { // 假设返回对象包含一个 success 字段
        this.result = true;
        Snackbar.success('登录成功');
        localStorage.setItem('userId', userId);
        console.log(localStorage.getItem('userId'));
        this.$router.push({ name: 'home' });
      } else {
        Snackbar.error('登录失败,请检查id和密码');
      }
    } catch (error) {
      Snackbar.error('登录失败,请检查id和密码');
    }
  },
  gotoRegister() {
    this.$router.push({
      name: 'register'
    });
  }
}
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
  height: 40%;
  width: 65%;
  padding: 30px;
  box-shadow: -2px -3px #FFF, inset -5px -5px #E7EFF3, inset 5px 5px #FFFF;
  border-radius: .5em;
  background-color: #F2F5FA;
}

input {
  margin-bottom: 10px;
}
</style>