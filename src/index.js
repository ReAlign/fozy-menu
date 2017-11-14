let _ = require('./lib/util');

let FozyMenu = {
    init: (pageList, listKey) => _.concatList(pageList, listKey),
    initFromMap: (map) => _.joinMapList(map),
    menu: (pageList, opt) => _.menuForEach(pageList, opt)
};

module.exports = FozyMenu;