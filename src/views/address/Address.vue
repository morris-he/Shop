<template>
  <div class="address">
    <div class="page-address-list" data-log="地址列表">
      <div class="address-choose">
        <ul class="ui-list">
          <li class="ui-list-item" v-for="address in addresses" @click="defaultAddress(address.id)">
            <p class="ui_fz30">
              <span class="consignee">{{address.name}}</span><span>{{address.tel}}</span>
            </p>
            <p>{{address.province}} {{address.city}} {{address.area}}</p>
            <p>{{address.detail}}</p></li>
        </ul>
      </div>
      <div class="add">
        <a href="/addresscreate" class="ui-button ui-button-active">
          <span>新建地址</span>
        </a>
      </div>
      <div class="popup-risk-check"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        addresses: [],
      }
    },
    created(){
      this.init()
    },
    methods: {
      init: function () {
          this.axios.get('api/address').then(response => {
            this.addresses = response.data
          });
      },
      defaultAddress(x) {
          // console.log(address_id)
        this.axios.patch('api/address', {address_id:x }).then(response => {
          this.$router.push({name:'checkOut'})
        });
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
