takeout-mini 外卖全栈项目 README.md项目介绍本项目是微信小程序外卖全栈系统，分为三端：
微信用户小程序前端（Vite Vue3）
统一服务后端（SpringBoot 3，JDK17）
商家管理后台前端（Vite Vue3）
后端支持 Docker 一键打包部署，数据库 MySQL8，完整实现商户登录、商品管理、订单、用户下单、购物车等外卖核心业务。技术栈后端服务
核心框架：SpringBoot 3
JDK 版本：JDK 17
持久层：MyBatis-Plus
数据库：MySQL 8.0
部署方式：Docker 容器化打包运行
接口文档：SpringDoc（移除 Knife4j 避免版本冲突）
环境区分：本地调试 / Docker 容器两套数据库配置
客户端
用户端：微信小程序 + Vite + Vue3
商家后台管理端：Vite + Vue3 + Nginx 反向代理接口
目录结构plaintexttakeout-project
├── takeout-backend        # 后端统一服务
│   ├── Dockerfile         # Docker构建文件
│   ├── src/main/resources
│   │   ├── application-local.yml   # 本地开发配置
│   │   └── application-docker.yml # Docker容器配置
│   └── pom.xml
├── takeout-mini-user      # 微信用户小程序前端
└── takeout-merchant-admin # 商家管理后台前端
后端快速启动（两种方式）方式 1：本地 IDEA 开发调试
环境要求：JDK 17、Maven、MySQL8
修改配置：自动读取 application-local.yml，数据库地址 localhost:3306
启动命令：直接运行主启动类
访问地址：

接口基础路径：http://localhost:8080/api
接口文档：http://localhost:8080/api/swagger-ui/index.html


方式 2：Docker 容器一键部署1. 后端打包 Jarbash运行# 进入后端目录
cd takeout-backend
# Maven打包，跳过测试
mvn clean package -DskipTests
2. 构建 Docker 镜像bash运行docker build -t takeout-backend:1.0 .
3. 启动后端容器bash运行docker run -d -p 8080:8080 --name takeout-backend takeout-backend:1.0

Docker 环境自动加载 application-docker.yml，数据库地址使用 host.docker.internal:3306 访问本机 MySQL
商家管理后台部署
前端打包生成 dist
bash运行npm run build

Nginx Dockerfile 托管静态资源，代理 /api 转发至后端 8080 端口
启动前端容器，访问地址：http://localhost:5174
登录演示账号：

merchant_id：M00000001
手机号：13800138001


数据库配置说明核心连接参数（解决 MySQL8 公钥报错）yamlurl: jdbc:mysql://xxx:3306/takeout?useUnicode=true&characterEncoding=utf8&serverTimezone=Asia/Shanghai&useSSL=false&allowPublicKeyRetrieval=true
username: root
password: 你的数据库密码

本地开发：localhost:3306
Docker 容器运行：host.docker.internal:3306
常见问题
Docker 容器无法连接 MySQL
切换 application-docker.yml，数据库地址改为 host.docker.internal
MySQL 报错 Public Key Retrieval is not allowed
url 末尾追加 &allowPublicKeyRetrieval=true
Swagger 页面空白 / 启动报错
移除 Knife4j 依赖，仅保留 springdoc-openapi-starter-webmvc-ui:2.8.0
商家后台登录提示登录过期
修改 Nginx 代理配置，增加 Cookie 转发配置，携带会话凭证
仓库 Git 推送命令bash运行# 提交全部代码
git add .
git commit -m "外卖全栈项目完整代码提交"
# 首次推送关联远程main分支
git push -u origin main
作者信息全栈开发：Taila365
项目仓库：https://github.com/Taila365/takeout-mini-backend
