<template>
    <view class="content">
        <view class="about">
            <view class="qrcode">
                <image src="/static/img/logo.png" @longtap="save"></image>
                <text class="tip">InPanel Mobile</text>
                <!-- #ifdef APP-PLUS -->
                <text class="version">{{version}}</text>
                <!-- #endif -->
            </view>
            <view class="desc">
                <view>InPanel Mobile 是为移动设备开发的客户端</view>
                <view>使用更方便</view>
            </view>
            <view class="source">
                <view>源码获取方式：</view>
                <view class="title">源码获取方式：</view>
                <view class="source-list">
                    <view class="source-cell">
                        <text space="nbsp">作者：</text>
                        <uni-ulink class="link" href="https://github.com/doudoudzj" text="doudoudzj"></uni-ulink>
                    </view>
                </view>
                <view class="source-list">
                    <view class="source-cell">
                        <text space="nbsp">GitHub：</text>
                        <uni-ulink class="link" href="https://github.com/inpanel/inpanel-mobile" text="https://github.com/inpanel/inpanel-mobile"></uni-ulink>
                    </view>
                </view>
            </view>
            <!-- #ifdef APP-PLUS -->
            <button type="primary" @click="share">分享</button>
            <!-- #endif -->
        </view>
        <!-- #ifdef APP-PLUS -->
        <view class="version">
            当前版本：{{version}}
        </view>
        <!-- #endif -->
    </view>
</template>

<script>
    export default {
        data() {
            return {
                providerList: [],
                version: ''
            }
        },
        components: {},
        onLoad() {
            // #ifdef APP-PLUS
            this.version = plus.runtime.version;
            uni.getProvider({
                service: 'share',
                success: (result) => {
                    const data = [];
                    for (let i = 0; i < result.provider.length; i++) {
                        switch (result.provider[i]) {
                            case 'weixin':
                                data.push({
                                    name: '分享到微信好友',
                                    id: 'weixin'
                                });
                                data.push({
                                    name: '分享到微信朋友圈',
                                    id: 'weixin',
                                    type: 'WXSenceTimeline'
                                });
                                break;
                            case 'qq':
                                data.push({
                                    name: '分享到QQ',
                                    id: 'qq'
                                });
                                break;
                            default:
                                break;
                        }
                    }
                    this.providerList = data;
                },
                fail: (error) => {
                    console.log('获取分享通道失败' + JSON.stringify(error));
                }
            });
            // #endif
        },
        methods: {
            // #ifdef APP-PLUS
            save() {
                uni.showActionSheet({
                    itemList: ['保存图片到相册'],
                    success: () => {
                        plus.gallery.save(
                            'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/app_download.png',
                            function() {
                                uni.showToast({
                                    title: '保存成功',
                                    icon: 'none'
                                });
                            },
                            function() {
                                uni.showToast({
                                    title: '保存失败，请重试！',
                                    icon: 'none'
                                });
                            });
                    }
                });
            },
            share(e) {
                if (this.providerList.length === 0) {
                    uni.showModal({
                        title: '当前环境无分享渠道!',
                        showCancel: false
                    });
                    return;
                }
                let itemList = this.providerList.map(function(value) {
                    return value.name;
                })
                uni.showActionSheet({
                    itemList: itemList,
                    success: (res) => {
                        let provider = this.providerList[res.tapIndex].id;
                        uni.share({
                            provider: provider,
                            scene: this.providerList[res.tapIndex].type && this.providerList[res.tapIndex]
                                .type === 'WXSenceTimeline' ?
                                'WXSenceTimeline' : "WXSceneSession",
                            type: (provider === "qq") ? 1 : 0,
                            title: '欢迎体验uni-app',
                            summary: 'uni-app 是一个使用 Vue.js 开发跨平台应用的前端框架',
                            imageUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/nav_menu/8.jpg',
                            href: "https://m3w.cn/uniapp",
                            success: (res) => {
                                console.log("success:" + JSON.stringify(res));
                            },
                            fail: (e) => {
                                uni.showModal({
                                    content: e.errMsg,
                                    showCancel: false
                                })
                            }
                        });
                    }
                })
            }
            // #endif
        }
    }
</script>

<style>
    .about {}

    image {
        width: 300upx;
        height: 300upx;
    }

    .qrcode {
        padding-top: 100upx;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .qrcode .tip {
        margin-top: 20upx;
    }

    .desc {
        text-align: center;
        margin-top: 30upx;
        display: block;
    }

    .code {
        color: #e96900;
        background-color: #f8f8f8;
    }

    button {
        width: 100%;
        margin-top: 40upx;
    }

    .version {
        height: 80upx;
        line-height: 80upx;
        justify-content: center;
    }

    .source {
        margin-top: 30upx;
        flex-direction: column;
    }

    .source-list {
        flex-direction: column;
    }

    .link {
        color: #007AFF;
    }
</style>
