<template>
	<div id="app">

		<back-to-top>
			<dy-icon size="14" type="&#xe62d;"></dy-icon>
		</back-to-top>


		<div class="box">
			<h2 class="h2">普通按钮（一）</h2>
			<dy-button type="default">默认按钮</dy-button>
			<dy-button type="primary">主要按钮</dy-button>
			<dy-button type="success">成功按钮</dy-button>
			<dy-button type="info">信息按钮</dy-button>
			<dy-button type="warning">警告按钮</dy-button>
			<dy-button type="danger">危险按钮</dy-button>
		</div>

		<div class="box">
			<h2 class="h2">普通按钮（二）</h2>
			<dy-button isPlanin type="default">默认按钮</dy-button>
			<dy-button isPlanin type="primary">主要按钮</dy-button>
			<dy-button isPlanin type="success">成功按钮</dy-button>
			<dy-button isPlanin type="info">信息按钮</dy-button>
			<dy-button isPlanin type="warning">警告按钮</dy-button>
			<dy-button isPlanin type="danger">危险按钮</dy-button>
		</div>

		<div class="box">
			<h2 class="h2">圆角按钮</h2>
			<div class="m">
				<dy-button  isRound type="default">默认按钮</dy-button>
				<dy-button  isRound type="primary">主要按钮</dy-button>
				<dy-button  isRound type="success">成功按钮</dy-button>
				<dy-button  isRound type="info">信息按钮</dy-button>
				<dy-button  isRound type="warning">警告按钮</dy-button>
				<dy-button  isRound type="danger">危险按钮</dy-button>
			</div>
			<div class="m">
				<dy-button isPlanin isRound type="default">默认按钮</dy-button>
				<dy-button isPlanin isRound type="primary">主要按钮</dy-button>
				<dy-button isPlanin isRound type="success">成功按钮</dy-button>
				<dy-button isPlanin isRound type="info">信息按钮</dy-button>
				<dy-button isPlanin isRound type="warning">警告按钮</dy-button>
				<dy-button isPlanin isRound type="danger">危险按钮</dy-button>
			</div>
		</div>

		<div class="box">
			<h2 class="h2">禁用状态</h2>
			<div class="m">
				<dy-button disabled type="default">默认按钮</dy-button>
				<dy-button disabled type="primary">主要按钮</dy-button>
				<dy-button disabled type="success">成功按钮</dy-button>
				<dy-button disabled type="info">信息按钮</dy-button>
				<dy-button disabled type="warning">警告按钮</dy-button>
				<dy-button disabled type="danger">危险按钮</dy-button>
			</div>
			<div class="m">
				<dy-button isPlanin disabled type="default">默认按钮</dy-button>
				<dy-button isPlanin disabled type="primary">主要按钮</dy-button>
				<dy-button isPlanin disabled type="success">成功按钮</dy-button>
				<dy-button isPlanin disabled type="info">信息按钮</dy-button>
				<dy-button isPlanin disabled type="warning">警告按钮</dy-button>
				<dy-button isPlanin disabled type="danger">危险按钮</dy-button>
			</div>
		</div>

		<div class="box">
			<h2 class="h2">按钮大小</h2>
			<dy-button type="primary">默认按钮</dy-button>
			<dy-button size="l" type="info">按钮</dy-button>
			<dy-button size="m" type="warning">按钮</dy-button>
			<dy-button size="s" type="danger">按钮</dy-button>
		</div>

		<div class="box">
			<h2 class="h2">图标按钮</h2>
			<dy-button type="default">
				<dy-icon size="14" type="&#xe62f;"></dy-icon>
			</dy-button>
			<dy-button type="default">
				<dy-icon size="14" type="&#xe62e;"></dy-icon>
			</dy-button>
			<dy-button type="default">
				<dy-icon size="14" type="&#xe62d;"></dy-icon>
			</dy-button>
			<dy-button type="default">
				<dy-icon size="14" type="&#xe62c;"></dy-icon>
			</dy-button>
		</div>

		<div class="box">
			<h2 class="h2">图标按钮（组合使用）</h2>
			<dy-button type="default">
				<dy-icon size="14" type="&#xe62f;"></dy-icon>
				下一页
			</dy-button>
			<dy-button type="default">
				下一页
				<dy-icon size="14" type="&#xe62e;"></dy-icon>
			</dy-button>
			<dy-button type="default">
				上一页
				<dy-icon size="14" type="&#xe62d;"></dy-icon>
			</dy-button>
			<dy-button type="default">
				<dy-icon size="14" type="&#xe62c;"></dy-icon>
				上一页
			</dy-button>
		</div>

		<div class="box">
			<h2 class="h2">点击加载</h2>
			<dy-button type="primary" @click="click" :loading="loading">点击加载</dy-button>
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
			<h2 class="h2">输入框（验证规则）</h2>
			<dy-input
				placeholder="请输入手机号码"
				v-model="telMsg"
				regex="^1\d{10}$"
				errorNotice="请输入正确的手机号码"
			></dy-input>
		</div>

		<div class="box">
			<dy-input
				placeholder="请输入邮箱地址"
				v-model="emailMsg"
				regex="[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?"
				errorNotice="请输入正确的邮箱地址"
			></dy-input>
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



		<div class="msgBox">
			<h2 class="h2">消息提示</h2>
			<dy-button @click="click9">默认消息提示</dy-button>
			<dy-button @click="click10">成功消息提示</dy-button>
			<dy-button @click="click11">警告消息提示</dy-button>
			<dy-button @click="click12">错误消息提示</dy-button>
		</div>












		<hr>
		<!-- alert -->
		<div class="box">
			<h2 class="h2">Alert</h2>
			<dy-button @click="showAlert">Alert</dy-button>
			<dy-alert :isShow.sync="alertVisible" titleText="标题" @submit="alertSubmitHandle">
				信息内容
			</dy-alert>
		</div>


		<!-- confirm -->
		<div class="box">
			<h2 class="h2">Confirm</h2>
			<dy-button @click="showConfirm">Confirm</dy-button>
			<dy-confirm 
				:isShow.sync="confirmVisible" 
				titleText="删除文件" 
				@cancel="cancelHandle" 
				@confirm="confirmHandle"
			>
                此操作将会删除该文件, 是否继续?
            </dy-confirm>
		</div>


		<!-- Prompt -->
		<div class="box">
			<h2 class="h2">Prompt</h2>
			<dy-button @click="showPrompt001">请输入手机号码</dy-button>
			<dy-prompt
				:isShow.sync="prompt001" 
				titleText="提示" 
				@cancel="prompt1" 
				@confirm="prompt2"
				v-model="promptTel"
				regex="^1\d{10}$"
				errorNotice="请输入正确的手机号码"
				placeholder="请输入手机号码"
			>
                请输入手机号码
            </dy-prompt>


			<dy-button @click="showPrompt002">请输入邮箱地址</dy-button>
			<dy-prompt
				:isShow.sync="prompt002" 
				titleText="提示" 
				@cancel="prompt3" 
				@confirm="prompt4"
				v-model="promptEmail"
				regex="[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?"
				errorNotice="请输入正确的邮箱地址"
				placeholder="请输入邮箱地址"
			>
                请输入邮箱地址
            </dy-prompt>

		</div>
















		<hr>
		<!-- model -->
		<div class="box">
			<h2 class="h2">自定义弹窗内容</h2>

			<dy-button @click="showModel">自定义弹窗</dy-button>
			<dy-model :isShow.sync="modelVisible" :width="650">

				<header class="model-header">这里是头部</header>

				<article class="model-body">
					<h2>这里是内容部分</h2>
					<p>内容</p>
					<p>内容</p>
					<p>内容</p>
					<p>内容</p>
					<p>内容</p>
					<p>内容</p>
					<p>内容</p>
					<p>内容</p>
					<p>内容</p>
				</article>

				<footer class="model-footer">
					<dy-button size="m" @click="model1">
						取消
					</dy-button>
					<dy-button type="primary" size="m" @click="model2">
						确定
					</dy-button>
				</footer>

			</dy-model>
		</div>
		
		


















		<hr>
		<div class="box">
			<h2 class="h2">Slider 默认</h2>
			<dy-slider v-model="sliderVal1"></dy-slider>
		</div>
		<div class="box">
			<h2 class="h2">Slider 默认（自定义初始值）</h2>
			<dy-slider v-model="sliderVal2"></dy-slider>
		</div>

		<div class="box">
			<h2 class="h2">Slider 显示tooltip</h2>
			<dy-slider v-model="sliderVal3" showTooltip></dy-slider>
		</div>

		<div class="box">
			<h2 class="h2">Slider 显示输入框</h2>
			<dy-slider v-model="sliderVal4" showTooltip showInput></dy-slider>
		</div>
		<div class="box">
			<h2 class="h2">Slider 输入框限定范围值（100-1000）</h2>
			<dy-slider v-model="sliderVal5" showTooltip showInput :min="100" :max="1000"></dy-slider>
		</div>

		<div class="box">
			<h2 class="h2">Slider 离散值</h2>
			<dy-slider v-model="sliderVal6" showTooltip show-input :step="10"></dy-slider>
		</div>
		<div class="box">
			<h2 class="h2">Slider 离散值（显示间断点）</h2>
			<dy-slider v-model="sliderVal7" showTooltip show-input :step="20" show-stops></dy-slider>
		</div>

















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
		name: "app",
		data() {
			return {
				loading: false,
				telMsg: "",
				emailMsg: "",
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
				v4: true,
				alertVisible: false,
				confirmVisible: false,
				modelVisible: false,
				prompt001: false,
				prompt002: false,
				promptTel: "",
				promptEmail: "",
				sliderVal1: 0,
				sliderVal2: 20,
				sliderVal3: 5,
				sliderVal4: 30,
				sliderVal5: 420,
				sliderVal6: 10,
				sliderVal7: 20,
				tableData: [{
                    num: 1,
                    title: '苹果',
                    date: '2017-10-01'
                },{
                    num: 2,
                    title: '香蕉',
                    date: '2017-10-02'
                },
                {
                    num: 3,
                    title: '葡萄',
                    date: '2017-10-03'
				}],
				tableSelect1: [],
				tableSelect2: []
			}
		},
		methods: {
			click() {
				this.loading = true;
				// ..
			},
			click1() {
				this.$notify({
					message: "这是一条默认信息",
					delay: 2000,
					type: "default"
                });
			},
			click2() {
				this.$notify({
					message: "这是一条成功信息",
					delay: 2000,
					type: "success"
                });
			},
			click3() {
				this.$notify({
					message: "这是一条警告信息",
					delay: 2000,
					type: "waring"
                });
			},
			click4() {
				this.$notify({
					message: "这是一条危险信息",
					delay: 2000,
					type: "danger"
                });
			},
			click5() {
				this.$notify({
					message: "这是一条默认信息",
					delay: 2000,
					type: "default",
					close: true,
					onClick() {
						console.log(`...`)
					}
                });
			},
			click6() {
				this.$notify({
					message: "这是一条成功信息",
					delay: 2000,
					type: "success",
					close: true,
					onClick() {
						console.log(`...`)
					}
                });
			},
			click7() {
				this.$notify({
					message: "这是一条默认信息",
					delay: 2000,
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
					message: "这是一条成功信息",
					delay: 2000,
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
                    title: "测试",
                    message: "测试测试测试测试测试测试",
                    type: "default",
					placement: "left-bottom",
					delay: 2000
                })
			},
			click10() {
				this.$message({
                    title: "测试",
                    message: "测试测试测试测试测试测试",
                    type: "success",
					placement: "left-top",
					delay: 2000
                })
			},
			click11() {
				this.$message({
                    title: "测试",
                    message: "测试测试测试测试测试测试",
                    type: "waring",
					placement: "right-bottom",
					delay: 2000,
					close: true
                })
			},
			click12() {
				this.$message({
                    title: "测试",
                    message: "测试测试测试测试测试测试",
                    type: "danger",
					placement: "right-top",
					delay: 2000,
					close: true
                })
			},



			// Alert
			showAlert() {
				this.alertVisible = true;
			},
			alertSubmitHandle() {
				setTimeout( () => {
					this.$notify({
						message: "成功提交",
						type: "success",
						delay: 2000
					})
				}, 300)
			},


			// Confirm
			showConfirm() {
				this.confirmVisible = true;
			},
			cancelHandle() {
				setTimeout( () => {
					this.$notify({
						message: "删除成功",
						type: "success",
						delay: 2000
					})
				}, 300)
			},
			confirmHandle() {
				setTimeout( () => {
					this.$notify({
						message: "删除取消",
						type: "default",
						delay: 2000
					})
				}, 300)
			},



			// Prompt
			showPrompt001() {
				this.prompt001 = true;
			},
			prompt1() {
				setTimeout( () => {
					this.$notify({
						message: `您输入的手机号码为 ${this.promptTel}`,
						type: "success",
						delay: 2000
					})
				}, 300)
			},
			prompt2() {
				setTimeout( () => {
					this.$notify({
						message: "取消输入",
						type: "default",
						delay: 2000
					})
				}, 300)
			},



			showPrompt002() {
				this.prompt002 = true;
			},
			prompt3() {
				setTimeout( () => {
					this.$notify({
						message: `您输入的邮箱地址为 ${this.promptEmail}`,
						type: "success",
						delay: 2000
					})
				}, 300)
			},
			prompt4() {
				setTimeout( () => {
					this.$notify({
						message: "取消输入",
						type: "default",
						delay: 2000
					})
				}, 300)
			},





			// 自定义弹窗
			showModel() {
				this.modelVisible = true;
			},
			model1() {
				this.modelVisible = false;
			},
			model2() {
				this.modelVisible = false;
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
	width: 525px;
	margin: 0 auto 50px;

	h2 {
		font-size: 16px;
		margin: 15px 0;
	}
}

</style>


