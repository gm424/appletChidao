import {
	defineStore
} from 'pinia';
import {
	isEmpty,
	cloneDeep,
	clone
} from 'lodash';

const productInfo = {
	productDetail: []

}

export const useProductDetailStore = defineStore({
	id: 'productDetail',
	state: () => {
		return {
			productDetail:[]
		}
	},

	actions: {
		// 获取个人信息
		async setProductInfo(data){
			this.productDetail.push(data)
		},
	},

});