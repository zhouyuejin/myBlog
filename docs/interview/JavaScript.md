---
title: JavaScript面试相关
description: JavaScript面试相关总结
lang: zh-CN
tags:
  - 面试
  - JavaScript
---

## 谈一谈你对 JavaScript 的理解

- 语言特性

  1.  动态弱语言：JavaScript 是动态弱语言，变量在声明时无需指定类型，其类型在运行时根据赋值内容确定。这使得编程更加灵活，但也需要开发者在编写代码时更加注意类型转换和潜在的类型错误。
  2.  事件驱动：JavaScript 采用事件驱动机制，通过监听和响应各种事件，如鼠标点击、键盘输入、页面加载等来实现网页的动态交互。
  3.  单线程与异步编程：JavaScript 是单线程语言，同一时间只能执行一个任务。为了避免阻塞主线程，影响用户体验，JavaScript 采用异步编程模型，通过回调函数、Promise、async/await 等机制，实现非阻塞的并发执行。

- 作用域与闭包
  1. 作用域：JavaScript 有全局作用域、函数作用域和块级作用域。`var`声明的变量属于函数作用域，存在变量的提升现象。`let`和`const`声明的变量属于块级作用域，不存在变量提升现象。且在声明前存在暂时性死区。
  2. 闭包：是指一个函数能够访问并记住其定义时的作用域链。即使该函数在外部作用域被调用。闭包通常于实现私有变量、模块化编程等，它可以将一些变量和函数封装在一个独立的作用域中，避免全局变量污染。

## 谈谈 JavaScript 的事件循环机制？

`JavaScript`是单线程语言，同一时间只能执行一个任务，但实际开发中存在大量的异步操作（如网络请求、定时器、DOM 事件等）、事件玄幻就是 `JavaScript` 实现异步的核心机制。它负责协调同步任务和异步任务的执行顺序，避免耗时操作引起阻塞主线程。

1. 基本执行模型
   事件循环是基于执行栈和任务队列。
   - 执行栈：同步任务会直接进入执行栈，按顺序执行。
   - 任务队列：异步任务不会立即执行，而是先放入任务队列进行等待。当执行栈为空时，JavaScript 引擎会从任务队列中读取任务到执行栈中执行，这个过程不断重复，就形成了事件循环。
2. 宏任务与微任务
   - 宏任务：包括整体代码 script、setTimeout、setInterval、I/O 操作、UI 渲染等。
   - 微任务：包括 Promise 的回调、MutationObserver 回调等。
   - 执行顺序：每次事件循环先执行宏任务队列中的一个任务，执行完成后，检查微任务队列是否为空，如果不为空，会将微任务队列中的所有任务依次执行完，然后再执行下一个宏任务。
3. 执行流程：
   - 执行全局代码，将同步任务放入执行栈中执行。
   - 遇到异步任务，将其放入对应的任务队列中等待。
   - 执行栈为空时，从任务队列中取出一个任务，将其放入执行栈中执行。
   - 重复步骤 3，直到任务队列为空。

## 你了解 node 的事件循环吗？

`nodeJS`虽然是基于`JavaScript`（单线程），但需要处理大量服务器端的 I/O 操作，如文件读写、数据库操作等。`nodeJS`的事件循环是实现非阻塞 I/O 操作的关键。它让单线程的 Node 能够高效处理并发任务，避免因 I/O 阻塞导致性能问题。

### 核心区别

1. 执行环境不同：node 事件循环由`libuv`库实现，而浏览器的事件循环由浏览器引擎实现。
2. 任务队列不同：Node 的宏队列被划分为多个阶段，每个阶段处理特定类型的任务。
3. 微任务执行时机不同：在 node 中，每个宏任务阶段完成后会清空微队列，而不是所有宏任务执行前。

### 核心机制

node 时间循环按照固定顺序依次执行以下六个阶段，每个阶段都有专属任务队列。

1.  timers 阶段：处理 setTimeout 和 setInterval 回调。
2.  pending callbacks（待定回调）：执行上一轮循环中延迟的 I/O 回调。
3.  idle, prepare 阶段：内部使用。
4.  poll（轮询阶段）：

- 执行 I/O 回调。
- 检查是否有到期的 timers，有则进入下一轮循环。
- 若没有任务，会阻塞等到新的 I/O 操作。
- 若有新的 I/O 操作，会立即执行。

5.  check 阶段：执行 setImmediate() 回调。
6.  close 阶段：执行关闭事件的回调，如 socket.on('close', ...)。

每个阶段执行完后，会先清空所有微任务，再进入下一个阶段。

### 微任务优先级

node 中微任务有明确的优先级。

1. `process.nextTick` （不属于事件循环的任何阶段，有单独的队列）优先级最高，会在每个阶段切换前，微任务执行前触发。
2. 其次是普通微任务（如 Promise 回调）。

