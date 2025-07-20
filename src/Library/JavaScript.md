---
title: 八股文【JavaScript】
---

# JavaScript

## 数据类型

> 基本数据类型：Number、String、Null、Undefined、Boolean
>
> 引用数据类型：Object

## 引用类型和值类型的区别

> **值类型**存储在栈中，是一个简单的赋值过程；**引用类型**存储在堆中，保存的是内存地址。当一个属性值被修改后，其他被引用的地方也会改变。

## == 和 === 的区别

> `==` 会先进行类型转换，然后在比较值是否相等。
>
> `===` 先判断类型是否相等，再比较值是否相等

## Null 和 Undefined 的区别

> Null 表示一个不存在的值或空对象，可用于主动释放引用。
>
> Undefined 表示变量声明后未进行初始化，是变量声明的默认值。

## 强制/隐式转换

> **强制**：`Number`、`String`、`toString`、`parseInt`...
>
> **隐式**：`+`、`-`、`*`、`/`、`==`...

## for...in 和 for...of 的区别

> 前者用于**可枚举**类型的数据(对象、数组、字符串)，遍历的是`key`；后者用于**可迭代**类型的数据(数组、字符串)，遍历的是`value`。

> [!WARNING] 💡🤔
> `for...in`在遍历类数组时(如 DOM 节点)会遍历到原型中去。

## 深浅拷贝

> 浅拷贝：直接将变量的引用地址赋值给另一个变量(assign、concat、slice、结构)。
>
> 深拷贝：改变变量的内存引用地址。

> [!NOTE] 深拷贝
>
> 1. 通过 JSON 方法进行暴力转换；`JSON.stringify` => `JSON.parse`，转换过程中会过滤掉值为`undefined`的属性。❌
> 2. 使用<a href="HandWriting#深拷贝" target="_blank">递归遍历</a>得到一个新的对象。✅

## 什么是闭包以及作用和注意点

> 闭包是一个高阶函数，执行后返回一个新的函数，这个函数可以访问其内部的变量。
>
> **作用**：形成一个独立的作用域，保证变量的私有性。
>
> **注意点**：闭包会把函数中的变量保存到内存中，使用过多会让内存占用过大，容易导致内存泄露。

```js
function count() {
  let num = 10
  return () => {
    return {
      add() {
        num++
      },
      sub() {
        num--
      },
      getNum() {
        return num
      },
    }
  }
}
const actionCount = count()
```

## call 和 apply 的区别

> 两者都可以改变`this`的指向；<a href="HandWriting#call" target="_blank">call</a>实参传递是单个形式的，可以传递多个。<a href="HandWriting#apply" target="_blank">apply</a>实参传递的是一个数组，每一项对应一个参数。

```js
const obj = {
  firstName: 'd',
  lastName: 'w',
}

function getFullName(a, b) {
  return this.firstName + this.lastName + a + b
}

getFullName.call(obj, 1, 2)
getFullName.apply(obj, [1, 2])
```

## 箭头函数和普通函数的区别

> 箭头函数的`this`绑定在上下文中，并且没有`prototype`原型和`arguments`属性。

> 普通函数的`this`指向被调用的主体，默认情况下指向`window`；有`prototype`原型和`arguments`属性。

## 三元表达式和 if…else 的区别

> 三元表达式有返回值，后者没有返回值。两者是可以相互转换的。

## 面向对象的理解

> 面向对象是一种编程思想，将复杂的问题转化为对象的问题；ES5 使用构造函数进行定义，ES6 中使用关键字 Class 进行定义。

**面向对象的三大特点：**

1. 封装性：将属性、方法封装到对象内部。
2. 继承性：子类可继承父类的属性和方法。
3. 多态性：子类可重写父类中的方法，实现不同的行为。

## 构造函数和实例对象的区别

> 实例对象是通过`new`关键字执行构造函数创建出来的，是一个实例化的过程。
>
> 在`new`的过程中会将`this`指向实例对象，将构造函数的原型`prototype`传递给实例对象的隐式原型`__proto__`。

> [!TIP] instanceof 原理
> 用 while 去遍历实例对象，判断对象上的`proto`是否等于`prototype`。

## 作用域及作用域链

> 作用域：描述一个变量的可访问性，分为全局、块级、函数作用域；在预编译阶段会把变量提升到当前作用域的最前面（函数会将整体提升到最前面）。

> 作用域链：作用域是可以发生嵌套和向外延伸的，当发生多个作用域嵌套形成的一个链表。当访问一个变量时，首先会在当前作用域中查找，然后依次向外层作用域中查找直到全局作用域。这样由多个作用域构成的链表叫作用域链。

## 什么是事件流

> 执行事件的顺序；分冒泡流(从目标元素向顶层元素传递)和捕获流(从顶层元素向目标元素传递)

## get 和 post 的区别

> post 请求相对于 get 请求是比较安全的；get 请求的参数是拼接在 url 地址后面的，psot 请求的参数是存放在请求体中的。

> get 传递的数据比 post 的小，因为 url 是有一定长度限制的。

## http 和 https 的区别

> http 是以明文的方式传输的，https 是 http 协议更加安全的版本，通过 SSL 进行加密传输；http 默认端口是 80，​https 默认端口是 443。

## 如何取消 ajax 请求

> 原生请求 XHR 使用对象的 abort 方法。

> axios 通过实例下的 CancelToken.source 方法创建一个取消请求的实例，然后通过实例的 cancel 方法取消请求。

> 通过定时器 setTimeout 和 clearTimeout 取消 ajax 请求。

