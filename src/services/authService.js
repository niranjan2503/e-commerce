import axios from "axios";
import { offlineItems, OfflineStorage } from "./offlinestorage";
import { API_ROUTES, serverUrl } from "./ApiUrlConstants";
const dublicateUser = {
    username: "steve",
    password: "Smith123",
};
export const onLogin = async (userDetails) => {
    let { username, password } = userDetails;
    console.log(userDetails);
    return await axios.post(serverUrl + API_ROUTES.LOGIN, {
        username,
        password,
    });
};

export const getuserDetails = () => {
    //DO encryption beforing adding user details
    return OfflineStorage.getOfflineItem(offlineItems.USERNAME);
};
