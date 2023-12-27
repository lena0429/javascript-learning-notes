## Resources
[尚硅谷JavaScript基础&实战](https://www.bilibili.com/video/BV1YW411T7GX?p=1&vd_source=0d8bff576ae951115e73479ce587bf1e)

# JS简介

## 1、什么是语言

- 计算机就是一个由人来控制的机器，人让它干嘛，它就得干嘛。

- 我们要学习的语言就是人和计算机交流的工具，人类通过语言来控制、操作计算机。

- 编程语言和我们说的中文、英文本质上没有区别，只是语法比较特殊。

- 语言的发展：
  - 纸带机：机器语言
  - 汇编语言：符号语言
  - 现代语言：高级语言

## 2、起源

- JavaScript诞生于1995年，它的出现主要是用于处理网页中的前端验证。

- 所谓的前端验证，就是指检查用户输入的内容是否符合一定的规则。

- 比如：用户名的长度，密码的长度，邮箱的格式等。

## 3、JS简史

- JavaScript是由网景公司发明，起初命名为**LiveScript**，后来由于SUN公司的介入更名为了**JavaScript**。

- 1996年微软公司在其最新的IE3浏览器中引入了自己对JavaScript的实现**JScript**。

- 于是在市面上存在两个版本的JavaScript，一个网景公司的JavaScript和微软的JScript。

- 为了确保不同的浏览器上运行的JavaScript标准一致，所以几个公司共同定制了JS的标准名命名为**ECMAScript**。

- Read more: 

JavaScript was originally created to make web pages interactive and dynamic. It was developed by Brendan Eich in 1995 while he was working at **Netscape** Communications Corporation. Initially named Mocha, then later renamed to **LiveScript**, and finally to JavaScript, it was designed as a scripting language that could interact with HTML elements, allowing developers to manipulate web page content, validate forms, create animations, and handle user interactions without the need for full page reloads. The key purposes of JavaScript at its inception were:

1. **Enhance Web Page Interactivity:** JavaScript enabled dynamic content on web pages, such as updating content, controlling multimedia, animating images, and much more, which was not feasible with just HTML and CSS.
2. **Client-Side Scripting:** It allowed scripts to run in the user's browser, reducing the server load and enabling faster and more responsive web applications.
3. **Form Validation**: Before JavaScript, form data validation was generally done on the server side. JavaScript enabled client-side form validation, improving user experience and reducing server load.

**时间表**

| YEAR   | EVENT                                 |
| :----: | :------------------------------------:|
| 1995年 | 网景公司开发了**JavaScript**            |
| 1996年 | 微软发布了和JavaScript兼容的**JScript** |
| 1997年 | **ECMAScript**第1版（ECMA-262）        |
| 1998年 | ECMAScript第2版                        |
| 1998年 | DOM Level1的制定                       |
| 1998年 | 新型语言**DHTML**登场                   |
| 1999年 | ECMAScript第3版                        |
| 2000年 | DOM Level2的制定                       |
| 2002年 | ISO/IEC16262：2002的确立                |
| 2004年 | DOM Level3的制定                        |
| 2005年 | 新型语言**AJAX**登场                    |
| 2009年 | ECMAScript第5版                         |
| 2009年 | 新型语言**HTML5**登场                   |



## 4、实现

- ECMAScript是一个标准，而这个标准需要由各个厂商去实现。

- 不同的浏览器厂商对该标准会有不同的实现。

| 浏览器            | JavaScript实现方式 |
| :---------------- | :----------------- |
| FireFox           | SpiderMonkey       |
| Internet Explorer | JScript/Chakra     |
| Safari            | JavaScriptCore     |
| Chrome            | v8                 |
| Carakan           | Carakan            |

- 我们已经知道ECMAScript是JavaScript标准。所以一般情况下，这两个词我们认为是一个意思。

- 但是实际上JavaScript的含义却要更大一些。

- 一个完整的JavaScript实现应该由以下三个部分构成：
  - ECMAScript
  - DOM
  - BOM


## 6、JS的特点

- **解释型语言**
- 类似于C和Java的语法结构
- 动态语言
- 基于原型的**面向对象**

## 7. JS编写位置
1. 将js代码编写到标签的onclick属性中，当我们点击按钮时，js代码才会执行。

`<button onclick="alert(\"Button is clicked!\")"></button>`


2. 将js代码写在<href>属性中，当点击超链接时，会执行js代码。
**但属于结构与行为耦合，不方便维护，不推荐使用!** 

`<a href="alert(\"What's up, man?\")">Try to click me</a>`

3. 将js代码编写到外部js文件中，通过script标签引入。

`<script src="/js/script.js" type="text/javascript"></script>`

**<script>标签一旦用于引入外部文件，则·不能进行代码编写，浏览器会自动忽略**

## 7. JS注释

1. 多行注释


