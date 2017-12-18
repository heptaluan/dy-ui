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
						<li><router-link to="/box">汇总</router-link></li>
						<li><router-link to="/table">Table 表格</router-link></li>
						<li><router-link to="/button">Button 按钮</router-link></li>
						<li><router-link to="/input">Input 输入框</router-link></li>
						<li><router-link to="/radio">Radio 单选框</router-link></li>
						<li><router-link to="/checkbox">Checkbox 多选框</router-link></li>
						<li><router-link to="/switch">Switch 开关</router-link></li>

					</ul>
					
				</div>

				<div class="wrapper-content">
					<article>
						<router-view></router-view>
					</article>
				</div>

			</div>
		</div>
	</div>
</template>