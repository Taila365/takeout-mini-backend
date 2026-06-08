/*
 Navicat Premium Dump SQL

 Source Server         : MYSQL-localhost
 Source Server Type    : MySQL
 Source Server Version : 80040 (8.0.40)
 Source Host           : localhost:3306
 Source Schema         : takeout

 Target Server Type    : MySQL
 Target Server Version : 80040 (8.0.40)
 File Encoding         : 65001

 Date: 09/05/2026 19:55:51
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `province` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `district` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `detail_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_default` int NULL DEFAULT 0,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_address_user_id`(`user_id` ASC) USING BTREE,
  INDEX `idx_address_is_default`(`is_default` ASC) USING BTREE,
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of address
-- ----------------------------

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `merchant_id` bigint NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `sort` int NULL DEFAULT 0,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `merchant_id`(`merchant_id` ASC) USING BTREE,
  CONSTRAINT `category_ibfk_1` FOREIGN KEY (`merchant_id`) REFERENCES `merchant` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 56 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 1, '主食', '主要食品', 1, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (2, 1, '小食', '小吃零食', 2, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (3, 1, '饮品', '饮料', 3, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (4, 2, '奶茶', '各种奶茶', 1, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (5, 2, '果茶', '水果茶', 2, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (6, 3, '主食', '主要食品', 1, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (7, 3, '小菜', '配菜', 2, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (8, 4, '套餐', '套餐系列', 1, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (9, 4, '单点', '单点菜品', 2, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (10, 5, '香锅', '麻辣香锅', 1, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (11, 5, '海鲜', '海鲜类', 2, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (12, 6, '鸡排', '鸡排系列', 1, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (13, 6, '小食', '小吃', 2, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (14, 7, '寿司', '寿司系列', 1, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (15, 7, '刺身', '刺身系列', 2, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (16, 8, '拉面', '拉面系列', 1, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (17, 8, '小菜', '配菜', 2, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (18, 9, '饮料', '各种饮料', 1, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (19, 9, '食品', '食品', 2, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (20, 10, '水果', '各种水果', 1, '2026-04-10 20:07:06', '2026-04-10 20:07:06');
INSERT INTO `category` VALUES (21, 11, '默认分类', '甜蜜蛋糕店默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (22, 12, '默认分类', '深夜烧烤默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (23, 13, '默认分类', '优选超市默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (24, 14, '默认分类', '果蔬生鲜默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (25, 15, '默认分类', '果香园默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (26, 16, '默认分类', '快乐蛋糕默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (27, 17, '默认分类', '甜心工坊默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (28, 18, '默认分类', '烧烤王默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (29, 19, '默认分类', '炭火烧烤默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (30, 20, '默认分类', '星巴克咖啡默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (31, 21, '默认分类', '奈雪的茶默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (32, 22, '默认分类', '肯德基默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (33, 23, '默认分类', '麦当劳默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (34, 24, '默认分类', '海底捞火锅默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (35, 25, '默认分类', '西贝莜面村默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (36, 26, '默认分类', '精品超市默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (37, 27, '默认分类', '社区便利店默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (38, 28, '默认分类', '热带水果园默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (39, 29, '默认分类', '水果专卖店默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (40, 30, '默认分类', '蛋糕世界默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (41, 31, '默认分类', '甜品小站默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (42, 32, '默认分类', '夜宵烧烤默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (43, 33, '默认分类', '海鲜烧烤默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (44, 34, '默认分类', '奶茶店默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (45, 35, '默认分类', '果汁吧默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (46, 36, '默认分类', '汉堡店默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (47, 37, '默认分类', '披萨店默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (48, 38, '默认分类', '川菜馆默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (49, 39, '默认分类', '粤菜餐厅默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (50, 40, '默认分类', '日料店默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (51, 41, '默认分类', '韩料店默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (52, 42, '默认分类', '西餐店默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (53, 43, '默认分类', '湘菜馆默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (54, 44, '默认分类', '东北菜默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `category` VALUES (55, 45, '默认分类', '云南菜默认分类', 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');

-- ----------------------------
-- Table structure for merchant
-- ----------------------------
DROP TABLE IF EXISTS `merchant`;
CREATE TABLE `merchant`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `banner` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `rating` double NULL DEFAULT 5,
  `sales_volume` int NULL DEFAULT 0,
  `business_hours` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `delivery_fee` double NULL DEFAULT 0,
  `minimum_order_amount` double NULL DEFAULT 0,
  `status` int NULL DEFAULT 1,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  `category` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '美食',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_merchant_status`(`status` ASC) USING BTREE,
  INDEX `idx_merchant_category`(`category` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 46 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of merchant
-- ----------------------------
INSERT INTO `merchant` VALUES (1, '汉堡王(万科店)', '万科购物中心1楼', '13800138001', '经典汉堡、炸鸡、薯条', '/static/images/shop1.png', '/static/images/banner1.png', 4.8, 329, '10:00-22:00', 3.5, 20, 1, '2026-03-31 21:23:40', '2026-03-31 21:23:40', '快餐');
INSERT INTO `merchant` VALUES (2, '蜜雪冰城(大学城店)', '大学城美食街2号', '13800138002', '奶茶、果茶、冰淇淋', '/static/images/shop2.png', '/static/images/banner2.png', 4.7, 512, '09:30-23:00', 2, 10, 1, '2026-03-31 21:23:40', '2026-03-31 21:23:40', '饮品');
INSERT INTO `merchant` VALUES (3, '黄焖鸡米饭', '幸福小区底商10号', '13800138003', '正宗黄焖鸡，米饭不限量', '/static/images/shop3.png', '/static/images/banner3.png', 4.6, 418, '10:30-21:30', 1.5, 18, 1, '2026-03-31 21:23:40', '2026-03-31 21:23:40', '快餐');
INSERT INTO `merchant` VALUES (4, '沙县小吃', '科技路88号', '13800138004', '蒸饺、馄饨、拌面、瓦罐汤', '/static/images/shop4.png', '/static/images/banner4.png', 4.5, 276, '07:00-21:00', 1, 15, 1, '2026-03-31 21:23:40', '2026-03-31 21:23:40', '快餐');
INSERT INTO `merchant` VALUES (5, '麻辣香锅', '万达广场负一楼', '13800138005', '自选菜品，麻辣鲜香', '/static/images/shop5.png', '/static/images/banner5.png', 4.9, 399, '11:00-23:59', 4, 25, 1, '2026-03-31 21:23:40', '2026-03-31 21:23:40', '美食');
INSERT INTO `merchant` VALUES (6, '正新鸡排', '步行街东口', '13800138006', '爆浆鸡排、烤肠、酸梅汤', '/static/images/shop6.png', '/static/images/banner6.png', 4.8, 612, '10:00-24:00', 2.5, 12, 1, '2026-03-31 21:23:40', '2026-03-31 21:23:40', '快餐');
INSERT INTO `merchant` VALUES (7, '寿司先生', '中央商务区A座', '13800138007', '三文鱼寿司、刺身、饭团', '/static/images/shop7.png', '/static/images/banner7.png', 4.7, 188, '11:00-22:00', 5, 30, 1, '2026-03-31 21:23:40', '2026-03-31 21:23:40', '美食');
INSERT INTO `merchant` VALUES (8, '兰州拉面', '新华路12号', '13800138008', '牛肉拉面、凉拌牛肉、鸡蛋炒面', '/static/images/shop8.png', '/static/images/banner8.png', 4.6, 243, '08:00-21:00', 1, 16, 1, '2026-03-31 21:23:40', '2026-03-31 21:23:40', '美食');
INSERT INTO `merchant` VALUES (9, '城市超市', '城市中心商业区', '13800138001', '提供各类生活用品和食品', '/static/images/supermarket.png', '/static/images/supermarket-banner.jpg', 4.8, 1200, '08:00-22:00', 5, 20, 1, '2026-04-05 21:57:09', '2026-04-05 21:57:09', '超市');
INSERT INTO `merchant` VALUES (10, '新鲜水果店', '小区门口', '13800138002', '新鲜水果，当天配送', '/static/images/fruit.png', '/static/images/fruit-banner.jpg', 4.9, 800, '07:00-21:00', 3, 15, 1, '2026-04-05 21:57:09', '2026-04-05 21:57:09', '水果');
INSERT INTO `merchant` VALUES (11, '甜蜜蛋糕店', '商业街', '13800138003', '各种美味蛋糕和甜品', '/static/images/dessert.png', '/static/images/dessert-banner.jpg', 4.7, 600, '09:00-20:00', 6, 25, 1, '2026-04-05 21:57:09', '2026-04-05 21:57:09', '甜品');
INSERT INTO `merchant` VALUES (12, '深夜烧烤', '夜市街', '13800138004', '深夜烧烤，啤酒搭档', '/static/images/bbq.png', '/static/images/bbq-banner.jpg', 4.6, 500, '17:00-02:00', 8, 30, 1, '2026-04-05 21:57:09', '2026-04-05 21:57:09', '烧烤');
INSERT INTO `merchant` VALUES (13, '优选超市', '社区中心', '13800138005', '社区优选超市，品类齐全', '/static/images/supermarket.png', '/static/images/supermarket-banner.jpg', 4.7, 900, '08:30-21:30', 4, 18, 1, '2026-04-05 22:01:12', '2026-04-05 22:01:12', '超市');
INSERT INTO `merchant` VALUES (14, '果蔬生鲜', '农贸市场', '13800138006', '新鲜果蔬，每日配送', '/static/images/fruit.png', '/static/images/fruit-banner.jpg', 4.8, 750, '06:00-20:00', 2, 12, 1, '2026-04-05 22:01:12', '2026-04-05 22:01:12', '水果');
INSERT INTO `merchant` VALUES (15, '果香园', '步行街', '13800138007', '进口水果，品质保证', '/static/images/fruit.png', '/static/images/fruit-banner.jpg', 4.9, 600, '09:00-21:00', 5, 20, 1, '2026-04-05 22:01:12', '2026-04-05 22:01:12', '水果');
INSERT INTO `merchant` VALUES (16, '快乐蛋糕', '购物中心', '13800138008', '生日蛋糕，定制服务', '/static/images/dessert.png', '/static/images/dessert-banner.jpg', 4.6, 500, '10:00-20:30', 5, 22, 1, '2026-04-05 22:01:12', '2026-04-05 22:01:12', '甜品');
INSERT INTO `merchant` VALUES (17, '甜心工坊', '校园附近', '13800138009', '手工甜品，健康美味', '/static/images/dessert.png', '/static/images/dessert-banner.jpg', 4.7, 450, '11:00-22:00', 4, 18, 1, '2026-04-05 22:01:12', '2026-04-05 22:01:12', '甜品');
INSERT INTO `merchant` VALUES (18, '烧烤王', '美食街', '13800138010', '特色烧烤，秘制配方', '/static/images/bbq.png', '/static/images/bbq-banner.jpg', 4.8, 700, '16:00-03:00', 6, 25, 1, '2026-04-05 22:01:12', '2026-04-05 22:01:12', '烧烤');
INSERT INTO `merchant` VALUES (19, '炭火烧烤', '河边夜市', '13800138011', '传统炭火烧烤', '/static/images/bbq.png', '/static/images/bbq-banner.jpg', 4.5, 400, '17:30-01:00', 7, 28, 1, '2026-04-05 22:01:12', '2026-04-05 22:01:12', '烧烤');
INSERT INTO `merchant` VALUES (20, '星巴克咖啡', '商业中心', '13800138012', '全球连锁咖啡品牌', '/static/images/drink.png', '/static/images/drink-banner.jpg', 4.9, 1500, '07:00-22:00', 8, 30, 1, '2026-04-05 22:01:12', '2026-04-05 22:01:12', '饮品');
INSERT INTO `merchant` VALUES (21, '奈雪的茶', '购物中心', '13800138013', '高端茶饮品牌', '/static/images/drink.png', '/static/images/drink-banner.jpg', 4.8, 1200, '10:00-22:00', 6, 25, 1, '2026-04-05 22:01:12', '2026-04-05 22:01:12', '饮品');
INSERT INTO `merchant` VALUES (22, '肯德基', '商业街', '13800138014', '全球连锁快餐', '/static/images/fastfood.png', '/static/images/fastfood-banner.jpg', 4.7, 2000, '08:00-22:00', 5, 20, 1, '2026-04-05 22:01:12', '2026-04-05 22:01:12', '快餐');
INSERT INTO `merchant` VALUES (23, '麦当劳', '购物中心', '13800138015', '全球连锁快餐', '/static/images/fastfood.png', '/static/images/fastfood-banner.jpg', 4.6, 1800, '07:00-23:00', 6, 22, 1, '2026-04-05 22:01:12', '2026-04-05 22:01:12', '快餐');
INSERT INTO `merchant` VALUES (24, '海底捞火锅', '商业中心', '13800138016', '高端火锅品牌', '/static/images/food.png', '/static/images/food-banner.jpg', 4.9, 1500, '10:00-02:00', 10, 50, 1, '2026-04-05 22:01:12', '2026-04-05 22:01:12', '美食');
INSERT INTO `merchant` VALUES (25, '西贝莜面村', '购物中心', '13800138017', '西北风味餐厅', '/static/images/food.png', '/static/images/food-banner.jpg', 4.8, 1200, '11:00-22:00', 8, 30, 1, '2026-04-05 22:01:12', '2026-04-05 22:01:12', '美食');
INSERT INTO `merchant` VALUES (26, '精品超市', '高端商业区', '13800138018', '高端精品超市，进口商品', '/static/images/supermarket.png', '/static/images/supermarket-banner.jpg', 4.9, 800, '09:00-22:00', 6, 25, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '超市');
INSERT INTO `merchant` VALUES (27, '社区便利店', '居民小区', '13800138019', '24小时便利店', '/static/images/supermarket.png', '/static/images/supermarket-banner.jpg', 4.6, 600, '00:00-24:00', 3, 15, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '超市');
INSERT INTO `merchant` VALUES (28, '热带水果园', '郊区果园', '13800138020', '热带水果，新鲜采摘', '/static/images/fruit.png', '/static/images/fruit-banner.jpg', 4.9, 700, '08:00-20:00', 4, 18, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '水果');
INSERT INTO `merchant` VALUES (29, '水果专卖店', '商业街', '13800138021', '专业水果销售', '/static/images/fruit.png', '/static/images/fruit-banner.jpg', 4.7, 550, '09:00-21:00', 5, 20, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '水果');
INSERT INTO `merchant` VALUES (30, '蛋糕世界', '购物中心', '13800138022', '各种蛋糕，应有尽有', '/static/images/dessert.png', '/static/images/dessert-banner.jpg', 4.8, 600, '10:00-21:00', 6, 22, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '甜品');
INSERT INTO `merchant` VALUES (31, '甜品小站', '校园门口', '13800138023', '学生喜爱的甜品', '/static/images/dessert.png', '/static/images/dessert-banner.jpg', 4.6, 400, '11:00-22:30', 3, 15, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '甜品');
INSERT INTO `merchant` VALUES (32, '夜宵烧烤', '夜市', '13800138024', '深夜美食，烧烤为主', '/static/images/bbq.png', '/static/images/bbq-banner.jpg', 4.7, 650, '18:00-04:00', 8, 30, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '烧烤');
INSERT INTO `merchant` VALUES (33, '海鲜烧烤', '海边', '13800138025', '新鲜海鲜烧烤', '/static/images/bbq.png', '/static/images/bbq-banner.jpg', 4.8, 750, '17:00-02:00', 10, 40, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '烧烤');
INSERT INTO `merchant` VALUES (34, '奶茶店', '商业街', '13800138026', '各种奶茶饮品', '/static/images/drink.png', '/static/images/drink-banner.jpg', 4.7, 900, '10:00-22:00', 4, 15, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '饮品');
INSERT INTO `merchant` VALUES (35, '果汁吧', '健身中心', '13800138027', '鲜榨果汁，健康饮品', '/static/images/drink.png', '/static/images/drink-banner.jpg', 4.8, 500, '08:00-21:00', 5, 18, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '饮品');
INSERT INTO `merchant` VALUES (36, '汉堡店', '商业街', '13800138028', '特色汉堡，现做现卖', '/static/images/fastfood.png', '/static/images/fastfood-banner.jpg', 4.6, 800, '09:00-22:00', 4, 15, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '快餐');
INSERT INTO `merchant` VALUES (37, '披萨店', '购物中心', '13800138029', '意式披萨，手工制作', '/static/images/fastfood.png', '/static/images/fastfood-banner.jpg', 4.7, 700, '10:00-22:30', 6, 20, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '快餐');
INSERT INTO `merchant` VALUES (38, '川菜馆', '美食街', '13800138030', '正宗川菜，麻辣鲜香', '/static/images/food.png', '/static/images/food-banner.jpg', 4.8, 900, '11:00-22:00', 7, 25, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '美食');
INSERT INTO `merchant` VALUES (39, '粤菜餐厅', '高端商业区', '13800138031', '正宗粤菜，精致美味', '/static/images/food.png', '/static/images/food-banner.jpg', 4.9, 850, '11:30-21:30', 10, 50, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '美食');
INSERT INTO `merchant` VALUES (40, '日料店', '商业街', '13800138032', '正宗日本料理', '/static/images/food.png', '/static/images/food-banner.jpg', 4.8, 600, '11:00-22:00', 8, 30, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '美食');
INSERT INTO `merchant` VALUES (41, '韩料店', '大学城', '13800138033', '正宗韩国料理', '/static/images/food.png', '/static/images/food-banner.jpg', 4.7, 550, '10:30-22:30', 6, 20, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '美食');
INSERT INTO `merchant` VALUES (42, '西餐店', '高端商业区', '13800138034', '正宗西餐，浪漫氛围', '/static/images/food.png', '/static/images/food-banner.jpg', 4.9, 700, '11:30-22:00', 12, 60, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '美食');
INSERT INTO `merchant` VALUES (43, '湘菜馆', '美食街', '13800138035', '正宗湘菜，香辣可口', '/static/images/food.png', '/static/images/food-banner.jpg', 4.7, 650, '11:00-22:00', 6, 25, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '美食');
INSERT INTO `merchant` VALUES (44, '东北菜', '居民区', '13800138036', '正宗东北菜，量大实惠', '/static/images/food.png', '/static/images/food-banner.jpg', 4.6, 500, '10:00-21:00', 5, 20, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '美食');
INSERT INTO `merchant` VALUES (45, '云南菜', '特色街区', '13800138037', '正宗云南菜，民族风味', '/static/images/food.png', '/static/images/food-banner.jpg', 4.8, 450, '11:00-21:30', 7, 28, 1, '2026-04-05 22:04:58', '2026-04-05 22:04:58', '美食');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `order_no` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint NOT NULL,
  `merchant_id` bigint NOT NULL,
  `address_id` bigint NOT NULL,
  `total_amount` double NOT NULL,
  `delivery_fee` double NOT NULL,
  `actual_amount` double NOT NULL,
  `order_status` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pay_status` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pay_method` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `order_time` datetime NOT NULL,
  `pay_time` datetime NULL DEFAULT NULL,
  `delivery_time` datetime NULL DEFAULT NULL,
  `complete_time` datetime NULL DEFAULT NULL,
  `remark` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `cancel_reason` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `order_no`(`order_no` ASC) USING BTREE,
  INDEX `address_id`(`address_id` ASC) USING BTREE,
  INDEX `idx_order_order_no`(`order_no` ASC) USING BTREE,
  INDEX `idx_order_user_id`(`user_id` ASC) USING BTREE,
  INDEX `idx_order_merchant_id`(`merchant_id` ASC) USING BTREE,
  INDEX `idx_order_order_status`(`order_status` ASC) USING BTREE,
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `order_ibfk_2` FOREIGN KEY (`merchant_id`) REFERENCES `merchant` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `order_ibfk_3` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for order_item
-- ----------------------------
DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `order_item`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `order_id` bigint NOT NULL,
  `product_id` bigint NOT NULL,
  `product_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `price` double NOT NULL,
  `quantity` int NOT NULL,
  `subtotal` double NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `product_id`(`product_id` ASC) USING BTREE,
  INDEX `idx_order_item_order_id`(`order_id` ASC) USING BTREE,
  CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `order_item_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order_item
-- ----------------------------

-- ----------------------------
-- Table structure for payment
-- ----------------------------
DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `payment_no` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `amount` double NOT NULL,
  `pay_method` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pay_status` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `pay_time` datetime NULL DEFAULT NULL,
  `create_time` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `payment_no`(`payment_no` ASC) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  INDEX `idx_payment_payment_no`(`payment_no` ASC) USING BTREE,
  INDEX `idx_payment_order_id`(`order_id` ASC) USING BTREE,
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of payment
-- ----------------------------

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `merchant_id` bigint NOT NULL,
  `category_id` bigint NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `price` double NOT NULL,
  `stock` int NULL DEFAULT 0,
  `sales_volume` int NULL DEFAULT 0,
  `rating` double NULL DEFAULT 5,
  `status` int NULL DEFAULT 1,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_product_merchant_id`(`merchant_id` ASC) USING BTREE,
  INDEX `idx_product_category_id`(`category_id` ASC) USING BTREE,
  INDEX `idx_product_status`(`status` ASC) USING BTREE,
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`merchant_id`) REFERENCES `merchant` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 126 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (25, 1, 1, '双层芝士汉堡', '双层牛肉配芝士，经典美味', '/static/images/burger1.png', 25.9, 100, 150, 4.8, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (26, 1, 1, '香辣鸡腿堡', '香辣鸡腿，口感丰富', '/static/images/burger2.png', 22.9, 120, 200, 4.7, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (27, 1, 2, '薯条', '酥脆可口，经典小食', '/static/images/fries.png', 12.9, 200, 300, 4.6, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (28, 1, 3, '可乐', '冰镇可乐，畅爽解渴', '/static/images/cola.png', 9.9, 300, 400, 4.5, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (29, 2, 4, '珍珠奶茶', '经典珍珠奶茶，香甜可口', '/static/images/milktea1.png', 15.9, 150, 250, 4.7, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (30, 2, 5, '柠檬水', '新鲜柠檬，清爽解渴', '/static/images/lemonade.png', 12.9, 200, 300, 4.6, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (31, 2, 4, '芝士奶盖茶', '浓郁芝士，口感丰富', '/static/images/cheesetea.png', 18.9, 100, 180, 4.8, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (32, 3, 6, '黄焖鸡米饭', '经典黄焖鸡，米饭管够', '/static/images/hjm.png', 23.9, 80, 150, 4.7, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (33, 3, 6, '黄焖排骨饭', '排骨黄焖，肉质鲜嫩', '/static/images/hgp.png', 26.9, 60, 120, 4.8, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (34, 3, 7, '小菜', '爽口小菜，解腻必备', '/static/images/side.png', 5.9, 100, 200, 4.5, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (35, 4, 8, '沙县小吃套餐', '沙县经典套餐', '/static/images/shaxian1.png', 19.9, 100, 200, 4.6, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (36, 4, 9, '蒸饺', '手工蒸饺，皮薄馅大', '/static/images/dumpling.png', 15.9, 80, 180, 4.7, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (37, 5, 10, '麻辣香锅', '自选食材，麻辣鲜香', '/static/images/malaxiangguo.png', 39.9, 60, 120, 4.8, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (38, 5, 11, '香辣虾', '新鲜大虾，香辣可口', '/static/images/shrimp.png', 49.9, 40, 80, 4.9, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (39, 6, 12, '鸡排', '招牌鸡排，外酥里嫩', '/static/images/chicken.png', 18.9, 100, 250, 4.7, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (40, 6, 13, '鸡米花', '酥脆鸡米花，休闲小食', '/static/images/popcorn.png', 12.9, 150, 300, 4.6, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (41, 7, 14, '寿司拼盘', '多种寿司，一次尝遍', '/static/images/sushi1.png', 49.9, 50, 100, 4.8, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (42, 7, 15, '三文鱼寿司', '新鲜三文鱼，口感极佳', '/static/images/salmon.png', 29.9, 60, 120, 4.9, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (43, 8, 16, '兰州拉面', '正宗兰州拉面', '/static/images/lamian.png', 19.9, 80, 180, 4.7, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (44, 8, 16, '牛肉拉面', '牛肉丰富，汤头浓郁', '/static/images/beefnoodle.png', 25.9, 60, 150, 4.8, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (45, 9, 18, '矿泉水', '纯净矿泉水', '/static/images/water.png', 2.9, 500, 1000, 4.5, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (46, 9, 19, '面包', '新鲜面包，早餐必备', '/static/images/bread.png', 8.9, 100, 200, 4.6, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (47, 10, 20, '苹果', '新鲜苹果，脆甜可口', '/static/images/apple.png', 12.9, 200, 300, 4.7, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (48, 10, 20, '香蕉', '新鲜香蕉，软糯香甜', '/static/images/banana.png', 8.9, 250, 400, 4.6, 1, '2026-04-10 20:07:57', '2026-04-10 20:07:57');
INSERT INTO `product` VALUES (49, 1, 1, '双层牛肉堡', '双层牛肉，经典口味', '/static/images/burger3.png', 28.9, 80, 120, 4.9, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (50, 1, 1, '田园蔬菜堡', '健康蔬菜，营养美味', '/static/images/burger4.png', 21.9, 60, 80, 4.6, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (51, 1, 2, '洋葱圈', '酥脆洋葱圈', '/static/images/onion.png', 10.9, 150, 200, 4.7, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (52, 1, 2, '鸡柳', '酥脆鸡柳', '/static/images/chickenstrip.png', 14.9, 100, 150, 4.8, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (53, 1, 3, '雪碧', '冰镇雪碧', '/static/images/sprite.png', 9.9, 200, 300, 4.5, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (54, 1, 3, '橙汁', '鲜榨橙汁', '/static/images/orange.png', 12.9, 100, 150, 4.7, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (55, 2, 4, '抹茶奶茶', '抹茶口味奶茶', '/static/images/matcha.png', 17.9, 80, 120, 4.8, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (56, 2, 4, '草莓奶茶', '草莓口味奶茶', '/static/images/strawberry.png', 16.9, 70, 100, 4.7, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (57, 2, 5, '西瓜汁', '新鲜西瓜汁', '/static/images/watermelon.png', 15.9, 60, 90, 4.9, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (58, 2, 5, '芒果汁', '新鲜芒果汁', '/static/images/mango.png', 16.9, 50, 80, 4.8, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (59, 3, 6, '黄焖五花肉饭', '五花肉黄焖', '/static/images/hww.png', 27.9, 50, 90, 4.8, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (60, 3, 6, '黄焖牛肉饭', '牛肉黄焖', '/static/images/hniurou.png', 32.9, 40, 70, 4.9, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (61, 3, 7, '泡菜', '爽口泡菜', '/static/images/paocai.png', 6.9, 100, 150, 4.6, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (62, 3, 7, '卤蛋', '卤味鸡蛋', '/static/images/ludan.png', 3.9, 200, 300, 4.5, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (63, 4, 8, '全家福套餐', '沙县全家福', '/static/images/quanfu.png', 29.9, 40, 60, 4.8, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (64, 4, 8, '商务套餐', '商务人士套餐', '/static/images/shangwu.png', 25.9, 50, 80, 4.7, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (65, 4, 9, '拌面', '沙县拌面', '/static/images/banmian.png', 12.9, 80, 120, 4.6, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (66, 4, 9, '扁肉', '沙县扁肉', '/static/images/bianrou.png', 10.9, 100, 150, 4.7, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (67, 5, 10, '微辣香锅', '微辣口味', '/static/images/weila.png', 36.9, 40, 60, 4.7, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (68, 5, 10, '特辣香锅', '特辣口味', '/static/images/tela.png', 39.9, 30, 50, 4.8, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (69, 5, 11, '香辣蟹', '新鲜螃蟹', '/static/images/xie.png', 59.9, 20, 30, 4.9, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (70, 5, 11, '香辣鱿鱼', '新鲜鱿鱼', '/static/images/youyu.png', 45.9, 25, 40, 4.8, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (71, 6, 12, '孜然鸡排', '孜然口味', '/static/images/ziran.png', 19.9, 60, 100, 4.8, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (72, 6, 12, '黑椒鸡排', '黑椒口味', '/static/images/heijiao.png', 20.9, 50, 80, 4.7, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (73, 6, 13, '上校鸡块', '上校鸡块', '/static/images/shangxiao.png', 15.9, 80, 120, 4.6, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (74, 6, 13, '薯条', '酥脆薯条', '/static/images/fries2.png', 12.9, 100, 150, 4.5, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (75, 7, 14, '金枪鱼寿司', '金枪鱼口味', '/static/images/jinqiangyu.png', 32.9, 40, 60, 4.8, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (76, 7, 14, '虾寿司', '鲜虾口味', '/static/images/xia.png', 35.9, 30, 50, 4.9, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (77, 7, 15, '三文鱼刺身', '新鲜三文鱼', '/static/images/sanwenyu.png', 68.9, 20, 30, 4.9, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (78, 7, 15, '北极贝刺身', '新鲜北极贝', '/static/images/beijibei.png', 58.9, 15, 25, 4.8, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (79, 8, 16, '酸菜拉面', '酸菜口味', '/static/images/suancai.png', 21.9, 60, 90, 4.7, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (80, 8, 16, '番茄拉面', '番茄口味', '/static/images/fanqie.png', 22.9, 50, 80, 4.6, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (81, 8, 17, '凉拌黄瓜', '爽口黄瓜', '/static/images/huanggua.png', 8.9, 80, 120, 4.5, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (82, 8, 17, '卤牛肉', '卤味牛肉', '/static/images/luniurou.png', 18.9, 40, 60, 4.8, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (83, 9, 18, '可乐', '可口可乐', '/static/images/kele.png', 3.9, 300, 500, 4.5, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (84, 9, 18, '雪碧', '雪碧', '/static/images/xuebi.png', 3.9, 250, 400, 4.4, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (85, 9, 19, '饼干', '各种饼干', '/static/images/binggan.png', 12.9, 150, 200, 4.6, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (86, 9, 19, '方便面', '各种方便面', '/static/images/fangbianmian.png', 5.9, 200, 300, 4.5, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (87, 10, 20, '橙子', '新鲜橙子', '/static/images/chengzi.png', 15.9, 150, 200, 4.7, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (88, 10, 20, '葡萄', '新鲜葡萄', '/static/images/putao.png', 18.9, 120, 150, 4.8, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (89, 10, 20, '草莓', '新鲜草莓', '/static/images/caomei.png', 22.9, 80, 100, 4.9, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (90, 10, 20, '猕猴桃', '新鲜猕猴桃', '/static/images/mihoutao.png', 16.9, 100, 120, 4.7, 1, '2026-04-10 20:30:03', '2026-04-10 20:30:03');
INSERT INTO `product` VALUES (91, 11, 21, '甜蜜蛋糕店招牌商品', '来自甜蜜蛋糕店的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (92, 12, 22, '深夜烧烤招牌商品', '来自深夜烧烤的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (93, 13, 23, '优选超市招牌商品', '来自优选超市的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (94, 14, 24, '果蔬生鲜招牌商品', '来自果蔬生鲜的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (95, 15, 25, '果香园招牌商品', '来自果香园的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (96, 16, 26, '快乐蛋糕招牌商品', '来自快乐蛋糕的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (97, 17, 27, '甜心工坊招牌商品', '来自甜心工坊的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (98, 18, 28, '烧烤王招牌商品', '来自烧烤王的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (99, 19, 29, '炭火烧烤招牌商品', '来自炭火烧烤的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (100, 20, 30, '星巴克咖啡招牌商品', '来自星巴克咖啡的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (101, 21, 31, '奈雪的茶招牌商品', '来自奈雪的茶的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (102, 22, 32, '肯德基招牌商品', '来自肯德基的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (103, 23, 33, '麦当劳招牌商品', '来自麦当劳的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (104, 24, 34, '海底捞火锅招牌商品', '来自海底捞火锅的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (105, 25, 35, '西贝莜面村招牌商品', '来自西贝莜面村的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (106, 26, 36, '精品超市招牌商品', '来自精品超市的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (107, 27, 37, '社区便利店招牌商品', '来自社区便利店的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (108, 28, 38, '热带水果园招牌商品', '来自热带水果园的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (109, 29, 39, '水果专卖店招牌商品', '来自水果专卖店的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (110, 30, 40, '蛋糕世界招牌商品', '来自蛋糕世界的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (111, 31, 41, '甜品小站招牌商品', '来自甜品小站的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (112, 32, 42, '夜宵烧烤招牌商品', '来自夜宵烧烤的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (113, 33, 43, '海鲜烧烤招牌商品', '来自海鲜烧烤的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (114, 34, 44, '奶茶店招牌商品', '来自奶茶店的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (115, 35, 45, '果汁吧招牌商品', '来自果汁吧的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (116, 36, 46, '汉堡店招牌商品', '来自汉堡店的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (117, 37, 47, '披萨店招牌商品', '来自披萨店的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (118, 38, 48, '川菜馆招牌商品', '来自川菜馆的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (119, 39, 49, '粤菜餐厅招牌商品', '来自粤菜餐厅的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (120, 40, 50, '日料店招牌商品', '来自日料店的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (121, 41, 51, '韩料店招牌商品', '来自韩料店的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (122, 42, 52, '西餐店招牌商品', '来自西餐店的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (123, 43, 53, '湘菜馆招牌商品', '来自湘菜馆的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (124, 44, 54, '东北菜招牌商品', '来自东北菜的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');
INSERT INTO `product` VALUES (125, 45, 55, '云南菜招牌商品', '来自云南菜的默认商品', '/static/images/default-food.png', 19.9, 100, 0, 4.8, 1, '2026-04-15 19:30:07', '2026-04-15 19:30:07');

-- ----------------------------
-- Table structure for review
-- ----------------------------
DROP TABLE IF EXISTS `review`;
CREATE TABLE `review`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `order_id` bigint NOT NULL,
  `product_id` bigint NOT NULL,
  `merchant_id` bigint NOT NULL,
  `rating` int NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `images` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `create_time` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `idx_review_order_id`(`order_id` ASC) USING BTREE,
  INDEX `idx_review_product_id`(`product_id` ASC) USING BTREE,
  INDEX `idx_review_merchant_id`(`merchant_id` ASC) USING BTREE,
  INDEX `idx_review_user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `review_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `review_ibfk_3` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `review_ibfk_4` FOREIGN KEY (`merchant_id`) REFERENCES `merchant` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of review
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `openid` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nickname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `create_time` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `openid`(`openid` ASC) USING BTREE,
  INDEX `idx_user_openid`(`openid` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'o123456789_test_openid', '微信用户', '默认头像地址', NULL, '2026-03-30 21:30:02');
INSERT INTO `user` VALUES (2, 'test1', '微信用户', '默认头像地址', NULL, '2026-03-30 21:35:29');
INSERT INTO `user` VALUES (3, 'mock_openid_1775995653423', '微信用户', '默认头像地址', NULL, '2026-04-12 20:07:33');
INSERT INTO `user` VALUES (4, 'o7FN71zvNvAsqO8XUKfCSitnrrm0', '微信用户', '默认头像地址', NULL, '2026-04-13 20:57:57');

SET FOREIGN_KEY_CHECKS = 1;
