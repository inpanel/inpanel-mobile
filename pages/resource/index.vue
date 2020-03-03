<template>
    <view class="content no-padding">
        <view v-for="(item, index) in nav_list" :key="index" :title="item.title" :showAnimation="true">
            <uni-section :title="item.title" type="line"></uni-section>
            <uni-list>
                <navigator open-type="navigate" v-for="(nav, indx) in item.navs" :key="indx" :url="nav.path">
                    <uni-list-item :title="nav.title" :note="nav.note" :show-arrow="nav.show_arrow">
                    </uni-list-item>
                </navigator>
            </uni-list>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: '资源管理',
                nav_list: [{
                    title: '文件',
                    navs: [{
                        title: '文件管理',
                        note: '',
                        path: '/pages/files/index',
                        show_arrow: true
                    }, {
                        title: '回收站管理',
                        note: '',
                        path: '/pages/files/trash',
                        show_arrow: true
                    }],
                }, {
                    title: '网站',
                    navs: [{
                        title: 'Nginx',
                        note: '',
                        path: '/pages/site/nginx',
                        show_arrow: true
                    }, {
                        title: 'Apache',
                        note: '',
                        path: '/pages/site/apache',
                        show_arrow: true
                    }]
                }, {
                    title: '数据库',
                    navs: [{
                        title: 'MySQL数据库',
                        note: '',
                        path: '/pages/database/mysql',
                        show_arrow: true
                    }, {
                        title: 'MariaDB数据库',
                        note: '',
                        path: '/pages/database/mariadb',
                        show_arrow: true
                    }, {
                        title: 'Redis数据库',
                        note: '',
                        path: '/pages/database/redis',
                        show_arrow: true
                    }, {
                        title: 'Memcache数据库',
                        note: '',
                        path: '/pages/database/memcache',
                        show_arrow: true
                    }, {
                        title: 'MongoDB数据库',
                        note: '',
                        path: '/pages/database/mongodb',
                        show_arrow: true
                    }]
                }]
            }
        },
        components: {},
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

    .center-list-item {
        height: 90upx;
        width: 750upx;
        box-sizing: border-box;
        flex-direction: row;
        padding: 0upx 20upx;
    }
</style>
