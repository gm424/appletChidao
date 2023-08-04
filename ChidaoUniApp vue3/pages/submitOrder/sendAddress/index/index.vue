<template>
	<view class="sendAddress_contain">
		<view class="sendAddress">
			<el-empty description="暂无数据" v-if="data.contacts.length==0"/>
			<view v-else class="address_item" v-for="(item,index) in data.contacts" :key="index" @click="selectContacts(item)">
				<view class="item_title">
					<text style="font-weight: 600;font-size: 14px;margin-right: 8px;">{{item.pickupContactName}}</text>
					<text style="font-size: 12px;margin-right: 8px;">{{item.pickupContactPhone}}</text>
					
				</view>
				<view class="item_content">
					<text style="word-wrap: break-word;font-size: 12px;color: #797979;">
						温馨提示：订单审核后，会短信给您推送“送货到仓的地址”
					</text>
				</view>
				<el-divider border-style="dashed" />
				<view>
					<el-checkbox v-model="item.check"/>
					<text style="font-size: 13px;margin-left: 6px;">默认地址</text>
				</view>
			</view>
		</view>
		<view class="footer">
			<view style="padding: 10px 25px;flex:1">
				<el-button class="button_manage">管理</el-button>
			</view>
			<view style="padding: 10px 25px;flex:2">
				<el-button class="button_add" @click='addAddress'>新增地址</el-button>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { reactive, ref } from 'vue';
import { useContactsDetailStore } from '@/store/contacts.js';
import { storeToRefs } from 'pinia';
const { contacts } = storeToRefs(useContactsDetailStore);
const mainStore = useContactsDetailStore();
import { useBoxDetailStore } from '@/store/boxDetail.js';
const boxStore = useBoxDetailStore();
onLoad(()=>{
	
});
const data = reactive({
	contacts:[]
});
onLoad((option) => {
data.contacts=mainStore.contacts;
console.log('contacts',data.contacts)
});
const addAddress=()=>{
	uni.navigateTo({
		url:`/pages/submitOrder/sendAddress/contacts/contacts`
	})
}
const selectContacts=(item)=>{
	boxStore.setSendAddrInfo(item)
	console.log('SendAddrInfo',boxStore.dataForm)
	uni.navigateTo({
		url:'/pages/submitOrder/index/index?send='+ JSON.stringify(item)
	});
}
</script>

<style lang="scss">
.sendAddress_contain {
	// position: relative;
	.sendAddress {
		display: flex;
		flex-direction: column;
		background-color: #f0f0f0;
		min-height: 100vh;
		// max-height: 1000px;
		padding-bottom: 100px;
		.address_item{
			background-color: #fff;
			margin: 9px 8px;
			padding: 5px 8px;
			border-radius: 8px;
			.item_title{
				margin-bottom: 8px;
				
			}
		}
	}
	.footer {
		height: 60px;
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 5px 5px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.button_manage{
			background-color: #fff;
			font-weight: 600; 
			color: #000;
			width: 100%;
			border-radius: 15px;
		}
		.button_add{
			background-color: #f59a23; 
			font-weight: 600; 
			color: #000;
			width: 100%;
			border-radius: 15px;
		}
	}
}
	.el-divider--horizontal {
		margin-top:10px;
		margin-bottom: 0px;
	}
</style>