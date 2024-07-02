<template>
	<section class=" md:bg-white mb-8" id="feature">
		<div class="container">
			<h3 class="text-center text-primary text-2xl md:text-3xl lg:text-4xl font-bold">
				Discover Our Innovative Features!
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
									{{ feature.titleBold }}: &nbsp;</span
								><span class="text-primary md:text-lg lg:text-[19px] font-semibold">
									{{ feature.titleNormal }}
								</span>
							</div>
							<div
								class="text-gray-700 text-sm md:text-[15px] lg:text-base font-light leading-normal ">
								{{ feature.description }}
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
			titleBold: "Live Scores",
			titleNormal: "Never Miss a Beat..",
			description:
				"Stay on top of the action with ELMATCHES Live Scores. Get real-time updates, detailed match stats, and in-game insights - all conveniently accessible on your mobile device.",
		},
		{
			img: "/f2.svg",
			titleBold: "Live Fan Ratings",
			titleNormal: "Your Voice Matters..",
			description:
				"Experience the thrill of real-time engagement as you rate players, coaches, and referees during live matches. See how your ratings stack up against millions of fans worldwide in real-time, shaping the narrative of the game as it happens.",
		},
		{
			img: "/f3.svg",
			titleBold: "Coach Connection",
			titleNormal: "Engage in Real-Time..",
			description:
				"Connect directly with your team's coach and millions of fellow fans. Share strategies seamlessly during live matches. Elevate your matchday experience with unique, interactive engagement at the heart of the game.",
		},
		{
			img: "/f4.svg",
			titleBold: "ElMATCHES-VR",
			titleNormal: "Be Live There..",
			description:
				"Close the physical distance between sports fans and live stadium events with ElMatches VR. Virtually participate in sports matches, concerts, and other live events as if you were actually present in the stadium, arena, or venue.",
		},
	];
</script>

<class scoped></class>
