<template>
	<view class="container">
		<view class="route-header">
			<view class="demo-tabs">
				<el-tabs v-model="activeName"  @tab-click="handleClick">
				    <el-tab-pane label="包裹" name="first">
						<view class="imformation">
							<view class="imformation-item"><text>件数</text><el-tag>必填</el-tag></view>
							<view class="imformation-item"><input placeholder="请输入件数"/></view>
							<view class="imformation-item"><el-tag>纸箱</el-tag></view>
						</view>
						<view class="imformation">
							<view class="imformation-item"><text>重量</text><el-tag>必填</el-tag></view>
							<view class="imformation-item"><input placeholder="请输入货物重量"/></view>
							<view class="imformation-item"><el-tag>KG</el-tag></view>
						</view>
						<view class="imformation">
							<view class="imformation-item"><text>体积</text><el-tag>必填</el-tag></view>
							<view class="imformation-item"><input placeholder="请输入货物体积"/></view>
							<view class="imformation-item"><el-tag>CBM</el-tag></view>
						</view>
					</el-tab-pane>
				    <el-tab-pane label="文件" name="second">文件</el-tab-pane>
				</el-tabs>
			</view>
		</view>
	</view>
</template>

<script setup>
import {ref} from 'vue'
const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style>
.container{
	flex-direction: column;
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
}
.route-header{
	flex-direction: row;
	display: flex;
	background-color: #fff;
	width: 90%;
	margin-top: 5px;
	margin-bottom: 5px;
	border-radius: 8px;
	padding: 10px;
}
.demo-tabs{
	width: 100%;
	text-align: center;
}
.imformation{
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #d5d5d5;
	text-align: center;
	padding: 5px;
}
.imformation-item{
	flex:1;
	
}
</style>