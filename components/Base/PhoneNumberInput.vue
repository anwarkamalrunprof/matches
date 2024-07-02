<script setup lang="ts">
	import type { CountryCode } from "libphonenumber-js";
	import { getCountryCallingCode, getExampleNumber, isValidPhoneNumber } from "libphonenumber-js";
	import examples from "libphonenumber-js/mobile/examples";
	import countriesEn from "~/assets/data/countries/en.json";
	import flags from "~/assets/data/countries/flags-24x24.json";
	import { linkUserWithPhone } from "~/utils/verifyPhoneNumber";
	import Dropdown from "primevue/dropdown";

	const props = defineProps({
		label: String,
		error: String,
		needVerification: {
			type: Boolean,
			default: false,
		},
		showIsVerified: {
			type: Boolean,
			default: false,
		},
		code: {
			type: String,
			default: "EG",
		},
		countryKey: {
			type: String,
			default: "20",
		},
		isRequired: {
			type: Boolean,
			default: false,
		},
		isValid: {
			type: Boolean,
			default: true,
		},
		isChanged: {
			type: Boolean,
			default: false,
		},
		disableVerify: {
			type: Boolean,
			default: false,
		},
		showRequirement: {
			type: Boolean,
			default: true,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		info: {
			type: Boolean,
			default: true,
		},
		showVerificationMark: {
			type: Boolean,
			default: true,
		},
		forcePhoneVerify: {
			type: Boolean,
			default: false,
		},
	});

	const emit = defineEmits([
		"update:modelValue",
		"update:countryKey",
		"update:isValid",
		"update:code",
		"update:isChanged",
	]);
	const errorMessage = ref();

	const [code] = defineModel<string>("code", {
		set(value: string) {
			emit("update:code", value);
			return value.toUpperCase();
		},
		default: "EG",
	});
	const phoneNumber = defineModel("modelValue", {
		default: "",
	});
	const initialPhoneNumber = ref(phoneNumber.value);
	const countryKey = computed(() => {
		const newCountryKey = getCountryCallingCode(code.value?.toUpperCase() as CountryCode);
		emit("update:countryKey", newCountryKey);
		return newCountryKey;
	});

	const validNumber = ref(true);
	watch(
		phoneNumber,
		() => {
			if (!phoneNumber.value) return true;
			console.log(
				"validating phone number inside the input ",
				`+${countryKey.value}${phoneNumber.value}`,
				code.value as CountryCode,
			);
			const isValid = isValidPhoneNumber(
				`+${countryKey.value}${phoneNumber.value}`,
				code.value as CountryCode,
			);
			console.log("isValid ? 🎱", isValid);
			emit("update:isValid", isValid);
			if (!isValid) errorMessage.value = "Phone Number Must be in a valid format";
			else errorMessage.value = "";
			validNumber.value = isValid;
		},
		{
			deep: true,
		},
	);

	const showVerifyNumber = ref(false);
	const loading = ref(false);
	const otp = ref();
	const verificationId = ref();
	// const isEditing = ref(false);
	async function sendVerification() {
		try {
			console.log(phoneNumber.value, "phonenumber");
			loading.value = true;

			// here we want to check first if the phone number dose not associated with another account in the database

			console.log(`+${countryKey.value}${phoneNumber.value}`);
			const phoneNumberWithKey = `+${countryKey.value}${phoneNumber.value}`;

			const res = await sendVerificationCodeToUserPhone(
				`+${countryKey.value}${phoneNumber.value}`,
			);
			verificationId.value = res?.verificationId;
			showVerifyNumber.value = true;
		} catch (err) {
			console.log(err);
			// toast.error(err.message);
		} finally {
			loading.value = false;
		}
	}

	function resendCode() {
		showVerifyNumber.value = false;
		sendVerification();
	}

	async function confirmOtp() {
		try {
			loading.value = true;
			console.log("verification");
			if (!verificationId.value) throw new Error("verification expired"); // toast.error("Verification expired ");w
			console.log(otp);
			const res = await linkUserWithPhone(otp.value, verificationId.value);

			initialPhoneNumber.value = phoneNumber.value;

			showVerifyNumber.value = false;
		} catch (error) {
			// Handle other custom error codes
			// firebase errors handling here
			// toast.error(getFirebaseReadableError((error as Error).message));
		} finally {
			loading.value = false;
		}
	}

	function getHint(code: string) {
		if (!code) return "";
		return getExampleNumber(code?.toUpperCase() as CountryCode, examples)?.nationalNumber || "";
	}

	// prevent adding non numeric characters
	function validateNumberInput(input: any) {
		input.target.value = input.target.value.replace(/\D/g, "");
	}

	// update the phone number
	// to keep track wether there is any change of the phone number or the country code
	const isChangedPhoneNumber = computed(() => {
		emit("update:isChanged", phoneNumber.value !== initialPhoneNumber.value);
		return phoneNumber.value !== initialPhoneNumber.value;
	});

	const _error = computed(() => {
		console.log("Computed invoked 🥇", props.error, errorMessage.value);
		return props.error ? props.error : errorMessage.value;
	});
</script>

<template>
	<div class="flex flex-col w-full">
		<div
			class="flex items-center  border border-[#ffffff49] relative h-[42px] rounded-md"
			:class="{
				'!border-error': _error,
			}">
			<Dropdown
				v-model.capitalize="code"
				option-value="alpha2"
				filter
				:filter-fields="['name']"
				:auto-filter-focus="true"
				:options="countriesEn"
				:pt="{
					panel: '  ',
					root: `bg-transparent !text-white border-none outline-none rounded-md py-2  ${
						_error ? '!border-error' : ''
					}`,
					list: 'bg-background py-2  max-sm:w-[260px]',
					filterContainer: 'bg-background !text-foreground',
					filterInput: 'bg-background p-3 !text-foreground',
					header: 'bg-background !text-foreground',
					itemGroupLabel: 'text-foreground',
					item: 'text-foreground',
				}"
				@change="phoneNumber = ''">
				<template #option="{ option }">
					<div class="flex items-center gap-3  p-.5 ">
						<img :src="flags[option.alpha2 as keyof typeof flags]" />
						<span> {{ option.name }}</span>
					</div>
				</template>
				<template #value="{ value }">
					<template v-if="!value" />
					<div v-else>
						<div class="flex items-center justify-center px-3 gap-1  text-white">
							<img :src="flags[value.toLowerCase() as keyof typeof flags]" />
							<span
								class="max-w-[30px] !text-white block"
								:class="{ '!text-gray-400': disabled }"
								>+{{ getCountryCallingCode(value.toUpperCase()) }}</span
							>
						</div>
					</div>
				</template>
			</Dropdown>
			<input
				v-model="phoneNumber"
				:disabled="disabled"
				class=" p-0 focus-visible:outline-none  max-w-full w-full flex-grow text-white bg-transparent "
				:maxlength="getHint(code).length"
				type="text"
				:placeholder="getHint(code)"
				@input="validateNumberInput" />
			<div class="absolute end-2 flex items-center gap-0">
				<span
					v-if="
						phoneNumber &&
						(needVerification || isChangedPhoneNumber) &&
						isValid &&
						!disableVerify
					"
					class="absolute block top-[50%] translate-y-[-50%] end-5 text-sm bg-slate/10 dark:bg-fadedSlate dark:hover:bg-zinc-300/5 cursor-pointer rounded-full px-3 py-1.5 mx-1.5">
					<span v-if="loading">
						<Icon
							v-if="loading"
							class="w-6 h-6"
							name="eos-icons:loading" />
					</span>
				</span>
			</div>
		</div>
		<span class=" text-sm h-7" >{{_error }}</span>
	</div>
</template>

<style scoped></style>