## 请你谈谈是什么闭包？

闭包是指函数能够访问其自身作用域之外的变量的现象。更具体的来说，当一个内部函数被外部函数返回，并且在外部函数执行结束后仍然被引用时，这个内部函数就会形成闭包，它会保留对外部函数作用域的访问权限。

### 形成条件

- 存在嵌套函数（内部函数和外部函数）。
- 内部函数引用了外部函数的变量。
- 内部函数被外部函数返回并在外部被调用。

```javascript
function outer() {
  const a = 1;
  function inner() {
    console.log(a);
  }
  return inner;
}
const closure = outer();
closure(); // 1
```

### 主要用途：

- 封装私有变量：实现类似类的私有属性和方法。
- 保存状态：在多次调用中保持变量的状态。
- 延迟执行：如定时器、事件回调中访问外部变量。

### 注意事项

- 闭包会导致变量常驻内存，过度使用可能导致内存泄露。
- 要注意 this 的指向问题，在闭包中使用 this 可能会指向全局对象。

## 请你谈谈 JavaScript 中的 this

在 JavaScript 中，this 是一个特殊关键字，它的指向在函数定义时无法确定，**只有在函数执行时才能确定**，其指向取决于函数的调用方式。

1. 全局环境中的 this。
   在全局作用域中，this 指向全局对象。（浏览器中指向 window 对象，node 中指向 global 对象）
   ```javascript
   console.log(this); // 浏览器中指向 window 对象，node 中指向 global 对象
   ```
2. 普通函数调用
   普通函数调用时，this 指向全局对象。（浏览器中指向 window 对象，node 中指向 global 对象）
   ```javascript
   function foo() {
     console.log(this);
   }
   foo(); // 浏览器中指向 window 对象，node 中指向 global 对象
   ```
3. 对象方法调用
   当函数作为对象方法被调用时，this 指向调用该方法的对象。
   ```javascript
   const obj = {
     a: 1,
     foo() {
       console.log(this);
     },
   };
   obj.foo(); // 指向 obj 对象
   ```
4. 构造函数调用
   当函数作为构造函数被调用时，this 指向新创建的对象实例。
   ```javascript
   function Foo() {
     this.a = 1;
   }
   const obj = new Foo();
   console.log(obj); // { a: 1 }
   ```
5. 原型链调用
   当函数作为对象的方法被调用时，this 指向调用该方法的对象。
   ```javascript
   function Foo() {
     this.a = 1;
   }
   Foo.prototype.foo = function () {
     console.log(this);
   };
   const obj = new Foo();
   obj.foo(); // 指向 obj 对象
   ```
6. 箭头函数调用
   箭头函数没有自己的 this，它的 this 指向定义时所在的对象。
   ```javascript
   const obj = {
     a: 1,
     foo: () => {
       console.log(this);
     },
   };
   obj.foo(); // 指向 window 对象
   ```
7. 通过 call、apply、bind 调用
   可以使用 call、apply、bind 方法显式指定函数的 this 指向。

   ```javascript
   function fn() {
     console.log(this.name);
   }
   const obj1 = { name: "Dave" };
   const obj2 = { name: "Eve" };
   fn.call(obj1); // 输出 "Dave"（this 指向 obj1）
   fn.apply(obj2); // 输出 "Eve"（this 指向 obj2）
   const boundFn = fn.bind(obj1);
   boundFn(); // 输出 "Dave"（this 永久绑定到 obj1）
   ```

## 如果 new 一个箭头函数会怎样？

在 JavaScript 中，**不能使用 new 关键字调用箭头函数**，否则会抛出错误。

1. 箭头函数没有构造函数特性。构造函数的核心是：当使用 new 调用时，会执行以下步骤：

   - 创建一个新对象。
   - 将 this 绑定到新对象。
   - 执行函数体。
   - 默认返回该新对象。
     而箭头函数被设计为非构造函数，它没有自己的 this 绑定，也没有 `prototype` 属性，更不具备构造函数的执行逻辑。

**总结：**

使用 new 调用箭头函数会报错，因为箭头函数不是构造函数，不具备实例化所需的特性（没有 this 绑定、没有 prototype 属性）。这一限制是由箭头函数的设计定位决定的，它更适合用于不需要构造能力的场景。如简洁的回调函数。

## 谈谈你对原型、原型链的理解？

### 原型

每个 JavaScript 对象（除 Null）外，在创建时都会关联另外一个对象，这个对象就是它的原型。可以理解为：原型是对象的模板，它包含了可被该对象共享的属性和方法。

#### 如何访问原型：

- 现代浏览器中，通过对象的 `__proto__` 属性可以访问原型。
- 也可以通过 `Object.getPrototypeOf()` 方法访问原型。
- 函数对象有 `prototype` 属性，它指向一个对象，这个对象就是函数的原型。普通对象没有。

