<template>
    <div class="wrap">

        <div class="page-order-checkout">
            <div class="page-order-checkout-wrap">
                <div class="b1 icon_arrow">
                    <router-link :to="{name:'Address'}">



                        <template v-if="address">
                            <div class="b11"><p><span>{{address.name}}</span><span>{{address.tel}}</span></p></div>
                            <div class="b13"><p>{{address.province}} {{address.city}} {{address.area}} {{address.detail}}</p>
                            </div>
                        </template>

                        <template v-else>
                            <div class="b11"><span>没有收货地址!</span></div>
                            <div class="b13">
                                <p id="address" data-id="">
                                    <span style="color:#FF5722;">亲, 请先填写一个收货地址~</span>
                                </p>
                            </div>
                        </template>


                    </router-link>
                </div>
                <div class="ui_line"></div>
                <div class="b2">
                    <ul>
                        <li class="on"><a href="javascript:;" class="alipaywap">微信支付</a></li>
                        <li class=""><a href="javascript:;" class="">货到付款</a></li>
                    </ul>
                </div>
                <div class="ui_line"></div>

                <div class="b8">
                    <div class="b8w" v-for="cart in carts">
                        <div class="b81">
                            <div class="img"><img :src="'http://images.canon4ever.com/' + cart.product.image">
                            </div>
                        </div>
                        <div class="b82">
                            <div class="name"><p>
                                <span>{{cart.product.name}}</span></p></div>
                        </div>
                        <div class="b83">
                            <div class="price"><strong>{{cart.product.price}}元</strong></div>
                        </div>
                    </div>

                </div>
                <div class="ui_line"></div>
                <div class="b5">
                    <div class="b51"><p><strong>商品价格：</strong><span>{{count.total_price}}元</span></p></div>
                    <div class="b53"><p><strong>配送费用：</strong><span>0元</span></p></div>
                </div>
                <div class="b7">
                    <div class="b71"><span>共{{count.num}}件 合计: </span><strong>{{count.total_price}}元</strong></div>
                    <div class="b72"><a href="javascript:;" class="ui-button"  @click="checkAddress"><span>去付款</span></a></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                address: {},
                carts: [],
                count: {}
            }
        },
        // created() {
        //     this.axios.get('api/order/checkout').then(response => {
        //         console.log(response.data)
        //         this.address = response.data.address
        //         this.carts = response.data.carts
        //         this.count = response.data.count
        //     })
        // }
        created(){
            this.init()
        },
        methods: {
            init: function () {
                    this.axios.get('api/order/checkout').then(response => {
                        console.log(response)

                        this.count = response.data.count
                        this.carts = response.data.carts
                        this.address = response.data.address
                    });
            },
            checkAddress: function () {
                if (!this.address) {
                    alert('您必须先填写一个地址！');
                    return false;
                }
            }
        }
    }
</script>
