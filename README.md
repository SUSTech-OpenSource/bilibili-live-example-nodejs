# bilibili-live-example-nodejs
b站直播api的nodejs实现样例


### 注意事项
由于本仓库的大部分请求均采用异步发送，所以返回也使用了Promise来保证异步，您在使用的时候可以参考如下样例:
```js
const basic_info = require('./basic_info/live_info')

basic_info.getRoomInfo(1).then(res =>{
    console.log(res)
}).catch(err =>{
    console.error(err)
})
```