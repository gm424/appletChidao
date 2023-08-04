<template>
	<view class="routeItem-contain">
		<view style="flex: 1;">
			<image src="../../../../favicon.ico" class="avatar"></image>
		</view>
		<view style="flex: 8;">
			<view class="title">{{routeData.title}}</view>
			<view class="desciption-item">
				<view class="desciption">起运：{{routeData.srcCountry}}</view>
				<view class="desciption">时效：{{routeData.time}}天</view>
				<view class="desciption">计重：{{routeData.weight}}KG</view>
			</view>
			<view class="price-item">
				<view class="price">￥{{routeData.price}}</view>
				<view class="detail">查看详情<el-icon><CaretRight /></el-icon></view>
			</view>

		</view>
	</view>
	
</template>

<script setup>
	const props = defineProps({
		routeData: {
		  type: Object,
		  required: true
		}
	});
</script>

<style>
	.routeItem-contain{
		background-color: #fff;
		border-radius: 10px;
		margin-top: 10px;
		display: flex;
		flex-direction: row;
		width: 96%;
		margin-left: 2%;
	}
	.avatar{
		margin: 2px;
		height: 30px;
		width: 30px;
	}
	.title{
		font-size: 14px;
		font-weight: 600;
		padding-left: 4px;
		padding: 5px;
	}
	.desciption-item{
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #d5d5d5;
	}
	.desciption{
		font-size: 10px;
		color: #888888;
		padding: 5px;
	}
	.price-item{
		display: flex;
		flex-direction: row;
	}
	.price{
		flex:2;
		font-size: 15px;
		font-weight: 600;
		padding-left: 4px;
		padding: 5px;
		color:#da2602;
	}
	.detail{
		flex:1;
		font-size: 10px;
		color: #888888;
		padding: 5px;
		text-align: right;
	}
</style>