import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

import Category from './views/Category.vue'
import ProductList from './views/Product/List.vue'
import ProductView from './views/Product/View.vue'
import ShopCart from './views/shopCart/Home.vue'
import CheckOut from './views/order/CheckOut.vue'
import Login from './views/customer/Login.vue'  //注册
import Register from './views/customer/Register.vue'  //登录

import Address from './views/address/Address'
import AddressCreate from './views/address/AddressCreate'

// import Cart from './views/cart/Home'

Vue.use(Router)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/category',
            name: 'category',
            component: Category
        },
        {
            path: '/product_list/:id',
            name: 'productList',
            component: ProductList
        },
        {
            path: '/product_view/:id',
            name: 'ProductView',
            component: ProductView
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/shopCart',
            name: 'shopCart',
            component: ShopCart
        },

        // {
        //     path: '/cart',
        //     name: 'Cart',
        //     component: Cart
        // },
        {
            path: '/checkOut',
            name: 'checkOut',
            component: CheckOut
        },
        {
            path: '/address',
            name: 'Address',
            component: Address
        },
        {
            path: '/addresscreate',
            name: 'AddressCreate',
            component: AddressCreate
        }
    ]
})

export default router;