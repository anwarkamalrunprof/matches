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
					Fuel Your Football Passion - Anywhere, Anytime!
				</h3>
				<p>
					<span class="text-gray-700 text-base font-medium leading-relaxed mb-2.5 block"
						>Stay tuned for the launch of ElMatches mobile apps (coming soon!).
					</span>
					<span class="text-gray-700 text-base font-light leading-relaxed"
						>Wherever you are, right from your phone, you'll have the ultimate gameday
						companion that puts you at the heart of the action. Download ElMatches and
						experience live fan ratings, real-time coach connection,<br />
						personalized predictions, immersive VR experiences, and celebrating goals with
						millions of fellow fans in real-time, all on the go.</span
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
