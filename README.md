# standard-vue-project

> NPM 内网代理仓库使用方法参考 [iQIYI 制品库使用文档](http://jfrog.gitlab.qiyi.domain/user-guide/samples/basic/npm.html)

## Quick Start

1. 生成项目

    你可以使用`vue-frame-cli`工具，以该`Git`项目为模板初始化一个标准的`Vue`项目（推荐）。

    ```bash
    npm install @iqiyi/vue-frame-cli -g --registry http://jfrog.cloud.qiyi.domain:80/api/npm/npm/
    vue-frame init <your project name>
    cd <your project name>
    ```

    也可以克隆该`Git`项目至本地，注意克隆后需手动更改根目录下的`package.json`中的`name`、`author`、`description`。

    ```bash
    git clone http://gitlab.qiyi.domain/Example/standard-vue-project.git
    cd standard-vue-project
    ```

2. 安装前端项目依赖

    ```bash
    npm install --registry http://jfrog.cloud.qiyi.domain:80/api/npm/npm/
    ```

3. 启动前端`Mock`服务

    ``` bash
    node mock/server.js
    ```

4. 启动前端服务

    ```bash
    npm run serve
    ```

浏览器打开`http://localhost:8000/`即可访问。

## Feature

- <strong>优雅的项目目录结构。</strong>依照经典的MVC模式，将页面、组件、路由分开，抽离出公共模块，路由配置模块化，`Vuex`状态模块化，可以使得开发者更便捷的编写、维护、查找代码。
- <strong>分离数据转换逻辑与视图层。</strong>将复杂的数据转换逻辑剥离至中间层（Service），既减轻了`View`层代码，也解除了数据转换逻辑和页面之间的强绑定关系，便于复用。
- <strong>提供`Vuex`的模块化使用示例。</strong>轻松 get `Vuex`及`Vuex`模块化的使用方式。
- <strong>提供mock数据最佳实践。</strong>引入Mock.js实现模拟数据，一方面方便前后端分离并行开发;另一方面在接入真实的后端数据时，基本不需要修改代码，只需去掉mockjs，停止拦截真实的ajax。
- <strong>集成代码规范最佳实践。</strong>通过配置`Eslint`、`Prettier`、`editorconfig`，检测代码潜在问题的同时，也统一了团队代码规范。
- <strong>提供`Nginx`配置示例。</strong>通过配置`Nginx`解决前后端分离时前端请求的跨域问题。

## Standard Project Structure

```
standard-vue-project

├── README.md    // 项目说明

├── node_modules/    // 依赖包

├── public    // 静态资源文件夹，不经过 webpack
|    ├── favicon.ico
|    └── index.html    // 模板文件，构建时资源链接会被自动注入

├── mock    // mock 数据
|    ├── db.js    // mock 数据库
|    └── routes.js    // mock 路由
     └── server.js    // mock 服务相关配置

├── src

|    ├── assets    // 静态资源文件夹，经过 webpack
|    |    ├── icon
|    |    └── img
|    |        └── logo.png

|    ├── main.js    // 项目的入口文件

|    ├── App.vue    // 主组件

|    ├── router    // 路由入口
|    |    ├── index.js
|    |    └── modules
|    |        └── example.js

|    └── views    // 视图(原则：轻view，重component)
|        └── example
|            └── Example.vue

|    ├── components   // 页面组件
|    |    └── example
|    |        └── ExampleTable.vue

|    ├── store    // vuex 数据
|    |    ├── index.js
|    |    └── modules
|    |        └── example.js

|    ├── service    // 剥离出的数据转换逻辑
|    |    └── exampleService.js

|    ├── api    // 接口 js 文件
|    |    └── example.js

|    ├── common    // 公共模块
|    |    ├── api    // 公共 api
|    |    |    └── request.js
|    |    ├── components    // 公共业务组件
|    |    |    ├── basic
|    |    |    |    └── BasicTable.vue
|    |    |    └── layout
|    |    |        ├── AppFooter.vue
|    |    |        ├── AppHeader.vue
|    |    |        ├── AppSidebar.vue
|    |    |        └── index.js
|    |    ├── config    // 公共配置
|    |    └── utils    // 公共变量和函数
|    |        ├── functions.js
|    |        └── variables.js

|    ├── style    // 全局样式
|    |    ├── index.scss    // 主入口
|    |    ├── _table.scss
|    |    └── _variables.scss    // 全局 scss 变量

├── babel.config.js    // babel 配置

└── vue.config.js    // vue-cli3 配置

├── package.json    // npm 配置,存储所有已安装 npm 包的名称和版本

├── package-lock.json    // 锁定安装时的 npm 包的版本号

```

## Code Standards 使用

项目中已经安装和配置好 `Prettier` + `ESLint` 相关依赖包，方便通过命令行进行代码格式化。使用方法:

- 检测代码格式错误并提示

```bash
  eslint [file path]
```

- 检测代码格式错误并自动修复后进行格式化，对无法自动修复的错误进行提示

```bash
  eslint [file path] --fix
```

如使用编辑器`Vscode`，在编辑器的`Extensions`里搜索安装`Prettier`和`ESLint`相关插件，可进行如下配置，配置好后在开发过程中对代码规范错误会进行高亮提示以及保存时自动格式化代码。
在`Vscode`的`setting.json`文件里加上：
```bash
  "editor.codeActionsOnSave":  {"source.fixAll.eslint": true} //在保存的时候利用eslintrc.js里定义的规则自动格式化代码
```

## 本地开发 Nginx 配置示例

简单起见，本示例要求后端 API 路径全部以 `/api/` 开头。Nginx 将包含 `/api/` 前缀的请求发到后端，将其他请求发送给前端。

生产或测试环境也可以用类似的方式部署，或者通过 Nginx 提供便以后的静态 JS 文件服务。

### 使用方法

1. 通过 YUM、Docker 或其他方式，准备 Nginx；
2. 修改本目录中的 `demo.conf` 文件，并放置于 Nginx `conf.d` 配置目录中；
3. 重启 Nginx、或重新加载 Nginx 配置；
4. 编辑本地 hosts 文件（Linux 在 `/etc/hosts`），增加 `127.0.0.1 demo-dev.cloud.qiyi.domain`（或其他修改过的域名）；
5. 本地浏览器访问 `http://demo-dev.cloud.qiyi.domain/`，查看效果。

### 配置示例 demo.conf
```bash
    upstream demo-be {
        # 后端服务地址，可以为本地或远程的、配合前端开发使用的的后端 API 服务地址
        server 127.0.0.1:8080;
    }
    
    upstream demo-fe {
        # 前端服务地址，可使用 npm run serve 启动本地开发服务器
        server 127.0.0.1:8000;
    }
    
    server {
        listen 80;
        # 可以用不同域名区分不同项目的开发环境，注意不要使用线上域名，随便起一个就行
        server_name demo-dev.cloud.qiyi.domain;
        access_log /var/log/nginx/access-demo-dev.log main;
        location / {
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host 'demo-dev.cloud.qiyi.domain';
                proxy_pass http://demo-fe;
        }
        location /api/ {
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host 'demo-dev.cloud.qiyi.domain';
                proxy_pass http://demo-be;
        }
    }
```