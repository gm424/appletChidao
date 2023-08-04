<template>
	<view class="GoodsInfo_container">
		<view class="GoodsInfo_title">
			<text class="title">货物信息</text>
		</view>
		<el-divider border-style="dashed" />
		<view class="GoodsInfo_description">
			<text class="desciption">点击下方按钮，依次填写箱规、商品等信息</text>
		</view>
		<BoxGauge></BoxGauge>
		<view class="GoodsInfo_button" @click="addBox">
			<text><el-icon><CirclePlus /></el-icon>增加一箱</text>
		</view>
	</view>
</template>

<script setup>
	import BoxGauge from './boxGauge.vue'
	const addBox=(item)=>{
		uni.navigateTo({
			url:`/pages/submitOrder/increaseBox/index`
		})
	}
</script>

<style lang="scss">
	.GoodsInfo_container{
		background-color: #fff;
		margin-top: 10px;
		border-radius: 10px;
		width: 92%;
		margin-left: 4%;
		padding-bottom: 15px;
		.GoodsInfo_title{
			padding-left: 7px;
			margin-top: 10px;
			font-weight: 600;
			font-size: 15px;
			border-left: 3px solid $theme-color;
		}
		.GoodsInfo_description{
			padding-left: 7px;
			font-size: 12px;
			color: #969696;
		}
		.GoodsInfo_button{
			background-color: #f0f0f0;
			width: 80%;
			margin-left: 10%;
			text-align: center;
			padding: 8px 0;
			border-radius: 15px;
			color: #295bff;
			font-size: 13px;
			margin-top: 15px;
		}
	}
	.el-divider--horizontal {
		margin:10px 0;
	}
</style>