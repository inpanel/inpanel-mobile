<template>
    <view class="content no-padding">
        <view class="center-list">
            <uni-collapse :accordion="true">
                <uni-collapse-item v-for="(item, index) in nav_list" :key="index" :title="item.title" :showAnimation="true">
                    <uni-list>
                        <navigator open-type="navigate" v-for="(nav, indx) in item.navs" :key="indx" :url="nav.path">
                            <uni-list-item :title="nav.title" :note="nav.note" :show-arrow="nav.show_arrow">
                            </uni-list-item>
                        </navigator>
                    </uni-list>
                </uni-collapse-item>
            </uni-collapse>
        </view>
    </view>
</template>

<script>
    import uniList from '@/components/uni-list/uni-list.vue'
    import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
    import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
    import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
    export default {
        data() {
            return {
                title: '服务管理',
                nav_list: [{
                    title: 'HTTP',
                    navs: [{
                        title: 'Apache',
                        note: '广泛使用的开源 HTTP 服务器软件',
                        path: 'pages/service/apache',
                        show_arrow: true
                    }, {
                        title: 'Nginx',
                        note: '高性能的开源 HTTP 服务器软件',
                        path: 'pages/service/nginx',
                        show_arrow: true
                    }, {
                        title: 'Tomcat',
                        note: '小型的轻量级 JSP 引擎应用',
                        path: 'pages/service/tomcat',
                        show_arrow: true
                    }, {
                        title: 'Lighttpd',
                        note: '快速灵活高性能的开源 HTTP 服务器软件',
                        path: 'pages/service/lighttpd',
                        show_arrow: true
                    }, {
                        title: 'Tengine',
                        note: '基于 Nginx 的高效稳定安全的 HTTP 服务器软件',
                        path: 'pages/service/tengine',
                        show_arrow: true
                    }],
                }, {
                    title: 'FTP',
                    navs: [{
                        title: 'vsftpd',
                        note: '安全快速的 FTP 服务器',
                        path: 'pages/service/vsftpd',
                        show_arrow: true
                    }, {
                        title: 'ProFTPD',
                        note: '安全简单的 FTP 服务器',
                        path: 'pages/service/process',
                        show_arrow: true
                    }, {
                        title: 'Pure-FTPd',
                        note: '快速稳定全功能的 FTP 服务器',
                        path: 'pages/service/remote',
                        show_arrow: true
                    }]
                }, {
                    title: '数据库',
                    navs: [{
                        title: 'MariaDB',
                        note: 'MySQL的一个分支，主要由开源社区在维护',
                        path: 'pages/service/mariadb',
                        show_arrow: true
                    }, {
                        title: 'MySQL',
                        note: '最流行的开源关系型数据库服务器',
                        path: 'pages/service/mysql',
                        show_arrow: true
                    }, {
                        title: 'Redis',
                        note: '高性能内存数据库',
                        path: 'pages/service/redis',
                        show_arrow: true
                    }, {
                        title: 'Memcache',
                        note: '内存数据库',
                        path: 'pages/service/memcache',
                        show_arrow: true
                    }, {
                        title: 'MongoDB',
                        note: '分布式高性能的数据库服务器',
                        path: 'pages/service/MongoDB',
                        show_arrow: true
                    }]
                }, {
                    title: '脚本引擎',
                    navs: [{
                        title: 'PHP',
                        note: 'PHP 脚本解析器	',
                        path: 'pages/service/php',
                        show_arrow: true
                    }]
                }, {
                    title: '邮件',
                    navs: [{
                        title: 'Sendmail',
                        note: '邮件传输服务',
                        path: 'pages/service/sendmail',
                        show_arrow: true
                    }]
                }, {
                    title: '系统',
                    navs: [{
                        title: 'SSH',
                        note: '远程连接服务器',
                        path: 'pages/service/ssh',
                        show_arrow: true
                    }, {
                        title: 'iptables',
                        note: 'Linux 防火墙',
                        path: 'pages/service/iptables',
                        show_arrow: true
                    }, {
                        title: 'Cron',
                        note: '定时任务管理服务器',
                        path: 'pages/service/cron',
                        show_arrow: true
                    }, {
                        title: 'Named',
                        note: 'DNS 域名解析服务器',
                        path: 'pages/service/named',
                        show_arrow: true
                    }, {
                        title: 'Samba',
                        note: '文件资源共享服务器',
                        path: 'pages/service/samba',
                        show_arrow: true
                    }, {
                        title: 'NTP',
                        note: '时间同步服务',
                        path: 'pages/service/ntp',
                        show_arrow: true
                    }]
                }]
            }
        },
        components: {
            uniCollapse,
            uniCollapseItem,
            uniList,
            uniListItem
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
    .center-list {
        background-color: #FFFFFF;
        margin-top: 20upx;
        width: 750upx;
        flex-direction: column;
    }
</style>
