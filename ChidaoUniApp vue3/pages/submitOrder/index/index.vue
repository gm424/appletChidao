<template>
	<view class="submitOrder_contain">
		<view class="submitOrder">
			<orderDetail></orderDetail>
			<orderAddress></orderAddress>
			<goodsInfo></goodsInfo>
			<priceInfo></priceInfo>
			<view style="text-align: center; font-size: 13px; margin-top: 10px; color: #b9b9b9">最终费用以实际测量数据为准</view>
		</view>

		<view class="footer">
			<view>
				<view>
					预估
					<text style="color: #d5381c; font-weight: 600">￥0</text>
				</view>
				<view>
					<text style="font-size: 12px">已阅读</text>
					<text style="color: #3368e5; font-size: 12px">《赤道平台货值保规则》</text>
				</view>
			</view>
			<view style="padding: 10px 25px">
				<el-button style="background-color: #f59a23; font-weight: 600; color: #000">提交订单</el-button>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import orderDetail from './components/orderDetail.vue';
import orderAddress from './components/orderAddress.vue';
import goodsInfo from './components/goodsInfo/index.vue';
import priceInfo from './components/priceInfo.vue';
import { reactive, ref } from 'vue';
const data = reactive({
	recieveAddr:{},
	sendAddr:{}
});
onLoad((option) => {
	console.log('submitOrdrer page option', option);
	data.recieveAddr=option.recieve?JSON.parse(option.recieve):{};
	data.sendAddr=option.send?JSON.parse(option.send):{};
	console.log('submitOrdrer page data', data.recieveAddr,data.sendAddr);
});
</script>

<style lang="scss">
.submitOrder_contain {
	// position: relative;
	.submitOrder {
		display: flex;
		flex-direction: column;
		background-color: #f0f0f0;
		min-height: 100vh;
		// max-height: 1000px;
		padding-bottom: 100px;
	}
	.footer {
		height: 60px;
		position: fixed;
		bottom: 0;
		background-color: #fff;
		width: 100%;
		padding: 5px 5px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
}
</style>