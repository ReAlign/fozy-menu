let _ = {
    concatList: (arr, listKey = 'list') => {
        let _arr = [];
        arr.map((item) => {
            _arr = _arr.concat(item[listKey]);
        });

        return _arr;
    },
    joinMapList: (map) => {
        let _arr = [];
        let _keyArr = Object.keys(map);
        _keyArr.map((item) => {
            _arr = _arr.concat(map[item]);
        });

        return _arr;
    },
    initMenuChildsItem: (item, menu = true) => {
        return menu ? item : false;
    },
    initMenuChilds: (list) => {
        let _cacheList = [];
        list.every((item) => {
            let _cacheRes = _.initMenuChildsItem(item, item.menu);
            if(_cacheRes) {
                _cacheList.push(_cacheRes);
            }

            return true;
        });

        return _cacheList;
    },
    initMenu: (item, menu = true, { childrenKey, listKey } = { childrenKey: 'childsList', listKey: 'list' }) => {
        let _res = false;

        if(menu) {
            _res = {
                url: item.type,
                name: item.name,
                id: item.id
            };

            _res[childrenKey] = _.initMenuChilds(item[listKey])
        }
        return _res;
    },
    menuForEach: (pageList = [], opt) => {
        let _menuArr = [];
        pageList.every((item) => {
            let _cacheRes = _.initMenu(item, item.menu, opt);
            if(_cacheRes) {
                _menuArr.push(_cacheRes);
            }

            return true;
        });

        return _menuArr;
    }
};

module.exports = _;