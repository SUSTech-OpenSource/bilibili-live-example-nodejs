const basic_info = require('./basic_info/live_info')
const login = require('./login/login')
login.getQRCode().then(res =>{
    console.log(res)
    console.log(res["code"] === 0)
}).catch(err =>{
    console.error(err)
})
