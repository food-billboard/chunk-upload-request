# chunk-upload-request
chunk file upload request 4 chunk-file-upload

## 介绍  
- 这是用于在[上传组件](https://github.com/food-billboard/chunk-file-load-component)中使用的`request`插件  
- 通过自定义的方式来全局定义，避免在使用中频繁设置`request`属性。

## 使用
- 安装  
`npm install chunk-upload-request`  
- 注册  
```jsx
import { Upload } from 'chunk-file-upload'
import requestPlugin from 'chunk-upload-request'

Upload.install("request", requestPlugin())

const App = () => {

  return (
    <Upload 
      actionUrl={"/api/upload"}
      //这里就不再需要定义 request 属性了
    />
  )

}

```

## API 
- 以下入参均可通过`Upload`组件进行传递，如果同时传递两者，以下设置的会被组件的覆盖  
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| url | 请求地址 | `string` | - |
| instance | Upload实例，不需要传递此参数 |  | - |
| method | 请求方法 | `string | [string, string, string?]` | [ GET, POST, PUT ] | 
| headers | 请求头 | `object | [object?, object?, object?]` | - | 
| withCredentials | 是否携带`cookie` | `boolean` | `false` | 