<template>
	<view class="contained">
		<view class="route-header">
			<view class="demo-tabs">
				<text>请选择包含的货物</text>
			</view>
			<el-checkbox-group v-model="checkboxGroup1" size="small" v-for="(item,index) in classifyData" :key="index" class="choose-contain">
			      <el-checkbox  border v-for="(it,idx) in item" :key="idx" class="choose-item">{{it.name}}</el-checkbox>
			</el-checkbox-group>
		</view>
	</view>
</template>

<script setup>
import {reactive, ref} from 'vue'
const classifyData=reactive([
	[
		{
			name:'内置电池'
		},
		{
			name:'配套电池'
		},
		{
			name:'移动电池'
		}
	],
	[
		{
			name:'纯电池'
		},
		{
			name:'手机(无电)'
		},
		{
			name:'手机(内电)'
		}
	],
	[
		{
			name:'手机(配电)'
		},
		{
			name:'电子烟'
		},
		{
			name:'电容'
		}
	],
	[
		{
			name:'纺织品'
		},
		{
			name:'口罩'
		},
		{
			name:'防护服'
		}
	],
	[
		{
			name:'额温枪'
		},
		{
			name:'食品'
		},
		{
			name:'试剂'
		}
	],
	[
		{
			name:'普货'
		},
		{
			
		},
		{
			
		},
	]
])
const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style>
.contained{
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;
}
.route-header{
	flex-direction: column;
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
	border-bottom: 1px solid #d5d5d5;
	font-size: 13px;
	padding-bottom: 5px;
	margin-left: 5px;
	
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
.choose-contain{
	flex-direction: row;
	display: flex;
	text-align: center;
}
.choose-item{
	flex:1;
	background-color:#ebebeb;
	margin:5px 15px;
	border-radius: 12px;
	padding: 3px;
	font-size: 12px;
}
</style>