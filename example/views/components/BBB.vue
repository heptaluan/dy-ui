<template>
	<div id="app">

		<hr>
		<div class="box">
			<h2 class="h2">表格 - Table（默认）</h2>
			<dy-table :data="tableData">
				<dy-table-col prop="num" label="序号"></dy-table-col>
				<dy-table-col prop="title" label="名称"></dy-table-col>
				<dy-table-col prop="date" label="日期"></dy-table-col>
			</dy-table>
		</div>
		<div class="box">
			<h2 class="h2">表格 - Table（带边框）</h2>
			<dy-table :data="tableData" :border="true">
				<dy-table-col prop="num" label="序号"></dy-table-col>
				<dy-table-col prop="title" label="名称"></dy-table-col>
				<dy-table-col prop="date" label="日期"></dy-table-col>
			</dy-table>
		</div>
		<div class="box">
			<h2 class="h2">表格 - Table（背景色）</h2>
			<dy-table :data="tableData" :border="true" :striped="true">
				<dy-table-col prop="num" label="序号"></dy-table-col>
				<dy-table-col prop="title" label="名称"></dy-table-col>
				<dy-table-col prop="date" label="日期"></dy-table-col>
			</dy-table>
		</div>
		<div class="box">
			<h2 class="h2">表格 - Table（鼠标移入效果）</h2>
			<dy-table :data="tableData" :border="true" :striped="true" :hover="true">
				<dy-table-col prop="num" label="序号"></dy-table-col>
				<dy-table-col prop="title" label="名称"></dy-table-col>
				<dy-table-col prop="date" label="日期"></dy-table-col>
			</dy-table>
		</div>
		<div class="box">
			<h2 class="h2">表格 - Table（单选框）</h2>
			<dy-table v-model="tableSelect1" :select="true" :data="tableData" :border="true" :striped="true" :hover="true">
				<dy-table-col prop="num" label="序号"></dy-table-col>
				<dy-table-col prop="title" label="名称"></dy-table-col>
				<dy-table-col prop="date" label="日期"></dy-table-col>
			</dy-table>
			<div class="subBox">
				当前选择的是：{{ tableSelect1 }}
			</div>
		</div>
		<div class="box">
			<h2 class="h2">表格 - Table（全选框）</h2>
			<dy-table 
				v-model="tableSelect2" 
				:selectAll="true" 
				:select="true" 
				:data="tableData" 
				:border="true" 
				:striped="true" 
				:hover="true"
			>
				<dy-table-col prop="num" label="序号"></dy-table-col>
				<dy-table-col prop="title" label="名称"></dy-table-col>
				<dy-table-col prop="date" label="日期"></dy-table-col>
				<div slot="tfoot">全选行自定义内容</div>
			</dy-table>
			<div class="subBox">
				当前选择的是：{{ tableSelect2 }}
			</div>
		</div>














</div>
</template>

<script>
	export default {
		name: "Home",
		data() {
			return {
				tableData: [{
                    num: 1,
                    title: "苹果",
                    date: "2017-12-12"
                },{
                    num: 2,
                    title: "香蕉",
                    date: "2017-12-12"
                },
                {
                    num: 3,
                    title: "葡萄",
                    date: "2017-12-12"
				},
				{
                    num: 4,
                    title: "西瓜",
                    date: "2017-12-12"
				}],
				tableSelect1: [],
				tableSelect2: []
			}
		},
		methods: {
			
		},
		mounted() {
			// console.log(hljs)
		}
	};
</script>

