<template>
	<header class="py-2.5 shadow z-[999] fixed w-full top-0 bg-white">
		<div class="container flex items-center justify-between">
			<div class="flex items-center gap-6">
				<button @click="toggleModal">
					<img
						src="/headerMenu.svg"
						alt=""
						class="md:hidden" />
				</button>
				<img
					src="/logo.svg"
					alt=""
					class="md:max-w-28 max-w-24" />
			</div>
			<div class="max-md:hidden">
				<NavLinks />
			</div>
			<BaseLangSwitcher />
		</div>
	</header>
	<MobileHeaderToggle
		:modalActive="modalActive"
		@close-modal="toggleModal"  />
</template>

<script setup>
	// Toggle modal function
	const modalActive = ref(false);
	const toggleModal = () => {
		modalActive.value = !modalActive.value;
	};
</script>

<style scoped></style>
