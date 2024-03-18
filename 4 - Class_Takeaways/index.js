// ES6中关于class(类)的相关知识点
/**
 * 1. 如何声明一个class(类)？
 * - ES6中有一个keyword class - class ClassName{} - 首字母大写
 * 2. 使用class的目的？ 主要还是为了更好的产生实例化对象 - 还是通过new 关键字来实现
 * 3. 如何在实例化对象身上添加属性/方法
 *  3.1. 直接赋值
 *       属性： attributeName = value；
 *       方法：方法名 = function(){}
 *  3.2. 通过构造器
 *       - 每一个class中只能有一个构造器，而且这个构造器(constructor)作用主要是为了给实例化对象身上的属性做初始化
 *       - 并且是在给属性做初始化的自调用，无需developers来手动干预
 *       - 构造器也被称为构造函数(constructor)， 其中this指向是指向class的实例化对象
 *  4. 在所有的实例化对象身上添加共同的方法(class的显示原型属性中Prototype)
 *     - 语法：methodName(){}
 *  5. 在class身上添加属性和方法 - 关键字是static
 *       属性：static 属性名 = 属性值;
 *       方法：static 方法名 = funcion(){}
 *       调用时要用ClassName - ClassName.method
 *       在类对象身上添加的属性和方法，其instances是访问不到的，
 */


// Public.


// 第一种方法：直接赋值的方式来添加属性和方法
class Study {
    // 3.1. 通过直接赋值的方式来在class的(所有)实例化对象身上添加属性
    name = "John Doe";
    //3.2. 通过直接赋值的方式来在class的实例化对象身上添加方法
    study = function () {
      // 函数中的this指向谁，其实取决于谁调用了这个函数
      // class方法中的this就是指向了类的实例化对象
      console.log(this);
      console.log("Study...");
    };
  }
  
  
  // 第二种方法：通过constructor添加属性和方法
  
  
  class Teacher {
    // 函数中的形式参数(parameter)只是一种形式，可以随意命名。如下，并不需要一定命名为name
    constructor(name) {
      // this指向class的实例化对象
      console.log(this);
      this.name = name;
    }
  
  
    study() {
      console.log(this.name + 'study');
    }
  
  
    // class对象身上
    static a = 1;
    static b = () => {
      console.log(b);
    }
    static c = function() {
      console.log(c);
    }
  
  
  }
  