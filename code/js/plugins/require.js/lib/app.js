/*
app.js是入口文件, 在引入require.js时 data-main定义的
 */

// 全局的配置, 可以配置导入的路径, 和处理不兼容AMD的类库
require.config({
    baseUrl: './lib',
    waitSeconds: 5,
    paths: {
        // 加载网络资源
        "jquery": "//cdn.bootcss.com/jquery/1.8.3/jquery.min",

        // 加载网络资源失败后, 使用本地资源
        "cookie": ["//cdn.bootcss.com/js-cookie/latest/js.cookie.min.error", 'js.cookie.min'],
        "module1": "module1"
    }
});

// 使用别名导入, 别人定义在 require.config.paths
require(['jquery','module1'], function($, m) {
    console.log('jquery:', $);
    console.log('module1:', m);
    m.func1();
});

// 使用路径导入
require(['other/test']);
require(['cookie'], function(cookie) {
    console.log(cookie);
});
