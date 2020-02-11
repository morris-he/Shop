<template>

    <div class="cart-list">
        <ul>
            <li class="item" v-for="cart in carts">
                <div class="ui-box">
                    <div class="imgProduct">
                        <a href="/1/#/product/view?product_id=1153200008">
                            <img :src="'http://images.canon4ever.com/'+cart.product.image"></a></div>
                    <div class="info ui-box-flex">
                        <div class="name">
                            <span>{{cart.product.name}}</span>
                        </div>
                        <div class="price">
                            <p>
                                <span>售价：</span><span>{{cart.product.price}}元</span>
                                <span>合计：</span><span>{{cart.product.price*cart.num}}元</span>
                            </p>
                            <div class="tip">
                                <span style="display: none;">请于2016/04/11 00:58前下单，逾期将失效。</span>
                            </div>
                        </div>
                        <div class="num">
                            <div class="xm-input-number">
                                <div class="input-sub" :class="{ active: cart.num > 1 }"
                                     @click="changeNum({cart:cart,type:'dec'})"></div>
                                <div class="input-num"><span>{{cart.num}}</span></div>
                                <div class="input-add active" @click="changeNum({cart:cart,type:'inc'})"></div>
                            </div>
                            <div class="delete">
                                <a href="javascript:;" @click="trash({cart:cart})">
                                    <span class="icon-iconfontshanchu"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="append"></div>
            </li>

        </ul>
    </div>

</template>

<script>
    // @ is an alias to /src

    import {mapState, mapActions} from 'vuex'

    export default {
        computed: {
            ...mapState([
                'carts'
            ])
        },
        methods:{
            ...mapActions([
                'changeNum',
                'trash'
            ])
        }
    }
</script>
