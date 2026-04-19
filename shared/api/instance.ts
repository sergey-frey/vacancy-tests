import ky from "ky";

const isServer = typeof window === "undefined";
const apiUrl = isServer ? process.env.NEXT_PUBLIC_API_URL : "/api/proxy";

export const coreApi = ky.create({
	baseUrl: `${apiUrl}/`,
	headers: {
		"Content-Type": "application/json",
	},
	hooks: {
		beforeRequest: [
			({ request }) => {
				console.log("request", request);

				return request;
			},
		],
	},
});
