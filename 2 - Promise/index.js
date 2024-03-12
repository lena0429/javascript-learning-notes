// index.js

// 使用立即执行函数(IIFE)
// 好处：可以避免对外部的变量造成污染
(function (window) {
    // 只要是给构造函数的实例化对象深山发添加属性/方法, 那么在函数中this对象的地址引用身上直接添加。
    function Promise(executor) {
        // console.log('实例化对象：'， this);

        // 给Promise构造函数所产生的实例化对象身上添加两个属性。
        this.PromiseState = 'pending';
        this.PromiseResult = undefined;
        this.callbackFn = [];

        // 封装函数.
        // 定义resolve函数 
        const _resolve = (value) => {
            if (this.PromiseState !== 'pengding') return;
            this.PromiseState = 'fullfilled';
            this.PromiseResult = value;
            // 执行当Promise实例化对象的状态为pending时，回调函数(then里面的)
            // if(this.callbackFn.onfulfilled) {
            //  this.callbackFn.onfulfilled();
            // }
            // 因为现在this.callbackFn是一个数组，所以要进行如下遍历修改：
            this.callbackFn.forEach((item) => {
                item.onfulfilled();
            })
        }
        // 定义reject函数
        // 箭头函数是没有自己的this指向的，取决于当前函数所声明的位置的this指向(外层函数)
        const _reject = (value) => {
            if (this.PromiseState !== 'pengding') return;
            this.PromiseState = 'rejected';
            this.PromiseResult = value;
            // if (this.callbackFn.onrejected) {
            //     this.callbackFn.onrejected();
            // }
            this.callbackFn.forEach((item) => {
                item.onrejected();
            })
        }

        /**
         * 函数中的this指向取决于函数的调用者， 即谁调用了这个函数，this就指向谁
         * i.e, resolve() => 实际上是window.resolve(），此函数中this指向window
         */

        /**
         * 修改函数中this指向的方法
         * 方法一：let _this = this;
         * 
         * 方法二：call, apply, bind
         * 
         * call和apply的区别：在于函数中修改完this指向，arguments传递的格式不同。
         * 语法：
         * 函数名.call(新的this指向，arg1, arg2...)
         * 函数名.apply(新的this指向, [arg1, arg2, ...])
         * call和apply的共同点：函数一旦修改完想要的this指向后，则函数会立即执行。
         * 
         * call和bind的区别：call会立即执行
         * bind不会立即执行且有返回值， 且返回的是与原函数结构一模一样的修改完this指向的新函数。
         */

        try {
            executor(_resolve, _reject)
        } catch (e) {
            if (typeof e === 'object') {
                this.PromiseState = 'rejected';
                this.PromiseResult = e.message;
            } else {
                this.PromiseState = 'rejected';
                this.PromiseResult = e;
            }
        }
    }

    // 借助于Object.assign方法使用一个对象和prototype对象进行合并
    Object.assign(Promise.prototype, {
        // ES6中方法的简写
        // onfulfilled: 成功的回调函数
        // onrejected: 失败的回调函数
        // 方法中的this指向取决于方法的调用者， 谁调用了这个方法，那么函数中的this就指向哪一个对象
        then(onfulfilled, onrejected) {

            // 如果成功的回调函数并不是一个函数，则增加（补充）成功的回调函数默认值
            if (!(onfulfilled instanceof Funtion)) {
                onfulfilled = value => value;
            }

            // 如果失败的回调函数并不是一个函数，则增加（补充）失败的回调函数默认值
            if (!(onrejected instanceof Function)) {
                onrejected = value => value;
            }

            // 调用then方法会调到一个返回值，是一个新的Promise实例化对象
            return new Promise((resolve, reject) => {
                // 封装函数
                const _common = function (callback) {
                    setTimeout(() => {
                        try {
                            const value = callback(this.PromiseResult);
                            if (value instanceof Promise) {
                                value.then(resolve, reject);
                            } else {
                                resolve(value);
                            }
                        } catch (err) {
                            reject(err);

                        }
                    })
                }
                // 判断
                if (this.PromiseState === 'fulfilled') {
                    // 调用公共的封装函数
                    _common.call(this, onfulfilled);
                } else if (this.PromiseState === 'rejected') {
                    // 调用公共的封装函数
                    _common.call(this, onrejected);
                } else {
                    // 如果excutor执行器函数当中执行的是async程序，
                    // 当结果还没有完全执行完毕(时间还没有完全到达)，
                    // 此时Promise实例化对象的状态为pending的状态
                    this.callbackFn.push({
                        // 添加两个回调函数
                        onfulfilled: _common.bind(this, onfulfilled),
                        onrejected: _common.bind(this, onrejected)
                    })
                }
            })
        }
    })
    window.Promise = Promise;
}(window));

// window上添加一个自定义属性， 但是容易污染环境，使用IIFE
// window.Promise = Promise;