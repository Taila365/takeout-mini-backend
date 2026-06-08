# 用 nginx 运行前端
FROM nginx:alpine

# 复制前端打包后的 dist 文件夹到 nginx
COPY dist/ /usr/share/nginx/html/

# 复制 nginx 配置（解决跨域 + 端口 5174）
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 5174 端口
EXPOSE 5174

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]