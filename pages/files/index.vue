<template>
    <view class="content no-padding">
        <uni-list>
            <uni-list-item v-for="(item, index) in files" :key="index"
                :title="item.name"
                :note="item.size"
                :show-arrow="item.isdir">
            </uni-list-item>
        </uni-list>
    </view>
</template>

<script>
    import uniSection from '@/components/uni-section/uni-section.vue'
    import uniList from '@/components/uni-list/uni-list.vue'
    import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
    export default {
        data() {
            return {
                title: '文件管理',
                files: [
                    {
                        "size": "4.0K",
                        "isdir": true,
                        "ctime": "2020-02-17 04:11:35",
                        "perms": "0755",
                        "mtime": "2020-02-17 04:11:35",
                        "name": "core",
                        "uname": "root",
                        "isreg": false,
                        "gname": "root",
                        "islnk": false,
                        "gid": 0,
                        "atime": "2020-02-17 04:11:33",
                        "uid": 0
                    },
                    {
                        "size": "4.0K",
                        "isdir": true,
                        "ctime": "2020-02-17 21:45:37",
                        "perms": "0755",
                        "mtime": "2020-02-17 21:45:37",
                        "name": "data",
                        "uname": "root",
                        "isreg": false,
                        "gname": "root",
                        "islnk": false,
                        "gid": 0,
                        "atime": "2019-11-19 21:08:37",
                        "uid": 0
                    },
                    {
                        "size": "4.0K",
                        "isdir": true,
                        "ctime": "2020-02-17 04:11:36",
                        "perms": "0755",
                        "mtime": "2020-02-17 04:11:36",
                        "name": "lib",
                        "uname": "root",
                        "isreg": false,
                        "gname": "root",
                        "islnk": false,
                        "gid": 0,
                        "atime": "2020-02-17 04:11:33",
                        "uid": 0
                    },
                    {
                        "size": "4.0K",
                        "isdir": true,
                        "ctime": "2020-02-17 04:11:33",
                        "perms": "0755",
                        "mtime": "2020-02-17 04:11:33",
                        "name": "plugins",
                        "uname": "root",
                        "isreg": false,
                        "gname": "root",
                        "islnk": false,
                        "gid": 0,
                        "atime": "2020-02-17 04:11:33",
                        "uid": 0
                    },
                    {
                        "size": "4.0K",
                        "isdir": true,
                        "ctime": "2020-02-17 04:11:33",
                        "perms": "0755",
                        "mtime": "2020-02-17 04:11:33",
                        "name": "static",
                        "uname": "root",
                        "isreg": false,
                        "gname": "root",
                        "islnk": false,
                        "gid": 0,
                        "atime": "2020-02-17 04:11:33",
                        "uid": 0
                    },
                    {
                        "size": "11.7K",
                        "isdir": false,
                        "ctime": "2020-02-17 04:11:33",
                        "perms": "0644",
                        "mtime": "2020-02-17 04:11:33",
                        "name": "CHANGELOG.md",
                        "uname": "root",
                        "isreg": true,
                        "gname": "root",
                        "islnk": false,
                        "gid": 0,
                        "atime": "2020-02-17 04:11:33",
                        "uid": 0
                    },
                    {
                        "size": "1.6K",
                        "isdir": false,
                        "ctime": "2020-02-17 04:11:33",
                        "perms": "0644",
                        "mtime": "2020-02-17 04:11:33",
                        "name": "LICENSE",
                        "uname": "root",
                        "isreg": true,
                        "gname": "root",
                        "islnk": false,
                        "gid": 0,
                        "atime": "2020-02-17 04:11:33",
                        "uid": 0
                    },
                    {
                        "size": "1.9K",
                        "isdir": false,
                        "ctime": "2020-02-17 04:11:33",
                        "perms": "0644",
                        "mtime": "2020-02-17 04:11:33",
                        "name": "README.md",
                        "uname": "root",
                        "isreg": true,
                        "gname": "root",
                        "islnk": false,
                        "gid": 0,
                        "atime": "2020-02-17 04:11:33",
                        "uid": 0
                    },
                    {
                        "size": "1.6K",
                        "isdir": false,
                        "ctime": "2020-02-17 04:11:33",
                        "perms": "0644",
                        "mtime": "2020-02-17 04:11:33",
                        "name": "TODOLIST.md",
                        "uname": "root",
                        "isreg": true,
                        "gname": "root",
                        "islnk": false,
                        "gid": 0,
                        "atime": "2020-02-17 04:11:33",
                        "uid": 0
                    },
                    {
                        "size": "3.0K",
                        "isdir": false,
                        "ctime": "2020-02-17 04:11:33",
                        "perms": "0755",
                        "mtime": "2020-02-17 04:11:33",
                        "name": "config.py",
                        "uname": "root",
                        "isreg": true,
                        "gname": "root",
                        "islnk": false,
                        "gid": 0,
                        "atime": "2020-02-17 04:11:33",
                        "uid": 0
                    },
                    {
                        "size": "12.3K",
                        "isdir": false,
                        "ctime": "2020-02-17 04:11:33",
                        "perms": "0644",
                        "mtime": "2020-02-17 04:11:33",
                        "name": "install.py",
                        "uname": "root",
                        "isreg": true,
                        "gname": "root",
                        "islnk": false,
                        "gid": 0,
                        "atime": "2020-02-17 04:11:33",
                        "uid": 0
                    },
                    {
                        "size": "3.2K",
                        "isdir": false,
                        "ctime": "2020-02-17 04:11:33",
                        "perms": "0755",
                        "mtime": "2020-02-17 04:11:33",
                        "name": "server.py",
                        "uname": "root",
                        "isreg": true,
                        "gname": "root",
                        "islnk": false,
                        "gid": 0,
                        "atime": "2020-02-17 04:11:35",
                        "uid": 0
                    }
                ]
            }
        },
        components: {
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

    /* .navigat-arrow {
        height: 90upx;
        width: 40upx;
        line-height: 90upx;
        font-size: 34upx;
        color: #555;
        text-align: right;
        font-family: texticons;
    } */
</style>
