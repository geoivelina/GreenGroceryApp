// export const requester = async (method, url) => {
//     const res = await fetch(url, {
//         method,
//     });
//     try {
//         const result = await res.json();

//         return result;
//     } catch (error) {
//         return {};
//     }
// };

export const requester = async (method, url, data) => {
    const res = await fetch(url, {
        ...buildOptions(data),
        method,
    });


    //checks if there is content in the request
    if (res.status === 204) {
        return {};
    }

    const result = await res.json();

    if (!res.ok) {
        throw result;
    }

    return result;
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
