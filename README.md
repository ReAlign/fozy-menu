# fozy-menu

[![NPM version][npm-image]][npm-url]

[npm-url]: https://www.npmjs.com/package/fozy-menu
[npm-image]: https://img.shields.io/npm/v/fozy-menu.svg

## 简介

> fozy 多份配置数据转换

使用 `fozy` 来 `mock` 数据，需要维护 `fozy config` & `同步数据` & `...` 等实际内容大致相同的数据。

但是实际情况是，这几套数据，除了形式上的不一致，主要内容几乎是一样的，多人协作开发，很难有人完全去维护多份数据。

所以，想通过工具，进行格式上的转化，开发者只需要维护一份（必要的、非维护不可的）数据即可。

## Usage

```javascript
let FozyMenu = require('fozy-menu');
```

#### init(pageList, listKey)
> 默认从 list 初始化 fozy 配置

####  menu(pageList, opt)
> 默认从 list 初始化 menu 配置

```javascript
FozyMenu.init(pageList, listKey);
FozyMenu.menu(pageList, opt);

pageList = [
    {
        type: 'index',
        name: '首页',
        id: -1,
        list: [
            {id: -101, name: '首页', url: '/', path: './index.ftl'}
        ]
    },
    {
        type: 'manage',
        name: '管理',
        id: 1,
        list: [
            {id: 101, name: '查询', url: '/query.do', path: './query.ftl'},
            {id: 102, menu: false, name: '详情页', url: '/detail.do', path: './detail.ftl'}
        ]
    }
];

listKey = 'list';

opt = {
    childrenKey: 'childsList',
    listKey: 'list'
}
```
