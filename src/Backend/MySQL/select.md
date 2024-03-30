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

## 去重

使用关键字`DISTINCT`对查询的结果集进行去重。
```sql
SELECT DISTINCT department_id FROM employees;
```

> [!WARNING] 在查询字段中间使用 `DISTINCT` 会引发报错。
```sql
#example 错误写法
SELECT salary, DISTINCT department_id FROM employees;
```

## 空值判断

关键字`IFNULL`；参数1是进行判断的值，参数2是为 null 的后补值。
```sql
SELECT employee_id, salary "月薪", salary * (1 + IFNULL(commission_pct, 0)) * 12 "年薪" FROM employees;
```

## 着重号

在查询时，当字段名或表名出现了与关键字重名的情况可以使用反单引号` `` `进行标识。
```sql
SELECT * FROM `order`;
```

## 查询常数

为每一条数据新增一列常数字段。
```sql
SELECT '美团', first_name, last_name FROM employees;
```

## 查看表结构

在某些情况下需要查看表字段的类型，可以使用关键字`DESCRIBE`/`DESC`。
```sql
DESCRIBE employees;
DESC employees;
```

## 查询条件

某些情况下，我们需要对查询结果进行过滤。列如：工资 > 16000；可以使用关键字`WHERE`，必须紧跟着`FROM`后面。
```sql
SELECT first_name, salary FROM employees WHERE salary > 16000;
```
