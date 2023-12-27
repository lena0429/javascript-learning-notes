## Resources
[尚硅谷JavaScript基础&实战](https://www.bilibili.com/video/BV1YW411T7GX?p=1&vd_source=0d8bff576ae951115e73479ce587bf1e)

## 1. Constants and Variables
1. 字面量
- 字面量（常量），都是一些不可改变的值
- 字面量都是可以直接使用，但是我们一般都不会直接使用字面量
- 通常在等号右边

2. 变量
- 变量可以用来保存字面量，而且变量的值是可以任意改变的变量更加方便我们使用
- 所以在开发中都是通过变量去保存一个字面量，而很少直接使用字面量
- **可以通过变量对字面量进行描述** `var age = 80;`
- 声明变量，然后赋值 
- 声明和赋值同时进行

## 2. 标识符 Identifier
1. 在JS中所有的可以由我们自主命名的都可以称为是标识符。
  - 例如：变量名、函数名、属性名都属于标识符。

2. 命名一个标识符时需要遵守如下的规则：
  - 标识符中可以含有**字母、数字、_、$**
  - 标识符不能以数字开头
  - 标识符不能是ES中的关键字或保留字
  - 标识符一般都采用**camelCase**命名法：首字母小写，每个单词的开头字母大写，其余字母小写

**关键字 Keyword**
|         |          |         |          |            |
|---------|----------|---------|----------|------------|
| if      | else     | do      | while    | for        |
| break   | continue | try     | catch    | finally    |
| throw   | true     | false   | function | return     |
| switch  | case     | null    | typeof   | instanceof |
| new     | var      | void    | in       | with       |
| default | debugger | delete  | this     |            |


**保留字**
