<template>
	<div>

		<back-to-top>
			<dy-icon size="14" type="&#xe62d;"></dy-icon>
		</back-to-top>

		<header>
			<div class="header">
				dy-ui
			</div>
		</header>
		
		<div class="wrapper">
			
			<div class="wrapper-container">

				<div class="wrapper-list">
					<ul>

						<div class="list-title">组件</div>
						<li><router-link to="/table">Table 表格</router-link></li>
						<li><router-link to="/icon">Icon 图标</router-link></li>
						<li><router-link to="/close">Close 关闭按钮</router-link></li>
						<li><router-link to="/backtotop">BackToTop 回到顶部</router-link></li>
						<li><router-link to="/button">Button 按钮</router-link></li>
						<li><router-link to="/input">Input 输入框</router-link></li>
						<li><router-link to="/radio">Radio 单选框</router-link></li>
						<li><router-link to="/checkbox">Checkbox 多选框</router-link></li>
						<li><router-link to="/switch">Switch 开关</router-link></li>
						<li><router-link to="/tooltip">ToolTip 文字提示</router-link></li>
						<li><router-link to="/notify">Notify 顶部消息通知</router-link></li>
						<li><router-link to="/message">Message 侧边信息提示</router-link></li>
						<li><router-link to="/dialog">Dialog 对话框</router-link></li>
						<li><router-link to="/slider">Slider 滑块</router-link></li>

					</ul>
					
				</div>

				<div class="wrapper-content">
					<article>
						<transition name="fade">
							<router-view></router-view>
						</transition>
					</article>
				</div>

			</div>
		</div>
	</div>
</template>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
	transition: opacity .3s
}

.fade-enter, .fade-leave-to  {
	opacity: 0
}
</style>
