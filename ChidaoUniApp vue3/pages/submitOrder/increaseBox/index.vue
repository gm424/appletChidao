<template>
	<view class="productDetail_container">
		<view class="productDetail_content">
			<!-- <view class="productDetail_content_item">
				<view class="content_item_name">FBA外箱标</view>
				<view class="content_item_value">
					<el-input placeholder="请填写"></el-input>
				</view>
			</view>
			<view class="productDetail_content_item">
				<view class="content_item_name">货件追踪编号</view>
				<view class="content_item_value">
					<el-input placeholder="请填写"></el-input>
				</view>
			</view> -->
			<view class="productDetail_content_item" @click="centerDialogVisible = true">
				<view class="content_item_name">尺寸</view>
				<view class="content_item_value">
					<text v-if="!QuotationInformationForm.length">请选择</text>
					<text v-else>{{QuotationInformationForm.length}}CM*{{QuotationInformationForm.width}}CM*{{QuotationInformationForm.height}}CM</text>
				</view>
			</view>
			<view class="productDetail_content_item">
				<view class="content_item_name">重量</view>
				<view class="content_item_value">
					<el-input placeholder="请填写" v-model="QuotationInformationForm.weight" style="width: 70px;"></el-input>
				</view>
			</view>
			<view class="productDetail_content_item">
				<view class="content_item_name">箱数</view>
				<view class="content_item_value">
					<el-input-number v-model="QuotationInformationForm.count" size="small" />
				</view>
			</view>
			<view class="productDetail_button" @click="SelectProduct">
				<text>
					<el-icon><CirclePlus /></el-icon>
					选择产品
				</text>
			</view>
		</view>

		<view class="selectProduct_content_data" v-for="(item, index) in QuotationInformationForm.goodInfo" :key="index">
			<image src="../../../static/user-bg.jpg" class="item_img"></image>
			<view class="item_info">
				<view class="info_name">{{ item.name }}</view>
				<view class="info_list">
					<text style="color: #969696; margin-right: 4px">材质:</text>
					<text>{{ item.material }}</text>
				</view>
				<view class="info_list">
					<text style="color: #969696; margin-right: 4px">用途:</text>
					<text>{{ item.goodsProp }}</text>
				</view>
				<view class="info_list">
					<text style="color: #969696; margin-right: 4px">海关编码:</text>
					<text>{{ item.hsCode }}</text>
				</view>
			</view>
			<view class="item_button">
				<view class="button_operate">

					<view class="button_delete">
						<el-icon><Delete /></el-icon>
					</view>
				</view>
				<view class="">
					<el-input-number v-model="item.count" @change="handleChange" size="small" />
				</view>
			</view>
		</view>

		<view class="submit_button" @click="IncreaseBox">
			<text>确定</text>
		</view>
		<el-dialog v-model="centerDialogVisible" title="尺寸" width="80%" center>
			<el-form :label-position="labelPosition" label-width="100px" :model="QuotationInformationForm" style="max-width: 460px" ref="ruleFormRef" :rules="rules">
				<el-row :gutter="10">
					<el-col :span="8">
						<el-form-item label="长(cm)" prop="length">
							<el-input v-model="QuotationInformationForm.length" />
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="宽(cm)" prop="width">
							<el-input v-model="QuotationInformationForm.width" />
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="高(cm)" prop="height">
							<el-input v-model="QuotationInformationForm.height" />
						</el-form-item>
					</el-col>
				</el-row>
				<el-form-item>
					<span class="dialog-footer">
						<el-button @click="centerDialogVisible = false">取消</el-button>
						<el-button @click="submitForm(ruleFormRef)" style="background-color: #f59a23">确定</el-button>
					</span>
				</el-form-item>
			</el-form>
		</el-dialog>
	</view>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useBoxDetailStore } from '@/store/boxDetail.js';
import { storeToRefs } from 'pinia';
import { onLoad } from '@dcloudio/uni-app';
const { boxDetail } = storeToRefs(useBoxDetailStore);
const mainStore = useBoxDetailStore();
const centerDialogVisible = ref(false);
const labelPosition = ref('top');
let QuotationInformationForm = reactive({
	count: '',
	length: '',
	width: '',
	height: '',
	weight: '',
	goodInfo: []
});
const ruleFormRef = ref();
const rules = reactive({
	length: [{ required: true, message: '不能为空', trigger: 'blur' }],
	width: [{ required: true, message: '不能为空', trigger: 'blur' }],
	height: [{ required: true, message: '不能为空', trigger: 'blur' }]
});
onLoad((option) => {
	console.log('onLoad',option);
	let obj = option.goodInfo?JSON.parse(option.goodInfo):[];
	QuotationInformationForm.goodInfo = obj;
	QuotationInformationForm=option.item?mainStore.dataForm.boxSpecs[option.item]:QuotationInformationForm;
	// QuotationInformationForm=mainStore.dataForm.boxSpecs[option.item]
	console.log('QuotationInformationForm',QuotationInformationForm)

});
const submitForm = async (formEl) => {
	if (!formEl) return;
	await formEl.validate((valid, fields) => {
		if (valid) {
			console.log('submit!');
			centerDialogVisible.value = false;
		} else {
			console.log('error submit!', fields);
		}
	});
};
const IncreaseBox = () => {
	console.log('QuotationInformationForm', QuotationInformationForm);
	mainStore.setBoxInfo(QuotationInformationForm);
	uni.navigateTo({
		url:`/pages/submitOrder/index/index`
	})
};
const SelectProduct = () => {
	uni.navigateTo({
		url: `/pages/submitOrder/selectProduct/index`
	});
};
</script>

<style lang="scss">
.productDetail_container {
	background-color: #f1f1f1;
	min-height: 100vh;
	.productDetail_content {
		margin-top: 10px;
		font-size: 13px;
		padding: 0 10px;
		background-color: #fff;
		padding-bottom: 12px;
		.productDetail_content_item {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 10px;
			border-bottom: 1px solid #e7e7e7;
			padding-bottom: 10px;
			.content_item_value {
				font-weight: 600;
			}
		}
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
	.productDetail_button {
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
.el-input__wrapper {
  border: none !important;
  box-shadow: none !important;
  padding: 0px; //前边边距去掉

}
</style>