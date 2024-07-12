import axios from "axios"

export const http = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
})

http.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		console.error(error)
		return Promise.reject(error)
	},
)
