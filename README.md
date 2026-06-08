# 外卖小程序全栈项目 takeout-mini
## 📖 项目简介
一套完整微信外卖小程序系统，包含三端：
1. 微信用户小程序前端（Vite + Vue3）
2. 统一后端服务（SpringBoot3 + JDK17）
3. 商家管理后台前端（Vite + Vue3）

后端支持 Docker 容器一键打包部署，内置多环境配置，适配本地开发与容器运行；实现商户登录、商品管理、购物车、下单、订单管理全套外卖业务。

## 🛠️ 技术栈
### 后端服务
- 运行环境：JDK 17
- 核心框架：SpringBoot 3
- ORM：MyBatis-Plus
- 数据库：MySQL 8.0
- 部署方案：Docker 容器化部署
- 接口文档：SpringDoc OpenAPI
- 环境隔离：local本地开发 / docker容器两套配置

### 前端
1. 用户端：微信小程序 + Vite + Vue3
2. 商家后台：Vite + Vue3 + Nginx反向代理

## 📂 项目目录结构
takeout-project
├── takeout-backend # 统一后端服务
│ ├── Dockerfile # Docker 构建脚本
│ ├── pom.xml # Maven 依赖配置
│ └── src/main/resources
│ ├── application-local.yml # 本地开发配置
│ └── application-docker.yml # Docker 容器配置
├── takeout-mini-user # 微信用户小程序前端
└── takeout-merchant-admin # 商家管理后台前端


## 🚀 后端启动指南
### 方式1：本地IDEA开发调试
#### 前置要求
- JDK 17、Maven、MySQL8.0
#### 启动步骤
1. 自动加载 `application-local.yml`，数据库地址 `localhost:3306`
2. 直接运行项目主启动类
3. 访问地址
   - 接口基础地址：`http://localhost:8080/api`
   - 接口文档：`http://localhost:8080/api/swagger-ui/index.html`

### 方式2：Docker容器部署
#### 1. Maven打包Jar包
```bash
# 进入后端目录
cd takeout-backend
# 打包，跳过单元测试
mvn clean package -DskipTests

2. 构建 Docker 镜像
bash
运行
docker build -t takeout-backend:1.0 .
3. 启动后端容器
bash
运行
docker run -d -p 8080:8080 --name takeout-backend takeout-backend:1.0
容器自动读取 application-docker.yml，使用 host.docker.internal:3306 访问本机 MySQL
🖥️ 商家后台部署指南
前端打包生产资源
bash
运行
npm run build
通过 Nginx 托管 dist 静态文件，配置 /api 反向代理转发至后端 8080
启动前端容器后访问地址：http://localhost:5174
演示登录账号
merchant_id：M00000001
手机号：13800138001
🗄️ 数据库配置说明
通用连接配置（修复 MySQL8 公钥报错）
yaml
spring:
  datasource:
    url: jdbc:mysql://xxx:3306/takeout?useUnicode=true&characterEncoding=utf8&serverTimezone=Asia/Shanghai&useSSL=false&allowPublicKeyRetrieval=true
    username: root
    password: 数据库密码
本地开发：localhost:3306
Docker 容器：host.docker.internal:3306
❓ 常见问题解决方案
Docker 容器无法连接本地 MySQL
使用 application-docker.yml，数据库地址改为 host.docker.internal:3306
MySQL 报错 Public Key Retrieval is not allowed
连接 url 末尾追加参数 &allowPublicKeyRetrieval=true
Swagger 页面空白、启动异常
移除 Knife4j 依赖，仅保留 springdoc-openapi-starter-webmvc-ui:2.8.0
商家后台登录提示登录过期
修改 Nginx 代理配置，增加 Cookie 转发配置，传递登录会话凭证
📦 Git 提交推送命令
bash
运行
# 提交全部修改文件
git add .
git commit -m "外卖全栈完整项目代码提交"
# 首次推送绑定远程main分支
git push -u origin main
👨‍💻 作者信息
全栈开发：Taila365
项目仓库地址：https://github.com/Taila365/takeout-mini-backend