```javascript
function Foo() {
  this.a = 1;
}
const obj = new Foo();
console.log(obj.__proto__ === Foo.prototype); // true
```

### 原型链

每个对象都有一个原型，原型本身也是一个对象，它也有自己的原型，这样就形成了一个原型链。
当访问一个对象的属性和方法时：

1. 先在对象自身查找，找到则使用。
2. 若未找到，会自动去它的原型对象中查找。
3. 如原型对象中仍未找到，继续去原型的原型中查找，以此类推。
4. 直到找到 null（原型的终点，Null 没有原型），若仍未找到则返回 undefined。

这种通过原型层层向上查找的链路，就是原型链。

### 构造函数、实例、原型的关系

- 构造函数：用于创建对象的函数，有 `prototype` 属性，指向原型对象。
- 实例：通过`new` 构造函数创建的对象。其`__proto__`指向构造函数的`prototype`。
- 原型对象：包含所有实例共享的属性和方法。有`constructor`属性指向对应的构造函数。

关系公式：

```javascript
实例.__proto__ === 构造函数.prototype;
构造函数.prototype.constructor === 构造函数;
```

### 原型链的核心作用：实现继承

在 JavaScript 中通过原型链实现继承，子类的实例可以访问到父类的属性和方法。

#### 实现原理：

1. 子类的原型对象指向父类的实例。
2. 子类的实例可以访问到父类的属性和方法。

```javascript
function Foo() {
  this.a = 1;
}
function Bar() {
  this.b = 2;
}
Bar.prototype = new Foo();
const obj = new Bar();
console.log(obj.a); // 1
```

## 谈谈你对作用域、作用域链的理解？

在 JavaScript 中，作用域和作用域链是控制变量访问权限的核心机制，直接影响变量的可见性和生命周期。

### 作用域

作用域定义了变量（函数）的可访问范围，即在代码中哪些部分可以访问这个变量。它的核心作用是：

- 隔离变量，避免命名冲突（不同的作用域中可以有同名的变量）。
- 控制变量的生命周期。

JavaScript 有三个主要作用域：

1. 全局作用域
   - 最外层的作用域，在代码的任何地方都能访问。
   - 直接声明在全局的变量、全局对象的属性（如浏览器中的 Window 对象）。属于全局作用域。
   - 生命周期：从页面加载到页面关闭。
2. 函数作用域（ES6 新增）
   - 函数内部的作用域、变量仅在当前函数内可访问。
   - 通过函数传参、函数内声明的变量，都属于函数作用域。
   - 生命周期：函数调用时创建、函数执行完毕后销毁。（闭包除外）
3. 块级作用域（ES6 新增）
   - 由 `{}` 包裹的代码块，如 `if`、`for`、`while` 等。
   - 块级作用域内声明的变量，仅在当前块内可访问。
   - 生命周期：块级作用域内声明的变量，在块级作用域结束后销毁。

### 作用域链

作用域链是指在函数调用时，JavaScript 引擎会创建一个作用域链，用于查找变量。

1. 先在当前作用域中查找，找到则使用。
2. 若未找到，向上查找父级作用域。
3. 依次类推，直到全局作用域。
4. 若全局作用域仍未找到，则返回 undefined。

这种由当前作用域和所有父级作用域组成的链式查找结构，就是作用域链。

### 作用域链的特性

1. 单向查找：只能从当前作用域向上查找父级、不能向下查找子级。
2. 静态确定：作用域链在函数定义时就已经确定，这种称为词法作用域，

### 总结

- 作用域是变量的可见范围，分为全局、函数、块级三种，控制变量的访问权限。
- 作用域链是变量德尔查找的路径，由当前作用域和所有父级作用域组成，遵循向上查找原则。
- 作用域在函数定义时就已经确定，而作用域链是在函数调用时动态创建的。

## 谈谈 JavaScript 中实现继承的方式？

在 JavaScript 中，继承是实现代码复用和构建对象关系的重要机制。

### 原型链继承

核心原理：**让子构造函数的原型对象指向父类的构造函数的实例，使子实例能通过原型链访问父类的属性和方法。**

```javascript
//父类
function Parent() {
  this.parentProp = "parent";
}
Parent.prototype.parentMethod = function () {
  console.log("parent method");
};

// 子类
function Child() {
  this.childProp = "child";
}

// 关键：让子类原型指向父类实例
Child.prototype = new Parent();
// 修复constructor指向（否则会指向Parent）
Child.prototype.constructor = Child;

// 实例化
const child = new Child();
console.log(child.parentProp); // 'parent'（继承父类实例属性）
child.parentMethod(); // 'parent method'（继承父类原型方法）
```

优点：实现简单

缺点：

