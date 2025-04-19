type Credentials = { t_user_id: number; token: string };

export const getCredentialsFromUrl = (): Credentials => {
	const url = new URL(window.location.href);

	const t_user_id = url.searchParams.get("t_user_id");
	const token = url.searchParams.get("token");

	if (t_user_id === null) {
		throw new Error("t_user_id is not found");
	}

	if (token === null) {
		throw new Error("Token is not found");
	}

	return {
		t_user_id: Number(t_user_id),
		token,
	};
};
