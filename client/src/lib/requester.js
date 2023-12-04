export const requester = async (method, url, data) => {
    try {
        const res = await fetch(url, {
            ...buildOptions(data),
            method,
        });
        console.log('Response Status:', res.status);
        console.log('Response Status Text:', res.statusText);

        // checks if there is content in the request
        if (res.status === 204) {
            return {};
        }

        const result = await res.json();

        if (!res.ok) {
            throw result;
        }

        return result;
    } catch (error) {
        console.error("Request failed:", error);
       // throw error; // rethrow the error to be handled by the calling code
    }
};

const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            "content-type": "application/json",
        };
    }

    const token = localStorage.getItem("accessToken");
    
    if (token) {
        options.headers = {
            ...options.headers,
            "X-Authorization": token
        };
    }

    return options;
};
