<template>
    <view class="content no-padding">
        <view class="uni-padding-wrap">
            <uni-segmented-control :current="current" :values="items" :style-type="styleType" :active-color="activeColor"
                @clickItem="onClickItem" />
        </view>
        <view class="content no-padding">
            <view v-if="current === 0">
                <uni-list>
                    <uni-list-item title="服务器时间" rightText="2020-02-18 01:36:28 CST" />
                    <uni-list-item title="启动时间" rightText="2019-08-12 15:36:59 CST" />
                    <uni-list-item title="运行时间" rightText="189 天 9 小时 59 分 29 秒" />
                    <uni-list-item title="空闲时间" rightText="188 天 14 小时 0 分 50 秒" note="99.56%空闲" />
                    <uni-list-item title="CPU使用率" rightText="0.00%" />
                    <uni-collapse>
                        <uni-collapse-item title="当前负载">
                            <uni-list>
                                <uni-list-item title="1 分钟进程数" rightText="0.07" note="93%空闲" />
                                <uni-list-item title="5 分钟进程数" rightText="0.02" note="98%空闲" />
                                <uni-list-item title="15 分钟进程数" rightText="0.00" note="100%空闲" />
                            </uni-list>
                        </uni-collapse-item>
                    </uni-collapse>
                    <uni-collapse>
                        <uni-collapse-item title="内存使用">
                            <uni-list>
                                <uni-list-item title="总大小" rightText="490.0M" />
                                <uni-list-item title="已使用" rightText="472.4M" note="96.42%" />
                                <uni-list-item title="剩余可用" rightText="17.5M" note="3.58%" />
                                <uni-list-item title="Buffers" rightText="139.1M" />
                                <uni-list-item title="Cached" rightText="202.8M" />
                            </uni-list>
                        </uni-collapse-item>
                    </uni-collapse>
                    <uni-collapse>
                        <uni-collapse-item title="交换空间">
                            <uni-list>
                                <uni-list-item title="总大小" rightText="512.0M" />
                                <uni-list-item title="已使用" rightText="9.3M" note="1.81%" />
                                <uni-list-item title="剩余可用" rightText="502.7M" note="98.19%" />
                            </uni-list>
                        </uni-collapse-item>
                    </uni-collapse>
                    <uni-collapse>
                        <uni-collapse-item title="存储空间">
                            挂载点 总大小 已使用 剩余可用 使用率
                            / 9.2G 1.6G 7.6G 17.23%
                        </uni-collapse-item>
                    </uni-collapse>
                </uni-list>
            </view>
            <view v-if="current === 1">
                <uni-list>
                    <uni-collapse>
                        <uni-collapse-item title="DNS服务器">
                            <uni-list>
                                <uni-list-item title="205.185.112.68" />
                                <uni-list-item title="205.185.112.69" />
                            </uni-list>
                        </uni-collapse-item>
                    </uni-collapse>
                    <uni-collapse>
                        <uni-collapse-item title="网络接口1">
                            <uni-list>
                                <uni-list-item title="状态" rightText="启用" />
                                <uni-list-item title="名称" rightText="lo （本地环路）" />
                                <uni-list-item title="IPv4地址" rightText="127.0.0.1" />
                                <uni-list-item title="子网掩码" rightText="255.0.0.0" />
                                <uni-list-item title="物理地址" rightText="00:00:00:00:00:00" />
                                <uni-list-item title="流量发送" rightText="速率 0B/s" note="累计 2.7K" />
                                <uni-list-item title="流量接收" rightText="速率 0B/s" note="累计 2.7K" />
                            </uni-list>
                        </uni-collapse-item>
                    </uni-collapse>
                    <uni-collapse>
                        <uni-collapse-item title="网络接口2">
                            <uni-list>
                                <uni-list-item title="状态" rightText="启用" />
                                <uni-list-item title="名称" rightText="eth0 （以太网）" />
                                <uni-list-item title="IPv4地址" rightText="209.141.50.126" />
                                <uni-list-item title="子网掩码" rightText="255.255.255.0" />
                                <uni-list-item title="默认网关" rightText="209.141.50.1" />
                                <uni-list-item title="物理地址" rightText="00:16:09:2A:32:D4" />
                                <uni-list-item title="流量发送" rightText="速率 905B/s" note="累计 14.1G" />
                                <uni-list-item title="流量接收" rightText="速率 88.8K/s" note="累计 38.5G" />
                            </uni-list>
                        </uni-collapse-item>
                    </uni-collapse>
                </uni-list>
            </view>
            <view v-if="current === 2">
                <uni-list>
                    <uni-list-item title="InPanel" rightText="运行中" note="服务器控制面板 InPanel" />
                    <uni-list-item title="Nginx" rightText="运行中" note="高性能的 HTTP 服务器" />
                    <uni-list-item title="SSH" rightText="运行中" note="远程连接服务器" />
                    <uni-list-item title="iptables" rightText="运行中" note="Linux 防火墙" />
                    <uni-list-item title="Cron" rightText="运行中" note="定时任务管理服务器" />
                    <uni-list-item title="NTP" rightText="运行中" note="时间同步服务" />
                </uni-list>
            </view>
            <view v-if="current === 3">
                <uni-list>
                    <uni-list-item title="虚拟平台" rightText="KVM" />
                    <uni-list-item title="主机名称" rightText="angeldoit.com" />
                    <uni-list-item title="发行版本" rightText="CentOS 6.10 Final" />
                    <uni-list-item title="内核版本" note="Linux 2.6.32-754.el6.x86_64 #1 SMP Tue Jun 19 21:26:04 UTC 2018" />
                </uni-list>
                <uni-section title="系统类型" type="line"></uni-section>
                <uni-list>
                    <uni-list-item title="硬件" rightText="x86_64" />
                    <uni-list-item title="CPU" rightText="x86_64" />
                    <uni-list-item title="实现" rightText="x86_64" />
                </uni-list>
            </view>
            <view v-if="current === 4">
                <uni-list>
                    <uni-list-item title="CPU个数" rightText="1 个" />
                    <uni-list-item title="CPU核心" note="Intel(R) Xeon(R) CPU E3-1270 v3 @ 3.50GHz (64bit)" />
                    <uni-list-item title="内存大小" rightText="490.0M" />
                    <uni-list-item title="存储设备" rightText="1个" />
                </uni-list>
                <uni-section title="存储空间，共 10.0G" type="line"></uni-section>
                <uni-list>
                    <uni-list-item title="vda" rightText="10.0G" />
                    <uni-list-item title="vdb" rightText="50.0G" />
                </uni-list>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                items: ['状态概览', '网络信息', '服务状态', '系统信息', '硬件信息'],
                styles: [{
                        value: 'button',
                        text: '按钮',
                        checked: true
                    },
                    {
                        value: 'text',
                        text: '文字'
                    }
                ],
                colors: ['#007aff', '#4cd964', '#dd524d'],
                current: 0,
                colorIndex: 0,
                activeColor: '#007aff',
                styleType: 'button'
            }
        },
        methods: {
            onClickItem(e) {
                if (this.current !== e.currentIndex) {
                    this.current = e.currentIndex
                }
            },
            styleChange(e) {
                if (this.styleType !== e.detail.value) {
                    this.styleType = e.detail.value
                }
            },
            colorChange(e) {
                if (this.styleType !== e.detail.value) {
                    console.log(e.detail.value);
                    this.activeColor = e.detail.value
                }
            }
        }
    }
</script>

<style>
    page {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        background-color: #efeff4;
        min-height: 100%;
        height: auto;
    }

    view {
        font-size: 14px;
        line-height: inherit;
    }

    .uni-padding-wrap {
        padding-top: 20upx;
        padding-bottom: 20upx;
    }

    .word-btn-white {
        font-size: 18px;
        color: #FFFFFF;
    }

    .word-btn {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        height: 48px;
        margin: 15px;
        background-color: #007AFF;
    }

    .word-btn--hover {
        background-color: #4ca2ff;
    }

    .color-tag {
        width: 25px;
        height: 25px;
    }
</style>
