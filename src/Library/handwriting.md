---
title: 手写
---

## 扁平化数组

```js
Array.prototype.myFlat = function (deep) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      if (deep < 1) {
        result = [...result, ...this[i]]
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

## 深拷贝

```js
const deepClone = target => {
  let result = null
  const type = Object.prototype.toString.call(target).toLowerCase().slice(8, -1)
  if (type === 'object') {
    result = {}
    for (const i in target) {
      result[i] = deepClone(target[i])
    }
  } else if (type === 'array') {
    result = []
    for (let i = 0; i < target.length; i++) {
      result.push(deepClone(target[i]))
    }
  } else {
    return target
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
