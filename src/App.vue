<template>
	<div id="app">
		<div class="box">
			<h2>普通按钮（一）</h2>
			<dy-button color="default">默认按钮</dy-button>
			<dy-button color="primary">主要按钮</dy-button>
			<dy-button color="success">成功按钮</dy-button>
			<dy-button color="info">信息按钮</dy-button>
			<dy-button color="warning">警告按钮</dy-button>
			<dy-button color="danger">危险按钮</dy-button>
		</div>

		<div class="box">
			<h2>普通按钮（二）</h2>
			<dy-button isPlanin color="default">默认按钮</dy-button>
			<dy-button isPlanin color="primary">主要按钮</dy-button>
			<dy-button isPlanin color="success">成功按钮</dy-button>
			<dy-button isPlanin color="info">信息按钮</dy-button>
			<dy-button isPlanin color="warning">警告按钮</dy-button>
			<dy-button isPlanin color="danger">危险按钮</dy-button>
		</div>

		<div class="box">
			<h2>圆角按钮</h2>
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
			<h2>禁用状态</h2>
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
			<h2>按钮大小</h2>
			<dy-button size="xlll" color="default">最大的</dy-button>
			<dy-button size="xll" color="primary">比较大</dy-button>
			<dy-button size="xl" color="success">默认大小</dy-button>
			<dy-button size="l" color="info">稍微小一点</dy-button>
			<dy-button size="m" color="warning">比较小</dy-button>
			<dy-button size="s" color="danger">最小的</dy-button>
		</div>

		<div class="box">
			<h2>点击加载</h2>
			<dy-button color="primary" @click="click" :loading="loading">点击加载</dy-button>
		</div>

		


		
	</div>
</template>

<script>
	export default {
		name: "app",
		data() {
			return {
				loading: false
			}
		},
		methods: {
			click() {
				this.loading = true;
				// ..
			}
		}
	};
</script>

<style lang="scss">
	#app {
		width: 1000px;
		margin: 50px auto 0;

		.box {
			width: 100%;
			margin-bottom: 20px;

			h2 {
				font-size: 16px;
				margin: 15px 0;
			}

			.m {
				margin: 15px 0;
			}
		}
	}
</style>


