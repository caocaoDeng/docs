---
title: 多表查询
---

# 多表查询

- 一对一
- 一对多
- 多对多

## 连接条件

在多表查询时，需要将表中有关联的字段作为查询条件进行连接。

```sql
#查询员工部门名称
SELECT employee_id, department_name FROM employees, departments
WHERE employees.department_id = departments.department_id;
```

## 表的别名

当查询字段在多个表中都存在时，必须指所在的表。

> [!TIP] SQL 优化角度
> 多表查询时，每个字段前都应该指明所在的表。

表的别名和字段别名定义类似；一旦给表起了别名后，后续就必须得使用表的别名。

```sql
SELECT t1.employee_id, t2.department_name, t2.department_id
FROM employees t1, departments t2
WHERE t1.department_id = t2.department_id;
```
当表`>2`时，我们需要使用连接符`and`来添加连接条件；n个表需要至少`n-1`个连接条件。

```sql
#查询员工所在部门和居住城市
SELECT t1.employee_id, t1.first_name, t2.department_id, t2.department_name, t3.location_id, t3.city
FROM employees t1, departments t2, locations t3
WHERE t1.department_id = t2.department_id
AND t2.location_id = t3.location_id;
```
