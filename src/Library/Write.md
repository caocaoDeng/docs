---
title: 八股文【手写题】
---

## 千位符转换

```js
function format(number) {
  return number.replace(/(?!^)(?=(\d{3})+\.)/g, ',')
  // Intl.NumberFormat().format(number)
  // number.toLocaleString('en')
}
```

## 深拷贝

```js
const cloneDeep = data => {
  let result = null
  const type = Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
  if (type === 'object') {
    result = {}
    for (const i in data) {
      result[i] = cloneDeep(data[i])
    }
  } else if (type === 'array') {
    result = []
    for (let i = 0; i < data.length; i++) {
      result.push(cloneDeep(data[i]))
    }
  } else {
    return data
  }
  return result
}
```

## 判断两个对象是否相等

```js
function checkObj(obj1, obj2) {
  if (typeof obj1 != 'object' || typeof obj2 != 'object') return false
  // 内存地址相同直接返回true
  if (obj1 === obj2) return true
  // 获取对象的所有属性
  const obj1Keys = Object.getOwnPropertyNames(obj1)
  const obj2Keys = Object.getOwnPropertyNames(obj2)
  if (obj1Keys.length !== obj2Keys.length) return false
  for (let i = 0; i < obj1Keys.length; i++) {
    if (obj2Keys.includes(obj1Keys[i])) {
      if (typeof obj1[obj1Keys[i]] === 'object') {
        return checkObj(obj1[obj1Keys[i]], obj2[obj1Keys[i]])
      } else {
        if (obj1[obj1Keys[i]] !== obj2[obj1Keys[i]]) return false
      }
    } else {
      return false
    }
  }
  return true
}
```

## 扁平化数组

```js
Array.prototype.myFlat = function (deep) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      if (deep < 1) {
        result = [...result, this[i]]
      } else {
        result = [...result, ...this[i].myFlat(deep)]
        deep--
      }
    } else {
      result.push(this[i])
    }
  }
  return result
}
```

## call

```js
Function.prototype.myCall = function (target) {
  // 获取参数
  const args = [...arguments].slice(1)
  // 设置默认主体
  target = target || window
  target.fn = this
  const result = target.fn(...args)
  delete target.fn
  return result
}
```

## apply

```js
Function.prototype.myApply = function (target) {
  const args = arguments[1]
  target = target || window
  target.fn = this
  const result = args ? target.fn(...args) : target.fn()
  delete target.fn
  return result
}
```

## bind

```js
Function.prototype.myBind = function (target) {
  const args = [...arguments].slice(1)
  target = target || window
  return (...args2) => {
    return this.apply(target, [...args, ...args2])
  }
}
```
