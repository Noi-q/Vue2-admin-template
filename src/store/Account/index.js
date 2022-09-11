
// import {AccountList} from '../../API/index'

const state = {
  userData:[
    {
      user_id:'001',
      user_name: 'Noi-q',
      full_name: 'Noi-q',
      user_class: '技术部',
      user_role: '前端程序员',
      account_status: '可用',
      reg_time: '2022/1/2'
    },
    {
      user_id:'001',
      user_name: 'Noi-q',
      full_name: 'Noi-q',
      user_class: '技术部',
      user_role: '前端程序员',
      account_status: '可用',
      reg_time: '2022/1/2'
    },
    {
      user_id:'001',
      user_name: 'Noi-q',
      full_name: 'Noi-q',
      user_class: '技术部',
      user_role: '前端程序员',
      account_status: '可用',
      reg_time: '2022/1/2'
    },
    {
      user_id:'001',
      user_name: 'Noi-q',
      full_name: 'Noi-q',
      user_class: '技术部',
      user_role: '前端程序员',
      account_status: '可用',
      reg_time: '2022/1/2'
    },
    {
      user_id:'001',
      user_name: 'Noi-q',
      full_name: 'Noi-q',
      user_class: '技术部',
      user_role: '前端程序员',
      account_status: '可用',
      reg_time: '2022/1/2'
    },
    {
      user_id:'001',
      user_name: 'Noi-q',
      full_name: 'Noi-q',
      user_class: '技术部',
      user_role: '前端程序员',
      account_status: '可用',
      reg_time: '2022/1/2'
    },
  ]
}

const mutations = {
  AccountAdd(state,Add){
    let user = {}
    user.user_id = Date.now()
    user.user_name = Add.name
    user.full_name = Add.fullName
    user.user_class = Add.region
    user.user_role = Add.type
    user.account_status = '可用'
    user.reg_time = '2022/1/7'
    state.userData.push(user)
    alert('创建成功')
  }
}

const actions = {
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}