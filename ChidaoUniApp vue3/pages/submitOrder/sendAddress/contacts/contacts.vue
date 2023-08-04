<template>
	<view class="addAddress_container">
		<view class="addAddress_content">
			<view class="addAddress_content_item">
				<view class="content_item_name">联系人</view>
				<view class="content_item_value">
					<el-input placeholder="请填写" v-model="InfoForm.pickupContactName"></el-input>
				</view>
			</view>
			<view class="addAddress_content_item">
				<view class="content_item_name">联系电话</view>
				<view class="content_item_value">
					<el-input placeholder="请填写" v-model="InfoForm.pickupContactPhone"></el-input>
				</view>
			</view>
		</view>
		<view style="margin-top: 10px;background-color: #fff;padding: 10px 10px;">
			<view style="word-wrap: break-word;font-size: 12px;color: #797979;">温馨提示：</view>
			<view style="word-wrap: break-word;font-size: 12px;color: #797979;">
				受市场行情影响价格可能波动频繁，若选择送货到仓，最终您需支付金额将按照实际测量时间的价格进行计算；订单审核通过后，请到个人中心-我的订单下载打印面单。
			</view>
		</view>
		<view class="submit_button" @click="submitForm">
			<text>确定</text>
		</view>
	</view>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { useContactsDetailStore } from '@/store/contacts.js';
import { storeToRefs } from 'pinia';
const { contacts } = storeToRefs(useContactsDetailStore);
const mainStore = useContactsDetailStore();
const InfoForm = reactive({
	pickupContactPhone: '',
	pickupContactName: '',
	check:false
});
const submitForm = () => {
	mainStore.setContactsInfo(InfoForm)
	uni.navigateTo({
		url:`/pages/submitOrder/sendAddress/index/index`
	})
};
</script>

<style lang="scss">
.addAddress_container {
	background-color: #f1f1f1;
	min-height: 100vh;
	.addAddress_content {
		margin-top: 10px;
		font-size: 13px;
		padding: 0 10px;
		background-color: #fff;
		padding-bottom: 12px;
		.addAddress_content_item {
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
	.addAddress_button {
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