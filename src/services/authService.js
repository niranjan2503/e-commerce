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
    let url = "http://localhost:3005/getUser";
    return await axios.post(url, {
        mobileNo: "8688630059",
        password: "nadi",
    });
    // return await new Promise((resolve, reject) => {
    //     if (username === dublicateUser.username && password === dublicateUser.password) {
    //         resolve({
    //             status: 200,
    //             message: "Authentication Successful",
    //         });
    //     } else {
    //         reject({
    //             status: 403,
    //             message: "Invalid username and password",
    //         });
    //     }
    // });
};

export const getuserDetails = () => {
    //DO encryption beforing adding user details
    return OfflineStorage.getOfflineItem(offlineItems.USERNAME);
};
