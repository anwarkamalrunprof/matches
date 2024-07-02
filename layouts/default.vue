<template>
	<div id="layout" >
		<Header />
		<div class="flex-grow">
			<slot />
		</div>
		<Footer />
	</div>
</template>
<style scoped>
	#layout {
		display: flex;
		flex-direction: column;
		height: 100vh;
		position: relative;
	}
</style>
