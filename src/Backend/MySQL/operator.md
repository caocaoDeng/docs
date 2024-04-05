# 运算符&查询条件

基本上与其它语言的运算符一致，以下列举一些比较特殊的。

## 算术运算符

| 操作符       | 描述          | example |
| ------------ | :----------- | :------ |
| +      | 在 SQL 中，`+`没有连接的作用，只能用于计算，非数值类型的会进行**隐式转换** | `100 + '1'` => `101` |
| div    | 表示除法运算符 | `100 div 2` => `50.0` |
| mod    | 取模运算符，符号跟模数有关系 | `2 mod 2` => `0` |

> [!WARNING] 无法隐式转换成数值类型会被作为0使用。

## 比较运算符

| 操作符       | 描述          | example |
| ------------ | :----------- | :------ |
| =   | 在 SQL 中，`=`是比较操作不是赋值操作 | `1 = '1'` => `1` |
| <=> | 安全等于，为 NULL 而生 | `NULL <=> NULL` => `1` |
| <>  | 不等于 | `1 <> 2` => `1` |

> [!WARNING] 比较的返回值是 `0` 或 `1`。
> 
> 如果操作数都是字符串，比较的 ANSI 编码。
> 
> 只要有`NULL`参与的，结果都为 NULL。

## 逻辑运算符

| 操作符 | 描述        | example |
| ----- | :---------- | :------ |
| NOT   | 逻辑非 -> `!`  |  |
| AND   | 逻辑与 -> `&&` |  |
| OR    | 逻辑或 -> `\|\|` |  |
| XOR    | 逻辑异或，一真一假 |  |

## 位运算符

> [!WARNING] 暂不做了解，后面再看。

## 查询条件（关键字）

| 关键字       | 描述          | example |
| -------------------| :----------- | :------ |
| IS NULL            | 判断一个值、字符串或表达式是否**为空** | [example](#NULL相关) |
| IS NOT NULL        | 判断一个值、字符串或表达式是否**不为空** | [example](#NULL相关) |
| ISNULL             | 是一个函数，同 IS NULL | [example](#NULL相关) |
| LEAST              | 返回多个值中最小的 | [example](#最值相关) |
| GREATEST           | 返回多个值中最大的 | [example](#最值相关) |
| BETWEEN...AND..    | 判断是否在这个范围内 | `SELECT salary FROM employees WHERE salary BETWEEN 10000 AND 16000;` |
| IN                 | 判断一个值是否在列表中 | `SELECT department_id FROM employees WHERE department_id IN(10, 20, 30);` |
| NOT IN             | 判断一个值是否不在列表中 | `SELECT department_id FROM employees WHERE department_id NOT IN(10, 20, 30);` |
| LIKE               | 模糊查询 | [example](#模糊查询) |
| REGEXP             | 正则 | `SELECT first_name FROM employees WHERE first_name REGEXP 'na$';` |
| RLIKE              | 正则 | `SELECT first_name FROM employees WHERE first_name RLIKE '^n';` |
| ORDER BY           | 对查询的数据进行排序操作 | [排序](#排序) |
| LIMIT              | 对查询数据进行偏移操作 | [limit](#limit) |

### NULL相关
  
  ```sql
  #查询为NULL的
  SELECT employee_id, first_name, commission_pct FROM employees WHERE commission_pct IS NULL;
  #其他写法
  SELECT employee_id, first_name, commission_pct FROM employees WHERE commission_pct <=> NULL;
  #ISNULL用法
  SELECT employee_id, first_name, commission_pct FROM employees WHERE ISNULL(commission_pct);

  #查询不为NULL的
  SELECT employee_id, first_name, commission_pct FROM employees WHERE commission_pct IS NOT NULL;
  #其他写法
  SELECT employee_id, first_name, commission_pct FROM employees WHERE NOT commission_pct <=> NULL;
  ```

### 最值相关

  ```sql
  #分解ASCL编码进行比较
  SELECT LEAST('dw', 'dcc', 'dc');
  SELECT GREATEST('dw', 'dcc', 'dc');
  ```
  > [!TIP] `LENGTH`方法可以返回字符串长度。 

### 模糊查询

  需配合`%`使用；表示任意个字符。`_`代表一个不确定的字符。使用`ESCAPE`关键字可指定转义字符（默认`\`）。

  ```sql
  #查询出现过d的
  SELECT first_name FROM employees WHERE first_name LIKE '%d%';
  #以d开头
  SELECT first_name FROM employees WHERE first_name LIKE 'd%';
  #以d结尾
  SELECT first_name FROM employees WHERE first_name LIKE '%d';
  #第二个字符为d的
  SELECT first_name FROM employees WHERE first_name LIKE '_d%';
  #查询第二个字符为_的
  SELECT first_name FROM employees WHERE first_name LIKE '_\_d%';
  #指定转义字符
  SELECT first_name FROM employees WHERE first_name LIKE '_*_d%' ESCAPE '*';
  ```

### 排序

  - 升序 ASC。
  - 降序 DESC。

默认是升序； 

```sql
SELECT * FROM employees ORDER BY salary;
SELECT first_name, salary m FROM employees WHERE salary BETWEEN 8000 AND 30000 ORDER BY m DESC;
```
> [!WARNING] 列的别名可以在 ORDER BY 中使用，不能在 WHERE 中使用；
> WHERE 必须声明在 FROM 之后，ORDER BY 之前。

二级或多级排序。

```sql
SELECT employee_id, salary FROM employees ORDER BY employee_id, salary DESC;
```

### limit

指定偏移量和条目数来实现分页的功能。

```sql
SELECT * FROM employees LIMIT 0, 10;
```
