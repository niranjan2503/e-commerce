import { useEffect, useState } from "react";

const useLocalstorage = (key, initialValue) => {
    console.log(localStorage.getItem(key));

    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(key)) || initialValue
    );
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
};
export default useLocalstorage;
