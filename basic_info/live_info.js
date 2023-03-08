const axios = require('axios');

// 获取直播间信息
// get live room info
/**
 * @param roomId 直播间ID
 * @return Promise 异步返回相关信息，参考同文件下的markdown
 * */
function getRoomInfo(roomId) {
    const url = "https://api.live.bilibili.com/room/v1/Room/get_info";
    return new Promise((resolve, reject) => {
        axios.get(url,{
            params:{
                room_id: roomId
            }
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    });
}

//
//




// 输出函数以便调用
module.exports = {
    getRoomInfo
}