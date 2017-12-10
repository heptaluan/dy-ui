<template>
	<div id="app">

		<back-to-top>
			<dy-icon size="14" type="&#xe62d;"></dy-icon>
		</back-to-top>


		<div class="box">
			<h2 class="h2">普通按钮（一）</h2>
			<dy-button color="default">默认按钮</dy-button>
			<dy-button color="primary">主要按钮</dy-button>
			<dy-button color="success">成功按钮</dy-button>
			<dy-button color="info">信息按钮</dy-button>
			<dy-button color="warning">警告按钮</dy-button>
			<dy-button color="danger">危险按钮</dy-button>
		</div>

		<div class="box">
			<h2 class="h2">普通按钮（二）</h2>
			<dy-button isPlanin color="default">默认按钮</dy-button>
			<dy-button isPlanin color="primary">主要按钮</dy-button>
			<dy-button isPlanin color="success">成功按钮</dy-button>
			<dy-button isPlanin color="info">信息按钮</dy-button>
			<dy-button isPlanin color="warning">警告按钮</dy-button>
			<dy-button isPlanin color="danger">危险按钮</dy-button>
		</div>

		<div class="box">
			<h2 class="h2">圆角按钮</h2>
			<div class="m">
				<dy-button  isRound color="default">默认按钮</dy-button>
				<dy-button  isRound color="primary">主要按钮</dy-button>
				<dy-button  isRound color="success">成功按钮</dy-button>
				<dy-button  isRound color="info">信息按钮</dy-button>
				<dy-button  isRound color="warning">警告按钮</dy-button>
				<dy-button  isRound color="danger">危险按钮</dy-button>
			</div>
			<div class="m">
				<dy-button isPlanin isRound color="default">默认按钮</dy-button>
				<dy-button isPlanin isRound color="primary">主要按钮</dy-button>
				<dy-button isPlanin isRound color="success">成功按钮</dy-button>
				<dy-button isPlanin isRound color="info">信息按钮</dy-button>
				<dy-button isPlanin isRound color="warning">警告按钮</dy-button>
				<dy-button isPlanin isRound color="danger">危险按钮</dy-button>
			</div>
		</div>

		<div class="box">
			<h2 class="h2">禁用状态</h2>
			<div class="m">
				<dy-button disabled color="default">默认按钮</dy-button>
				<dy-button disabled color="primary">主要按钮</dy-button>
				<dy-button disabled color="success">成功按钮</dy-button>
				<dy-button disabled color="info">信息按钮</dy-button>
				<dy-button disabled color="warning">警告按钮</dy-button>
				<dy-button disabled color="danger">危险按钮</dy-button>
			</div>
			<div class="m">
				<dy-button isPlanin disabled color="default">默认按钮</dy-button>
				<dy-button isPlanin disabled color="primary">主要按钮</dy-button>
				<dy-button isPlanin disabled color="success">成功按钮</dy-button>
				<dy-button isPlanin disabled color="info">信息按钮</dy-button>
				<dy-button isPlanin disabled color="warning">警告按钮</dy-button>
				<dy-button isPlanin disabled color="danger">危险按钮</dy-button>
			</div>
		</div>

		<div class="box">
			<h2 class="h2">按钮大小</h2>
			<dy-button size="xlll" color="default">最大的</dy-button>
			<dy-button size="xll" color="primary">比较大</dy-button>
			<dy-button size="xl" color="success">默认大小</dy-button>
			<dy-button size="l" color="info">稍微小一点</dy-button>
			<dy-button size="m" color="warning">比较小</dy-button>
			<dy-button size="s" color="danger">最小的</dy-button>
		</div>

		<div class="box">
			<h2 class="h2">图标按钮</h2>
			<dy-button color="default">
				<dy-icon size="14" type="&#xe62f;"></dy-icon>
			</dy-button>
			<dy-button color="default">
				<dy-icon size="14" type="&#xe62e;"></dy-icon>
			</dy-button>
			<dy-button color="default">
				<dy-icon size="14" type="&#xe62d;"></dy-icon>
			</dy-button>
			<dy-button color="default">
				<dy-icon size="14" type="&#xe62c;"></dy-icon>
			</dy-button>
		</div>

		<div class="box">
			<h2 class="h2">图标按钮（组合使用）</h2>
			<dy-button color="default">
				<dy-icon size="14" type="&#xe62f;"></dy-icon>
				下一页
			</dy-button>
			<dy-button color="default">
				下一页
				<dy-icon size="14" type="&#xe62e;"></dy-icon>
			</dy-button>
			<dy-button color="default">
				上一页
				<dy-icon size="14" type="&#xe62d;"></dy-icon>
			</dy-button>
			<dy-button color="default">
				<dy-icon size="14" type="&#xe62c;"></dy-icon>
				上一页
			</dy-button>
		</div>

		<div class="box">
			<h2 class="h2">点击加载</h2>
			<dy-button color="primary" @click="click" :loading="loading">点击加载</dy-button>
		</div>







		<hr>

		<div class="box">
			<h2 class="h2">图标 Icon（基于阿里云矢量图标库）</h2>
			<dy-icon size="12" type="&#xe631;"></dy-icon>
			<dy-icon size="16" type="&#xe653;"></dy-icon>
			<dy-icon size="20" type="&#xe652;"></dy-icon>
			<dy-icon size="24" type="&#xe64c;"></dy-icon>
			<dy-icon size="28" type="&#xe631;"></dy-icon>
			<dy-icon size="32" type="&#xe628;"></dy-icon>
			<dy-icon size="36" type="&#xe631;"></dy-icon>
			<dy-icon size="40" type="&#xe652;"></dy-icon>
			<dy-icon size="44" type="&#xe653;"></dy-icon>
		</div>
		







		<hr>

		<div class="box">
			<h2 class="h2">输入框（默认）</h2>
			<dy-input></dy-input>
		</div>

		<div class="box">
			<h2 class="h2">输入框（定制大小）</h2>
			<dy-input w="90%" h="40px"></dy-input>
		</div>

		<div class="box">
			<dy-input w="80%" h="50px"></dy-input>
		</div>

		<div class="box">
			<dy-input w="70%" h="55px"></dy-input>
		</div>

		<div class="box">
			<h2 class="h2">输入框（禁用状态）</h2>
			<dy-input disabled></dy-input>
		</div>

		<div class="box">
			<h2 class="h2">复合型输入框</h2>
			<dy-input-group>
				<span slot="prepend">帐号</span>
				<span slot="append">密码</span>
				<dy-input></dy-input>
			</dy-input-group>
		</div>

		<div class="box">
			<h2 class="h2">复合型输入框</h2>
			<dy-input-group disabled>
				<span slot="prepend">帐号@@@@@</span>
				<dy-input></dy-input>
			</dy-input-group>
		</div>

		<div class="box">
			<h2 class="h2">复合型输入框</h2>
			<dy-input-group>
				<span slot="append">@@@@@@@@@@@@密码</span>
				<dy-input></dy-input>
			</dy-input-group>
		</div>

		<div class="box">
			<h2 class="h2">文本框（默认）</h2>
			<dy-input type="textarea"></dy-input>
		</div>

		<div class="box">
			<h2 class="h2">文本框（可以拖拽）</h2>
			<dy-input resize type="textarea"></dy-input>
		</div>












		<hr>

		<div class="box">
			<h2 class="h2">单选框</h2>
			<dy-radio-group v-model="radio1">
				<dy-radio label="苹果"></dy-radio>
				<dy-radio label="香蕉"></dy-radio>
				<dy-radio label="葡萄"></dy-radio>
				<dy-radio label="鸭梨"></dy-radio>
			</dy-radio-group>
			<div class="subBox">
				当前选择的是：{{ radio1 }}
			</div>
		</div>

		<div class="box">
			<h2 class="h2">单选框（默认选中）</h2>
			<dy-radio-group v-model="radio2">
				<dy-radio label="苹果"></dy-radio>
				<dy-radio label="香蕉"></dy-radio>
				<dy-radio label="葡萄"></dy-radio>
				<dy-radio label="鸭梨"></dy-radio>
			</dy-radio-group>
			<div class="subBox">
				当前选择的是：{{ radio2 }}
			</div>
		</div>

		<div class="box">
			<h2 class="h2">单选框（整体禁用）</h2>
			<dy-radio-group disabled v-model="radio3">
				<dy-radio label="苹果"></dy-radio>
				<dy-radio label="香蕉"></dy-radio>
				<dy-radio label="葡萄"></dy-radio>
				<dy-radio label="鸭梨"></dy-radio>
			</dy-radio-group>
		</div>

		<div class="box">
			<h2 class="h2">单选框（单个禁用）</h2>
			<dy-radio-group v-model="radio4">
				<dy-radio disabled label="苹果"></dy-radio>
				<dy-radio label="香蕉"></dy-radio>
				<dy-radio disabled label="葡萄"></dy-radio>
				<dy-radio label="鸭梨"></dy-radio>
			</dy-radio-group>
			<div class="subBox">
				当前选择的是：{{ radio4 }}
			</div>
		</div>

		<div class="box">
			<h2 class="h2">按钮样式</h2>
			<dy-radio-group v-model="radio5">
				<dy-radio-button label="苹果"></dy-radio-button>
				<dy-radio-button label="香蕉"></dy-radio-button>
				<dy-radio-button label="葡萄"></dy-radio-button>
				<dy-radio-button label="鸭梨"></dy-radio-button>
			</dy-radio-group>
			<div class="subBox">
				当前选择的是：{{ radio5 }}
			</div>
		</div>

		<div class="box">
			<h2 class="h2">按钮样式（禁用）</h2>
			<dy-radio-group disabled v-model="radio6">
				<dy-radio-button label="苹果"></dy-radio-button>
				<dy-radio-button label="香蕉"></dy-radio-button>
				<dy-radio-button label="葡萄"></dy-radio-button>
				<dy-radio-button label="鸭梨"></dy-radio-button>
			</dy-radio-group>
		</div>











		<hr>
		<div class="box">
			<h2 class="h2">多选框</h2>
			<dy-checkbox-group v-model="checkbox1">
				<dy-checkbox label="苹果"></dy-checkbox>
				<dy-checkbox label="香蕉"></dy-checkbox>
				<dy-checkbox label="葡萄"></dy-checkbox>
				<dy-checkbox label="鸭梨"></dy-checkbox>
			</dy-checkbox-group>
			<div class="subBox">
				当前选择的是：{{ checkbox1 }}
			</div>
		</div>

		<div class="box">
			<h2 class="h2">多选框（默认选中）</h2>
			<dy-checkbox-group v-model="checkbox2">
				<dy-checkbox label="苹果"></dy-checkbox>
				<dy-checkbox label="香蕉"></dy-checkbox>
				<dy-checkbox label="葡萄"></dy-checkbox>
				<dy-checkbox label="鸭梨"></dy-checkbox>
			</dy-checkbox-group>
			<div class="subBox">
				当前选择的是：{{ checkbox2 }}
			</div>
		</div>

		<div class="box">
			<h2 class="h2">多选框（全部禁用）</h2>
			<dy-checkbox-group disabled v-model="checkbox3">
				<dy-checkbox label="苹果"></dy-checkbox>
				<dy-checkbox label="香蕉"></dy-checkbox>
				<dy-checkbox label="葡萄"></dy-checkbox>
				<dy-checkbox label="鸭梨"></dy-checkbox>
			</dy-checkbox-group>
			<div class="subBox">
				当前选择的是：{{ checkbox3 }}
			</div>
		</div>

		<div class="box">
			<h2 class="h2">多选框（部分禁用）</h2>
			<dy-checkbox-group v-model="checkbox4">
				<dy-checkbox disabled label="苹果"></dy-checkbox>
				<dy-checkbox label="香蕉"></dy-checkbox>
				<dy-checkbox label="葡萄"></dy-checkbox>
				<dy-checkbox label="鸭梨"></dy-checkbox>
			</dy-checkbox-group>
			<div class="subBox">
				当前选择的是：{{ checkbox4 }}
			</div>
		</div>

		<div class="box">
			<h2 class="h2">多选框（限定选择项）</h2>
			<dy-checkbox-group v-model="checkbox5" :min="1" :max="3">
				<dy-checkbox label="苹果"></dy-checkbox>
				<dy-checkbox label="香蕉"></dy-checkbox>
				<dy-checkbox label="葡萄"></dy-checkbox>
				<dy-checkbox label="鸭梨"></dy-checkbox>
			</dy-checkbox-group>
			<div class="subBox">
				当前选择的是：{{ checkbox5 }}
			</div>
		</div>













		<hr>

		<div class="box">
			<h2 class="h2">开关 - Switch（默认）</h2>
			<dy-switch v-model="v1"></dy-switch>
		</div>


		<div class="box">
			<h2 class="h2">开关 - Switch（文字提示）</h2>
			<dy-switch 
				v-model="v2"
				activeText="左侧"
				inActiveText="右侧"
			></dy-switch>
		</div>


		<div class="box">
			<h2 class="h2">开关 - Switch（禁用状态）</h2>
			<dy-switch 
				disabled
				v-model="v3"
				activeText="左侧"
				inActiveText="右侧"
			></dy-switch>
		</div>
		<div class="box">
			<dy-switch 
				disabled
				v-model="v4"
				activeText="左侧"
				inActiveText="右侧"
			></dy-switch>
		</div>














		<hr>


		<div class="box">
			<h2 class="h2">ToolTip</h2>
			<div class="tooltip">
				<div class="top">
					<dy-tooltip content="这里是提示这里是提示" placement="top-start">
						<dy-button>上左</dy-button>
					</dy-tooltip>
					<dy-tooltip content="这里是提示这里是提示" placement="top">
						<dy-button>正上</dy-button>
					</dy-tooltip>
					<dy-tooltip content="这里是提示这里是提示" placement="top-end">
						<dy-button>上右</dy-button>
					</dy-tooltip>
				</div>

				<div class="left">
					<dy-tooltip content="这里是提示这里是提示" placement="left-start">
						<dy-button>左上</dy-button>
					</dy-tooltip>
					<dy-tooltip content="这里是提示这里是提示" placement="left">
						<dy-button>正左</dy-button>
					</dy-tooltip>
					<dy-tooltip content="这里是提示这里是提示" placement="left-end">
						<dy-button>左下</dy-button>
					</dy-tooltip>
				</div>
				<div class="right">
					<dy-tooltip content="这里是提示这里是提示" placement="right-start">
						<dy-button>右上</dy-button>
					</dy-tooltip>
					<dy-tooltip content="这里是提示这里是提示" placement="right">
						<dy-button>正右</dy-button>
					</dy-tooltip>
					<dy-tooltip content="这里是提示这里是提示" placement="right-end">
						<dy-button>右下</dy-button>
					</dy-tooltip>
				</div>
				<div class="bottom">
					<dy-tooltip content="这里是提示这里是提示" placement="bottom-start">
						<dy-button>下左</dy-button>
					</dy-tooltip>
					<dy-tooltip content="这里是提示这里是提示" placement="bottom">
						<dy-button>正下</dy-button>
					</dy-tooltip>
					<dy-tooltip content="这里是提示这里是提示" placement="bottom-end">
						<dy-button>右下</dy-button>
					</dy-tooltip>
				</div>
			</div>
		</div>
















		<hr>

		<div class="box">
			<h2 class="h2">通知</h2>
			<dy-button @click="click1">默认通知</dy-button>
			<dy-button @click="click2">成功通知</dy-button>
			<dy-button @click="click3">警告通知</dy-button>
			<dy-button @click="click4">危险通知</dy-button>
		</div>

		<div class="box">
			<h2 class="h2">通知（带关闭按钮）</h2>
			<dy-button @click="click5">默认通知</dy-button>
			<dy-button @click="click6">成功通知</dy-button>
		</div>

		<div class="box">
			<h2 class="h2">通知（文字居中）</h2>
			<dy-button @click="click7">默认通知</dy-button>
			<dy-button @click="click8">成功通知</dy-button>
		</div>









		<hr>

		<div class="msgBox">
			<h2 class="h2">消息提示</h2>
			<dy-button @click="click9">默认消息提示</dy-button>
			<dy-button @click="click10">成功消息提示</dy-button>
		</div>


		
		


