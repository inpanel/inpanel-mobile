<template>
    <view class="content no-padding">
        <uni-list>
            <uni-list-item v-for="(item, index) in site_list"
                :key="index"
                :title="item.server_names[0]"
                :note="item.server_names.join(',')"
                :rightText="item.status=='on' ? '运行中' : '停止'">
            </uni-list-item>
        </uni-list>
    </view>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import uniSection from '@/components/uni-section/uni-section.vue'
    import uniList from '@/components/uni-list/uni-list.vue'
    import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
    export default {
        data() {
            return {
                site_list: []
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
        methods: {
            ...mapMutations(['server_save', 'server_clear']),
            bindRestart() {
                uni.showModal({
                    title: "重启服务",
                    content: "是否要重启 InPanel ？",
                    confirmText: "确定",
                    cancelText: "取消",
                    success: (res) => {
                        console.log(res)
                    }
                })
            },
            getList () {
                if (!this.hasLogin) {
                    return
                }
                uni.request({
                    method: 'POST',
                    url: `http://${this.server.addr}:${this.server.port}/operation/nginx`,
                    dataType: 'json',
                    header: {
                        'X-ACCESS-TOKEN': this.server.token
                    },
                    data: {
                        // _access: this.server.token,
                        action: "getservers"
                    }
                }).then(res => {
                    console.log('request success', res[1])
                    this.site_list = res[1].data.data
                    this.loading = false
                }).catch(err => {
                    console.log('request fail', err)
                    uni.showModal({
                        content: err.errMsg,
                        showCancel: false
                    })
                    this.loading = false
                })
            }
        }
    }
</script>

<style>
</style>
