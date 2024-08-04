import { offlineItems, OfflineStorage } from "./offlinestorage";

const dublicateUser = {
    username: "steve",
    password: "Smith123",
};
export const onLogin = async (userDetails) => {
    let { username, password } = userDetails;
    return await new Promise((resolve, reject) => {
        if (username === dublicateUser.username && password === dublicateUser.password) {
            resolve({
                status: 200,
                message: "Authentication Successful",
            });
        } else {
            reject({
                status: 403,
                message: "Invalid username and password",
            });
        }
    });
};

export const getuserDetails = () => {
    //DO encryption beforing adding user details
    return OfflineStorage.getOfflineItem(offlineItems.USERNAME);
};
