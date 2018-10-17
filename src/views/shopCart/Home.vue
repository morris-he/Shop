<template>
    <div id="wrapper">
        <div class="cart-index">
            <div class="cart-index-wrap">

                <CartList></CartList>

                <div class="pointBox">
                    <div class="point" style="display: none;"><span class="act act_special">包邮</span><span></span></div>
                    <div class="point">
                        <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
                    </div>
                </div>

                <!-- Navbar -->
                <CartCount></CartCount>

            </div>
        </div>


    </div>

</template>

<script>
    // @ is an alias to /src

    import CartList from '@/components/CartList.vue'
    import CartCount from '@/components/CartCount.vue'
    export default {
        components: {
            CartCount,
            CartList
        },
    }
</script>
