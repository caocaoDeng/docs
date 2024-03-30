---
title: 介绍
---
#
![MySQL](/assets/mysql-logo.svg)

## 基本概念

- 数据库（Database）

  存储数据的仓库，保存了一系列有组织的数据，简称 DB。

- 数据库管理系统（Database management System）

  操纵和管理数据库的大型软件，简称 DBMS。

- 结构化查询语言（Structured Query Language）

  与数据库通信的语言，简称 SQL。

### RDBMS 和 非RDBMS

- RDBMS（关系型数据库）

  将**复杂**的数据结构转为简单的二元关系（二维表格）；以行（row）和列（column）的形式存储数据，构成一张表（table），
  表与表之间的数据存在关系，多个表组成一个数据库。

- NoSQL（非关系型数据库）

  以键值对的形式存储数据，性能比较高。

## SQL 分类

- DDL（数据定义语言），定义不同的数据库、表、视图等数据库对象。`CREATE、DROP、ALTER`。
- DML（数据操作语言），用于添加、删除、更新和查询数据库记录。`SELECT、INSERT、UPDATE、DELETE`。
- DCL（数据控制语言），定义数据库、表、字段、用户的访问权限和安全级别。`GRANT、REVOKE、COMMIT、ROLLBACK、SAVEPOINT`。

## SQL 规则

- 每条命令以`;、\g、\G`结束。
- 关键字不能分行和缩写。
- SQL 在 window 下不区分大小写，推荐关键字使用大写。
- 注释方式：
  - 单行注释 `#`/`--`。
  - 多行注释 `/**/`。
- 数据库、表名不得超过30个字符。
