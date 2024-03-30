---
title: 快速开始
---

# 快速开始

## 安装

[https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)；使用`mysql --version`查看是否安装成功。


## 服务

- 通过计算机服务启动。
- 使用 CMD 命令行启动（管理员权限）。

```cmd
net start mysql83 #启动服务
net stop mysql83  #停止服务
```
  
::: danger 启动错误
当 SQL 本地服务启动不了时，将登录账户改为本地系统账户。
![alt text](https://caocaodeng.github.io/static/docs/51706358.png)
:::

## 连接SQL

```cmd
mysql -u -p
```

**启动参数**

- -P 制定端口号。
- -h 指定主机名称；默认`localhost/127.0.0.1`。
- -u 用户。
- -p 密码。

使用`quit/exit`可断开连接。

::: tip 登录
v8.3本地连接不需要密码。
:::

## 图形化工具

- [navicat](https://www.navicat.com.cn/download/navicat-premium)
- [破解版](https://www.32r.com/soft/115254.html)

## 数据导入

```cmd
source [absolute path]
```

查看数据。
```cmd
show databases; #查看数据库
use [database name] #使用数据库
show tables; #查看表
use [table name] #使用表
```
