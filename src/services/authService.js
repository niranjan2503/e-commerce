import axios, { Axios } from "axios";
import { offlineItems, OfflineStorage } from "./offlinestorage";
import { API_ROUTES, serverUrl } from "./ApiUrlConstants";
export const onLogin = async (userDetails) => {
    return await axios.post(serverUrl + API_ROUTES.LOGIN, userDetails, getHeaders());
};
export const userRegistration = async (userDetails) => {
    return await axios.post(serverUrl + API_ROUTES.REGISTER, userDetails, getHeaders());
};
export const getuserDetails = () => {
    //DO encryption beforing adding user details
    return OfflineStorage.getOfflineItem(offlineItems.USERNAME);
};

const getHeaders = () => {
    return {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    };
};
