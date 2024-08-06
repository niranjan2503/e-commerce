import axios from "axios";
import { offlineItems, OfflineStorage } from "./offlinestorage";
import { API_ROUTES, serverUrl } from "./ApiUrlConstants";
export const onLogin = async (userDetails) => {
    let { username, password } = userDetails;
    console.log(userDetails);
    return await axios.post(
        serverUrl + API_ROUTES.LOGIN,
        {
            username,
            password,
        },
        {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        }
    );
};

export const getuserDetails = () => {
    //DO encryption beforing adding user details
    return OfflineStorage.getOfflineItem(offlineItems.USERNAME);
};
