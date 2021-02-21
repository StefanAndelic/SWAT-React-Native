import api_client from "./api_client";

const register = (name,email,password) => api_client.post("/users", {name,email,password});

export default { register };
