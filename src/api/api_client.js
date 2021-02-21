import {create} from "apisauce";
import tokenStorage from "../utilities/tokenStorage";
import dev_config from "../config/development.json";


const apiClient = create({
    baseURL:`${dev_config.development_url}:${dev_config.port}/api`, 

})

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await tokenStorage.getToken();
    if (!authToken) return;
    request.headers["x-auth-token"] = authToken;
  });


export default apiClient;
