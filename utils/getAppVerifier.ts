import type { ApplicationVerifier } from "firebase/auth";
import { RecaptchaVerifier, getAuth } from "firebase/auth";

const appVerifier = ref<ApplicationVerifier>();
export default function getAppVerifier() {
	try {
		const auth = getAuth();
		if (!appVerifier.value) {
			return (appVerifier.value = new RecaptchaVerifier(auth, "sign-in-button", {
				size: "invisible",
			}));
		}
		return appVerifier.value;
	} catch (error) {
		console.log("error in getting app verifier", error);
	}
}
