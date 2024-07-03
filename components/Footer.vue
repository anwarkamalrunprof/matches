<template>
	<footer class="bg-image py-10 text-gray-200">
		<div class="container grid md:grid-cols-2 lg:grid-cols-12 gap-8 gap-y-12 md:gap-y-16">
			<div class="lg:col-span-3">
				<img
					src="/logo-blain.svg"
					alt=""
					class="max-w-56" />
			</div>
			<div
				class="grid gap-4 content-start"
				:class="{
					'lg:col-span-4': index === 0,
					'lg:col-span-3': index === 1,
					'lg:col-span-2': index === 2,
				}"
				v-for="(links, index) in footerLinks">
				<div class="text-gray-300 text-[17px] font-bold">{{ $t(links.title) }}</div>
				<ul class="text-gray-300 text-sm font-normal">
					<li
						v-for="link in links.links"
						class=" font-normal max-lg:mt-2 my-4 leading-snug flex items-center gap-2">
						<img
						v-if="link.img"
							:src="link.img"
							alt=""
							class="shrink-0 size-4" />
						<NuxtLink :to="link.href">{{ $t(link.name) }}</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
		<div class="text-center text-neutral-50 text-xs font-light mt-20 container tracking-wide">
			{{ $t("footer.copyRight") }}
		</div>
	</footer>
</template>

<script setup>
	const footerLinks = [
		{
			title: "col1.title",
			links: [
				{
					name: "col1.links.1.name",
					href: "",
					img: "/carbon_location.svg",
				},
				{ name: "+44 7551 789020", href: "tel:+44 7551 789020", img: "/solar_phone-outline.svg" },
				{ name: " Admin@ElMatches.com", href: "mailto:", img: "/carbon_email.svg" },
			],
		},
		{
			title: "col2.title",
			links: [
				{
					name: "col2.links.1.name",
					href: "",
					img: "/carbon_location.svg",
				},
				{ name: "www.runprof.com", href: "www.runprof.com", img: "/website.svg" },
				{ name: "+2 01017657590", href: "tel:+201017657590", img: "/solar_phone-outline.svg" },
			],
		},
		{
			title: "col3.title",
			links: [
				{ name: "col3.links.1.name", href: "/" },
				{ name: "col3.links.2.name", href: "/" },
				{ name: "col3.links.3.name", href: "/" },
			],
		},
	];
</script>

<style scoped>
	.bg-image {
		background-image: url("/bg.png");
		background-size: cover;
		background-position: center;
	}
</style>