import api_client from "./api_client";

const endpoint = "/events";

const getEvents = () => api_client.get(endpoint);

export default  {
     getEvents,
}