```js
let timer = nll
clearTimeout(timer)
timer = setTimeout(() => {
  // ...
}, 800)
```

## 什么是跨域，什么情况会导致跨域，如何解决？

> 出于浏览器同源策略限制和安全性考虑，当请求的地址与当前地址的协议、域名、端口号不一致时会出现跨域的行为。

1. JSONP

   > 前端事先定义好一个用于获取响应数据的回调函数，通过 script 标签（没有同源策略的限制）发起一个请求并将回调函数作为查询参数传递过去，然后服务端返回这个回调函数的执行将响应数据作为参数传递给回调。

2. CORS(跨域资源共享)

   > 需要浏览器和服务器同时支持；服务器端需要设置响应头信息来允许跨域请求。Access-Control-Allow-Origin 是必须的，要么是请求头的 Origin 字段的值，要么是一个 \*（表示接受任意域名的请求）。

3. nginx 反向代理(同 CORS)

   ```bash
    location / {
      Access-Control-Allow-Origin */origin
    }
   ```

4. postMessage

   > HTML5 中的 XMLHttpRequest Level 2 中的 API；多窗口的数据传递。

5. WebSocket

   > 是 HTML5 一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯。

6. document.domain + iframe

   > 此方案仅限主域相同，子域不同的跨域应用场景。

## 变量提升

> JavaScript 执行时分为预编译阶段和执行阶段。

> 变量提升发生在预编译阶段，在各自作用域最前面声明所有变量，`var` 会忽略块级作用域提升到上一层作用域。此时只提升了变量并没有初始化。

> 函数声明会将整个函数提升到最前面，函数在声明的时候就已经赋值了。函数提升会跳出块级作用域，但内容还保留在里面。函数表达式提升时不会将整体提升。

> [!WARNING] 💡🤔
> `let const` 变量也进行了提升，但只能在初始化之后才能访问，在这之前是暂时性死区。

## 原型和原型链

> [原型](https://juejin.cn/post/7297440438234169398#heading-2)：原型是一种实现面向对象编程的的技术，实现对象之间的继承关系。每个函数上都存在一个原型对象 `prototype`，实例化时，会将`prototype`传递给实例原型(隐士原型) `__proto__`。

> [原型链](https://juejin.cn/post/7297440438234169398#heading-5)：原型链是对象继承特性的实现方式。当试图访问一个对象属性时，如果对象自身没有这个属性，就会去原型中寻找这个属性，如果原型中也不存在，就会继续在原型的原型中寻找，直到找到该属性或到达原型链的尽头。这样由多个原型对象构成的链表叫原型链。

## 数组去重

> 使用 ES6 的 Set 构造函数和 Array.from(或者结构)。

```js
Array.from(new Set([1,2,2,3]))
[...new Set([1,2,2,3])]
```

> 定义一个空的新数组，然后通过遍历原数组，用`indexOf/includes`判断新数组中是否存在，不存在就 push 进去。

```js
const arr = [1, 2, 2, 3]
const newArr = []
arr.forEach(item => {
  if (newArr.indexOf(item) === -1) newArr.push(item)
  // if(!newArr.includes(item)) newArr.push(item)
})
```

> 使用数组 filter 方法过滤。

```js
const arr = [1, 2, 2, 3]
arr.filter((item, index) => arr.indexOf(item) === index)
```

## 判断数据类型

> `typeof`返回的是变量的数据类型，不能准确的判断引用类型的数据(除 function)。

> `instanceof`返回的是布尔值，可以准确的判断引用类型数据。

> 使用对象原型上的`toString`方法，通过改变`this`指向。

```js
({}).toString.call(obj).toLowerCase().slice(8, -1)❌
Object.prototype.toString.call(obj).toLowerCase().slice(8, -1)✅
```

## cookies、sessionStorage、localStorage 的区别

> 都是客户端存储数据的一种方式。`cookies`数据大小不能超过 4k，且有过期时间，请求时会自动携带传递到服务器；`sessionStorage`数据会在浏览器关闭时自动删除；`localStorage`数据需要手动清除；

## 事件循环

> js 是单线程任务，异步和多线程是通过 Event Loop 机制实现的。
> 由调用栈、消息队列(宏任务)、微任务队列组成。执行时会从全局栈中一行一行的执行，
> 遇到函数执行会压入调用栈中，函数执行返回后从栈中弹出。遇到 fatch、事件回调、setTimeOut、setInterval
> 会加入到消息队列中，在调用栈清空的时候执行。遇到 promise、async、await 会加入到微任务队列中，在调用栈清空的时候立即执行，
> 处理期间加入的微任务会一同执行。

> 微任务的优先级高于宏任务。

## setTimeout、Promise、Async/Await 的区别？

> setTimeout 是一个异步代码，Promise 和 Async/Await 是将异步代码改写为同步代码的解决方式。

> Promise 本身是同步代码的立即执行函数，在处理成功/错误回调时才是异步操作。

> Async 只是将函数的返回值设置为一个 Promise 函数，不会将函数变为异步函数。Await 等待一个 Promise 函数执行结果，等待完成后才执行后面的代码。

> [!WARNING] 💡🤔
> 在`Await`语句后所有代码都将变为异步代码。

## JavaScript 异步解决方案的发展历程以及优缺点

> **回调函数**：最大问题是回调地狱；不能捕获错误和 return。
>
> **Promise**：解决了回调地狱，数据依赖过多会导致链式调用冗长。
>
> **Async/await**：代码清晰，没有数据依赖时使用 await 会导致性能降低。
