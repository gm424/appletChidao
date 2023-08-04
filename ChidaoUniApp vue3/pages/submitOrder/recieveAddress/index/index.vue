<template>
	<view class="address_contain">
		<view class="address_item" v-for="(item,index) in dataForm" :key="index" @click="selectAddress(index)">
			<view class="item_title">
				<text style="font-weight: 600;font-size: 14px;margin-right: 8px;">{{item.recvCountry}}</text>
				<text style="font-size: 12px;margin-right: 8px;">仓库编码：{{item.warehouseCode}}</text>
				<text style="font-size: 12px;margin-right: 8px;">邮政编码：{{item.recvPostcode}}</text>
			</view>
			<view class="item_content">
				<text style="word-wrap: break-word;font-size: 12px;color: #797979;">{{item.content}}</text>
			</view>
			<el-divider border-style="dashed" />
			<view>
				<el-checkbox v-model="item.check"/>
				<text style="font-size: 13px;margin-left: 6px;">默认地址</text>
			</view>
		</view>
	</view>
</template>

<script setup>
import { reactive } from "vue";
import { onLoad } from '@dcloudio/uni-app';
import { useBoxDetailStore } from '@/store/boxDetail.js';
import { storeToRefs } from 'pinia';
const mainStore = useBoxDetailStore();
onLoad(()=>{
	
});
const dataForm=reactive([
	{
		recvCountry:'日本',
		warehouseCode:'TY09',
		recvPostcode:'1389',
		content:'因此，在网页设计中，我们需要使用CSS来自动调整文本的行宽，让文字自动换行，以提高用户的视觉体验和阅读效果。',
		check:false
	},
	{
		recvCountry:'中国',
		warehouseCode:'TY09',
		recvPostcode:'1389',
		content:'因此，在网页设计中，我们需要使用CSS来自动调整文本的行宽，让文字自动换行，以提高用户的视觉体验和阅读效果。',
		check:false
	},
	{
		recvCountry:'韩国',
		warehouseCode:'TY09',
		recvPostcode:'1389',
		content:'因此，在网页设计中，我们需要使用CSS来自动调整文本的行宽，让文字自动换行，以提高用户的视觉体验和阅读效果。',
		check:false
	},{
		recvCountry:'美国',
		warehouseCode:'TY09',
		recvPostcode:'1389',
		content:'因此，在网页设计中，我们需要使用CSS来自动调整文本的行宽，让文字自动换行，以提高用户的视觉体验和阅读效果。',
		check:false
	}
])
const selectAddress=(index)=>{
	mainStore.setRecieveAddrInfo(dataForm[index])
	console.log('RecieveAddrInfo',mainStore.dataForm)
	uni.navigateTo({
		url:'/pages/submitOrder/index/index?recieve='+ JSON.stringify(dataForm[index])
	});
}
</script>

<style lang="scss">
.address_contain{
	background-color: #f0f0f0;
	min-height: 100vh;
	padding-top: 2px;
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
	.el-divider--horizontal {
		margin-top:10px;
		margin-bottom: 0px;
	}
</style>
