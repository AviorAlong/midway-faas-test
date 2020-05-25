import { __decorate } from "tslib";
import { Configuration } from '@midwayjs/decorator';
let ContainerConfiguration = class ContainerConfiguration {
};
ContainerConfiguration = __decorate([
    Configuration({
        importConfigs: [
            './config/'
        ],
        imports: [
            '@midwayjs/faas-middleware-static-file'
        ]
    })
], ContainerConfiguration);
export { ContainerConfiguration };
//# sourceMappingURL=configuration.js.map