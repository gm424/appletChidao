<template>
	<view class="boxGauge_container" v-for="(item,index) in dataForm.boxSpecs" :key="index">
		<view class="boxGauge_header">
			<view class="header_title">
				<text>箱规{{index+1}}</text>
			</view>
			<view class="header_button">
				<text class="edit" @click="Edit(index)">
					<el-icon><EditPen /></el-icon>
					编辑
				</text>
				<text class="delete" @click="DeleteBox(index)">
					<el-icon><Delete /></el-icon>
					删除
				</text>
			</view>
		</view>
		<view class="boxGauge_content">
			<view class="boxGauge_content_item">
				<view class="content_item_name">尺寸</view>
				<view class="content_item_value">{{item.length}}CM*{{item.width}}CM*{{item.height}}CM</view>
			</view>
			<view class="boxGauge_content_item">
				<view class="content_item_name">毛重</view>
				<view class="content_item_value">{{item.weight}}KG</view>
			</view>
			<view class="boxGauge_content_item">
				<view class="content_item_name">箱数</view>
				<view class="content_item_value">
					<el-input-number v-model="item.count" size="small" @change="handleChange" />
				</view>
			</view>
			<view class="selectProduct_content_data" v-for="(it, idx) in item.goodInfo" :key="idx">
				<image src="../../../../../static/user-bg.jpg" class="item_img"></image>
				<view class="item_info">
					<view class="info_name">{{ it.name }}</view>
					<view class="info_list">
						<text style="color: #969696; margin-right: 4px">材质:</text>
						<text>{{ it.material }}</text>
					</view>
					<view class="info_list">
						<text style="color: #969696; margin-right: 4px">数量:</text>
						<text>{{ it.count }}</text>
					</view>
				</view>
				<view class="item_button">
					<view class="button_operate">
						<view class="button_delete">
							<el-icon><Delete /></el-icon>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import {reactive} from 'vue'
import { onLoad } from '@dcloudio/uni-app';
import { useBoxDetailStore } from '@/store/boxDetail.js';
import { storeToRefs } from 'pinia';
const { boxDetail } = storeToRefs(useBoxDetailStore);
const mainStore = useBoxDetailStore();
let dataForm = reactive({
	boxSpecs:[]
});
onLoad(() => {
	dataForm.boxSpecs = mainStore.dataForm.boxSpecs;
	console.log('dataForm.boxSpecs', dataForm.boxSpecs);
});
const DeleteBox=(index)=>{
	mainStore.deleteBoxInfo(index)
}
const Edit=(index)=>{
	uni.navigateTo({
		url: `/pages/submitOrder/increaseBox/index?item=${index}`
	})
}
</script>

<style lang="scss">
.boxGauge_container {
	display: flex;
	flex-direction: column;
	padding: 0 10px;
	margin-top: 10px;
	.boxGauge_header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-bottom: 10px;
		border-bottom: 1px solid #d3d3d3;
		.header_title {
			font-size: 13px;
			background-color: $theme-color;
			padding: 3px;
			border-radius: 6px;
		}
		.header_button {
			.edit {
				color: #3368e5;
				margin-left: 10px;
				font-size: 13px;
			}
			.delete {
				color: #d5381c;
				margin-left: 10px;
				font-size: 13px;
			}
		}
	}
	.boxGauge_content {
		margin-top: 10px;
		font-size: 13px;
		.boxGauge_content_item {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 10px;
			.content_item_value {
				color: #c2c2c2;
			}
		}
	}
}
.selectProduct_content_data {
	margin-top: 10px;
	background-color: #fff;
	flex-direction: row;
	display: flex;
	padding: 10px 5px;
	.item_img {
		// flex:1.5;
		width: 60px;
		height: 60px;
		margin-left: 12px;
		border-radius: 10px;
	}
	.item_info {
		flex: 2;
		margin-left: 18px;
		font-size: 12px;
		.info_name {
		}
	}
	.item_button {
		flex: 1;
		margin-left: 12px;
		.button_operate {
			display: flex;
			flex-direction: row;
			margin-bottom: 14px;
			.button_edit {
				background-color: #ececec;
				width: 30px;
				height: 30px;
				text-align: center;
				border-radius: 50%;
				line-height: 30px;
			}
			.button_delete {
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
.el-input-number--small {
	width: 80px;
}
</style>