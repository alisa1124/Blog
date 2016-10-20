##开发google 插件

配置一个manifest.json
```javascript
{
    "manifest_version": 2,
    "name": "MyTaskList",
    "version": "0.9.0",
    "description": "简单的汉译英翻译",
    "browser_action": {
        "default_icon": "icon.png", // 插件logo
        "default_title": "My Task List",
        "default_popup": "popup.html" // 主文件
    },
    "permissions": [
        "http://fanyi.baidu.com/" //请求的域名
    ]
}
```