</div>
</template>

<script>
	export default {
		name: "app",
		data() {
			return {
				loading: false,
				radio1: "",
				radio2: "葡萄",
				radio3: "",
				radio4: "",
				radio5: "苹果",
				radio6: "",
				checkbox1: [],
				checkbox2: ["苹果", "葡萄"],
				checkbox3: ["苹果"],
				checkbox4: [],
				checkbox5: ["苹果"],
				v1: false,
				v2: false,
				v3: false,
				v4: true
			}
		},
		methods: {
			click() {
				this.loading = true;
				// ..
			},
			click1() {
				this.$notify({
					message: '这是一条默认信息',
					delay: 3000,
					type: "default"
                });
			},
			click2() {
				this.$notify({
					message: '这是一条成功信息',
					delay: 99999,
					type: "success"
                });
			},
			click3() {
				this.$notify({
					message: '这是一条警告信息',
					delay: 3000,
					type: "waring"
                });
			},
			click4() {
				this.$notify({
					message: '这是一条危险信息',
					delay: 3000,
					type: "danger"
                });
			},
			click5() {
				this.$notify({
					message: '这是一条默认信息',
					delay: 3000,
					type: "default",
					close: true,
					onClick() {
						console.log(`...`)
					}
                });
			},
			click6() {
				this.$notify({
					message: '这是一条成功信息',
					delay: 3000,
					type: "success",
					close: true,
					onClick() {
						console.log(`...`)
					}
                });
			},
			click7() {
				this.$notify({
					message: '这是一条默认信息',
					delay: 3000,
					type: "default",
					close: true,
					onClick() {
						console.log(`...`)
					},
					align: "center"
                });
			},
			click8() {
				this.$notify({
					message: '这是一条成功信息',
					delay: 3000,
					type: "success",
					close: true,
					onClick() {
						console.log(`...`)
					},
					align: "center"
                });
			},
			click9() {
				this.$message({
                    title: '测试',
                    message: '测试测试测试测试测试测试',
                    type: 'default',
					placement: 'left-top',
					delay: 2000,
					close: true
                })
			},
			click10() {
				this.$message({
                    title: '测试',
                    message: '测试测试测试测试测试测试',
                    type: 'success',
					placement: 'right-top',
					delay: 2000,
					close: true
                })
			}
		}
	};
</script>

<style lang="scss">
#app {
	width: 1000px;
	margin: 50px auto;

	.box {
		width: 100%;
		margin-bottom: 20px;

		.h2 {
			font-size: 16px;
			margin: 15px 0;
		}

		.m {
			margin: 15px 0;
		}

		.subBox {
			margin-top: 20px;
		}
	}
}

.tooltip {

	width: 400px;
	margin: 50px auto;

	button {
		margin: 10px;
	}

	.top {
		text-align: center;
		width: 430px;
	}

	.left {
		float: left;
		width: 90px;
	}

	.right {
		float: right;
		width: 60px;
	}

	.bottom {
		clear: both;
		text-align: center;
		width: 430px;
	}

	.item {
		margin: 4px;
	}

	.left .el-tooltip__popper,
	.right .el-tooltip__popper {
		padding: 8px 10px;
	}
}

.msgBox {
	width: 400px;
	margin: 0 auto;

	h2 {
		font-size: 16px;
		margin: 15px 0;
	}
}
</style>


