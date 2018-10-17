<template>
    <div>


        <div id="wrapper">
            <div class="page-list" data-log="商品列表">
                <div class="header">
                <div class="left">
                <a @click="back" class="home"><img src="http://s1.mi.com/m/images/m/icon_back_n.png" class="ib"></a>
                </div>
                <div class="tit"><h2 data-log="HEAD-标题-商品列表"><span class="title">商品列表</span></h2></div>

                <div class="right">
                <a href="/1/#/search/index">
                <div class="icon icon-search"></div>
                </a>
                </div>
                </div>
                <ol class="version">

                        <li v-for="item in list">

                            <router-link :to="{name:'ProductView',params:{cid:item.id}}" class="version-item" >
                                <div class="version-item-img">
                                    <img :src="'http://images.canon4ever.com/' + item.image">
                                </div>
                                <div class="version-item-intro">
                                    <div class="version-item-name"><p>{{item.name}}</p></div>
                                </div>
                                <div class="version-item-intro-price"><span>{{item.price}}元</span></div>
                            </router-link>
                        </li>

                </ol>

            </div>
        </div>

        <Footer></Footer>
    </div>
</template>
<script>
    // @ is an alias to /src

    import Footer from '@/components/Footer.vue'

    export default {
        data() {
            return {
                list: []
            }
        },
        components: {
            Footer
        },
        created() {
            let id=this.$route.params.id
            this.axios.get(`http://localhost:8000/api/product/list?id=${id}`).then(response=>{
                this.list=response.data
                console.log(response.data)
            })
        },
        methods:{
        back(){
            this.$router.go(-1)
        }
        }
    }
</script>