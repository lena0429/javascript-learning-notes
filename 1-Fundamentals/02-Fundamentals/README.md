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
| Keyword | Keyword  | Keyword | Keyword  | Keyword    |
|:------- |:-------- |:--------|:-------- |:---------- |
|  if     | else     | do      | while    |  for       |
| break   |	continue | try     | catch    | finally    |
| throw   | true     | false   | function | return     |
| switch  | case     | null    | typeof   | instanceof |
|  new    |	var      | void    | in       | with       |
| default |	debugger |	delete | this     |	           |


**保留字 Reserved Words**
| Reserved    | Reserved    | Reserved    | Reserved    |
|-------------|-------------|-------------|-------------|
| class       | enum        | extends     | super       |
| const       | export      | import      | implements  |
| let         | private     | public      | yield       |
| interface   | package     | protected   | static      |

3. Notes 
- JS底层保存标识符时实际上是采用的Unicode编码，所以理论上讲，所有的utf-8中含有的内容都可以作为标识符。

## 3. 基本数据类型
1. Null
- Null(空对象)类型的值只有一个，就是`null`

- 使用`typeof`检查一个`null`值时，会返回`object`

```javascript
var a3 = null;
console.log(a3); // null
console.log(typeof a3); // object
```

2. Undefined
- Undefined（未定义）类型的值只有一个，就是`undefind`

- 当声明一个变量，但是并不给变量赋值时，它的值就是`undefined`

使用`typeof`检查一个`undefined`时，也会返回`undefined`

3. 强制类型转换(`type coercion` or `type casting`)
Explicit Coercion (Type Casting): explicitly convert a value from one type to another using built-in functions or constructs. 

3.1. 其他数据类型转换为String (to String)
  - 3.1.1. Using `String()` **function** 
    （1）调用`String()` function, 并将被转换的数据作为参数传递给函数。`String(123)`
     (2) 使用`String()` function做type casting/type coercion时，
       - 对于Number和Boolean实际上就是调用它们的`toString()` method
       - 但是对于`null`和`undefined`,   不会调用其`toString()` method
            - 它会将`null`直接转换为字符串`'null'`
            - 它会将`undefined`直接转换为字符串`'nundefined'`
            
  
  - 3.1.2. Using `.toString()` **method**
    (1) 该方法不会影响到原变量，它会将转换的结果返回
    (2) Note：`null`和`undefined`这两个值没有`toString()` method，如果调用其方法，会报错。

3.2. 其他数据类型转换为Number (to Number)
只能调用`Number()` function, 并将被转换的数据作为参数传递给函数。
Note：**没有**`.toNumber()` method。
   - 3.2.1. String转数字 
      (1) 如果字符串只包含纯数字，则直接将其转换为数字。 `Number("123")` results in the number `123`
      (2) 如果字符串中包含非数字，则转换为`NaN`。`Number("name")` results in the number `NaN`
      (3) 如果字符串时一个空串或是一个全为空格的字符串，则转换为`0`. `Number("")` or `Number("   ")` results in the number `0` 


   - 3.2.2. Boolean转数字: Using Number() function, e.g., Number(true) results in 1 and Number(false) results in 0.  
       (1) `true` => `1`
       (2) `false` => `0`
  
  - 3.2.3. null转数字  
       `null` => `0`

  - 3.2.4. undifinde转数字
       `undefined` => `NaN`   
    
  - 3.2.5. `parseInt()` and `parseFloat()` function
   - `parseInt()` 函数可以将一个字符串中的**有效**的**整数**内容解析取出，然后转换为Number。
   ```javascript
   parseInt('123px') // 123
   parseInt('123b345px') // 123
   parseInt('p123px') // NaN
   parseInt('p123px') // NaN
   ```
   
   - `parseFloat()`把一个字符串转换为一个浮点数, 它将一个字符串中的**有效小数**部分取出来，然后转换为Number。
   
   - 如果对非String使用`parseInt()`或`parseFloat()`，它会先将其转换为String，然后再操作。 `parseInt(true) // NaN`

  - 3.2.6. Using Unary Plus (+) to Convert to Number: Placing a + before a string that represents a numeric value converts it to a number, e.g., +"123" results in 123.
  
  - 3.2.7. Using Double NOT (!!) to Convert to Boolean: Applying !! before a value converts it to its boolean equivalent, e.g., !!"non-empty string" results in true, while !!"" (empty string) results in false.