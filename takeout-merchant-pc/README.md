# 外卖商家 PC 管理端

基于 Vue 3 + Vite + Element Plus，对接 `takeout-backend` REST API。

## 功能

- **商家入驻注册**：`POST /api/merchant/register`，自动生成 `merchant_id`
- **商家登录**：使用 `merchant_id` + 登记手机号
- 工作台、订单、商品、分类、店铺设置

## 启动

```bash
cd takeout-merchant-pc
npm install
npm run dev
```

访问 http://localhost:5174

## merchant_id 说明

| 字段 | 说明 |
|------|------|
| `merchant_id` | 业务编号，如 `M00000001` 或 `M20260524X7K9P2`，**全项目统一使用** |
| `id` | 数据库内部主键，仅后端关联用，前端/接口不传 |

已有数据库请执行迁移：

```bash
mysql -uroot -p takeout < src/main/resources/db/migration_merchant_id.sql
```

## 演示账号

- merchant_id: `M00000001`
- 手机号: `13800138001`（汉堡王）

## 新商家入驻

1. 打开 http://localhost:5174/register
2. 填写店铺信息并提交
3. 保存返回的 **merchant_id**，用于 PC 登录与小程序对接
