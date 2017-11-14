# fozy-menu

[![NPM version][npm-image]][npm-url]

[npm-url]: https://www.npmjs.com/package/fozy-menu
[npm-image]: https://img.shields.io/npm/v/fozy-menu.svg
## Usage

```javascript
import FozyMenu from 'fozy-menu';
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