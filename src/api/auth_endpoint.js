import api_client from "./api_client";

const login = (email,password) => api_client.post('/auth',{email,password})

export  default {
	login,
}
