<template>
	<div>

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
						<li>
							<router-link to="/button">Button 按钮</router-link>
						</li>
						<li>
							<router-link to="/bbb">分页</router-link>
						</li>

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