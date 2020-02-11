<template>

    <div class="servicelogin">
        <div class="wrap">
                <div class="title" align="center" style="font-size: 20px;font-weight: bold">
                    长乐账号登陆
                </div>
            <div class="main" align="center">
                <form v-on:submit.prevent="onSubmit">
                    <div class="login">
                        <div>
                            <input type="text" placeholder="请输入邮箱" class="email" v-model="customer.email">
                        </div>
                        <div>
                            <input type="password" placeholder="请输入密码" class="password" v-model="customer.password">
                        </div>
                    </div>
                    <div class="button">
                        <input type="submit" value="登录" class="button">
                    </div>
                </form>
            </div>
            <div class="other" align="center">
                <div class="_register">
                    <router-link :to="{name: 'register'}"  class="registe">
                        立即注册
                    </router-link>
                    | <a href="" class="registe">忘记密码？</a >
                </div>

                <div>
                    <p class="icon">其他登录方式</p>
                </div>

                <div class="i">
                    <i class="fa fa-qq" aria-hidden="true"></i>
                    <i class="fa fa-weibo" aria-hidden="true"></i>
                    <i class="fa fa-weixin" aria-hidden="true"></i>
                </div>

            </div>

            <div class="footmsg" align="center">
                <div class="zi">
                    <a href="">简体</a> | <a href="">繁体</a> | <a href="">English</a> | <a href="">常见问题</a>
                </div>
                <div class="di">
                    小米公司版权所有-京ICP备10046444
                    <br>
                    -京ICP证110507号
                </div>
            </div>

        </div>
        <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src

import Footer from '@/components/Footer.vue'

export default {
	name: 'home',
	components: {
		Footer
	},
	data(){
		return {
			customer: {}
		}
	},
	created(){
	},
	methods: {
		onSubmit(){
		    //常量
			const data = {
				grant_type: 'password', //oauth的模式
				client_id: 1,   //上面所说的client_id
				client_secret: 'DI4TzBdeOQw6vRot5zHP3IrvSwEk8nBSgSNHpSzd',//同上
				username: this.customer.email,
				password: this.customer.password,
			}
			this.axios.post('oauth/token', data).then(res => {
				if(res.status == 200) { //如果成功了
					localStorage.token_type = res.data.token_type  //存入localStorage
					localStorage.access_token = res.data.access_token
					this.$router.push({name: "home"})
				}
			})
		},
	},
}
</script>
<style>
    .wrap{
        margin-top: 30px;
    }
    .login input{
        margin-top: 26px;
        width: 275px;
        height: 41px;
        line-height: 41px;
    }
    .button input{
        background-color: #ff6700;
        color: #ffffff;
        border: 2px solid #ff6700;
        border-radius: 5px;
        width: 275px;
        height: 41px;
        line-height: 41px;
        margin-top: 26px;
    }
    .other{
        margin-top: 20px;
        color: #9b9b9b;
    }
    .footmsg{
        margin-top:150px;
        line-height: 22px;
        color: #9b9b9b;
    }
    .footmsg a{
        color: #9b9b9b;
    }
    .registe{
        color: #9b9b9b;
    }
    .i i{
        padding-top: 15px;
        font-size: 16px;

        letter-spacing: 15px;
    }
    .fa-qq {
        color: #059ede;
        border: 1px dashed #fffff9
    }
    .fa-weibo{
        color: #ff7a58;
        border: 1px dashed #fffff9
    }
    .fa-weixin{
        color: #3bff5a;
        border: 1px dashed #fffff9
    }
    .icon{
        padding-top: 15px;
    }

</style>