import _ from './lib/util';

let FozyMenu = {
    init: (pageList, ListKey) => _.concatList(pageList, ListKey),
    initFromMap: (map) => _.joinMapList(map),
    menu: (pageList, opt) => _.menuForEach(pageList, opt)
};

module.exports = FozyMenu;