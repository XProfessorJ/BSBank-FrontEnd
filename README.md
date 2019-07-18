# 前端工作日志

## 2019.7.8
确定需求：
* 设计B.S bank的login page 与 dashboard page
* 设计B.S bank的logo

## 2019.7.9
* 确定前端界面设计方案:使用angular框架
* 划分界面组件：
    ```
     login界面分块：
     1.login-nav-title
     2.login-signin-component
     3.blocks-nav
     4.find-more-information
     5.bottom-nav
     dashboard界面分块：card-table
    ```

## 2019.7.10
* 安装node.js, angular以及visual studio code
    ```
    参考链接：
    https://www.jianshu.com/p/327d88284abb
    ```
* 搭建github分布式开发环境
    ```
    前端：git@github.com:XProfessorJ/BSBank-FrontEnd.git
    ```

## 2019.7.11
* 学习angular基本知识:router/service/rxjs/httpRequest
    ```
    参考链接：
    https://www.jianshu.com/p/f0f81a63cbcb
    ```
* 完成login page关键组件的html,css,js
    ```
    1.login-nav-title
    2.login-signin-component
    3.blocks-nav
    ```

## 2019.7.12
* 完成login page剩余组件的html,css,js
    ```
    1.find-more-information
    2.bottom-nav
    ```
* 完成login的sign功能，将userId和password发到后端进行验证，收到后端token验证成功。

## 2019.7.13
* 完成dashboard page搭建:card-table

## 2019.7.14
学习angular基础知识：pipe/individual pipe/grammar formular

## 2019.7.15
* 解决前后端跨域问题
    ```
    由于跨域问题，前端先发OPTIONS请求，再发GET/POST请求。
    ```
* 规定前后端数据传输格式
    ```
    前端使用JSON传值。
    ```

## 2019.7.16
* dashboard page接收后端account详细信息并进行显示。
* 基本功能开发完毕，测试代码。

## 2019.7.17
* login page优化与dashboard page重构。

## 2019.7.18
项目总结，完成PPT整合和文档整理。