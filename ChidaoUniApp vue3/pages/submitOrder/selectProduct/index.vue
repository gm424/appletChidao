<template>
	<view class="selectProduct_container">
		<view class="selectProduct_content">
			<view class="selectProduct_content_item" @click="AddProduct">
				<el-icon style="margin-top: 5px"><CirclePlus /></el-icon>
				新增产品
			</view>
		</view>
		<view class="selectProduct_content_empty" v-if="goodsInfo.length==0">
			<el-empty description="noData" />
		</view>
		<view v-else class="selectProduct_content_data" v-for="(item,index) in goodsInfo" :key="index">
			<el-checkbox v-model="item.selected" class="item_checkbox"/>
			<image src="../../../static/user-bg.jpg" class="item_img"></image>
			<view class="item_info">
				<view class="info_name">{{item.name}}</view>
				<view class="info_list">
					<text style="color: #969696;margin-right: 4px;">材质:</text>
					<text>{{item.material}}</text>
				</view>
				<view class="info_list">
					<text style="color: #969696;margin-right: 4px;">用途:</text>
					<text>{{item.goodsProp}}</text>
				</view>
				<view class="info_list">
					<text style="color: #969696;margin-right: 4px;">海关编码:</text>
					<text>{{item.hsCode}}</text>
				</view>
			</view>
			<view class="item_button">
				<view class="button_operate">
					<view class="button_edit"><el-icon><EditPen /></el-icon></view>
					<view class="button_delete"><el-icon><Delete /></el-icon></view>
				</view>
				<view class="">
					 <el-input-number v-model="item.count" @change="handleChange" size="small"/>
				</view>
			</view>
		</view>
		<view class="submit_button" @click="IncreaseBox">
			<text>确定</text>
		</view>
	</view>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { useProductDetailStore } from '@/store/productDetail.js';
import { storeToRefs } from 'pinia';
const { productDetail } = storeToRefs(useProductDetailStore);
const mainStore = useProductDetailStore();
let goodsInfo = reactive([]);
onLoad(()=>{
	goodsInfo=mainStore.productDetail
	console.log('goodsInfo',goodsInfo)
})
const IncreaseBox = () => {
	uni.navigateTo({
		url:'/pages/submitOrder/increaseBox/index?goodInfo='+ JSON.stringify(goodsInfo)
	});
};
const AddProduct = () => {
	uni.navigateTo({
		url: `/pages/submitOrder/productDetail/index`
	});
};
</script>

<style lang="scss">
.selectProduct_container {
	background-color: #f1f1f1;
	min-height: 100vh;
	.selectProduct_content {
		margin-top: 10px;
		font-size: 13px;
		padding: 0 10px;
		background-color: #fff;
		padding-bottom: 12px;
		position: relative;
		.selectProduct_content_item {
			margin-bottom: 10px;
			padding-bottom: 5px;
			text-align: right;
			color: #1616ec;
		}
	}
	.selectProduct_content_empty{
		margin-top: 10px;
		background-color: #fff;
	}
	.selectProduct_content_data {
		margin-top: 10px;
		background-color: #fff;
		flex-direction: row;
		display: flex;
		padding: 10px 5px;
		.item_img{
			// flex:1.5;
			width: 60px;
			height: 60px;
			margin-left: 12px;
			border-radius: 10px;
		}
		.item_info{
			flex:2;
			margin-left: 18px;
			font-size:12px;
			.info_name{
				
			}
		}
		.item_button{
			flex:1;
			margin-left: 12px;
			.button_operate{
				display: flex;
				flex-direction: row;
				margin-bottom: 14px;
				.button_edit{
					background-color: #ececec;
					width: 30px;
					height: 30px;
					text-align: center;
					border-radius: 50%;
					line-height: 30px;
				}
				.button_delete{
					background-color: #ececec;
					width: 30px;
					height: 30px;
					text-align: center;
					border-radius: 50%;
					line-height: 30px;
					margin-left: 15px;
				}
			}
		}
	}
	.selectProduct_button {
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
	.submit_button {
		background-color: $theme-color;
		width: 80%;
		margin-left: 10%;
		text-align: center;
		padding: 8px 0;
		border-radius: 15px;
		color: #424242;
		font-size: 13px;
		bottom: 10px;
		position: absolute;
		// margin-top: 15px;
	}
}
.el-divider--horizontal {
	margin: 10px 0;
}
</style>