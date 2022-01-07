import requests from "./Request";

export const AccountList = ()=>{
  return requests({
    url:'/accountList',
    method:'get'
  })
}