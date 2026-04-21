import { message } from "antd";
import axios from "axios";
import { getMethodImplementationFactory } from "./get-method-implementation-factory";

export const axiosApiInstance = axios.create({
	baseURL: "https://dummyjson.com",
	headers: {
		"Content-Type": "application/json",
	},
});

axiosApiInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		message.error(error.response?.data?.message || error.message);

		throw error;
	},
);

class ApiInstance {
	public get = getMethodImplementationFactory(axiosApiInstance);
	public post = axiosApiInstance.post;
	public put = axiosApiInstance.put;
	public delete = axiosApiInstance.delete;
	public patch = axiosApiInstance.patch;
}

export const apiInstance = new ApiInstance();
