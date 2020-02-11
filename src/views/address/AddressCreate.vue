<template>
    <div class="addressCreate">
        <div id="wrapper">
            <div class="page-address-edit" data-log="地址">

                <div class="edit-box">
                    <ul class="ui-list">
                        <li class="ui-list-item">
                            <div class="label">收货人：</div>
                            <div class="ui-input">
                                <input placeholder="真实姓名" name="name" maxlength="15" type="text" v-model="address.name">
                            </div>
                        </li>
                        <li class="ui-list-item">
                            <div class="label">手机号码：</div>
                            <div class="ui-input">
                                <input placeholder="手机号" name="tel" maxlength="13" type="tel" v-model="address.tel">
                            </div>
                        </li>
                        <li class="ui-list-item">
                            <div class="label">所在地区：</div>
                            <div class="ui-input">
                                <input placeholder="省 市 区" name="pca" id="pca" maxlength="20" type="text" v-model="address.pca" @click="showDetail">
                            </div>
                        </li>
                        <li class="ui-list-item">
                            <div class="label">街道地址：</div>
                            <div class="ui-input" >
                                <input placeholder="详细地址" name="address" maxlength="120" type="text" v-model="address.detail" >
                            </div>
                        </li>
                    </ul>
                    <div class="save-button">
                        <a href="javascript:;" class="ui-button" @click="createAddress" ><span>保存地址</span></a>
                    </div>
                </div>


                <div class="ui-mask" v-if="show"></div>
                <div class="ui-pop" v-if="show">
                    <div class="ui-pop-content">
                        <div class="region-list" id="city">
                            <v-distpicker type="mobile" @selected="onSelected"></v-distpicker>
                        </div>
                    </div>
                    <div class="ui-pop-title">选择所在地区</div>
                    <div class="ui-pop-close"><a><span class="icon-10chahaokuang"></span></a></div>
                </div>
                <div class="popup-risk-check"></div>

            </div>
        </div>

    </div>
</template>


<script>
    import VDistpicker from 'v-distpicker'

    export default {
        name: 'addressCreate',
        components: { VDistpicker },
        data() {
            return {
                address: {
                    pca:''
                },
                show:false
            }
        },
        created(){
        },
        methods: {
            createAddress() {
                this.axios.post('api/address', this.address).then(response => {
                    this.$router.push({name: 'Address'})
                });
            },
            onSelected(data) {
                this.show=false
                this.address.pca=data.province.value + ' ' + data.city.value + ' ' + data.area.value
            },
            showDetail(){
                console.log(123456)
                this.show=true
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
