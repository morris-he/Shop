<template>
    <div class="bottom-submit ui-box">
        <div class="price">
        <div class="btn">
            <router-link class="ui-button ui-button-disable" :to="{name:'category'}"><span>继续购物</span>
            </router-link>
        </div>            <span>共{{total.num}}件 金额：</span><br><strong>{{total.price}}</strong><span>元</span></div>

    <div class="btn">
            <router-link  :to="{name:'checkOut'}"  class="ui-button">
                <span>去结算</span>
            </router-link></div>
    </div>
</template>

<script>
    // @ is an alias to /src

    import {mapGetters} from 'vuex'

    export default {
        computed:{
            ...mapGetters([
                'total'
            ])
        }
    }

</script>
