<template>
    <div>

        <div id="wrapper" style="display: block">
            <div class="page-product-view" data-log="商品详情">

                <div class="header">
                    <div class="left"><a @click="back" class="icon-home" style="font-size: 20px;padding: 15px 0 0 10px"></a><!--vue-if--><!--vue-if-->
                    </div>
                    <div class="tit"><!--vue-if--></div>
                    <div class="right"><a href="javascript:;" data-event="30000000110001001"
                                          data-stat-id="6c93ea1c6bb6eb01"
                                          onclick="_msq.push(['trackEvent', '8fb4bea51daee8a5-6c93ea1c6bb6eb01', 'javascript:;', 'pcpid']);">
                        <div class="icon icon-search"></div>
                    </a></div>
                </div>

                <div class="product-view">
                    <div class="b1">
                        <img :src="'http://images.canon4ever.com/' + product.image">
                    </div>
                    <div class="b2">
                        <div class="b21">
                            <div class="b211">
                                <div class="name"><p>{{product.name}}</p></div>
                                <div class="price"><strong>{{product.price}}元</strong></div>
                            </div>
                            <div class="b212">
                                <div class="icon-fenxiang"></div>
                            </div>
                        </div>
                        <div class="b22">
                            <p>{{product.description}}</p>
                        </div>
                    </div>
                    <div class="mt20" style="display: none;"></div>

                    <!--<ul class="b3">-->
                    <!--<li><span class="on">白色</span></li>-->
                    <!--</ul>-->

                    <ul class="b3" style="display: none;">
                        <li><span>通用</span></li>
                    </ul>

                    <div class="ui-b7">
                        <h3>为您推荐</h3>
                        <div class="ui-carousel-container">
                            <div class="ui-carousel-viewport" >
                                <router-link :to="{name:'ProductView',params:{id:recommend.id}}" @click="shift_prd" v-for="recommend in recommends">
                                    <img :src="recommend.image?'http://images.canon4ever.com/' + recommend.image:''"  >
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <div class="b5">
                        <div class="b51"></div>
                        <div class="b52">
                            <div class="blc">
                                <ul>
                                    <li>
                                        <div class="img">

                                            <div v-html="product.markdown_html_code"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="b7">
                        <div class="b70">
                            <router-link :to="{name: 'home'}">
                                <div class="icon-home"></div>
                            </router-link>
                        </div>
                        <div class="b72">
                            <!--<a href="javascript:;" class="off">暂时缺货</a>-->
                            <a href="javascript:;" @click="buy">立即购买</a>
                        </div>

                        <div class="b73">
                            <router-link :to="{name:'Cart'}">
                                <div class="icon-gouwuche"></div>
                            </router-link>
                        </div>
                    </div>
                    <a href="javascript:;" id="top" style="visibility: visible;">
                        <img src="http://s1.mi.com/m/images/m/top.png">
                    </a>
                </div>
                <div class="share-component"></div>
            </div>
        </div>

        <!--<Footer></Footer>-->
    </div>
</template>
<script>
    // @ is an alias to /src

    // import Footer from '@/components/Footer.vue'

    export default {
        data() {
            return {
                product: {
                    name: ''
                },
                recommends:[]
            }
        },
        created() {
            this.init()
        },
        watch:{
            "$route":"init"
        },
        methods:{
            init(){
                let id = this.$route.params.id
                this.axios.get(`api/product/view?id=${id}`).then(response => {
                    this.product = response.data.product
                    this.recommends = response.data.recommends
                })
            },
            shift_prd(){
                console.log(123)
                this.init()
            },
            back(){
                this.$router.push({name: 'home'})
            },
            buy(){
                let id = this.$route.params.id
                this.axios.post(`api/cart`, {product_id: id}).then((response) => {
                    this.$router.push({name: 'shopCart'})
                })

                // this.axios.get('api/cart').then(res=>{
                //     console.log(res)
                //     sessionStorage.customer_id=res.data.carts[0].customer_id
                // })
            }
        }
    }
</script>