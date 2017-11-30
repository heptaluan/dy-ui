<template>
	<div id="app">
		<div style="height:1500px;"></div>
		<backToTop></backToTop>
	</div>
</template>

<script>
	import backToTop from "./components/backToTop";
	export default {
		name: "app",
		components: {
			backToTop
		}
	};
</script>

<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
