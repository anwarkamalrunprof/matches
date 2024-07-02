<template>
	<main class="bg-hero text-white" id="about">
		<div class="bg-black/60 h-full">
			<div
				class="container grid md:grid-cols-2 lg:grid-cols-5 z-50 text-white items-center h-full gap-10 py-8">
				<div class="lg:col-span-3 text-white">
					<h1 class="text-2xl md:text-3xl lg:text-4xl font-bold">By The Fans, For The Fans</h1>
					<h3 class="lg:text-lg mt-4">ELMATCHES - A New Era of Football Fan Engagement..</h3>
					<p class="mt-5 block max-md:text-xs !leading-relaxed">
						With a deep passion for the beautiful game, ElMatches is a social football gaming
						entertainment platform powered by cutting-edge blockchain technology. We bridge
						the gap between fans and the action on the field, empowering you to elevate your
						matchday experience and be part of a vibrant community where every voice matters.
						ElMatches: Your game, your voice, your community.
					</p>
					<p class="mt-4 max-md:text-xs !leading-relaxed">
						<NuxtLink
							to="/"
							class="text-yellow-500 underline font-semibold tracking-wider"
							>Learn More</NuxtLink
						>
						about ElMatches and unlock exclusive access to experience football like never
						before. Don't miss out - Join our waiting list now!
					</p>
				</div>
				<div class="lg:col-span-2 bg-white/10 p-5 backdrop-blur-[2px] rounded-lg">
					<div class="text-white text-xl md:text-2xl font-semibold mb-8 tracking-wide">
						Join The Waiting List
					</div>
					<div class="grid gap-5">
						<div class="grid gap-2">
							<label for="Name">Name</label>
							<input
								type="text"
								name=""
								id=""
								placeholder="Enter Your Name" />
						</div>
						<div class="grid gap-2">
							<label for="Email">Email</label>
							<input
								type="email"
								name="email"
								id=""
								placeholder="Enter Your Email" />
						</div>
						<div class="grid gap-2 min-w-0">
							<label for="">Mobile Number <span class="text-red-600">*</span> </label>
							<BasePhoneNumberInput />
						
						</div>
						<button
							class="btn__primary w-fit"
							@click="isJoined = true">
							Join Now
						</button>
					</div>
				</div>
			</div>
		</div>
	</main>
	<Teleport to="body">
		<div
			class="fixed inset-0 bg-black/50 z-[9999] hidden place-items-center px-4"
			:class="isJoined ? '!grid' : ''">
			<div
				class="w-full sm:max-w-md p-6 bg-white shadow flex-col justify-start items-center gap-4 inline-flex rounded-sm drop-shadow-lg">
				<img
					src="/success.svg"
					alt=""
					class="w-[35px] h-[35px]" />
				<div class="text-center text-gray-800 text-base font-semibold">Joined Successfully</div>
				<div class="text-center">
					<span class="text-black text-xs font-light leading-snug"
						>That’s Great Job ! You are Joining</span
					><span class="text-primary text-xs font-normal leading-snug"> ELMATCHES</span
					><span class="text-black text-xs font-light leading-snug">
						waiting list successfully .</span
					>
				</div>
				<button
					@click="isJoined = false"
					class="w-[132px] h-8 p-2 bg-gray-700 rounded-[2.88px] border border-gray-400 justify-center items-center gap-2 flex text-gray-200 text-xs font-bold">
					Go To Home
				</button>
			</div>
		</div>
	</Teleport>
</template>

<script setup lang="ts">
	const isJoined = ref<boolean>(false);
</script>

<style scoped>
	.bg-hero {
		background-image: url("/Background.png");
		background-size: cover;
		background-position: center;
		height: 100vh;
	}
	@media screen and (max-width: 768px) {
		.bg-hero {
			height: 100%;
		}
	}

	input {
		background: transparent;
		border: 1px solid #ffffff49;
		border-radius: 6px;
		padding: 7.5px 10px;
      height: 42px;
		&::placeholder {
			@apply text-sm md:text-[15px];
		}
	}
	label {
		color: #ffffffd4;
		font-weight: 500;
		@apply text-sm md:text-[15px];
	}
</style>
