<template>
	<view class="orderAddress_contain"> 
		<view class="deliverGoods_item"  @click="AddSendAddr">
			<view class="deliverGoods_item_header">
				<view class="deliverGoods_tab">
					<text class="tab_text">发货</text>
				</view>
				<view class="deliverGoods_title">
					<text class="title_text">支持送货到仓</text>
					<view class="title-context" v-if="data.recieveAddr.pickupContactName==undefined">
						<text>姓名</text>
						<text>手机号</text>
					</view>
					<view class="title-context" v-else>
						<text>{{data.recieveAddr.pickupContactName}}</text>
						<text>{{data.recieveAddr.pickupContactPhone}}</text>
					</view>
				</view>
			</view>
			<view class="address">
				<text class="address_text">地址簿<el-icon style="color: #c3c3c3;margin-left: 5px;"><ArrowRight /></el-icon></text>
			</view>
		</view>
		<el-divider border-style="dashed" />
		<view class="recieveGoods_item" @click="AddRecieveAddr">
			<view class="recieveGoods_item_header">
				<view class="recieveGoods_tab">
					<text class="tab_text">收货</text>
				</view>
				<view class="recieveGoods_title">
					<text class="title_text">支持FBA/非FBA/海外仓</text>
					<view class="title-context" v-if="data.recieveAddr.recvCountry==undefined">
						<text>姓名</text>
						<text>手机号</text>
					</view>
					<view class="title-context" v-else>
						<text>{{data.recieveAddr.recvCountry}}</text>
						<text>{{data.recieveAddr.recvPostcode}}</text>
					</view>
				</view>
			</view>
			<view class="address">
				<text class="address_text">地址簿<el-icon style="color: #c3c3c3;margin-left: 5px;"><ArrowRight /></el-icon></text>
			</view>
			
		</view>
	</view>
</template>

<script setup>
	import {reactive} from 'vue';
	import { onLoad } from '@dcloudio/uni-app';
	import { useBoxDetailStore } from '@/store/boxDetail.js';
	import { storeToRefs } from 'pinia';
	const mainStore = useBoxDetailStore();
	const data=reactive({
		recieveAddr: {}
	})
	onLoad(()=>{
		data.recieveAddr=mainStore.dataForm.routeRecvInfo
	});
	const AddRecieveAddr=()=>{
		uni.navigateTo({
			url: `/pages/submitOrder/recieveAddress/index/index`
		})
	}
	const AddSendAddr=()=>{
		uni.navigateTo({
			url: `/pages/submitOrder/sendAddress/index/index`
		})
	}
</script>

<style lang="scss">
	.orderAddress_contain{
		background-color: #fff;
		width: 88%;
		margin-left: 4%;
		border-radius: 10px;
		margin-top: 10px;
		padding: 15px 6px;
		
		.deliverGoods_item{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.deliverGoods_item_header{
				display:flex;
				flex-direction:row;
				order:1;
				.deliverGoods_tab{
					background-color: #4fb3ff;
					width: 30px;
					height: 30px;
					text-align: center;
					line-height: 30px;
					border-radius: 50%;
					
				}
				.deliverGoods_title{
					margin-left: 4px;
					
				}
			}
				
		}
		.recieveGoods_item{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.recieveGoods_item_header{
				display:flex;
				flex-direction:row;
				order:1;
				.recieveGoods_tab{
					background-color: #ff7553;
					width: 30px;
					height: 30px;
					text-align: center;
					line-height: 30px;
					border-radius: 50%;
					
				}
				.recieveGoods_title{
					margin-left: 4px;
				}
			}
			
			
		}
		.tab_text{
			color: #fff;
			font-size: 10px;
		}
		.address{
			margin-right: 10px;
			order: 2;
			color: #c3c3c3;
			padding-left: 20px;
			border-left: 1px solid #c3c3c3;
			padding-top: 15px;
		}
		.title-context{
			font-size: 10px;
			flex-direction: column;
			display: flex;
			color: #c3c3c3;
		}
		.title_text{
			font-size: 14px;
		}
	}
	.el-divider--horizontal {
		margin:10px 0;
	}
</style>