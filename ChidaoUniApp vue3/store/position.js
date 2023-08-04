import { defineStore } from 'pinia';
// import userApi from '@/sheep/api/user';
import { isEmpty, cloneDeep, clone } from 'lodash';

// 默认用户信息
const positionInfo = {
srcCountry:'深圳市',//起始地
dstCountry:'美国',//目的地
};

export const usePositionStore = defineStore({
  id: 'position',
  state: () => {
	return {
		srcCountry:'深圳市',//起始地
		dstCountry:'美国',
  }
  },

  actions: {
    // 获取个人信息
    async setInfo(data) {
		if(data.srcCountry)
		this.srcCountry=data.srcCountry
		else
		this.dstCountry=data.dstCountry
    },
  },

});

 
