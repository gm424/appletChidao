import { defineStore } from 'pinia';
// import userApi from '@/sheep/api/user';
import { isEmpty, cloneDeep, clone } from 'lodash';

// 默认用户信息
const defaultUserInfo = {
  avatar: '', // 头像
  nickname: '', // 昵称
  gender: 0, // 性别
  mobile: '', // 手机号
  money: '--', // 余额
  commission: '--', // 佣金
  score: '--', // 积分
  verification: {}, // 认证字段
};

// 默认订单、优惠券等其他资产信息
const defaultNumData = {
  coupons_num: '--',
  order_num: {
    aftersale: 0,
    nocomment: 0,
    noget: 0,
    nosend: 0,
    unpaid: 0,
  },
};

const user = defineStore({
  id: 'user',
  state: () => ({
    userInfo: clone(defaultUserInfo), // 用户信息
    isLogin: !!uni.getStorageSync('token'), // 登录状态
    numData: cloneDeep(defaultNumData), // 用户其他数据
    agentInfo: {}, // 分销商信息
    lastUpdateTime: 0, // 上次更新时间
  }),

  actions: {
    // 获取个人信息
    async getInfo() {
      // const { error, data } = await userApi.profile();
      // if (error !== 0) return;
      // this.userInfo = data;
      // return Promise.resolve(data);
	  return 0;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user-store',
      },
    ],
  },
});

export default user;
