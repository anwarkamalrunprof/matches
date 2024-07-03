<template>
	<section
		class="bg-white"
		id="mobile"
		ref="sectionRef">
		<div class="container grid md:grid-cols-2 lg:grid-cols-5 gap-10 items-center">
			<div class="lg:col-span-2">
				<img
					src="/phones.svg"
					alt=""
					class="w-full" />
			</div>
			<div class="lg:col-span-3 grid gap-6 content-start">
				<h3 class="text-primary text-xl md:text-2xl lg:text-[28px] font-bold">
					{{ $t('downloadApp.title') }}
				</h3>
				<p>
					<span class="text-gray-700 text-base font-medium leading-relaxed mb-2.5 block"
						>{{ $t('downloadApp.subtitle') }}
					</span>
					<span class="text-gray-700 text-base font-light leading-relaxed"
						> {{$t('downloadApp.p')}}</span
					>
				</p>
				<div class="flex items-center gap-8">
					<NuxtLink to="/">
						<img
							src="/AppStore.svg"
							alt="" />
					</NuxtLink>
					<NuxtLink to="/">
						<img
							src="/GooglePlay.svg"
							alt="" />
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
</script>

<style scoped></style>