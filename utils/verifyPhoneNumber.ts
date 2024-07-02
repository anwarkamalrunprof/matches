import {
	PhoneAuthProvider,
	getAuth,
	signInWithPhoneNumber,
	updatePhoneNumber,
} from "firebase/auth";
import getAppVerifier from "./getAppVerifier";

export async function sendVerificationCodeToUserPhone(phoneNumber: string) {
	const auth = getAuth();
	try {
		if (!import.meta.client) return;
		console.log("phone number", phoneNumber);
		const appVerifier = getAppVerifier();
		const res = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
		return res;
	} catch (error) {
		handleError(error);
	} finally {
		console.log("Clear the verifier");
		// appVerifier.clear();
	}
}

export async function linkUserWithPhone(code: string, verificationId: string) {
	try {
		console.log(code, verificationId);
		const auth = getAuth();
		console.log(auth);
		const user = auth.currentUser;
		const credential = PhoneAuthProvider.credential(verificationId, code);
		console.log("User", user);
		const res = await updatePhoneNumber(user!, credential);
		return res;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
}
