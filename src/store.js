import Vue from 'vue'
import Vuex from 'vuex'
import axios from './http'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        carts: [],
        changing:false //   自定义一个点击变数值判断状态(开关)
    },
    mutations: {
        setCarts(state, carts) {
            state.carts = carts
        },
        changeNum(state, payload) {
            let index = state.carts.indexOf(payload.cart)
            payload.type == 'inc' ? state.carts[index].num++ : state.carts[index].num--
        },
        trash(state, payload) {
            let index = state.carts.indexOf(payload.cart)
            state.carts.splice(index, 1)
        },
        changingStatus(state,status){
            state.changing = status
        }
    },
    actions: {
        getAllCarts(context) {
            //请求之后  赋值
            axios.get("api/cart").then(response => {
                //触发mutation
                context.commit('setCarts', response.data.carts)
            })
        },
        changeNum({commit}, payload) {
            if (this.state.changing) {
                return
            }
            if (payload.type == 'dec' && payload.cart.num == 1) {
                return
            }
            // 方法一执行就变成真
            commit('changingStatus',true)
            axios.patch("api/cart", {cart_id: payload.cart.id, type: payload.type}).then((response) => {
               // 变换之后变成假
                commit('changingStatus',false)
                console.log(response)
                commit('changeNum', payload)
            })
        },
        trash({commit}, payload) {
            axios.delete(`api/cart?cart_id=${payload.cart.id}`).then((response) => {
                commit('trash', payload)
            })
        }
    },
    getters: {
        total: state => {
            let num = 0
            let price = 0
            state.carts.forEach(item => {
                num += item.num
                price += item.num * item.product.price
            })
            return {num: num, price: price}
        }
    }
})
