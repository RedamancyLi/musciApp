 import jsonp from 'common/js/jsonp'
 import {commonParams,options} from "./config";
import axios from 'axios'

 export  function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const  data=Object.assign({},commonParams,{
    platform:'h5',
    uni:0,
    needNewCode:1
  })

   return jsonp(url,data,options)
}

export function getDisCList() {
   const url='/api/getDiscList'

  const  data=Object.assign({},commonParams,{
    platform:'yqq.json',
    needNewCode:0,
    categoryId:10000000,
    ein:19,
    sin:0,
    sortId:5,
    loginUin: 0,
    notice:0,
    hostUin:0,
    rnd:Math.random(),
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    picmid: 1
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
  
}
