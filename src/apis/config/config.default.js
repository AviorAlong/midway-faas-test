import { join } from 'path';
module.exports = (appInfo) => {
    const exports = {};
    exports.staticFile = {
        prefix: '/',
        dir: join(appInfo.baseDir, '../build'),
    };
    return exports;
};
//# sourceMappingURL=config.default.js.map