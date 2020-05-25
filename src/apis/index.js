import { __decorate } from "tslib";
import { Provide, Inject, Func } from '@midwayjs/decorator';
let APIService = class APIService {
    async render() {
        return 'Building... Please refresh this page later.';
    }
    async index() {
        return {
            message: 'Hello Midway FaaS!',
        };
    }
    async list() {
        return {
            list: [
                {
                    name: '@midwayjs/faas-cli',
                    info: 'FaaS 本地研发工具包'
                },
                {
                    name: '@midwayjs/faas',
                    info: '函数IoC框架'
                },
                {
                    name: '@midwayjs/runtime-engine',
                    info: '函数运行时引擎'
                }
            ]
        };
    }
    async detail() {
        const questions = this.ctx.query.questions;
        let answer = 'hello faas';
        if (questions === '123') {
            answer = 'faas 123';
        }
        else {
            answer = 'faas ...';
        }
        this.ctx.body = answer;
        return {
            message: 'Midway FaaS 是用于构建 Node.js 云函数的 Serverless 框架。帮助您在云原生时代大幅降低维护成本，更专注于产品研发。',
        };
    }
    async answer() {
        const questions = this.ctx.query.q;
        let answer = 'hello faas';
        console.log(questions);
        if (questions == '123') {
            answer = 'Function as a Service';
        }
        else {
            answer = '老公，你倒是说句话呀';
        }
        this.ctx.body = answer;
    }
};
__decorate([
    Inject()
], APIService.prototype, "ctx", void 0);
__decorate([
    Func('api.render', { middleware: ['fmw:staticFile'] })
], APIService.prototype, "render", null);
__decorate([
    Func('api.index')
], APIService.prototype, "index", null);
__decorate([
    Func('api.list')
], APIService.prototype, "list", null);
__decorate([
    Func('api.detail')
], APIService.prototype, "detail", null);
__decorate([
    Func('api.answer')
], APIService.prototype, "answer", null);
APIService = __decorate([
    Provide()
], APIService);
export { APIService };
//# sourceMappingURL=index.js.map