- 父类的实例属性会被子类的实例共享。（若属性是引用类型，修改会影响所有的实例）。
- 无法在子类构造函数中向父类构造函数传参。

### 构造函数继承（解决原型链继承的共享问题）

核心原理：**在子类构造函数中通过 call 或 apply 方法调用父类构造函数，使子类实例能继承父类的属性和方法。**

```javascript
//父类
function Parent(name) {
  this.name = name;
  this.hobbies = ["reading"]; // 引用类型属性
}

function Child(name, age) {
  // 关键：调用父类构造函数，绑定this为子类实例
  Parent.call(this, name);
  this.age = age; // 子类自身属性
}

const child1 = new Child("Alice", 18);
const child2 = new Child("Bob", 20);

child1.hobbies.push("coding");
console.log(child1.hobbies); // ['reading', 'coding']
console.log(child2.hobbies); // ['reading']（不共享，解决了原型链的问题）
```

优点：

- 解决了原型链继承的共享问题。
- 可以在子类构造函数中向父类构造函数传参。

缺点：

- 只能继承父类的实例属性和方法，无法继承父类原型上的属性和方法。

### 组合式继承（解决构造函数继承的缺陷）

核心原理：**结合原型链继承和构造函数继承，扬长避短，实现继承。**

```javascript
function Parent(name) {
  this.name = name;
  this.hobbies = ["reading"];
}
Parent.prototype.sayName = function () {
  console.log(this.name);
};

function Child(name, age) {
  // 1. 构造函数继承：继承实例属性
  Parent.call(this, name);
  this.age = age;
}

// 2. 原型链继承：继承原型方法
Child.prototype = new Parent();
Child.prototype.constructor = Child;
// 子类原型上的方法
Child.prototype.sayAge = function () {
  console.log(this.age);
};

const child = new Child("Charlie", 22);
child.sayName(); // 'Charlie'（继承原型方法）
child.sayAge(); // 22（子类自身方法）
child.hobbies.push("gaming");
console.log(child.hobbies); // ['reading', 'gaming']（不影响其他实例）
```

优点：

- 解决了原型链继承的共享问题。
- 可以在子类构造函数中向父类构造函数传参。
- 可以继承父类原型上的属性和方法。

缺点：

- 调用了两次父类构造函数，(一次是在 new Parent()时，一次在 Parent.call(this, name)时)，造成不必要的性能消耗。

### 原型式继承（解决组合式继承的性能问题）

核心原理：以一个对象为原型创建一个新对象，类似 Object.create() 方法。

```javascript
// 模拟Object.create()
function createObj(proto) {
  function F() {}
  F.prototype = proto; // 让新对象的原型指向proto
  return new F();
}

// 父对象
const parent = {
  name: "parent",
  sayHi: function () {
    console.log("hi");
  },
};

// 继承parent
const child = createObj(parent);
console.log(child.name); // 'parent'（通过原型链访问）
child.sayHi(); // 'hi'
```

优点： 简单实现对象间的继承，适合不需要构造函数的场景。
缺点：与原型链继承相似，引用类型属性会被所有实例共享。

### 寄生式继承

核心原理：在原型式继承的基础上，添加一个包装函数，增强对象的功能。

```javascript
function Parent(name) {
  this.name = name;
  this.hobbies = ["reading"];
}
Parent.prototype.sayName = function () {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name); // 构造函数继承
  this.age = age;
}

// 关键：创建父类原型的副本（不调用Parent构造函数）
Child.prototype = Object.create(Parent.prototype);
// 修复constructor
Child.prototype.constructor = Child;

const child = new Child("David", 25);
```

优点：保留了组合继承的全部优点，同时解决了父类构造函数被调用两次的问题。

### ES6 类继承

核心原理：使用 class 关键字定义类，使用 extends 关键字实现继承。

```javascript
class Parent {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // 调用父类构造函数
    this.age = age;
  }
  sayAge() {
    console.log(this.age);
  }
}
```

优点：

- 语法简洁，语义清晰，接近传统面向类语言的开发。
- 内置支持继承，无需手动修改原型链。
- 可以继承静态方法。

缺点：
本质仍是原型链继承，某些底层细节与传统类继承有差异（如没有 “类” 的静态绑定）。

## ES6 有哪些新特性？

1. let const：解决了 var 变量提升，作用域问题。
   - let ：块级作用域，不可重复声明，无变量提升。
   - const： 声明常量，值不可修改（引用类型地址不可变）
2. 箭头函数：简化函数写法，解决 this 指向问题。（继承外出作用域的 this）
3. 数组与对象的扩展
4. 面向对象：class 语法糖。
5. 异步编程解决方案。
   - promise：解决回调地狱，提供链式调用。
   - async/await：基于 promise 实现的异步语法糖，使异步代码看起来像同步代码。
6. 模块系统：import/export 语法：实现代码拆分和复用，替代 CommonJS。
