<template>
    <view class="content no-padding">
        <view class="content no-padding">
            <uni-list>
                <uni-list-item v-for="(item, index) in file_list" :key="index" :title="item.name" :note="item.size"
                    :show-arrow="item.isdir">
                </uni-list-item>
            </uni-list>
        </view>
    </view>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import uniSection from '@/components/uni-section/uni-section.vue'
    import uniList from '@/components/uni-list/uni-list.vue'
    import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
    export default {
        data() {
            return {
                title: '文件管理',
                file_list: []
            }
        },
        components: {
            uniSection,
            uniList,
            uniListItem
        },
        computed: mapState(['forcedLogin', 'hasLogin', 'server']),
        mounted() {
            this.getList()
        },
        onLoad() {

        },
        methods: {
            ...mapMutations(['server_save', 'server_clear']),
            getList() {
                if (!this.hasLogin) {
                    return
                }
                uni.request({
                    method: 'POST',
                    url: `http://${this.server.addr}:${this.server.port}/operation/file`,
                    dataType: 'json',
                    header: {
                        'X-ACCESS-TOKEN': this.server.token
                    },
                    data: {
                        // _access: this.server.token,
                        action: 'listdir',
                        path: '/',
                        showhidden: false,
                        remember: true
                    }
                }).then(res => {
                    console.log('request success', res[1]);
                    this.file_list = res[1].data.data
                    this.loading = false
                }).catch(err => {
                    console.log('request fail', err);
                    uni.showModal({
                        content: err.errMsg,
                        showCancel: false
                    });
                    this.loading = false;
                });
            }
        }
    }
</script>

<style>
    page,
    view {
        display: flex;
    }

    .center-list {
        background-color: #FFFFFF;
        margin-top: 20upx;
        width: 750upx;
        flex-direction: column;
    }

    .center-list-item {
        height: 90upx;
        width: 750upx;
        box-sizing: border-box;
        flex-direction: row;
        padding: 0upx 20upx;
    }

    .border-bottom {
        border-bottom-width: 1upx;
        border-color: #c8c7cc;
        border-bottom-style: solid;
    }

    .list-icon {
        width: 40upx;
        height: 90upx;
        line-height: 90upx;
        font-size: 34upx;
        color: #4cd964;
        text-align: center;
        font-family: texticons;
        margin-right: 20upx;
    }

    .list-text {
        height: 90upx;
        line-height: 90upx;
        font-size: 34upx;
        color: #555;
        flex: 1;
        text-align: left;
    }

</style>
