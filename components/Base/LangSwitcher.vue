<script setup>
	const switchLocalePath = useSwitchLocalePath();
</script>

<template>
	<div class="z-0">
		<label
			for="local"
			class="hidden"></label>
		<select
			name="local"
			id="local"
			aria-label="local"
			title="local"
			class="outline-none px-4 text-primary  bg-transparent border-none cursor-pointer"
			v-model="$i18n.locale"
			@change="navigateTo(switchLocalePath($event.target.value))">
			<option value="en">English</option>
			<option value="ar" >العربية</option>
		</select>
	</div>
</template>

<style scoped></style>
