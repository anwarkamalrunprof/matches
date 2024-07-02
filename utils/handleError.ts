interface HandleErrorOptions {
	throw: boolean;
	failedFunction?: Function;
}
export default function handleError(error: any, options: HandleErrorOptions = { throw: true }) {
	if (!error) return;

	console.log(error);
	// convert the error to string first
	let errorString: string;
	if (typeof error === "string")
		// TODO: we need to check if the value is parsable here first
		errorString = error;
	else if (typeof error === "object" && typeof error.message === "string")
		errorString = error.message;
	else errorString = "Unknown error occurred";

	console.log(errorString);
	// Done: we need to check for the unauthenticated and forbidden errors
	if (errorString.includes("403")) {
		// session expired error;
		location.reload();
		if (options.failedFunction) options.failedFunction();

		return "Session Expired";
	} else if (errorString.includes("401")) {
		return "No user found, Please login again.";
	}

	errorString = errorString.replace("GraphQL error: ", "");
	errorString = errorString.replace("ApolloError: ", "");
	errorString = errorString.replace("Error: ", "");
	errorString = errorString.replace("Firebase: ", "");

	const readableError = errorString;
	if (options.throw) throw new Error(readableError);

	return readableError;
}
