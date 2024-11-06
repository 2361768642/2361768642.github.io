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
                webName: 'ChatGPT',
                webUrl: 'https://chatgpt.com/',
            },{
                webName: 'Electron',
                webUrl: 'https://www.electronjs.org/zh/',
            },{
                webName: 'Excalidraw',
                webUrl: 'https://excalidraw.com/',
            },{
                webName: '蜜柑计划',
                webUrl: 'https://mikanani.me/',
            },{
                webName: '李府',
                webUrl: 'https://mym04.github.io/',
            },{
                webName: '',
                webUrl: '',
            },
        ]
    },
});