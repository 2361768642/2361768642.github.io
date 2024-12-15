// <-- Vue.js -->
var vm = new Vue({
    el: '#WebStation-box',
    methods: {
        jumpWeb: function(webUrl) {
            window.open(webUrl, '_blank')
        }
    },
    data: {
        webData: [
            {
                webName: 'BiliBili',
                webUrl: 'https://www.bilibili.com/',
            },{
                webName: 'QQ邮箱',
                webUrl: 'https://mail.qq.com',
            },{
                webName: '秘塔AI搜索',
                webUrl: 'https://metaso.cn/?s=bdpc',
            },{
                webName: 'GitHub',
                webUrl: 'https://github.com/',
            },{
                webName: 'Excalidraw',
                webUrl: 'https://excalidraw.com/',
            },{
                webName: '蜜柑计划',
                webUrl: 'https://mikanani.me/',
            },{
                webName: 'HackWay技术路线',
                webUrl: 'https://hackway.org/',
            },{
                webName: 'ChatGPT',
                webUrl: 'https://chatgpt.com/',
            },{
                webName: 'Vue',
                webUrl: 'https://cn.vuejs.org/',
            },{
                webName: 'Electron',
                webUrl: 'https://www.electronjs.org/zh/',
            },{
                webName: '李府',
                webUrl: 'https://mym04.github.io/',
            },
        ]
    },
});