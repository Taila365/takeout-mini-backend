# AI Agent Instructions for Takeout Backend

## Project Overview

This is a food delivery (外卖) WeChat mini-program backend built with Spring Boot 3.2.0, MyBatis, and MySQL. The frontend is a uni-app based mini-program.

## Build & Run Commands

- **Backend**: `mvnw spring-boot:run` (runs on port 8080, API prefix: `/api`)
- **Frontend**: `cd takeout-frontend && npm run dev:mp-weixin` (WeChat mini-program dev)
- **Build**: `mvnw clean package -DskipTests`

## Key Endpoints

| Controller | Base Path | Description |
|------------|-----------|-------------|
| UserController | `/api/user` | User auth, login |
| MerchantController | `/api/merchant` | Merchant info, categories |
| ProductController | `/api/product` | Product listing |
| OrderController | `/api/order` | Order creation, status |
| CartController | `/api/cart` | Shopping cart |
| AddressController | `/api/address` | User addresses |
| PaymentController | `/api/payment` | Payment processing |
| ReviewController | `/api/review` | Product reviews |

## Architecture

```
src/main/java/com/takeout/
├── controller/   # REST endpoints
├── service/      # Business logic
├── mapper/       # MyBatis data access
├── entity/       # Domain models
├── dto/          # Data transfer objects
├── config/       # Configuration (JWT, CORS)
└── utils/        # Utilities
```

## Important Conventions

1. **JWT Authentication**: All endpoints except `/user/login` and `/user/register` require JWT token in Authorization header
2. **User ID Extraction**: User ID is extracted from HTTP request attribute (`httpRequest.getAttribute("userId")`)
3. **Result Wrapper**: All API responses use `com.takeout.utils.Result<T>` wrapper
4. **Swagger**: API docs available at `/swagger-ui.html` (when enabled)

## Database Schema

Run `init.sql` to initialize the database. Key tables:

| Table | Description |
|-------|-------------|
| `user` | WeChat user (openid, nickname, avatar, phone) |
| `merchant` | Merchant info (name, address, rating, status) |
| `category` | Product categories per merchant |
| `product` | Products (name, price, image, status) |
| `order` | Orders (user_id, merchant_id, total_amount, status) |
| `order_item` | Order line items |
| `cart_item` | Shopping cart items |
| `address` | User delivery addresses |
| `payment` | Payment records |
| `review` | Product reviews |

## Common Development Tasks

- **Add new API**: Create entity → mapper → service → controller
- **Add new field**: Update entity, mapper XML, and potentially migration
- **Frontend integration**: Update `takeout-frontend/src/utils/api.js` for new endpoints