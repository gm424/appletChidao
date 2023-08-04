<template>
	<view class="productDetail_container">
		<view class="productDetail_content">
			<view class="productDetail_content_item">
				<view class="content_item_name">中文品名</view>
				<view class="content_item_value">
					<el-input placeholder="请填写" v-model="ProductInfoForm.name"></el-input>
				</view>
			</view>
			<view class="productDetail_content_item">
				<view class="content_item_name">英文品名</view>
				<view class="content_item_value">
					<el-input placeholder="请填写" v-model="ProductInfoForm.enName"></el-input>
				</view>
			</view>
			<view class="productDetail_content_item">
				<view class="content_item_name">海关编码</view>
				<view class="content_item_value">
					<el-input placeholder="请填写" v-model="ProductInfoForm.hsCode"></el-input>
				</view>
			</view>
			<view class="productDetail_content_item">
				<view class="content_item_name">品牌</view>
				<view class="content_item_value">
					<el-input placeholder="请填写" v-model="ProductInfoForm.brand"></el-input>
				</view>
			</view>
			<view class="productDetail_content_item">
				<view class="content_item_name">型号</view>
				<view class="content_item_value">
					<el-input placeholder="请填写" v-model="ProductInfoForm.model"></el-input>
				</view>
			</view>
			<view class="productDetail_content_item">
				<view class="content_item_name">材质</view>
				<view class="content_item_value">
					<el-input placeholder="请填写" v-model="ProductInfoForm.material"></el-input>
				</view>
			</view>
			<view class="productDetail_content_item">
				<view class="content_item_name">用途</view>
				<view class="content_item_value">
					<el-input placeholder="请填写" v-model="ProductInfoForm.purpose"></el-input>
				</view>
			</view>
			<view class="productDetail_content_item">
				<view class="content_item_name">货物类型</view>
				<view class="content_item_value">
					<el-input placeholder="请填写" v-model="ProductInfoForm.goodsProp"></el-input>
				</view>
			</view>
			<view class="productDetail_content_item">
				<view class="content_item_name">申报价值(美金)</view>
				<view class="content_item_value">
					<el-input placeholder="请填写" v-model="ProductInfoForm.value"></el-input>
				</view>
			</view>
		</view>

		<view class="submit_button" @click="submitForm">
			<text>确定</text>
		</view>
	</view>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useProductDetailStore } from '@/store/productDetail.js';
import { storeToRefs } from 'pinia';
const { productDetail } = storeToRefs(useProductDetailStore);
const mainStore = useProductDetailStore();
const centerDialogVisible = ref(false);
const labelPosition = ref('top');
const ProductInfoForm = reactive({
	asin: '',
	brand: '',
	count: 0,
	enName: '',
	file: '',
	goodsProp: '',
	hsCode: '',
	material: '',
	model: '',
	name: '',
	pictureUrl: '',
	purpose: '',
	value: 0,
	selected:false
});
const ruleFormRef = ref();
const rules = reactive({
	length: [{ required: true, message: '不能为空', trigger: 'blur' }],
	width: [{ required: true, message: '不能为空', trigger: 'blur' }],
	height: [{ required: true, message: '不能为空', trigger: 'blur' }],
	asin: [{ required: true, message: '不能为空', trigger: 'blur' }],
	brand: [{ required: true, message: '不能为空', trigger: 'blur' }],
	count: [{ required: true, message: '不能为空', trigger: 'blur' }],
	enName: [{ required: true, message: '不能为空', trigger: 'blur' }],
	file: [{ required: true, message: '不能为空', trigger: 'blur' }],
	goodsProp: [{ required: true, message: '不能为空', trigger: 'blur' }],
	hsCode: [{ required: true, message: '不能为空', trigger: 'blur' }],
	material: [{ required: true, message: '不能为空', trigger: 'blur' }],
	model: [{ required: true, message: '不能为空', trigger: 'blur' }],
	name: [{ required: true, message: '不能为空', trigger: 'blur' }],
	pictureUrl: [{ required: true, message: '不能为空', trigger: 'blur' }],
	purpose: [{ required: true, message: '不能为空', trigger: 'blur' }],
	value: [{ required: true, message: '不能为空', trigger: 'blur' }]
});
const submitForm = () => {
	mainStore.setProductInfo(ProductInfoForm);
	uni.navigateTo({
		url:`/pages/submitOrder/selectProduct/index`
	})
};
const IncreaseBox = () => {
	console.log('ProductInfoForm', ProductInfoForm);
};
const SelectProduct = () => {};
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
</style>