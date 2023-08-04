import {
	defineStore
} from 'pinia';
import {
	isEmpty,
	cloneDeep,
	clone
} from 'lodash';
export const useContactsDetailStore = defineStore({
	id: 'contactsDetail',
	state: () => {
		return {
			contacts:[]
		}
	},

	actions: {
		// 增加箱规
		async setContactsInfo(data){
			this.contacts.push(data)
		},
		// 删除某个箱规
		async deleteContactsInfo(index){
			this.contacts.splice(index,1)
		}
	},

});