<template>
    <view class="content no-padding">
        <uni-section title="系统工具合集" type="line"></uni-section>
        <uni-collapse v-for="(item, index) in nav_list" :key="index">
            <uni-collapse-item :title="item.title" :showAnimation="true">
                <uni-list v-for="(nav, indx) in item.navs" :key="indx">
                    <uni-list-item :title="nav.title" :note="nav.note" :show-arrow="nav.show_arrow"></uni-list-item>
                </uni-list>
            </uni-collapse-item>
        </uni-collapse>
    </view>
</template>

<script>
    import uniSection from '@/components/uni-section/uni-section.vue'
    import uniList from '@/components/uni-list/uni-list.vue'
    import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
    import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
    import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
    export default {
        data() {
            return {
                title: '工具合集',
                nav_list: [
                    {
                        title: '基础设置',
                        navs: [
                            {
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
                            }
                        ],
                    }, {
                        title: '系统管理',
                        navs: [
                            {
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
                            }
                        ]
                    }, {
                        title: '系统安全',
                        navs: [
                            {
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
                            }
                        ]
                    }, {
                        title: '磁盘存储',
                        navs: [
                            {
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
                            }
                        ]
                    }, {
                        title: '服务器',
                        navs: [
                            {
                                title: '服务器重启',
                                note: '重启您的服务器',
                                path: '',
                                show_arrow: false
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            uniCollapse,
            uniCollapseItem,
			uniSection,
			uniList,
			uniListItem
        },
        onLoad() {

        },
        methods: {

        }
    }
</script>

<style>
</style>
