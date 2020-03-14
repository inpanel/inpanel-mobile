<template>
    <!-- 设置客户端授权信息 -->
    <view class="content no-padding">
        <view class="input-group">
            <view class="input-row border">
                <text class="title">地址：</text>
                <uni-minput type="text" clearable v-model="server_addr" placeholder="服务器地址"></uni-minput>
            </view>
            <view class="input-row">
                <text class="title">端口：</text>
                <uni-minput type="text" clearable v-model="server_port" placeholder="服务器端口"></uni-minput>
            </view>
            <view class="input-row border">
                <text class="title">授权码：</text>
                <uni-minput type="password" clearable displayable v-model="access_token" placeholder="服务器口令"></uni-minput>
            </view>
        </view>
        <view class="uni-padding-wrap uni-common-mt">
            <button type="primary" @tap="save">保存</button>
            <button type="default" @tap="clear">清除</button>
        </view>
    </view>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        data() {
            return {
                server_addr: '',
                server_port: '',
                access_token: ''
            }
        },
        computed: mapState(['forcedLogin', 'hasLogin', 'server']),
        methods: {
            ...mapMutations(['server_save', 'server_clear']),
            save() {
                if (this.server_addr.length < 5) {
                    uni.showToast({
                        icon: 'none',
                        title: '账号最短为 5 个字符'
                    })
                    return
                }
                if (this.server_port.length < 4) {
                    uni.showToast({
                        icon: 'none',
                        title: '端口不合法'
                    })
                    return
                }
                if (this.access_token.length < 44) {
                    uni.showToast({
                        icon: 'none',
                        title: '授权码最短为 44 个字符'
                    })
                    return
                }

                let data = {
                    addr: this.server_addr,
                    token: this.access_token,
                    port: this.server_port
                }
                this.server_save(data)
                uni.showToast({
                    title: '授权信息设置成功'
                })
                uni.hideToast()
                // if (this.$route.from) {
                //     uni.navigateBack({
                //         delta: 1
                //     })
                // } else {
                // }
                uni.reLaunch({
                    url: '/pages/main/index'
                })
            },
            clear () {
                uni.showModal({
                    title: "提示",
                    content: "是否要清空授权信息？",
                    confirmText: "确定",
                    cancelText: "取消",
                    success: (res) => {
                        if (res.confirm) {
                            this.server_addr = ''
                            this.server_port = ''
                            this.access_token = ''
                            this.server_clear()
                        }
                    }
                })
            }
        },
        onShow: function() {
            console.log('App onShow')
            if (this.hasLogin && this.server) {
                this.server_addr = this.server.addr
                this.server_port = this.server.port
                this.access_token = this.server.token
            }
        }
    }
</script>

<style>

</style>
