// 用于登录b站使用，可以方便进行登录操作
const axios = require('axios');
// 二维码登录
function getQRCode(){
    const url = "https://passport.bilibili.com/x/passport-login/web/qrcode/generate";
    return new Promise((resolve, reject) => {
        axios.get(url,{
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    });
}


module.exports = {
    getQRCode
}