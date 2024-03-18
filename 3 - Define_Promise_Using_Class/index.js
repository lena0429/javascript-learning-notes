// 立即执行函数(IIFE)

const { resolve } = require("mathjs");

// 好处：可以避免对外部的变量造成污染
(function (window) {
    // Declare the class
    class Promise {
        // executor表示的是执行器函数
        constructor(executor) {
            // constructor构造函数中的this指向的是instance

            // 添加状态
            this.PromiseStatus = 'pending';
            // 添加结果
            this.PromiseResult = undefined;

            // define the resolve function
            // Arrow function tip: (1). 如果parameter只有一个，那么()可以省略; 
            //                     (2). Arrow function没有自己的this指向，取决于当前函数所声明的
            const _resolve = (value) => {
                // add guard: PromiseStatus只能从'pending'更改一次
               if (this.PromiseStatus !== 'pending') return;
               
                this.PromiseStatus = 'fulfilled';
                this.PromiseResult = value;
            }

            // define the reject function
            const _reject = value => {
                if (this.PromiseStatus !== 'pending') return;

                this.PromiseStatus = 'rejected';
                this.PromiseResult = value;
            }

            // 利用try...catch...来捕捉throw异常
            try {
                executor(_resolve, _reject);
            } catch (error) {
                _reject(error);
            }

        }

        // 在class的原型身上添加方法
        then(onfulfilled, onrejected) {
            // No.1 - 判断用户是否添加了成功回调和失败回调，如果没有添加则需要设置默认值(value)。
            if (onfulfilled instanceof Function) onfulfilled = value => value;
            // 注意: 如果用户没有添加失败回调，则抛出异常。
            if (onrejected instanceof Function) onrejected = reason => {throw reason};

            // No.2 - 当then方法的返回值为新的Promise对象
            return new Promise(() => {
                // 封装函数
                const _common = function(callback) {
                    setTimeout(() => {
                        try {
                            // 获取不同回调函数(成功回调/失败回调)的结果
                        const value = callback(this.PromiseResult);
                        if (value instanceof Promise) {
                            value.then(resolve, reject)
                        } else {
                            // 如果value是非Promise，则结果一定是成功的，返回值为value
                            resolve(value);
                        }
                        } catch(error) {
                            // 捕捉异常
                            reject(err)
                        }
                    })
                }
                // 判断当下instance的状态
                if (this.PromiseStatus === 'fulfilled') {
                    _common.call(this, onfulfilled); 
                } else if (this.PromiseStatus === 'rejected') {
                    _common.call(this, onrejected);
                }
            })

        }
    }
}(window))