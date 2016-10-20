##开发google 插件
>开发了一个英汉互译的插件

###首先、配置一个manifest.json
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

### 主文件 popup.html

正常html文件，js目录也与正常开发一样
