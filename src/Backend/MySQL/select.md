---
title: select 语句
---

# 基本的SELECT语句

## 语法

```sql
SELECT 字段 FROM 表名;
```
字段可以是多个，用`,`隔开。`*`表示表中所有字段。

## 伪表

```sql
SELECT 任意值/表达式;
#同上
SELECT 任意值/表达式 FROM DUAL;
#example
SELECT 1 + 2;
```
将值作为查询结果返回。

## 列的别名

```sql
#1
SELECT employee_id emp_id FROM employees;
#2
SELECT employee_id AS emp_id FROM employees;
#3
SELECT employee_id, salary "工资" FROM employees;
```
- 可以在字段后面紧跟着定义别名。
- 使用关键字`AS`（alias）定义别名，可以省略。
- 使用双引号`""`定义别名。

