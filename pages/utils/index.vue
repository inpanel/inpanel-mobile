<template>
    <view class="content no-padding">
        <uni-collapse :accordion="true">
            <uni-collapse-item v-for="(item, index) in nav_list" :key="index" :title="item.title" :showAnimation="true">
                <uni-list>
                    <navigator open-type="navigate" v-for="(nav, indx) in item.navs" :key="indx" :url="nav.path">
                        <uni-list-item :title="nav.title" :note="nav.note" :show-arrow="nav.show_arrow">
                        </uni-list-item>
                    </navigator>
                </uni-list>
            </uni-collapse-item>
            <uni-collapse-item title="服务器">
                <uni-list>
                    <uni-list-item title="服务器重启" note="重启您的服务器" :show-arrow="false" @tap="bindRestartServer">
                    </uni-list-item>
                </uni-list>
            </uni-collapse-item>
        </uni-collapse>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: '工具合集',
                nav_list: [{
                    title: '基础设置',
                    navs: [{
                        title: '网络设置',
                        note: '设置主机名、IP 地址、网关、DNS服务器',
                        path: 'pages/utils/network',
                        show_arrow: true
                    }, {
                        title: '时间设置',
                        note: '设置服务器的时间和时区',
                        path: 'pages/utils/time',
                        show_arrow: true
                    }, {
                        title: '软件仓库',
                        note: '软件仓库的管理',
                        path: 'pages/utils/repository',
                        show_arrow: true
                    }, {
                        title: '定时任务',
                        note: '管理系统定时任务',
                        path: 'pages/utils/cron',
                        show_arrow: true
                    }],
                }, {
                    title: '系统管理',
                    navs: [{
                        title: '用户管理',
                        note: '管理系统用户、用户组和用户密码',
                        path: 'pages/utils/user',
                        show_arrow: true
                    }, {
                        title: '进程管理',
                        note: '管理系统当前运行的进程',
                        path: 'pages/utils/process',
                        show_arrow: true
                    }, {
                        title: '远程管理',
                        note: '远程服务器（集群、客户端）的管理',
                        path: 'pages/utils/remote',
                        show_arrow: true
                    }, {
                        title: 'FTP管理',
                        note: 'FTP 用户及进程管理',
                        path: 'pages/utils/ftp',
                        show_arrow: true
                    }, {
                        title: '执行命令',
                        note: '执行 SHELL 命令',
                        path: 'pages/utils/shell',
                        show_arrow: true
                    }]
                }, {
                    title: '系统安全',
                    navs: [{
                        title: 'SSH 公钥验证',
                        note: '防暴力破解，使用更安全的公钥验证替换密码验证',
                        path: 'pages/utils/ssh',
                        show_arrow: true
                    }, {
                        title: 'SSL/TLS',
                        note: '管理 SSL 私钥、签名请求和证书',
                        path: 'pages/utils/ssl',
                        show_arrow: true
                    }, {
                        title: '端口限制',
                        note: '利用 Linux 防火墙实现网络端口的开关',
                        path: 'pages/utils/firewall',
                        show_arrow: true
                    }, {
                        title: '日志维护',
                        note: '维护系统日志',
                        path: 'pages/utils/log',
                        show_arrow: true
                    }, {
                        title: '安全优化',
                        note: '优化系统增强安全',
                        path: 'pages/utils/secure',
                        show_arrow: true
                    }]
                }, {
                    title: '磁盘存储',
                    navs: [{
                        title: '磁盘管理',
                        note: '对磁盘进行分区、格式化、挂载以及网络磁盘的管理等操作',
                        path: 'pages/storage',
                        show_arrow: true
                    }, {
                        title: '备份管理',
                        note: '重要文件数据的备份和管理',
                        path: 'pages/storage/backup',
                        show_arrow: true
                    }, {
                        title: '自动挂载',
                        note: '对未挂载的磁盘进行格式化并自动挂载',
                        path: 'pages/storage/autofm',
                        show_arrow: true
                    }, {
                        title: '数据移至数据盘',
                        note: '将数据迁移至数据盘，并通过链接保持原路径',
                        path: 'pages/storage/movedata',
                        show_arrow: true
                    }, {
                        title: '文件迁移',
                        note: '将文件迁移至远端服务器',
                        path: 'pages/storage/migrate',
                        show_arrow: true
                    }]
                }]
            }
        },
        onLoad() {

        },
        methods: {
            bindRestartServer() {
                uni.showModal({
                    title: "服务器重启确认",
                    content: "重启过程中，您的服务器将会持续中断服务！确认要重启服务器吗？",
                    confirmText: "确认重启",
                    cancelText: "取消",
                    success: (res) => {
                        console.log(res)
                    }
                })
            },
        }
    }
</script>

<style>
</style>
