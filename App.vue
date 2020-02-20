<script>
    import { mapState, mapMutations } from 'vuex'
    import service from './service/service.js'
    export default {
        data() {
            return {}
        },
        computed: mapState(['forcedLogin', 'hasLogin', 'server']),
        methods: {
            ...mapMutations(['server_save', 'server_clear'])
        },
        onLaunch() {
            console.log('App Launch', service.get_status())
            if (service.get_status()) {
                if (service.get_server()) {
                    this.server_save(service.get_server())
                }
            }
        },
        onShow: function() {
            console.log('App Show');
            if (!this.hasLogin) {
                uni.showModal({
                    title: '服务器授权设置',
                    content: '需要设置服务器授权信息才能继续',
                    showCancel: !this.forcedLogin,
                    success: (res) => {
                        if (res.confirm) {
                            if (this.forcedLogin) {
                                // 如果需要强制登录，使用reLaunch方式
                                uni.reLaunch({
                                    url: '/pages/settings/settings'
                                })
                            } else {
                                uni.navigateTo({
                                    url: '/pages/settings/settings'
                                })
                            }
                        }
                    }
                })
            }
        },
        onHide: function() {
            console.log('App Hide');
        }
    }
</script>

<style>
    /* 头条小程序需要把 iconfont 样式放到组件外 */
    @import "components/m-icon/m-icon.css";
    @import './common/uni.css';
    /*每个页面公共css */
    page {
        min-height: 100%;
        display: flex;
        font-size: 16px;
    }

    /* #ifdef MP-BAIDU */
    page {
        width: 100%;
        height: 100%;
        display: block;
    }

    swan-template {
        width: 100%;
        min-height: 100%;
        display: flex;
    }

    /* 原生组件模式下需要注意组件外部样式 */
    custom-component {
        width: 100%;
        min-height: 100%;
        display: flex;
    }

    /* #endif */

    /* #ifdef MP-ALIPAY */
    page {
        min-height: 100vh;
    }

    /* #endif */

    /* 原生组件模式下需要注意组件外部样式 */
    m-input {
        width: 100%;
        /* min-height: 100%; */
        display: flex;
        flex: 1;
    }

    .content {
        display: flex;
        flex: 1;
        flex-direction: column;
        background-color: #efeff4;
        padding: 10px;
    }

    .content.no-padding {
        padding: 0;
    }

    .input-group {
        background-color: #ffffff;
        margin-top: 20px;
        position: relative;
    }

    .input-group::before {
        position: absolute;
        right: 0;
        top: 0;
        left: 0;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .input-group::after {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .input-row {
        display: flex;
        flex-direction: row;
        position: relative;
        font-size: 18px;
        line-height: 40px;
    }

    .input-row .title {
        width: 72px;
        padding-left: 15px;
    }

    .input-row.border::after {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 8px;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .btn-row {
        margin-top: 25px;
        padding: 10px;
    }

    button.primary {
        background-color: #0faeff;
    }

    .text-center {
        text-align: center;
    }
</style>
