<template>
	<nav class="md:items-center justify-center gap-8 lg:gap-10 flex-col md:flex-row inline-flex">
<<<<<<< Updated upstream
		<NuxtLink
			:to="link.href"
		
=======
		<a
			:href="link.href"
>>>>>>> Stashed changes
			v-for="(link, index) in navLinks"
			class="nav_link nav_link_dash pb-1 text-primary font-semibold tracking-wide w-fit "
			:key="link.name"
			:class="index >= 4 ? 'md:hidden' : ''"
<<<<<<< Updated upstream
			>{{ link.name }}</NuxtLink
=======
			>{{ $t(link.name) }}</a
>>>>>>> Stashed changes
		>
	</nav>
</template>

<script setup>
	const navLinks = [
<<<<<<< Updated upstream
		{ name: "About Us", href: "/" },
		{ name: "Mobile Apps", href: "/mobile" },
		{ name: "Features", href: "/feature" },
		{ name: "Terms & Conditions", href: "/terms" },
=======
		{ name: "1", href: "#about" },
		{ name: "2", href: "#mobile" },
		{ name: "3", href: "#feature" },
		{ name: "4", href: "/terms" },
>>>>>>> Stashed changes
	];

</script>

<style scoped>
	.router-link-active {
		@apply text-[#BF151E] border-b-2 border-[#BF151E] before:hidden;
	}

	.nav_link {
		position: relative;
	}

	.nav_link::before {
		transition: width 500ms;
		height: 1.5px;
		content: "";
		position: absolute;
		background-color: #030b40;
		border-radius: 50px;
		width: 0;
		left: 50%;
		transform: translateX(-50%);
		bottom: 0px;
	}

	.nav_link_dash:hover::before {
		width: 100%;
		transform: translateX(0);
		inset-inline-start: 0px;
	}
</style>
