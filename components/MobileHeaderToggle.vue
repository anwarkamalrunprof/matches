<template>
	<Teleport
		to="body"
		:dir="localeProperties.direction">
		<Transition name="modal-outer">
			<div
				v-show="modalActive"
				class="bg-black bg-opacity-50 fixed inset-0 md:hidden z-[999]">
				<Transition name="modal-inner">
					<div
						v-if="modalActive"
						class="backdrop-blur-[1px] h-full flex">
						<div
							class="bg-white p-4 w-[280px] max-w-[450px] sm:w-3/5 flex flex-col gap-8 h-full overflow-y-auto hide__scroll relative">
							<img
								src="/logo.svg"
								alt=""
								class="max-w-28" />
							<NavLinks />
							<hr  class="-my-2"/>
							<div class="text-primary font-bold">Download App</div>
							<div class="grid grid-cols-2  gap-4 ">
								<img
									src="/menuPhoto.png"
									alt=""
									class=" " />
								<div class="grid content-center gap-8">
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
						<button
							@click="$emit('close-modal')"
							class="my-10 mx-4 h-fit drop-shadow-lg shadow-xl rounded-full scale-90 duration-300 hover:scale-100">
							<img
								src="/public/carbon_close-outline.svg"
								alt="close"
								class="size-8 drop-shadow shadow-lg" />
						</button>
					</div>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup>
	defineEmits(["close-modal"]);
	const props = defineProps({
		modalActive: {
			type: Boolean,
			default: false,
		},
		toggleModal: {
			type: Function,
			required: true,
		},
	});

	defineModel();
	const { localeProperties } = useI18n();
</script>

<style scoped>
	.modal-outer-enter-active {
		transition: opacity 0.1s cubic-bezier(0.52, 0.02, 0.19, 1.02);
	}

	.modal-outer-leave-active {
		transition: opacity 0.4s cubic-bezier(0.52, 0.02, 0.19, 1.02);
	}

	.modal-outer-enter-from {
		opacity: 0.5;
	}

	.modal-outer-leave-to {
		opacity: 1;
	}

	.modal-inner-enter-active {
		transition: all 0.4s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0s;
	}

	.modal-inner-leave-active {
		transition: all 0.4s cubic-bezier(0.52, 0.02, 0.19, 1.02);
	}

	.modal-inner-enter-from {
		opacity: 0;
		transform: translateX(100%);
	}

	.modal-inner-leave-to {
		transform: translateX(100%);
	}

	[dir="ltr"] .modal-inner-enter-from,
	[dir="ltr"] .modal-inner-leave-to {
		transform: translateX(-100%);
	}
</style>













