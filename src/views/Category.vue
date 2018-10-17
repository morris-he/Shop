<template>
    <div>

        <div id="wrapper">
            <div class="page-category" data-log="商品分类">

                <div class="page-category-wrap">
                    <div class="list-wrap" id="m0" v-for="category in categories">


                            <h3 class="list_title">{{category.name}}</h3>

                        <ol class="list_category">
                            <router-link  v-for="item in category.children" :to="{name:'productList',params:{id:item.id}}" >
                            <li>
                                <div class="img"><img :src="'http://images.canon4ever.com/' + item.image"></div>
                                <div class="name"><span>{{item.name}}</span></div>
                            </li>
                        </router-link>
                        </ol>
                    </div>
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
        data() {
            return {
                categories: []
            }
        },
        components: {
            Footer
        },
        created() {
            this.axios.get(`http://localhost:8000/api/category`).then(response => {
                console.log(response.data)
                this.categories = response.data
            })
        },
    }
</script>