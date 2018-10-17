<template>
    <div class="footer">
        <ul>
            <li>
                <router-link :to="{name:'home'}" class="on">
                    <div class="nav">
                        <div class="ih ispr"></div>
                        <p>商城</p>
                    </div>
                </router-link>
            </li>
            <li>
                    <router-link :to="{name:'category'}">
                    <div class="nav">
                        <div class="ic ispr"></div>
                        <p>分类</p>
                    </div>
                    </router-link>
            </li>
            <li>
                <router-link :to="{name:'Cart'}">
                    <div class="nav">
                        <div class="is ispr"></div>
                        <p>购物车</p>
                    </div>

                </router-link>
            </li>
            <li>
                <router-link :to="{name:''}">
                    <div class="nav">
                        <div class="if ispr"></div>
                        <p>服务</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

