<template>
    <view class="content no-padding">
        <view class="logo" @click="goLogin" :hover-class="!login ? 'logo-hover' : ''">
            <image class="logo-img" :src="login ? uerInfo.avatarUrl :avatarUrl"></image>
            <view class="logo-title">
                <text class="uer-name">Hi，{{login ? uerInfo.name : '您未登录'}}</text>
                <text class="go-login navigat-arrow" v-if="!login">&#xe65e;</text>
            </view>
        </view>
        <uni-section title="系统工具合集" type="circle"></uni-section>
        <uni-list>
            <uni-list-item title="列表左侧带略缩图" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" />
            <uni-list-item :show-extra-icon="true" :extra-icon="icons.compose" title="帐号管理" />
            <uni-list-item :show-extra-icon="true" :extra-icon="icons.compose" title="新消息通知" badge-text="12" />
        </uni-list>
        <uni-section title="帮助" type="circle"></uni-section>
        <uni-list>
            <uni-list-item :show-extra-icon="true" :extra-icon="icons.compose" title="帮助与反馈" rightText="右侧文字" />
            <uni-list-item :show-extra-icon="true" :extra-icon="icons.compose" title="服务条款及隐私" />
        </uni-list>
        <view class="center-list">
            <uni-list>
                <uni-list-item :show-extra-icon="true" :extra-icon="icons.info" title="关于应用" @click="toAbout" />
            </uni-list>
        </view>
    </view>
</template>

<script>
    import uniSection from '@/components/uni-section/uni-section.vue'
    import uniList from '@/components/uni-list/uni-list.vue'
    import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
    export default {
		components: {
			uniSection,
			uniList,
			uniListItem
		},
        data() {
            return {
                login: false,
                avatarUrl: "/static/img/user1.png",
                uerInfo: {},
                icons: {
                    compose: {
                    	color: '#007aff',
                    	size: '22',
                    	type: 'compose'
                    },
                    info: {
                    	color: '#007aff',
                    	size: '22',
                    	type: 'info-filled'
                    },
                },
				extraIcon1: {
					color: '#007aff',
					size: '22',
					type: 'gear-filled'
				},
				extraIcon2: {
					color: '#4cd964',
					size: '22',
					type: 'image'
				}
            }
        },
        methods: {
            goLogin() {
                if (!this.login) {
                    console.log("点击前往登录")
                }
            },
            toAbout () {
                uni.navigateTo({
                    url: '/pages/about/index'
                });
            },
			switchChange(e) {
				uni.showToast({
					title: 'change:' + e.value,
					icon: 'none'
				})
			},
        }
    }
</script>

<style>
    /* @font-face {
        font-family: texticons;
        font-weight: normal;
        font-style: normal;
        src: url('https://at.alicdn.com/t/font_984210_5cs13ndgqsn.ttf') format('truetype');
    } */

    page,
    view {
        display: flex;
    }

   /* page {
        background-color: #f8f8f8;
    } */
/* 
    .center {
        flex-direction: column;
    }
 */
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

    .go-login.navigat-arrow {
        font-size: 38upx;
        color: #FFFFFF;
    }

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

    .navigat-arrow {
        height: 90upx;
        width: 40upx;
        line-height: 90upx;
        font-size: 34upx;
        color: #555;
        text-align: right;
        font-family: texticons;
    }
</style>
