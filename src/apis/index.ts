import { Provide, Inject, Func } from '@midwayjs/decorator';
import { FaaSContext, FC } from '@midwayjs/faas';


@Provide()
export class APIService {

  @Inject()
  ctx! : FaaSContext;

  @Func('api.render', { middleware: [ 'fmw:staticFile' ]})
  async render() {
    return 'Building... Please refresh this page later.';
  }

  @Func('api.index')
  async index() {
    return {
      message: 'Hello Midway FaaS!',
    }
  }

  @Func('api.list')
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
    }
  }
  

  @Func('api.detail')
  async detail() {
    const questions : string= this.ctx.query.questions 
    let answer = 'hello faas'
    if(questions === '123'){
      answer = 'faas 123'
    }else{
      answer = 'faas ...'
    }
    this.ctx.body = answer
    return {
      message: 'Midway FaaS 是用于构建 Node.js 云函数的 Serverless 框架。帮助您在云原生时代大幅降低维护成本，更专注于产品研发。',
    }
  }


  
  @Func('api.answer')
  async answer() {
    const questions : string= this.ctx.query.q 
    let answer = 'hello faas'
    console.log(questions)
    if(questions == '123'){
      answer = 'Function as a Service'
    }else{
      answer = 'hello faas'
    }
    this.ctx.body = answer
  }

}
