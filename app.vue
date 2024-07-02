<template>
	<Html
		:lang="localeProperties.code"
		:dir="localeProperties.direction">
		
		<Body>
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</Body>
	</Html>
</template>

<script setup>
	const { localeProperties } = useI18n();
</script>
