import {
	defineStore
} from 'pinia';
import {
	isEmpty,
	cloneDeep,
	clone
} from 'lodash';

const boxInfo = {
	boxDetail: [
		{
			count:'',
			length: '',
			width: '',
			height: '',
			weight:'',
			goodInfo:[]
		}
	]

}

export const useBoxDetailStore = defineStore({
	id: 'boxDetail',
	state: () => {
		return {
			dataForm:{
				boxSpecs:[],
				routeId:'',
				routeRecvInfo:{}
			}
		}
	},

	actions: {
		// 增加箱规
		async setBoxInfo(data){
			this.dataForm.boxSpecs.push(data)
		},
		// 删除某个箱规
		async deleteBoxInfo(index){
			this.dataForm.boxSpecs.splice(index,1)
		},
		// 增加收货信息
		async setRecieveAddrInfo(data){
			Object.assign(this.dataForm.routeRecvInfo,data)
		},
		// 增加发货信息
		async setSendAddrInfo(data){
			Object.assign(this.dataForm.routeRecvInfo,data)
		},
	},

});