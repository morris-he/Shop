<template>
  <div class="register">
    <div class="title" align="center">
      注册长乐账号
    </div>
    <form v-on:submit.prevent="onSubmit">
      <div class="registry" align="center">
        <div>
          <input type="email" placeholder="请输入邮箱" class="shu" v-model="customer.email">
          <div>{{errors.email}}</div>
        </div>
        <div>
          <input type="password" placeholder="请输入密码" class="shu" v-model="customer.password">
          <div>{{errors.password}}</div>
        </div>
        <div class="sub_register">
          <input type="submit" value="立即注册">
        </div>
        <p class="msg">
          点击“立即注册”，即表示您同意并愿意遵守小米<a href="">用户协议</a>和<a href="">隐私政策</a>
        </p>
      </div>
      <div class="footmsg" align="center">...
        <div class="zi">
          <a href="">简体</a> | <a href="">繁体</a> | <a href="">English</a> | <a href="">常见问题</a>
        </div>
        <div class="di">
          小米公司版权所有-京ICP备10046444
          <br>
          -京ICP证110507号
        </div>
      </div>
    </form>
    <Footer></Footer>
  </div>
</template>

javascript:;

<script>
    import Footer from '@/components/Footer.vue'
    export default {
    components:{
        Footer
    },
    data () {
      return {
        errors: {
          email: '',
          password: ''
        },
        customer: {}
      }
    },

    created(){
    },

    methods: {
      onSubmit: function () {
        this.axios.post('api/register', this.customer).then(response => {
            alert('注册成功')
            this.$router.push({name: 'login'})
          }).catch(error=>{
              console.log(error)
                let info = error.errors;
                this.errors.email = info.email ? info.email[0] : ''
                this.errors.password = info.password ? info.password[0] : ''
        })
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    background-color: #eeeeee;
  }
    .register{
        margin-top: 30px;
    }
    .title{
        font-size: 20px;
        font-weight: bold;
    }
    .registry input{
        margin-top: 26px;
        width: 275px;
        height: 41px;
        line-height: 41px;
    }
    .sub_register input{
        background-color: #ff6700;
        color: #ffffff;
        border: 2px solid #ff6700;
        border-radius: 5px;
    }
    .msg{
        margin-top: 20px;
        width: 275px;
        line-height: 22px;
        padding-bottom: 10px;
        color: #9b9b9b;
    }
    .msg a{
        color: #9b9b9b;
        text-decoration:underline;
    }
    .footmsg{
        margin-top:175px;
        line-height: 22px;
        color: #9b9b9b;
    }
  .footmsg a{
      color: #9b9b9b;
  }

</style>
