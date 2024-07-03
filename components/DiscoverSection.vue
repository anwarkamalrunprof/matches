<template>
	<section
		class="md:bg-white mb-8"
		id="feature">
		<div class="container">
			<h3 class="text-center text-primary text-2xl md:text-3xl lg:text-4xl font-bold">
				{{ $t("Discover") }}
			</h3>
			<div class="grid md:grid-cols-2 gap-8 mt-8">
				<div
					class="py-6 px-4 bg-white rounded-md"
					v-for="feature in discoverFeatures">
					<div class="flex gap-6">
						<div
							class="md:size-20 size-12 shrink-0 bg-slate-200 rounded-md shadow md:p-4 p-1.5">
							<img
								:src="feature.img"
								alt=""
								class="size-full" />
						</div>
						<div class="grid gap-2">
							<div class="">
								<span class="text-primary text-lg md:text-xl lg:text-[22px] font-bold">
									{{ $t(feature.titleBold) }}: &nbsp;</span
								><span class="text-primary md:text-lg lg:text-[19px] font-semibold">
									{{ $t(feature.titleNormal) }}
								</span>
							</div>
							<div
								class="text-gray-700 text-sm md:text-[15px] lg:text-base font-light leading-normal">
								{{ $t(feature.description) }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	const discoverFeatures = [
		{
			img: "/f1.svg",
			titleBold: "ob1.titleBold",
			titleNormal: "ob1.titleNormal",
			description: "ob1.description",
		},
		{
			img: "/f2.svg",
			titleBold: "ob2.titleBold",
			titleNormal: "ob2.titleNormal",
			description: "ob2.description",
		},
		{
			img: "/f3.svg",
			titleBold: "ob3.titleBold",
			titleNormal: "ob3.titleNormal",
			description: "ob3.description",
		},
		{
			img: "/f4.svg",
			titleBold: "ob4.titleBold",
			titleNormal: "ob4.titleNormal",
			description: "ob4.description",
		},
	];
</script>

<class scoped></class>