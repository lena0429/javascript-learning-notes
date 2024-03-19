**Promise - 如何搭建Promise的基本结构**

1. Promise是一个构造函数, 作用就是为了实例化对象。(constructor - a special type of function used in OOP to create and initialize instances of objects)

- 语法：let variable = new Promise(); 在堆内存(Heap)中开辟一块空间，分配其大小以及设置其地址，比如0x100（这是一个地址）

* 堆内存(Heap)：存储应用数据类型的数据（数组，对象，函数 - Array, Object, Function）
* 栈内存(Stack)：存储基本数据类型以及引用数据类型的地址值，比如上面的变量variable里就是一个地址值

- Promise这一构造函数需要接收一个实际参数(argument)， 其类型为一个回调(callback)函数(执行器函数- executor)。 

* 如何判断实际参数和形式参数？在调用函数时用到的参数都是实际参数。

Executor回调函数中也需要接收两个形式参数，resolve、reject，由于是形式参数，可自定义变量名。

2. Promise的基本结构

任何一个构造函数的实例化对象身上都有一个默认属性，即隐式原型属性(__proto__, dunder proto, double underscore proto)

- Promise实例化对象身上还有两个属性 -
* PromiseState - 记录当前promise的状态
+ PromiseResult - 记录Promise的结果值 

Promise state change

通过调用resolve方法，可以将Promise instance的state从pending -> fullfilled

通过调用reject方法，可以将state从pending -> rejected

Promise的实例化对象的state只能被更改一次

抛出异常(Throw)可以将Promise实例化对象的状态更改会rejected

函数中this指向和如何更改this指向（注意普通函数和ES6箭头函数的区别）

ES6中的arrow function的定义，如果parameter只有一个，那么小括号是可以省略的。

Arrow function没有自己的this指向，取决于当前函数所声明的位置的this指向，即外层函数中的this指向。
