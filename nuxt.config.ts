// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "description", content: "Elmatches" },
				{ name: "robots", content: "index, follow" },
				{ name: "theme-color", content: "#317EFB" },
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/logo.svg" }],
			title: "ELMATCHES",
		},
	},
	devtools: { enabled: true },
	modules: [
		"@nuxtjs/tailwindcss",
		"nuxt-primevue",
		"@e-chan1007/nuxt-firebase",
		[
			"@nuxtjs/i18n",
			{
				vueI18n: "./locales/i18n.config.ts",
				defaultLocale: "ar",
				strategy: "prefix",
				detectBrowserLanguage: {
					useCookie: true,
				},
				locales: [
					{
						code: "en",
						iso: "en-US",
						name: "English",
						file: "./locales/en.json",
						direction: "ltr",
					},
					{
						code: "ar",
						iso: "ar",
						name: "Arabic",
						file: "./locales/ar.json",
						direction: "rtl",
					},
				],
			},
		],
	],
	// nitro: {
	// 	preset: "firebase",
	// 	firebase: {
	// 		gen: 2,
	// 	},
	// },
	firebase: {
		configEnvPrefix: "FIREBASE_",
	},
	imports: { dirs: ["./composables"] },
	css: ["./assets/css/style.css", "primevue/resources/themes/aura-light-green/theme.css"],
});
