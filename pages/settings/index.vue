<template>
    <view class="content no-padding">
        <!-- <view class="logo" @click="goLogin" :hover-class="!login ? 'logo-hover' : ''">
            <image class="logo-img" :src="login ? uerInfo.avatarUrl :avatarUrl"></image>
            <view class="logo-title">
                <text class="uer-name">Hi，{{login ? uerInfo.name : '您未登录'}}</text>
                <text class="go-login navigat-arrow" v-if="!login"></text>
                <uni-icons class="go-login " v-if="!login" type="arrowright" size="30"></uni-icons>
            </view>
        </view> -->
        <!-- <uni-section title="系统工具合集" type="line"></uni-section> -->
        <view class="center-list">
            <uni-list>
                <navigator url="/pages/settings/authinfo" open-type="navigate">
                    <uni-list-item title="登录设置" />
                </navigator>
                <navigator url="/pages/settings/serverinfo" open-type="navigate">
                    <uni-list-item title="服务设置" badge-text="12" />
                </navigator>
                <navigator url="/pages/settings/accesskey" open-type="navigate">
                    <uni-list-item title="远程控制" rightText="右侧文字" />
                </navigator>
                <navigator url="/pages/settings/upversion" open-type="navigate">
                    <uni-list-item title="版本升级" rightText="升级 InPanel" />
                </navigator>
                <uni-list-item title="重启服务" @tap="bindRestart" rightText="重启 InPanel 服务" />
            </uni-list>
        </view>
        <view class="center-list">
            <uni-list>
                <navigator url="/pages/settings/about" open-type="navigate">
                    <uni-list-item title="关于" />
                </navigator>
                <navigator url="/pages/feedback/index" open-type="navigate">
                    <uni-list-item title="问题反馈" />
                </navigator>
            </uni-list>
        </view>
        <view class="center-list">
            <uni-list>
                <navigator url="/pages/settings/clientauth" open-type="navigate">
                    <uni-list-item title="客户端授权" />
                </navigator>
            </uni-list>
        </view>
    </view>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    export default {
        data() {
            return {
                login: false,
                avatarUrl: "/static/img/user1.png",
                uerInfo: {}
            }
        },
        computed: mapState(['forcedLogin', 'hasLogin', 'server']),
        mounted() {},
        methods: {
            ...mapMutations(['server_save', 'server_clear']),
            toAbout() {
                uni.navigateTo({
                    url: '/pages/settings/about'
                })
            },
            bindRestart() {
                uni.showModal({
                    title: "重启服务",
                    content: "是否要重启 InPanel ？",
                    confirmText: "确定",
                    cancelText: "取消",
                    success: (res) => {
                        console.log(res)
                        if (res.confirm) {
                            this.doRestartInPanel()
                        }
                    }
                })
            },
            doRestartInPanel () {
                uni.request({
                    method: 'POST',
                    url: `http://${this.server.addr}:${this.server.port}/backend/service_restart`,
                    dataType: 'json',
                    header: {
                        'X-ACCESS-TOKEN': this.server.token
                    },
                    data: {
                        // _access: this.server.token,
                        service: 'inpanel'
                    }
                }).then(res => {
                    console.log('request success', res[1])
                    uni.showToast({
                        title: '请求成功',
                        icon: 'success',
                        mask: true,
                        duration: 2000
                    })
                    this.res = '请求结果 : ' + JSON.stringify(res[1])
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

    page,
    view {
        display: flex;
    }

    .logo {
        width: 750upx;
        height: 240upx;
        padding: 20upx;
        box-sizing: border-box;
        background-color: #4cd964;
        flex-direction: row;
        align-items: center;
    }

    .logo-hover {
        opacity: 0.8;
    }

    .logo-img {
        width: 150upx;
        height: 150upx;
        border-radius: 150upx;
    }

    .logo-title {
        height: 150upx;
        flex: 1;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        margin-left: 20upx;
    }

    .uer-name {
        height: 60upx;
        line-height: 60upx;
        font-size: 38upx;
        color: #FFFFFF;
    }

    /* 
    .go-login.navigat-arrow {
        font-size: 38upx;
        color: #FFFFFF;
    }
 */
    .login-title {
        height: 150upx;
        align-items: self-start;
        justify-content: center;
        flex-direction: column;
        margin-left: 20upx;
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
